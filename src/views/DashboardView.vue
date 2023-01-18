<template>
  <v-container
    class="d-flex align-center"
    style="max-width:800px; gap:16px; margin-inline: auto"
    fluid
  >
    <v-img
      src="src/assets/logo-main.svg"
      height="75"
      width="75"
      alt=""
    ></v-img>
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
        <ContributionTable :content="userContributions" :global="false">
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
        <ContributionTable :content="globalContributions" :global="true">
          Latest Activity
        </ContributionTable>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import ContributionTable from "../components/ContributionTable.vue";
export default {
  components: {
    ContributionTable,
  },
  methods: {
    calcPercentMissing(numberMissing, numberTotal) {
      return ((numberMissing / numberTotal) * 100).toFixed(2);
    },
  },
  data() {
    return {
      userName: "NicoleLBee",
      userContributions: [
        {
          user: "NicoleLBee",
          toolName: "pywikibot",
          toolTitle: "Pywikibot",
          fieldEdited: "available_ui_languages",
          dateModified: 1666214747862,
        },
        {
          user: "NicoleLBee",
          toolName: "mm_wikidata_todo",
          toolTitle: "Wikidata Todo",
          fieldEdited: "for_wikis",
          dateModified: 1658227200000,
        },
        {
          user: "NicoleLBee",
          toolName: "mm_find_duplicate_items",
          toolTitle: "Find duplicate items",
          fieldEdited: "repository",
          dateModified: 1655449600000,
        },
        {
          user: "NicoleLBee",
          toolName: "pywikibot",
          toolTitle: "Pywikibot",
          fieldEdited: "icon",
          dateModified: 1651447200000,
        },
      ],

      globalContributions: [
        {
          user: "DannyBoyyy77",
          toolName: "xtools-ec",
          toolTitle: "XTools Edit Counter",
          fieldEdited: "icon",
          dateModified: 1666514747862,
        },
        {
          user: "Ellenello",
          toolName: "metawiki-jon-harald-søby-diffedit",
          toolTitle: "diffedit",
          fieldEdited: "repository",
          dateModified: 1666505047862,
        },
        {
          user: "DannyBoyyy77",
          toolName: "xtools-ec",
          toolTitle: "XTools Edit Counter",
          fieldEdited: "privacy_policy_url",
          dateModified: 1666500047862,
        },
        {
          user: "Javier Alejandro Herrera Carvajal",
          toolName: "toolforge-croptool",
          toolTitle: "CropTool",
          fieldEdited: "available_ui_languages",
          dateModified: 1666410745862,
        },
        {
          user: "Tabby578",
          toolName: "pywikibot",
          toolTitle: "Pywikibot",
          fieldEdited: "tool_type",
          dateModified: 1666304737862,
        },
      ],
      globalStats: {
        totalTools: 2702,
        toolsMissingInfo: 2701,
        contributionsLast30Days: 73,
        contributionsTotal: 226,
      },
      userStats: {
        contributionsLast30Days: 4,
        contributionsTotal: 10,
      },
    };
  },
};
</script>

<style>

</style>
