<script setup>
import { ref } from "vue";
import Home from "../components/Home.vue";

const tasks = ref([
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
  {
    toolName: "toolforge-farotbot",
    toolDescription:
      "IABot fixes link rot replacing dead links with archive links, but it takes years to fully process the entire corpus of millions of articles. Featured articles require more frequent checks. This bot interfaces with IABot's API to trigger it to run on featured lists and articles on a regular basis.",
    url: "https://toolsadmin.wikimedia.org/tools/id/farotbot",
    missingField: "repository",
  },
]);
</script>

<template>
  <Home :tasks="tasks" />
</template>
