<template>
  <v-col>
    <v-card cols="12" min-width="320">
      <v-card-item>
        <v-card-title><slot /></v-card-title>
      </v-card-item>
      <v-card-text>
        <v-table  class="contributionTable">
          <tbody>
            <tr v-for="contribution in content" :key="contribution.dateModified">
              <td>{{ convertUTCtoLocaleDateString(contribution.dateModified) }}</td>
              <td v-if="this.global">
                <a :href=generateProfileURL(contribution.user) target="_blank">{{ contribution.user }}</a></td>
              <td>Added {{ contribution.fieldEdited }} to <a :href=generateToolURL(contribution.toolName) target="_blank">{{ contribution.toolTitle }}</a></td>
          </tr>
          </tbody>
        </v-table>
      </v-card-text>
    </v-card>
   </v-col>
</template>

<script>
export default {
  props: {
    content: Array,
    global: Boolean,
  },
  methods: {
    convertUTCtoLocaleDateString(dateString) {
      let dateObj = new Date(dateString);
      return dateObj.toLocaleDateString();
    },
    generateProfileURL(user) {
      const baseURL = "https://en.wikipedia.org/wiki/User:";
      let userName = user.split(" ").join("_")
      return `${baseURL}${userName}`
    },
    generateToolURL(toolName) {
      return `https://toolhub.wikimedia.org/tools/${toolName}`
    }
  }
}
</script>