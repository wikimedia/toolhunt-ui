<script setup>
import Home from "../components/Home.vue";
import UserContributionForm from "../components/UserContributionForm.vue";
import { onMounted, ref, watchEffect } from "vue";
import { getTasks } from "../stores/api.js";

const tasks = ref([]);
const isError = ref(false);
const currentTaskIndex = ref(0);
const currentTask = ref(null);

const props = defineProps({
  currentUser: String,
});

onMounted(async () => {
  try {
    tasks.value = await getTasks();
  } catch (error) {
    isError.value = true;
    console.log("Error loading HomeView data: " + error.message);
  }
});

watchEffect(() => {
  currentTask.value = tasks.value[currentTaskIndex.value];
});

function updateTasks() {
  tasks.value.splice([currentTaskIndex.value], 1);
  getNextTask();
}

function getNextTask() {
  currentTaskIndex.value++;
  if (tasks.value.length <= currentTaskIndex.value) {
    // for now it will start at 0 but when connected to backend we can fetch a batch of tasks
    currentTaskIndex.value = 0;
  }
}
</script>

<template>
  <v-row class="d-flex flex-column">
    <Home
      :toolName="currentTask?.tool?.title"
      :toolDescription="currentTask?.tool?.description"
      :toolURL="currentTask?.tool?.url"
      :missingField="currentTask?.field?.name"
    ></Home>
  </v-row>
  <v-row>
    <UserContributionForm
      @task-submitted="updateTasks"
      :description="currentTask?.field?.description"
      :inputOptions="currentTask?.field?.input_options"
      :missingFieldName="currentTask?.field?.name"
      :toolName="currentTask?.tool?.name"
      :taskId="currentTask?.id"
      :isError="isError"
      :getNextTask="getNextTask"
      :currentUser="props.currentUser"
      :pattern="currentTask?.field?.pattern"
    ></UserContributionForm>
  </v-row>
</template>
