<template>
  <v-col>
    <v-card min-width="300">
      <v-card-item>
        <v-card-title>{{ cardContent.title }}</v-card-title>
      </v-card-item>
      <v-card-text v-if="cardContent.contributionTable">
        <v-table  class="contributionTable">
          <tbody>
            <tr v-for="contribution in cardContent.content" :key="contribution.dateModified">
              <td>{{ convertUTCtoDate(contribution.dateModified) }}</td>
              <td v-if="cardContent.global">
                <a :href=generateProfileURL(contribution.user) target="_blank">{{ contribution.user }}</a></td>
              <td>Added {{ contribution.fieldEdited }} to <a :href=generateToolURL(contribution.toolName) target="_blank">{{ contribution.toolTitle }}</a></td>
          </tr>
          </tbody>
        </v-table>
      </v-card-text>
      <v-card-text v-else>
        <v-table>
          <tbody>
            <tr v-for="item in cardContent.content" :key="item">
              <td>
              </td>
              <td>        
              </td>
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
    cardContent: Object
  },
  methods: {
    convertUTCtoDate(dateString) {
      let dateObj = new Date(dateString);
      return this.convertDateObjToString(dateObj);
    },
    convertDateObjToString(dateObj) {
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