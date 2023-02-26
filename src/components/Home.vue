<script setup>
import { defineProps } from "vue";
import { ref, watchEffect } from "vue";
import UserContributionForm from "./UserContributionForm.vue";

const props = defineProps({
  tasks: Array,
  isError: Boolean,
});
const currentTaskIndex = ref(1);
const currentTask = ref(null);

watchEffect(() => {
  currentTask.value = props.tasks[currentTaskIndex.value];
});

function getNextTask() {
  currentTaskIndex.value++;
  if (props.tasks.length <= currentTaskIndex.value) {
    // for now it will start at 0 but when connected to backend we can fetch a batch of tasks
    currentTaskIndex.value = 0;
  }
}
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
                      >Submit</span
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
                      <td>{{ currentTask?.tool?.name }}</td>
                    </tr>
                    <tr>
                      <td>Tool Description</td>
                      <td>{{ currentTask?.tool?.description }}</td>
                    </tr>
                    <tr>
                      <td>Url</td>
                      <td>
                        <a :href="currentTask?.tool?.url">
                          {{ currentTask?.tool?.url }}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Missing Field Name</td>
                      <td>{{ currentTask?.field?.name }}</td>
                    </tr>
                  </tbody>
                </v-table>
              </v-col>
            </v-row>
            <v-row>
              <UserContributionForm
                :description="currentTask?.field?.description"
                :inputOptions="currentTask?.field?.input_options"
                :missingFieldName="currentTask?.field?.name"
                :toolName="currentTask?.tool?.name"
                :taskId="currentTask?.id"
                :isError="isError"
                :getNextTask="getNextTask"
              ></UserContributionForm>
            </v-row>
          </v-card-text>
          <!-- <v-card-action
            class="d-flex justify-center justify-space-around flex-row"
          >
            <v-btn
              class="my-2"
              color="primary base100--text theme--light"
              :disabled="isError"
              >Yes Please</v-btn
            >
            <v-btn @click="getNextTask" class="my-2" :disabled="isError"
              >Skip to Next</v-btn
            >
          </v-card-action> -->
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
