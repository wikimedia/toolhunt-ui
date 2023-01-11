<template>
  <td>
    {{ localeDateString }}
  </td>
</template>

<script>
export default {
  props: {
    dateString: Number
  },
  computed: {
    localeDateString: function() {
      let dateObj = new Date(this.dateString);
      return dateObj.toLocaleDateString();
    }
  }
}
</script>