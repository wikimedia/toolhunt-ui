<script setup>
import { ref, computed } from "vue";
import { defineProps } from "vue";
import { recordUserContribution } from "../stores/api.js";

const RE_URL_VALID_BASIC = /^https?:\/\/[^\s]+$/;

const data = defineProps({
  description: String,
  inputOptions: Object,
  missingFieldName: String,
  toolName: String,
  taskId: Number,
  isError: Boolean,
  getNextTask: Function,
  currentUser: String,
  pattern: String,
});

const inputOptionsArray = computed(() => {
  return data?.inputOptions
    ? Object.entries(data.inputOptions).map(([key, value]) => ({ key, value }))
    : [];
});

const missingFieldValue = ref(null);
const form = ref(null);
const errorMessage = ref("");

const submit = async () => {
  if (!data.currentUser) {
    alert(
      "You must be logged in to submit a task. Please click on the Login button."
    );
    return;
  }

  const fieldValue = missingFieldValue.value;
  const validationResult = missingFieldRules.value[0](fieldValue);
  if (validationResult === true) {
    const contributionRecord = {
      value: Array.isArray(fieldValue) ? fieldValue.join() : fieldValue,
      field: data.missingFieldName,
      tool: data.toolName,
      user: data.currentUser,
    };

    try {
      await recordUserContribution(data.taskId, contributionRecord)
        .then((res) => {
          alert(res.data);
        })
        .catch((error) => {
          if (error.response.status === 409) {
            alert(
              "Someone else has completed this task.  Please click 'skip to next' to try another one."
            );
          }
          if (error.response.status === 401) {
            alert(
              "You must be logged in to submit a task. Please click on the Login button."
            );
          }
          alert(
            "There was a problem sending your request. Please try again later."
          );
        });
    } catch (error) {
      console.log(error);
    } finally {
      missingFieldValue.value = null;
    }
  } else alert(validationResult);
};

function skipToNext() {
  form.value.reset();
  data.getNextTask();
}

const missingFieldRules = computed(() => [
  (value) => {
    if (data.pattern) {
      const re = new RegExp(data.pattern);
      if (re.test(value)) return true;
      return `Field should follow this pattern:${data.pattern}`;
    } else if (data.missingFieldName.includes("url")) {
      if (!RE_URL_VALID_BASIC.test(value)) {
        return "Field should be a valid URL";
      }

      try {
        const url = new URL(value);
        return true;
      } catch (_) {
        return "Field should be a valid URL";
      }
    }
    // if given pattern is null and not url - pass validation
    return true;
  },
]);
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>{{ description }}</v-card-title>
          <v-card-text>
            <v-form ref="form" @submit.prevent="submit">
              <v-row class="d-flex align-center justify-center">
                <v-col cols="8" class="d-flex align-center justify-center">
                  <v-text-field
                    v-if="!data?.inputOptions"
                    v-model="missingFieldValue"
                    :label="this.missingFieldName"
                    :error-messages="errorMessage.value"
                    key="text-field"
                    :rules="missingFieldRules"
                  ></v-text-field>

                  <v-select
                    v-if="
                      inputOptionsArray?.length > 0 &&
                      missingFieldName === 'tool_type'
                    "
                    v-model="missingFieldValue"
                    :error-messages="errorMessage.value"
                    item-title="value"
                    item-value="key"
                    :items="inputOptionsArray"
                    :label="this.missingFieldName"
                  ></v-select>

                  <v-select
                    v-if="
                      inputOptionsArray?.length > 0 &&
                      missingFieldName !== 'tool_type'
                    "
                    v-model="missingFieldValue"
                    :error-messages="errorMessage.value"
                    item-title="value"
                    item-value="key"
                    :items="inputOptionsArray"
                    :label="this.missingFieldName"
                    multiple
                  ></v-select>
                </v-col>
                <v-col cols="4" class="d-flex align-center justify-center mb-4">
                  <v-btn
                    v-bind:disabled="missingFieldValue ? false : true"
                    class="px-10 bg-primary rounded-pill me-4"
                    type="submit"
                    >submit</v-btn
                  >
                  <v-btn
                    class="rounded-pill me-4"
                    variant="outlined"
                    color="primary"
                    @click="skipToNext"
                    >Skip to Next</v-btn
                  >
                </v-col>
              </v-row>
            </v-form></v-card-text
          >
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
