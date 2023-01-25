<script setup>
import { defineProps } from "vue";
defineProps({
  task: {
    toolName: String,
    toolDescription: String,
    url: String,
    missingField: String,
  }
});
</script>
<template>
  <v-container
    class="d-flex align-center"
    style="gap: 16px; max-width: 600px; margin-inline: auto"
    fluid
  >
    <v-img
      src="./src/assets/logo-main.svg"
      height="100"
      width="100"
      class="overflow-visible"
    ></v-img>
    <div>
      <p class="text-h2">Toolhunt</p>
      <p class="text-subtitle-2 d-none d-sm-flex">
        Currently, many tools in Toolhub have missing or incomplete information.
      </p>
      <p class="text-subtitle-2 d-none d-sm-flex">
        Please help us add the missing fields and incomplete information
      </p>
    </div>
  </v-container>
  <v-container>
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
                  Please click on the
                  <strong
                    ><span class="bg primary theme--light"
                      >Yes Please</span
                    ></strong
                  >
                  button to add the missing fields and incomplete information.
                </p>
                <p>
                  You can also click the
                  <strong><span class="bg primary">Skip to Next</span></strong>
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
                      <td>{{ task.toolName }}</td>
                    </tr>
                    <tr>
                      <td>Tool Description</td>
                      <td>{{ task.toolDescription }}</td>
                    </tr>
                    <tr>
                      <td>Url</td>
                      <td>{{ task.url }}</td>
                    </tr>
                    <tr>
                      <td>Missing Field Name</td>
                      <td>{{ task.missingField }}</td>
                    </tr>
                  </tbody>
                </v-table>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-action
            class="d-flex justify-center justify-space-around flex-row"
          >
            <v-btn class="my-2" color="primary base100--text theme--light"
              >Yes Please</v-btn
            >
            <v-btn class="my-2">Skip to Next</v-btn>
          </v-card-action>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
