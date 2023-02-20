<script setup>
import { defineProps } from "vue";
import { ref, computed } from "vue";

const props = defineProps({
  missingFieldName: String,
  inputOptions: Array,
  description: String,
  modelValue: String,
});

const emit = defineEmits(["update:modelValue"]);
const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>
<template>
  <v-col cols="12" sm="6">
    <v-autocomplete
      v-model="value"
      :items="inputOptions"
      :label="this.missingFieldName"
      multiple
      :hint="this.description"
      persistent-hint
    ></v-autocomplete>
  </v-col>
</template>
