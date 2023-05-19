<script setup>
import { ref, computed } from "vue";
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
const emit = defineEmits(["task-submitted"]);

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
          emit("task-submitted");
        })
        .catch((error) => {
          const alertMsgs = {
            404: "The task cannot be found.  It may have already been completed.  Please click 'skip to next' to try another one.",
            401: "You must be logged in to submit a task. Please click on the Login button.",
            400: "Validation failure.  The data given doesn't match the task specifications.",
            default:
              "There was a problem sending your request. Please try again later.",
          };
          alert(alertMsgs[error.response.status] || alertMsgs.default);
        });
    } catch (error) {
      console.log(error.message);
    } finally {
      missingFieldValue.value = null;
    }
  } else alert(validationResult);
};

function skipToNext() {
  form.value.reset();
  missingFieldValue.value = null;
  data.getNextTask();
}

const missingFieldRules = computed(() => [
  (value) => {
    if (data.pattern) {
      const re = new RegExp(data.pattern);
      if (re.test(value)) return true;
      return `Field should follow this pattern:${data.pattern}`;
    } else if (
      data.missingFieldName.includes("url") ||
      data.missingFieldName == "repository"
    ) {
      if (!RE_URL_VALID_BASIC.test(value)) {
        return "Field should be a valid URL";
      }

      try {
        // eslint-disable-next-line no-unused-vars
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
    <v-card class="d-flex flex-column">
      <v-card-title class="text-wrap">{{ description }}</v-card-title>
      <v-card-text>
        <v-form ref="form" @submit.prevent="submit">
          <v-row
            cols="12"
            class="d-flex flex-column flex-md-row justify-center"
          >
            <v-col>
              <v-text-field
                v-if="!data?.inputOptions"
                v-model="missingFieldValue"
                :label="data.missingFieldName"
                :error-messages="errorMessage.value"
                key="text-field"
                :rules="missingFieldRules"
                clearable
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
                :label="data.missingFieldName"
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
                :label="data.missingFieldName"
                multiple
              ></v-select>
            </v-col>
            <v-card-actions
              class="d-flex flex-column flex-sm-row justify-center"
              style="gap: 10px; margin-top: -20px"
            >
              <v-btn
                v-bind:disabled="missingFieldValue ? false : true"
                class="bg-primary rounded-pill"
                type="submit"
                style="width: 127px"
                >submit</v-btn
              >
              <v-btn
                class="rounded-pill"
                variant="outlined"
                color="primary"
                style="width: 127px"
                @click="skipToNext"
                >Skip to Next</v-btn
              >
            </v-card-actions>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>
