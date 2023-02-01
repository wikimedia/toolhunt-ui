import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { createVuetify } from "vuetify";
import Home from "../Home.vue";

describe("Home", () => {
  const vuetify = createVuetify();
  const profileBaseUrl = "https://meta.wikimedia.org/wiki/User:";
  it("renders properly", () => {
    const HomeProps = {
      tasks: [
        {
          toolName: "Pywikibot",
          toolDescription:
            "Python library and collection of scripts that automate work on MediaWiki sites",
          url: "https://www.mediawiki.org/wiki/Special:MyLanguage/Manual:Pywikibot",
          missingField: "wikidata_qid",
        },
      ],
    };
    const wrapper = mount(Home, {
      props: HomeProps,
      global: {
        plugins: [vuetify],
      },
    });
    const rows = wrapper.find("tbody").findAll("tr");
    expect(rows[0].findAll("td")[1].text()).toBe("Pywikibot");
    expect(rows[1].findAll("td")[1].text()).toBe(
      "Python library and collection of scripts that automate work on MediaWiki sites"
    );
    expect(rows[2].findAll("td")[1].text()).toBe(
      "https://www.mediawiki.org/wiki/Special:MyLanguage/Manual:Pywikibot"
    );
    expect(rows[3].findAll("td")[1].text()).toBe("wikidata_qid");
  });

  it("shows next task when skip next is clicked", async () => {
    const HomeProps = {
      tasks: [
        {
          toolName: "Pywikibot",
          toolDescription:
            "Python library and collection of scripts that automate work on MediaWiki sites",
          url: "https://www.mediawiki.org/wiki/Special:MyLanguage/Manual:Pywikibot",
          missingField: "wikidata_qid",
        },
        {
          toolName: "toolforge-authors",
          toolDescription:
            "This project is aimed at getting very basic author statistics for a specified page.",
          url: "https://toolsadmin.wikimedia.org/tools/id/authors",
          missingField: "openhub_id",
        },
      ],
    };
    const wrapper = mount(Home, {
      props: HomeProps,
      global: {
        plugins: [vuetify],
      },
    });
    const rows = wrapper.find("tbody").findAll("tr");
    expect(rows[0].findAll("td")[1].text()).toBe("Pywikibot");
    expect(rows[1].findAll("td")[1].text()).toBe(
      "Python library and collection of scripts that automate work on MediaWiki sites"
    );
    expect(rows[2].findAll("td")[1].text()).toBe(
      "https://www.mediawiki.org/wiki/Special:MyLanguage/Manual:Pywikibot"
    );
    expect(rows[3].findAll("td")[1].text()).toBe("wikidata_qid");

    // click on Skip to Next button
    await wrapper.findAll("button")[1].trigger("click");

    // Expect the table to be updated with the next task details
    const updatedRows = wrapper.find("tbody").findAll("tr");
    expect(rows[0].findAll("td")[1].text()).toBe("toolforge-authors");
    expect(rows[1].findAll("td")[1].text()).toBe(
      "This project is aimed at getting very basic author statistics for a specified page."
    );
    expect(rows[2].findAll("td")[1].text()).toBe(
      "https://toolsadmin.wikimedia.org/tools/id/authors"
    );
    expect(rows[3].findAll("td")[1].text()).toBe("openhub_id");
  });
});
