<script setup>
import { ref } from "vue";
defineEmits(["tool-requested"]);
defineProps({
  toolTitles: Array,
});
const loading = ref(false);
const search = ref(null);
const requestedTool = ref(null);

// function querySelections(v) {
//   this.loading = true;
//   setTimeout(() => {
//     this.items = this.toolTitles.filter((title) => {
//       return (title || "").toLowerCase().indexOf((v || "").toLowerCase()) > -1;
//     });
//     this.loading = false;
//   }, 500);
// }
</script>
<template>
  <div>
    <v-autocomplete
      label="Find a tool"
      variant="outlined"
      clearable
      hide-no-data
      v-model="requestedTool"
      v-model:search="search"
      :loading="loading"
      :items="toolTitles"
      append-inner-icon="mdi-magnify"
      @keyup.enter.prevent="$emit('tool-requested', requestedTool)"
      @click:append-inner="$emit('tool-requested', requestedTool)"
    >
    </v-autocomplete>
  </div>
</template>
<style scoped>
.v-text-field {
  width: 80vw;
  max-width: 500px;
}
</style>
