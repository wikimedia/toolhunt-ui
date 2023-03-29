<script setup>
import DateString from "./table_data/DateString.vue";
import ToolData from "./table_data/ToolData.vue";
import UserProfile from "./table_data/UserProfile.vue";

const props = defineProps({
  contributions: Array,
  showUserProfile: Boolean,
  isError: Boolean,
});
</script>
<template>
  <v-col>
    <v-card cols="12" min-width="320">
      <v-card-item>
        <v-card-title><slot /></v-card-title>
      </v-card-item>
      <v-card-text>
        <v-table class="contributionTable">
          <tbody>
            <tr
              v-for="contribution in props.contributions"
              :key="contribution.dateModified"
            >
              <DateString :dateString="contribution?.completed_date" />
              <UserProfile
                v-if="props.showUserProfile"
                :user="contribution.user"
              />
              <ToolData
                :toolName="contribution?.tool_name"
                :toolTitle="contribution?.tool_title"
                :fieldEdited="contribution?.field"
              />
            </tr>
          </tbody>
        </v-table>
      </v-card-text>
    </v-card>
  </v-col>
</template>
