<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  missingFieldName: String,
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
  <v-col cols="12">
    <v-text-field
      v-model="value"
      :label="this.missingFieldName"
      :hint="this.description"
      persistent-hint
      required
    ></v-text-field>
  </v-col>
</template>
