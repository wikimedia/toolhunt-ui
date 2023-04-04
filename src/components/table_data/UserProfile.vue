<template>
  <td>
    <a :href="userProfileURL" target="_blank">{{ user }}</a>
  </td>
</template>

<script>
export default {
  props: {
    user: String,
  },
  computed: {
    userProfileURL: function () {
      let profileName = this.user.split(" ").join("_");
      return `https://meta.wikimedia.org/wiki/User:${profileName}`;
    },
  },
};
</script>
