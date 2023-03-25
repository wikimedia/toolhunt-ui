<script setup>
import { ref, watchEffect } from "vue";
import Home from "../components/Home.vue";
import { getTasks } from "../stores/api.js";

const tasks = ref([]);
const isError = ref(false);

watchEffect(async () => {
  try {
    tasks.value = await getTasks();
  } catch (error) {
    isError.value = true;
    console.log("Error loading HomeView data: " + error.message);
  }
});
</script>

<template>
  <Home :tasks="tasks" :isError="isError" />
</template>
