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
    const tbody = wrapper.find("tbody");
    const rows = tbody.findAll("tr");

    expect(wrapper.text()).toContain("All Time Best");
    const firstRowCols = rows[0].findAll("td");

    const firstCol = firstRowCols[0].find("a");
    expect(firstCol.text()).toBe("Hannah Waruguru");
    expect(firstCol.attributes().href).toBe(
      "https://meta.wikimedia.org/wiki/User:Hannah_Waruguru"
    );
    const contributionCol = firstRowCols[1];
    expect(contributionCol.text()).toBe("12");
    expect(rows.length).toBe(LeaderboardTableProps.contributions.length);
  });
});
