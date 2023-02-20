<script setup>
import { defineProps } from "vue";
import { ref } from "vue";

const props = defineProps({
  missingFieldName: String,
  inputOptions: Array
});
</script>
<template>
    <v-col cols="12" sm="6">
        <v-select
          :items="inputOptions"
          label="Age*"
          required
        ></v-select>
      </v-col>
</template>
