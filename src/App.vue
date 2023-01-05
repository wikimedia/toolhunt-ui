<script setup>
import { RouterLink, RouterView } from "vue-router";
import Footer from "./components/Footer.vue"
</script>

<template>
  <v-app>
    <v-toolbar color="#006699">
      <img
        alt="Toolhunt logo"
        class="logo"
        src="@/assets/logo-nav.svg"
        width="35"
        height="35"
      />
      <v-toolbar-title class="text-h4">Toolhunt</v-toolbar-title>
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/dashboard">Dashboard</RouterLink>
          <RouterLink to="/leaderboard">Leaderboard</RouterLink>
          <v-btn icon="mdi-account-circle"></v-btn>
        </nav>
    </v-toolbar>
    <v-main>
      <v-container fluid>
        <RouterView />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<style scoped>

</style>