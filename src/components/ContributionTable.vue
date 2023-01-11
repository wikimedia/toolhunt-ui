<template>
  <v-col>
    <v-card cols="12" min-width="320">
      <v-card-item>
        <v-card-title><slot /></v-card-title>
      </v-card-item>
      <v-card-text>
        <v-table  class="contributionTable">
          <tbody>
            <tr v-for="contribution in contributionContent" :key="contribution.dateModified">
              <DateString :dateString="contribution.dateModified" />
              <UserProfile v-if="this.global" :user="contribution.user" />
              <ToolData :toolName="contribution.toolName" :toolTitle="contribution.toolTitle" :fieldEdited="contribution.fieldEdited" />
          </tr>
          </tbody>
        </v-table>
      </v-card-text>
    </v-card>
   </v-col>
</template>

<script>
import DateString from "./table_data/DateString.vue";
import ToolData from "./table_data/ToolData.vue";
import UserProfile from "./table_data/UserProfile.vue";

export default {
  components: {
    DateString,
    ToolData,
    UserProfile
  },
  props: {
    content: Array,
    global: Boolean,
  },
  data() {
    return {
      contributionContent: this.content
    }
  }
}
</script>