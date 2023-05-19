<script setup>
import ToolData from "../components/ToolData.vue";
import UserContributionForm from "../components/UserContributionForm.vue";
import SearchBar from "../components/SearchBar.vue";
import { onMounted, ref, watchEffect } from "vue";
import { getTasks, getTasksByToolName } from "../stores/api.js";

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

async function getTasksForTool(requestedTool) {
  try {
    tasks.value = await getTasksByToolName(requestedTool);
  } catch (error) {
    if (error.response.status == 404) {
      console.log("Tool not found");
    }
  }
}
</script>

<template>
  <v-container
    class="d-flex align-center"
    style="gap: 16px; max-width: 800px; margin-inline: auto"
    fluid
  >
    <img
      src="@/assets/logo-main.svg"
      height="90"
      width="90"
      class="overflow-visible"
    />
    <div>
      <h1 class="text-h4">Welcome to Toolhunt</h1>
      <p class="text-body-1 d-none d-sm-block mt-1">
        Many of the tools on Toolhub are missing valuable information. Can you
        help us improve the listings by hunting down links and data? Search for
        a tool to edit or browse a selection of random tasks.
      </p>
    </div>
  </v-container>
  <v-container>
    <v-row class="d-flex justify-center mt-2">
      <SearchBar @tool-requested="getTasksForTool"></SearchBar>
    </v-row>
    <v-row class="d-flex flex-column mt-4">
      <ToolData
        :toolName="currentTask?.tool?.title"
        :toolDescription="currentTask?.tool?.description"
        :toolURL="currentTask?.tool?.url"
        :isError="isError"
      ></ToolData>
    </v-row>
    <v-row class="mt-4">
      <UserContributionForm
        @task-submitted="updateTasks"
        :description="currentTask?.field?.description"
        :inputOptions="currentTask?.field?.input_options"
        :missingFieldName="currentTask?.field?.name"
        :toolName="currentTask?.tool?.name"
        :taskId="currentTask?.id"
        :getNextTask="getNextTask"
        :currentUser="props.currentUser"
        :pattern="currentTask?.field?.pattern"
      ></UserContributionForm>
    </v-row>
  </v-container>
</template>
