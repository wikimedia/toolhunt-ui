<script setup>
import { defineProps } from "vue";
import { ref } from "vue";

const props = defineProps({
  missingFieldName: String,
});
</script>
<template>
  <v-col cols="12">
    <v-text-field
      :label="this.missingFieldName"
      hint="example of persistent helper text"
      persistent-hint
      required
    ></v-text-field>
  </v-col>
</template>
