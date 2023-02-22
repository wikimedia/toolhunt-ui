<script setup>
import { ref, defineProps, computed } from "vue";
import TextField from "./FieldTypes/TextField.vue";
import MultipleSelect from "./FieldTypes/MultipleSelect.vue";
import SingleSelect from "./FieldTypes/SingleSelect.vue";
import { recordUserContribution } from "../stores/api.js";

const dialog = ref(false);
const data = defineProps({
  description: String,
  inputOptions: Object,
  missingFieldName: String,
  toolName: String,
  taskId: Number,
  isError: Boolean
});

const missingFieldValue = ref(null);
const inputOptionsArray = computed(() => {
  return data.inputOptions
    ? Object.entries(data.inputOptions).map(([key, value]) => ({ key, value }))
    : [];
});

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

function closeDialog() {
  dialog.value = false;
  missingFieldValue.value = null;
}
</script>
<template>
  <v-dialog v-model="dialog" persistent>
    <template v-slot:activator="{ props }">
      <v-btn :disabled="isError" color="primary base100--text theme--light" v-bind="props">
        Yes Please
      </v-btn>
    </template>
    <v-container>
      <v-card>
        <v-card-title>
          <span class="text-h5">Missing Field Form</span>
        </v-card-title>
        <v-card-text>
          <p class="my-4">
            Please help us by finding the missing information for the field
            below
          </p>

          <v-row>
            <TextField
              v-if="!data.inputOptions"
              v-model="missingFieldValue"
              :missingFieldName="data.missingFieldName"
              :description="data.description"
            ></TextField>
            <SingleSelect
              v-if="
                inputOptionsArray?.length > 0 &&
                missingFieldName === 'tool_type'
              "
              v-model="missingFieldValue"
              :missingFieldName="data.missingFieldName"
              :inputOptions="inputOptionsArray"
              :description="data.description"
            ></SingleSelect>
            <MultipleSelect
              v-if="
                inputOptionsArray?.length > 0 &&
                missingFieldName !== 'tool_type'
              "
              v-model="missingFieldValue"
              :missingFieldName="data.missingFieldName"
              :inputOptions="inputOptionsArray"
              :description="data.description"
            ></MultipleSelect>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue-darken-1" variant="text" @click="closeDialog">
            Cancel
          </v-btn>
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="postUserContribution"
          >
            Submit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </v-dialog>
</template>
