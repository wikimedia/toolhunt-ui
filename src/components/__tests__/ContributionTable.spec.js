import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { createVuetify } from "vuetify";
import ContributionTable from "../ContributionTable.vue";

describe("ContributionTable", () => {
  const vuetify = createVuetify();
  it("renders properly", () => {
    const ContributionTableProps = {
      contributions: [
        {
          user: "NicoleLBee",
          tool_name: "pywikibot",
          field_name: "available_ui_languages",
          timestamp: 1666214747862,
          tool: {
            title: "Pywikibot",
          }
        },
      ],
      showUserProfile: true,
    };
    const wrapper = mount(ContributionTable, {
      props: ContributionTableProps,
      global: {
        plugins: [vuetify],
      },
    });
    const tbody = wrapper.find("tbody");
    const rows = tbody.findAll("tr");
    expect(rows.length).toBe(ContributionTableProps.contributions.length);

    const columns = rows[0].findAll("td");
    expect(columns[0].text()).toBe(
      new Date(1666214747862).toLocaleDateString()
    );
    expect(columns[1].text()).toBe("NicoleLBee");
    expect(columns[1].find("a").attributes().href).toBe(
      "https://en.wikipedia.org/wiki/User:NicoleLBee"
    );
    expect(columns[2].text()).toBe("Added available_ui_languages to Pywikibot");
    expect(columns[2].find("a").attributes().href).toBe(
      "https://toolhub.wikimedia.org/tools/pywikibot"
    );
  });
  it("hides user data column ", () => {
    const ContributionTableProps = {
      contributions: [
        {
          user: "NicoleLBee",
          tool_name: "pywikibot",
          field_name: "available_ui_languages",
          timestamp: 1666214747862,
          tool: {
            title: "Pywikibot",
          }
        },
      ],
      showUserProfile: false,
    };
    const wrapper = mount(ContributionTable, {
      props: ContributionTableProps,
      global: {
        plugins: [vuetify],
      },
    });
    const tbody = wrapper.find("tbody");
    expect(tbody.text()).not.toContain("NicoleLBee");
    const rows = tbody.findAll("tr");
    const columns = rows[0].findAll("td");
    expect(columns.length).toBe(2);
  });
});
