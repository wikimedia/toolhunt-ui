<script setup>
const props = defineProps({
  toolName: String,
  toolDescription: String,
  toolURL: String,
  isError: Boolean,
});
</script>
<template>
  <v-container>
    <v-table class="table elevation-2">
      <tr>
        <th colspan="2" v-if="isError">
          <v-alert
            density="compact"
            type="error"
            text="We are having trouble fetching this data for you right now, please refresh the page"
          ></v-alert>
        </th>
      </tr>
      <tbody>
        <tr>
          <td>Tool Name</td>
          <td>{{ props.toolName }}</td>
        </tr>
        <tr>
          <td>Tool Description</td>
          <td>{{ props.toolDescription }}</td>
        </tr>
        <tr>
          <td>Url</td>
          <td>
            <a :href="props.toolURL" target="_blank">
              {{ props.toolURL }}
            </a>
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>
