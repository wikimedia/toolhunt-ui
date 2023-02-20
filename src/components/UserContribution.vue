<script setup>
import { ref } from "vue";
import TextField from "./FieldTypes/TextField.vue";
import MultipleSelect from "./FieldTypes/MultipleSelect.vue";
import SingleSelect from "./FieldTypes/SingleSelect.vue";

const dialog = ref(false);
const data = ref({
  description: "a thing for doing the thing",
  input_options: null,
  name: "wikidata_qid"
});
</script>
<template>
  <v-dialog v-model="dialog" persistent>
    <template v-slot:activator="{ props }">
      <v-btn color="primary base100--text theme--light" v-bind="props">
        Yes Please
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">User Profile</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <TextField
              v-if="!data.input_options"
              :missingFieldName="data.name"
            ></TextField>
            <SingleSelect
              v-if="data.input_options?.length > 0"
              :missingFieldName="data.name"
              :inputOptions="data.input_options"
            ></SingleSelect>
            <MultipleSelect
              v-if="data.input_options?.length > 0"
              :missingFieldName="data.name"
              :inputOptions="data.input_options"
            ></MultipleSelect>
          </v-row>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
          Close
        </v-btn>
        <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
