<script setup>
import { ref, watchEffect } from "vue";
import Home from "../components/Home.vue";
import { getTasks } from "../stores/api.js";

const tasks = ref(null);

watchEffect(async () => {
  tasks.value = await getTasks()
})
</script>

<template>
  <Home :tasks="tasks" />
</template>
