<script setup>
function clickTest() {
  console.log("Clicked");
}
</script>
<template>
  <div>
    <v-text-field
      label="Find a tool"
      variant="outlined"
      append-inner-icon="mdi-magnify"
      clearable
      @click:append-inner="clickTest"
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
