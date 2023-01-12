<script setup>
import { ref } from "vue";

const tasks = ref({
  toolName: "Pywikibot",
  toolDescription:
    "Python library and collection of scripts that automate work on MediaWiki sites",
  url: "https://www.mediawiki.org/wiki/Special:MyLanguage/Manual:Pywikibot",
  missingField: "wikidata_qid",
});
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-item>
            <v-card-title>Help us add missing fields</v-card-title>
          </v-card-item>
          <v-card-text>
            <v-row>
              <v-col cols="12">
                <p>
                  Currently, many tools in Toolhub have missing or incomplete
                  information.
                </p>
                <p>
                  Please help us add the missing fields and incomplete
                  information by clicking on the
                  <strong
                    ><span style="color: #3367cb">Yes Please</span></strong
                  >
                  button.
                </p>

                <p>
                  You can also click
                  <strong
                    ><span style="color: #3367cb">Skip to Next</span></strong
                  >
                  to see if you would prefer to add the next missing field
                </p>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-table class="table elevation-2">
                  <tbody>
                    <tr>
                      <td>Tool Name</td>
                      <td>{{ tasks.toolName }}</td>
                    </tr>
                    <tr>
                      <td>Tool Description</td>
                      <td>{{ tasks.toolDescription }}</td>
                    </tr>
                    <tr>
                      <td>Url</td>
                      <td>{{ tasks.url }}</td>
                    </tr>
                    <tr>
                      <td>Missing Field Name</td>
                      <td>{{ tasks.missingField }}</td>
                    </tr>
                  </tbody>
                </v-table>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-action class="d-flex justify-center justify-space-around flex-row">
            <v-btn class="primary">Yes Please</v-btn>
            <v-btn>Skip to Next</v-btn>
          </v-card-action>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
