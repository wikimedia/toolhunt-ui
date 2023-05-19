<script setup>
const props = defineProps({
  toolName: String,
  toolDescription: String,
  missingField: String,
  toolURL: String,
  isError: Boolean,
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
      height="75"
      width="75"
      class="overflow-visible"
    />
    <div>
      <h1 class="text-h4">Welcome to Toolhunt</h1>
      <p class="text-subtitle-2 d-none d-sm-block">
        Many of the tools on Toolhub are missing valuable information. Can you
        help us improve the listings by hunting down links and data?
      </p>
    </div>
  </v-container>
  <!--  v-container
    class="d-flex align-center"
    style="gap: 16px; max-width: 600px; margin-inline: auto"
    fluid
  >
    <img
      src="@/assets/logo-main.svg"
      height="100"
      width="100"
      class="overflow-visible"
    />
    <div>
      <p class="text-h2">Toolhunt</p>
      <p class="text-subtitle-2 d-none d-sm-flex">
        Currently, many tools in Toolhub have missing or incomplete information.
      </p>
      <p class="text-subtitle-2 d-none d-sm-flex">
        Please help us add the missing fields and incomplete information
      </p>
    </div>
  </v-container -->
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
                    ><span class="bg primary theme--light">Submit</span></strong
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
                  <tr>
                    <th colspan="2" v-if="isError">
                      <v-alert
                        density="compact"
                        type="error"
                        text="We are having trouble fetching this data for you right now, please refresh the page"
                      ></v-alert>
                    </th>
                  </tr>
                  <tbody>
                    <tr>
                      <td>Tool Name</td>
                      <td>{{ props.toolName }}</td>
                    </tr>
                    <tr>
                      <td>Tool Description</td>
                      <td>{{ props.toolDescription }}</td>
                    </tr>
                    <tr>
                      <td>Url</td>
                      <td>
                        <a :href="props.toolURL" target="_blank">
                          {{ props.toolURL }}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Missing Field Name</td>
                      <td>{{ props.missingField }}</td>
                    </tr>
                  </tbody>
                </v-table>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
