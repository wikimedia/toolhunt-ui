<script setup>
import { ref } from "vue";
const profileBaseUrl = ref("https://meta.wikimedia.org/wiki/User:");

const users = ref([
  { userName: "BDavis (WMF)", toolsEdited: 32 },
  { userName: "Sage (Wiki Ed)", toolsEdited: 22 },
  { userName: "Demo Unicorn", toolsEdited: 20 },
  { userName: "NicoleLBee", toolsEdited: 17 },
  { userName: "Hannah Waruguru", toolsEdited: 12 },
]);
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-table class="table elevation-2">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-center text-h3" colspan="2">Leaderboard</th>
              </tr>
              <tr>
                <th class="text-left text-h5">User's Name</th>
                <th class="text-center text-h5">Number of Tools Edited</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(user) in users" :key="user.userName">
                <td class="text-left">
                  <a
                    :href="`${profileBaseUrl}${user.userName
                      .split(' ')
                      .join('_')}`"
                    >{{ user.userName }}</a
                  >
                </td>

                <td class="text-center">{{ user.toolsEdited }}</td>
              </tr>
            </tbody>
          </template>
        </v-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
