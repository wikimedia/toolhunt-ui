<template>
  <td>
    {{ localeDateString }}
  </td>
</template>

<script>
export default {
  props: {
    dateString: String,
  },
  computed: {
    localeDateString: function () {
      let dateObj = new Date(this.dateString);
      return dateObj.toLocaleDateString();
    },
  },
};
</script>
