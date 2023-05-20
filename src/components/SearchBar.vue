<script setup>
import { ref, watch } from "vue";
defineEmits(["tool-requested"]);
const props = defineProps({
  toolTitles: Array,
});
const loading = ref(false);
const search = ref(null);
const select = ref(null);
const items = ref([]);

watch(search, (val) => {
  val && val !== select.value && querySelections(val);
});

function clearSelection() {
  search.value = null;
  select.value = null;
  items.value = [];
}

function querySelections(v) {
  loading.value = true;
  setTimeout(() => {
    items.value = props.toolTitles.filter((title) => {
      return (title || "").toLowerCase().indexOf((v || "").toLowerCase()) > -1;
    });
    loading.value = false;
  }, 1500);
}
</script>
<template>
  <div>
    <v-autocomplete
      label="Find a tool"
      variant="outlined"
      clearable
      hide-no-data
      v-model="select"
      v-model:search="search"
      :loading="loading"
      :items="items"
      append-inner-icon="mdi-magnify"
      @keyup.enter.prevent="
        $emit('tool-requested', select);
        clearSelection();
      "
      @click:append-inner="
        $emit('tool-requested', select);
        clearSelection();
      "
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
