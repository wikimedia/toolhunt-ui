<script setup>
import { RouterLink, RouterView } from "vue-router";
import Footer from "./components/Footer.vue"
</script>

<template>
  <v-app>
    <header>
      <img
        alt="Toolhunt logo"
        class="logo"
        src="@/assets/logo-nav.svg"
        width="25"
        height="25"
      />
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/dashboard">Dashboard</RouterLink>
          <RouterLink to="/leaderboard">Leaderboard</RouterLink>
          <v-btn><v-icon icon="mdi-account-circle"/></v-btn>
        </nav>
    </header>
    <v-main>
      <v-container fluid>
        <RouterView />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>
