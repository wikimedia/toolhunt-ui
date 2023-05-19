<script setup>
import ContributionTable from "../components/ContributionTable.vue";
import { ref, watchEffect, onMounted } from "vue";
import {
  getLatestContributions,
  getMyContributions,
  getContributionsMetrics,
  getToolsMetrics,
  getUserMetrics,
} from "../stores/api.js";

function calcPercentMissing(numberMissing, numberTotal) {
  return ((numberMissing / numberTotal) * 100).toFixed(2);
}

const props = defineProps({
  currentUser: String,
});

const userContributions = ref([]);
const isError = ref(false);

watchEffect(async () => {
  if (props.currentUser) {
    try {
      userContributions.value = await getMyContributions(props.currentUser);
    } catch (error) {
      isError.value = true;
      console.log("Error fetching user contributions: " + error.message);
    }
  }
});

const globalContributions = ref([]);
watchEffect(async () => {
  try {
    globalContributions.value = await getLatestContributions();
  } catch (error) {
    isError.value = true;
    console.log("Error fetching latest contributions: " + error.message);
  }
});

const contributionsMetrics = ref({});
watchEffect(async () => {
  try {
    contributionsMetrics.value = await getContributionsMetrics();
  } catch (error) {
    isError.value = true;
    console.log("Error fetching contribution metrics: " + error.message);
  }
});

const toolsMetrics = ref({});
watchEffect(async () => {
  try {
    toolsMetrics.value = await getToolsMetrics();
  } catch (error) {
    isError.value = true;
    console.log("Error fetching tool metrics: " + error.message);
  }
});

const userMetrics = ref({});
watchEffect(async () => {
  if (props.currentUser) {
    try {
      userMetrics.value = await getUserMetrics();
    } catch (error) {
      isError.value = true;
      console.log("Error fetching user metrics: " + error.message);
    }
  }
});
</script>

<template>
  <v-container
    class="d-flex align-center"
    style="max-width: 800px; gap: 16px; margin-inline: auto"
    fluid
  >
    <img
      src="@/assets/logo-main.svg"
      height="75"
      width="75"
      class="overflow-visible"
    />
    <div>
      <h1 v-if="props.currentUser" class="text-h4">
        Welcome, {{ props.currentUser }}!
      </h1>
      <h1 v-else class="text-h4">Toolhunt Dashboard</h1>
      <p class="text-subtitle-2 d-none d-sm-block">
        Here on the Dashboard, you can view your latest contributions and check
        out global contributions and statistics about Toolhub and the Toolhunt
        project.
      </p>
    </div>
  </v-container>

  <v-card flat max-width="1400" class="mx-auto">
    <v-container>
      <v-row>
        <ContributionTable
          :contributions="userContributions"
          :showUserProfile="false"
          v-if="userContributions.length > 0"
        >
          My Contributions
        </ContributionTable>
        <v-col>
          <v-card cols="6" min-width="300">
            <v-card-item>
              <v-card-title>Contribution Stats</v-card-title>
            </v-card-item>
            <v-card-text>
              <v-overlay
                v-model="isError"
                contained
                class="align-center justify-center"
              >
                <v-alert
                  density="compact"
                  align="center"
                  type="error"
                  text="We are having a problem fetching this data for you right now, please refresh the page"
                ></v-alert>
              </v-overlay>
              <v-table>
                <tbody>
                  <tr v-if="userMetrics.value">
                    <td>My contributions in the last 30 days:</td>
                    <td>
                      {{ userMetrics.My_contributions_in_the_past_30_days }}
                    </td>
                  </tr>
                  <tr v-if="userMetrics.value">
                    <td>My total contributions:</td>
                    <td>{{ userMetrics.My_total_contributions }}</td>
                  </tr>
                  <tr>
                    <td>Global contributions in the last 30 days:</td>
                    <td>
                      {{
                        contributionsMetrics.Global_contributions_from_the_last_30_days
                      }}
                    </td>
                  </tr>
                  <tr>
                    <td>Total contributions:</td>
                    <td>{{ contributionsMetrics.Total_contributions }}</td>
                  </tr>
                </tbody>
              </v-table>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col>
          <v-card cols="6" min-width="300">
            <v-card-item>
              <v-card-title>Toolhub at a Glance</v-card-title>
            </v-card-item>
            <v-card-text>
              <v-overlay
                v-model="isError"
                contained
                class="align-center justify-center"
              >
                <v-alert
                  density="compact"
                  align="center"
                  type="error"
                  text="We are having a problem fetching this data for you right now, please refresh the page"
                ></v-alert>
              </v-overlay>
              <v-table>
                <tbody>
                  <tr>
                    <td>Number of tools on record:</td>
                    <td>{{ toolsMetrics.Number_of_tools_on_record }}</td>
                  </tr>
                  <tr>
                    <td>Number of tools with missing data:</td>
                    <td>
                      {{
                        toolsMetrics.Number_of_tools_with_incomplete_information
                      }}
                    </td>
                  </tr>
                  <tr>
                    <td>Percentage of tools with missing data:</td>
                    <td>
                      {{
                        calcPercentMissing(
                          toolsMetrics.Number_of_tools_with_incomplete_information,
                          toolsMetrics.Number_of_tools_on_record
                        )
                      }}%
                    </td>
                  </tr>
                </tbody>
              </v-table>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <ContributionTable
          :contributions="globalContributions"
          :showUserProfile="true"
          :isError="isError"
          v-if="globalContributions.length > 0"
        >
          Latest Activity
        </ContributionTable>
      </v-row>
    </v-container>
  </v-card>
</template>
