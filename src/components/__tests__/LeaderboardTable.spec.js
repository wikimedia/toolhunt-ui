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
    // Assert that the table rows is equal to the number of items in the contributions array
    expect(wrapper.text()).toContain("All Time Best");
    const firstRowCols = rows[0].findAll("td");
    // Assert that the anchor text containing the username is present as a child of the first cell in the row
    // and it renders the correct text.
    const firstCol = firstRowCols[0].find("a");
    expect(firstCol.text()).toBe("Hannah Waruguru");
    expect(firstCol.attributes().href).toBe(
      "https://meta.wikimedia.org/wiki/User:Hannah_Waruguru"
    );
    // Assert that the text containing the contribution number for the user is in the second cell in the row
    const contributionCol = firstRowCols[1];
    expect(contributionCol.text()).toBe("12");
    // test that it's rendering one row
    expect(rows.length).toBe(LeaderboardTableProps.contributions.length);
  });
});
