<template>
  <v-container class="dashboard-header" fluid>
          <img src="src/assets/logo-main.svg" alt=""/>
          <div>
            <h1>Welcome, {{ userName }}!</h1>
            <p>
              Here on the Dashboard, you can view your latest contributions and check out global contributions and statistics about Toolhub and the Toolhunt project.
            </p>
          </div>
  </v-container>

    <v-card flat max-width="1400" class="mx-auto">
      <v-container>
        <v-row>
          <DashboardCard v-for="card in cards" :key="card.title" :cardContent="card" />
      </v-row>
      </v-container>
    </v-card>
</template>

<script>
import DashboardCard from "../components/DashboardCard.vue"
export default {
  components: {
    DashboardCard
  },
  data() {
    return {
      userName: "NicoleLBee",
      cards: [
        {
          title: "My Contributions",
          contributionTable: true,
          global: false,
          content: [ 
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
          }] 
        },
        {
          title: "Latest Activity",
          contributionTable: true,
          global: true,
          content: [
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
          }]
        },
        {
          title: "My Contributions",
          contributionTable: false,
          
        }
      ]
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

.contributionTable tr > td:first-of-type {
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

  .contributionTable tr > td:first-of-type {
    display: table-cell;
  }

}
</style>