<script setup>
const props = defineProps({
  toolName: String,
  toolTitle: String,
  fieldEdited: String,
});
</script>
<template>
  <td>
    Added {{ fieldEdited }} to
    <a
      :href="`https://toolhub.wikimedia.org/tools/${props.toolName}`"
      target="_blank"
    >
      {{ toolTitle }}</a
    >
  </td>
</template>
