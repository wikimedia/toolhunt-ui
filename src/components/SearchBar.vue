<script setup>
import { ref } from "vue";
const requestedTool = ref(null);
defineEmits(["tool-requested"]);
defineProps({
  "tool-titles": Array,
});
</script>
<template>
  <div>
    <v-text-field
      label="Find a tool"
      variant="outlined"
      append-inner-icon="mdi-magnify"
      clearable
      @keyup.enter.prevent="$emit('tool-requested', requestedTool)"
      @click:append-inner="$emit('tool-requested', requestedTool)"
      v-model="requestedTool"
    >
    </v-text-field>
  </div>
</template>
<style scoped>
.v-text-field {
  width: 80vw;
  max-width: 500px;
}
</style>
