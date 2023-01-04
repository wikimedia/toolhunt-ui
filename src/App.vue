<script setup>
import { RouterLink, RouterView } from "vue-router";
import Footer from "./components/Footer.vue"
</script>

<template>
  <v-app>
    <v-app-bar color="#006699">
      <img
        alt="Toolhunt logo"
        class="logo"
        src="@/assets/logo-nav.svg"
        width="35"
        height="35"
      />
      <v-app-bar-title class="text-h4">Toolhunt</v-app-bar-title>
          <v-btn to="/">Home</v-btn>
          <v-btn to="/dashboard">Dashboard</v-btn>
          <v-btn to="/leaderboard">Leaderboard</v-btn>
          <v-btn icon="mdi-account-circle" size="small"></v-btn>

    </v-app-bar>
    <v-main>
      <v-container fluid>
        <RouterView />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<style>
  .v-toolbar__content {
    color: white;
  }

  .v-btn--icon {
    background-color: black;
  }

  img {
    margin-inline-start: 10px;
  }
</style>