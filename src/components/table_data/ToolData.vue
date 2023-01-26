<template>
  <td>
    Added {{ fieldEdited }} to
    <a :href="toolHubURL" target="_blank"> {{ toolTitle }}</a>
  </td>
</template>
<script>
export default {
  props: {
    toolName: String,
    toolTitle: String,
    fieldEdited: String,
  },
  computed: {
    toolHubURL: function () {
      return `https://toolhub.wikimedia.org/tools/${this.toolName}`;
    },
  },
};
</script>
