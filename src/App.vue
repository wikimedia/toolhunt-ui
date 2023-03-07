<script setup>
import { RouterView } from "vue-router";
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";
import { ref, onMounted } from "vue";
import { getLoggedInUser } from "./stores/api.js";

const currentUser = ref(null);
onMounted(async () => {
  let username = await getLoggedInUser();
  currentUser.value = username;
});
</script>

<template>
  <v-app>
    <Navbar :currentUser="currentUser" />
    <v-main>
      <v-container fluid>
        <RouterView :currentUser="currentUser" />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>
