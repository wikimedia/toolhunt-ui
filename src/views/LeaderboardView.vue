<script setup>
import {ref} from 'vue';
const userNameHeader = ref("User's Name")
const toolsEditedHeader = ref("Number of Tools Edited")
const profileBaseUrl = ref("https://meta.wikimedia.org/wiki/User:")

const users = ref([
            { userName: 'Frank',  toolsEdited: 12},
            { userName: 'John doe',  toolsEdited: 12},
            { userName: 'Jane',  toolsEdited: 12},
            { userName: 'Wandahuhu', toolsEdited: 12},
        ]);
</script>

<template>
    <div class="container-fluid lead-container">
        <div class="header">
          <h2>Leaderboard</h2>
        </div>
        <table class="leaderboard">
          <tbody><tr>
            <th>{{ userNameHeader }}</th>
            <th></th>
            <th>{{ toolsEditedHeader }}</th>
          </tr>
          <tr v-for="(user, id) in users" :key="id">
            <td >
                <a :href="`${profileBaseUrl}${user.userName.split(' ').join('_')}`">{{user.userName}}</a>
            </td>
            <td></td>
            <td class="tool-edits">{{user.toolsEdited}}</td>
          </tr>

          </tbody>
        </table>
      </div>
</template>

