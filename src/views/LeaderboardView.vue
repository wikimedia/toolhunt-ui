<script setup>
import { ref, watchEffect } from "vue";
import LeaderboardTable from "../components/LeaderboardTable.vue";
import { getAllTimeGreat } from "../stores/api.js";

const profileBaseUrl = ref("https://meta.wikimedia.org/wiki/User:");
defineProps({
  currentUser: String,
});
const last30DaysTopContributions = ref([]);
const isError30Days = ref(false);
watchEffect(async () => {
  try {
    last30DaysTopContributions.value = await getAllTimeGreat(true);
  } catch (error) {
    isError30Days.value = true;
    console.log("Error fetching leaderboard data: " + error.message);
  }
});

const allTimeTopContributions = ref([]);
const isError = ref(false);
watchEffect(async () => {
  try {
    allTimeTopContributions.value = await getAllTimeGreat();
  } catch (error) {
    isError.value = true;
    console.log("Error fetching leaderboard data: " + error.message);
  }
});
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
      <h1 class="text-h4">Toolhunt Leaderboard</h1>
      <p class="text-body-1 d-none d-sm-block mt-1">
        Recognizing the users who have hunted down the most references, this
        month and for all time. Thank you for your contributions!
      </p>
    </div>
  </v-container>
  <v-container>
    <v-row class="mt-2">
      <v-col cols="12">
        <LeaderboardTable
          :contributions="last30DaysTopContributions"
          :title="'Top Hunters from the Last 30 Days'"
          :profileBaseUrl="profileBaseUrl"
          :isError="isError30Days"
        />
      </v-col>
    </v-row>
    <v-row class="mt-6">
      <v-col cols="12">
        <LeaderboardTable
          :contributions="allTimeTopContributions"
          :title="'All Time Greats'"
          :profileBaseUrl="profileBaseUrl"
          :isError="isError"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
