import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { createVuetify } from "vuetify";
import LeaderboardTable from "../LeaderboardTable.vue";

describe("LeaderboardTable", () => {
  const vuetify = createVuetify();
  it("renders properly", () => {
    const LeaderboardTableProps = {
      contributions: [
        {
          userName: "Hannah Waruguru",
          toolsEdited: 12,
        },
      ],
      title: "All Time Best",
      profileBaseUrl: "https://tests",
    };
    const wrapper = mount(LeaderboardTable, {
      props: LeaderboardTableProps,
      global: {
        plugins: [vuetify],
      },
    });
    expect(wrapper.text()).toContain("All Time Best");
  });
});
