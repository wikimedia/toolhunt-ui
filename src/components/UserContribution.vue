<script setup>
import { ref, defineProps, computed } from "vue";
import TextField from "./FieldTypes/TextField.vue";
import MultipleSelect from "./FieldTypes/MultipleSelect.vue";
import SingleSelect from "./FieldTypes/SingleSelect.vue";
import { recordUserContribution } from "../stores/api.js";

const dialog = ref(false);
const data = defineProps({
  description: String,
  inputOptions: String,
  missingFieldName: String,
  toolName: String,
  taskId: Number
});

const missingFieldValue = ref(null);
const inputOptionsArray = computed(() => {
  return data.inputOptions ? data.inputOptions?.split(",") : [];
});


async function postUserContribution() {
  const validatedValue = missingFieldValue.value.trim()
  if (validatedValue.length > 0) {
    const contributionRecord = {
      value: validatedValue,
      field: data.missingFieldName,
      tool: data.toolName,
    };

    try {
      await recordUserContribution(data.taskId, contributionRecord)
    }
    catch (error) {
      console.log(error)
    }
    dialog.value = false
  }
}
</script>
<template>
  <v-dialog v-model="dialog" persistent>
    <template v-slot:activator="{ props }">
      <v-btn color="primary base100--text theme--light" v-bind="props">
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
            Please help us add the missing information for below field
          </p>

          <v-row>
            <TextField
              v-if="!data.inputOptions"
              v-model="missingFieldValue"
              :missingFieldName="data.missingFieldName"
              :description="data.description"
            ></TextField>
            <SingleSelect
              v-if="inputOptionsArray?.length > 0"
              v-model="missingFieldValue"
              :missingFieldName="data.missingFieldName"
              :inputOptions="inputOptionsArray"
              :description="data.description"
            ></SingleSelect>
            <MultipleSelect
              v-if="inputOptionsArray?.length > 0"
              v-model="missingFieldValue"
              :missingFieldName="data.missingFieldName"
              :inputOptions="inputOptionsArray"
              :description="data.description"
            ></MultipleSelect>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="blue-darken-1" variant="text" @click="postUserContribution">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </v-dialog>
</template>
