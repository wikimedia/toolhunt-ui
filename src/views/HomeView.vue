<script setup>
import { ref } from "vue";
import Home from "../components/Home.vue";

const task = ref({
  toolName: "Pywikibot",
  toolDescription:
    "Python library and collection of scripts that automate work on MediaWiki sites",
  url: "https://www.mediawiki.org/wiki/Special:MyLanguage/Manual:Pywikibot",
  missingField: "wikidata_qid",
});
</script>

<template>
  <Home
    :task="task"
  />
</template>
