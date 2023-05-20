<script setup>
import { defineProps } from "vue";

const { contribution } = defineProps({
  contributions: {
    userName: String,
    toolsEdited: Number,
  },
  title: String,
  profileBaseUrl: String,
  isError: Boolean,
});
</script>

<template>
  <v-table class="table elevation-2">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left text-h5 mx-1 my-3" colspan="2">
            {{ title }}
          </th>
        </tr>
        <tr>
          <th class="text-left text-subtitle-2 font-weight-bold">
            User's Name
          </th>
          <th class="text-center text-subtitle-2 font-weight-bold">
            Number of Tools Edited
          </th>
        </tr>
        <tr>
          <th colspan="2" v-if="isError">
            <v-alert
              density="compact"
              type="error"
              text="We are having trouble fetching the data.  Please refresh the page."
            ></v-alert>
          </th>
        </tr>
      </thead>
      <tbody v-if="!isError">
        <tr v-for="contribution in contributions" :key="contribution.user">
          <td class="text-left">
            <a
              :href="`${profileBaseUrl}${contribution?.user
                .split(' ')
                .join('_')}`"
              target="_blank"
              >{{ contribution?.user }}</a
            >
          </td>

          <td class="text-center">{{ contribution?.score }}</td>
        </tr>
      </tbody>
    </template>
  </v-table>
</template>
