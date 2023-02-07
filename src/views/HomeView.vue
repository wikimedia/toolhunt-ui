<script setup>
import { ref, onMounted } from "vue";
import Home from "../components/Home.vue";
import { getTasks } from "../stores/api.js";
const tasks = ref([]);
getTasks().then((data) => (tasks.value = data));
</script>
<template>
  <Home :tasks="tasks" />
</template>
