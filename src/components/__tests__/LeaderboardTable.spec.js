import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { createVuetify } from "vuetify";
import LeaderboardTable from "../LeaderboardTable.vue";

describe("LeaderboardTable", () => {
  const vuetify = createVuetify();
  const profileBaseUrl = "https://meta.wikimedia.org/wiki/User:";
  it("renders properly", () => {
    const LeaderboardTableProps = {
      contributions: [
        {
          userName: "Hannah Waruguru",
          toolsEdited: 12,
        },
      ],
      title: "All Time Best",
      profileBaseUrl,
    };
    const wrapper = mount(LeaderboardTable, {
      props: LeaderboardTableProps,
      global: {
        plugins: [vuetify],
      },
    });
    expect(wrapper.text()).toContain("All Time Best");

    const firstRow = wrapper.findAll('td')[0].find('a')
    expect(firstRow.text()).toBe('Hannah Waruguru');
    expect(firstRow.attributes().href).toBe('https://meta.wikimedia.org/wiki/User:Hannah_Waruguru')

    const contributionCol = wrapper.findAll('td')[1]
    expect(contributionCol.text()).toBe('12')
  });
});
