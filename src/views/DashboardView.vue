<script setup>
import ContributionTable from "../components/ContributionTable.vue";
import { ref, watchEffect } from "vue";
import { getLatestContributions, getMyContributions } from "../stores/api.js";

function calcPercentMissing(numberMissing, numberTotal) {
  return ((numberMissing / numberTotal) * 100).toFixed(2);
}

const userName = ref("Hannah Waruguru");
const userContributions = ref(null);
watchEffect(async () => {
  userContributions.value = await getMyContributions(userName.value)
})

const globalContributions = ref(null);
watchEffect(async () => {
  globalContributions.value = await getLatestContributions()
})

const globalStats = ref({
  totalTools: 2702,
  toolsMissingInfo: 2701,
  contributionsLast30Days: 73,
  contributionsTotal: 226,
});

const userStats = ref({
  contributionsLast30Days: 4,
  contributionsTotal: 10,
});
</script>

<template>
  <v-container
    class="d-flex align-center"
    style="max-width: 800px; gap: 16px; margin-inline: auto"
    fluid
  >
    <v-img src="src/assets/logo-main.svg" height="75" width="75" alt=""></v-img>
    <div>
      <h1>Welcome, {{ userName }}!</h1>
      <p class="d-none d-sm-block">
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
        >
          My Contributions
        </ContributionTable>
        <v-col>
          <v-card cols="6" min-width="300">
            <v-card-item>
              <v-card-title>Contribution Stats</v-card-title>
            </v-card-item>
            <v-card-text>
              <v-table>
                <tbody>
                  <tr>
                    <td>My contributions in the last 30 days:</td>
                    <td>{{ userStats.contributionsLast30Days }}</td>
                  </tr>
                  <tr>
                    <td>My total contributions:</td>
                    <td>{{ userStats.contributionsTotal }}</td>
                  </tr>
                  <tr>
                    <td>Global contributions in the last 30 days:</td>
                    <td>{{ globalStats.contributionsLast30Days }}</td>
                  </tr>
                  <tr>
                    <td>Total contributions:</td>
                    <td>{{ globalStats.contributionsTotal }}</td>
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
              <v-table>
                <tbody>
                  <tr>
                    <td>Number of tools on record:</td>
                    <td>{{ globalStats.totalTools }}</td>
                  </tr>
                  <tr>
                    <td>Number of tools with missing data:</td>
                    <td>{{ globalStats.toolsMissingInfo }}</td>
                  </tr>
                  <tr>
                    <td>Percentage of tools with missing data:</td>
                    <td>
                      {{
                        calcPercentMissing(
                          globalStats.toolsMissingInfo,
                          globalStats.totalTools
                        )
                      }}%
                    </td>
                  </tr>
                </tbody>
              </v-table>
            </v-card-text>
          </v-card>
        </v-col>
        <ContributionTable
          :contributions="globalContributions"
          :showUserProfile="true"
        >
          Latest Activity
        </ContributionTable>
      </v-row>
    </v-container>
  </v-card>
</template>
