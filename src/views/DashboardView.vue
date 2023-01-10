<template>
  <v-container class="dashboard-header" fluid>
          <img src="src/assets/logo-main.svg" alt=""/>
          <div>
            <h1>Welcome, {{ username }}!</h1>
            <p>
              Here on the Dashboard, you can view your latest contributions and check out global contributions and statistics about Toolhub and the Toolhunt project.
            </p>
          </div>
  </v-container>

    <v-card flat max-width="1400" class="mx-auto">
      <v-container>
        <v-row>
          <v-col>
            <v-card cols="12" min-width="300">
              <v-card-item>
                <v-card-title>My Contributions</v-card-title>
              </v-card-item>
              <v-card-text>
                <v-table  class="contribution-table">
                  <tbody>
                    <tr>
                      <td>10/19/2022</td>
                      <td>Added available_ui_languages to Pywikibot</td>
                  </tr>
                  <tr>
                      <td>7/19/2022</td>
                      <td>Added for_wikis to Wikidata Todo</td>
                  </tr>
                  <tr>
                      <td>6/17/2022</td>
                      <td>Added repository to Find duplicate items</td>
                  </tr>
                  <tr>
                      <td>5/2/2022</td>
                      <td>Added icon to Pywikibot</td>
                  </tr>
                  </tbody>
                </v-table>
              </v-card-text>
            </v-card>
          </v-col>
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
                      <td>1</td>
                  </tr>
                  <tr>
                      <td>My total contributions:</td>
                      <td>4</td>
                  </tr>
                  <tr>
                      <td>Global contributions in the last 30 days:</td>
                      <td>73</td>
                  </tr>
                  <tr>
                      <td>Total contributions:</td>
                      <td>226</td>
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
                      <td>2701</td>
                  </tr>
                  <tr>
                      <td>Number of tools with missing data:</td>
                      <td>2700</td>
                  </tr>
                  <tr>
                      <td>Percentage of tools with missing data:</td>
                      <td>99.96%</td>
                  </tr>
                  </tbody>
                </v-table>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col>
            <v-card cols="12" min-width="300">
              <v-card-item>
                <v-card-title>Latest Activity</v-card-title>
              </v-card-item>
              <v-card-text>
                <v-table class="contribution-table">
                  <tbody>
                    <tr>
                      <td>10/19/2022</td>
                      <td>User</td>
                      <td>Added available_ui_languages to Pywikibot</td>
                  </tr>
                  <tr>
                      <td>7/19/2022</td>
                      <td>User</td>
                      <td>Added for_wikis to Wikidata Todo</td>
                  </tr>
                  <tr>
                      <td>6/17/2022</td>
                      <td>User</td>
                      <td>Added repository to Find duplicate items</td>
                  </tr>
                  <tr>
                      <td>5/2/2022</td>
                      <td>User</td>
                      <td>Added icon to Pywikibot</td>
                  </tr>
                  </tbody>
                </v-table>
              </v-card-text>
            </v-card>
          </v-col>
      </v-row>
      </v-container>
    </v-card>
</template>

<script>
export default {
  data() {
    return {
      username: "NicoleLBee",
      toolCount: 2450
    }
  }
}
</script>

<style>
.dashboard-header {
  display: flex;
  align-items: center;
  gap: 16px;
  max-width: 800px;
  margin-inline: auto;
}

.dashboard-header p {
  display: none;
}

.dashboard-header img {
  height: 75px;
  width: 75px;
}

.contribution-table tr > td:first-of-type {
    display: none;
  }


@media (min-width: 600px) {
  .dashboard-header p {
    display: block;
  }

  .dashboard-header img {
    height: 100px;
    width: 100px;
  }

  .contribution-table tr > td:first-of-type {
    display: table-cell;
  }

}
</style>