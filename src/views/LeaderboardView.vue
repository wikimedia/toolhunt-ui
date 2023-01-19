<script setup>
import { ref } from "vue";
import LeaderboardTable from "../components/LeaderboardTable.vue"
const profileBaseUrl = ref("https://meta.wikimedia.org/wiki/User:");


const last30DaysTopContributions = ref([
  { userName: "BDavis (WMF)", toolsEdited: 32 },
  { userName: "Sage (Wiki Ed)", toolsEdited: 22 },
  { userName: "Demo Unicorn", toolsEdited: 20 },
  { userName: "NicoleLBee", toolsEdited: 17 },
  { userName: "Hannah Waruguru", toolsEdited: 12 },
]);

const allTimeTopContributions = ref([
  { userName: "Gaurav Jhammat", toolsEdited: 86 },
  { userName: "Benni Prüfer", toolsEdited: 70 },
  { userName: "FNegri-WMF", toolsEdited: 50 },
  { userName: "NicoleLBee", toolsEdited: 40 },
  { userName: "Hannah Waruguru", toolsEdited: 20 },
]);
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
        <LeaderboardTable :contributions="last30DaysTopContributions" :title="'Top Hunters from the Last 30 Days'" :profileBaseUrl="profileBaseUrl" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <LeaderboardTable :contributions="allTimeTopContributions" :title="'All Time Greats'" :profileBaseUrl="profileBaseUrl" />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
