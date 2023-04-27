import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { createVuetify } from "vuetify";
import Home from "../Home.vue";

describe("Home", () => {
  const vuetify = createVuetify();
  const profileBaseUrl = "https://meta.wikimedia.org/wiki/User:";
  it("renders properly", () => {
    const HomeProps = {
      toolName: "mm_wikidata_todo",
      toolDescription: "Shows you little things you can do on Wikidata.",
      missingField: "wikidata_qid",
      toolURL: "http://tools.wmflabs.org/wikidata-todo",
    };
    const wrapper = mount(Home, {
      props: HomeProps,
      global: {
        plugins: [vuetify],
      },
    });
    const rows = wrapper.find("tbody").findAll("tr");
    expect(rows[0].findAll("td")[1].text()).toBe("mm_wikidata_todo");
    expect(rows[1].findAll("td")[1].text()).toBe(
      "Shows you little things you can do on Wikidata."
    );
    expect(rows[2].findAll("td")[1].text()).toBe(
      "http://tools.wmflabs.org/wikidata-todo"
    );
    expect(rows[3].findAll("td")[1].text()).toBe("wikidata_qid");
  });

  it("shows next task when skip next is clicked", async () => {
    const HomeProps = {
      toolName: "Pywikibot",
      toolDescription:
        "Python library and collection of scripts that automate work on MediaWiki sites",
      missingField: "wikidata_qid",
      toolURL:
        "https://www.mediawiki.org/wiki/Special:MyLanguage/Manual:Pywikibot",
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
});
