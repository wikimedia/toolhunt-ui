<script setup>
function clickTest() {
  console.log("Clicked");
}
</script>
<template>
  <v-text-field
    label="Search for a tool"
    variant="outlined"
    append-inner-icon="mdi-magnify"
    clearable
    @click:append-inner="clickTest"
  >
  </v-text-field>
</template>
<style scoped></style>
