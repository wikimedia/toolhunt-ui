<script setup>
import { ref, computed } from "vue";
import { defineProps } from "vue";
import { recordUserContribution } from "../stores/api.js";

const data = defineProps({
  description: String,
  inputOptions: Object,
  missingFieldName: String,
  toolName: String,
  taskId: Number,
  isError: Boolean,
  getNextTask: Function,
});

const inputOptionsArray = computed(() => {
  return data?.inputOptions
    ? Object.entries(data.inputOptions).map(([key, value]) => ({ key, value }))
    : [];
});

const missingFieldValue = ref(null);
const errorMessage = ref("");

const submit = async () => {
  const fieldValue = missingFieldValue.value;
  const contributionRecord = {
    value: Array.isArray(fieldValue) ? fieldValue.join() : fieldValue,
    field: data.missingFieldName,
    tool: data.toolName,
  };

  try {
    const res = await recordUserContribution(data.taskId, contributionRecord);
    alert(res)
  } catch (error) {
    console.log(error);
  } finally {
    missingFieldValue.value = null;
  }
};

async function postUserContribution() {
  if (missingFieldValue.value.length > 0) {
    const contributionRecord = {
      value: Array.isArray(missingFieldValue.value)
        ? missingFieldValue.value.join()
        : missingFieldValue.value,
      field: data.missingFieldName,
      tool: data.toolName,
    };

    try {
      await recordUserContribution(data.taskId, contributionRecord);
    } catch (error) {
      console.log(error);
    } finally {
      dialog.value = false;
      missingFieldValue.value = null;
    }
  }
}

function skipToNext() {
  missingFieldValue.value = null;
  data.getNextTask();
}
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <p class="text-h6" >{{ description }}</p>
        <form @submit.prevent="submit">
          <v-row class="d-flex align-center justify-center">
            <v-col cols="8" class="d-flex align-center justify-center">
              <v-text-field
                v-if="!data?.inputOptions"
                v-model="missingFieldValue"
                :label="this.missingFieldName"
                :error-messages="errorMessage.value"
                key="text-field"
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
              <v-btn class="px-10 bg-primary rounded-pill me-4" type="submit"
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
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>
