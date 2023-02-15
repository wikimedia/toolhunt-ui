<script setup>
import { ref, watchEffect } from "vue";
import LeaderboardTable from "../components/LeaderboardTable.vue";
import { getAllTimeGreat } from "../stores/api.js";

const profileBaseUrl = ref("https://meta.wikimedia.org/wiki/User:");

const last30DaysTopContributions = ref([
  { user: "BDavis (WMF)", score: 32 },
  { user: "Sage (Wiki Ed)", score: 22 },
  { user: "Demo Unicorn", score: 20 },
  { user: "NicoleLBee", score: 17 },
  { user: "Hannah Waruguru", score: 12 },
]);

const allTimeTopContributions = ref([]);
const isError = ref(false)
watchEffect(async () => {
  try {
    allTimeTopContributions.value = await getAllTimeGreat()
  } catch(error) {
    isError.value = true
    console.log(error)
  }
})
</script>

<template>
  <v-container
    class="d-flex align-center"
    style="gap: 16px; max-width: 800px; margin-inline: auto"
    fluid
  >
    <v-img
      src="./src/assets/logo-main.svg"
      height="75"
      width="75"
      class="overflow-visible"
    ></v-img>
    <div>
      <p class="text-h4">Toolhunt Leaderboard</p>
      <p class="text-subtitle-2 d-none d-sm-block">
        Recognizing the users who have hunted down the most references, this
        month and for all time.
      </p>
      <p class="text-subtitle-2 d-none d-sm-block">
        Thank you for your contributions!
      </p>
    </div>
  </v-container>
  <v-container>
    <v-row>
      <v-col cols="12">
        <LeaderboardTable
          :contributions="last30DaysTopContributions"
          :title="'Top Hunters from the Last 30 Days'"
          :profileBaseUrl="profileBaseUrl"
        />
      </v-col>
    </v-row>
    <v-row>
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
