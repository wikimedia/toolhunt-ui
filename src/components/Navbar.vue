<script setup>
import { ref, watchEffect } from "vue";
import { isUserLoggedIn, LogOut, LogIn } from "../stores/api.js";

const toggleMenu = () => {
  document.querySelector(".mobile-nav").classList.toggle("mobile-nav-display");
};

const currentUser = ref(null);
watchEffect(async () => {
  currentUser.value = await isUserLoggedIn();
});
</script>

<template>
  <header>
    <RouterLink to="/" class="left-side">
      <img
        alt="Toolhunt logo"
        class="logo"
        src="@/assets/logo-nav.svg"
        width="35"
        height="35"
      />
      <p class="text-h4">Toolhunt</p>
    </RouterLink>
    <nav class="desktop-nav" aria-label="desktop">
      <v-btn to="/" flat>Home</v-btn>
      <v-btn to="/dashboard" flat>Dashboard</v-btn>
      <v-btn to="/leaderboard" flat>Leaderboard</v-btn>

      <v-menu transition="slide-y-transition" v-if="currentUser">
        <template v-slot:activator="{ props }">
          <v-btn
            class="login-btn"
            icon="mdi-account-circle"
            size="small"
            flat
            v-bind="props"
          ></v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title class="d.flex justify-space-between mb-2">
              <i
                aria-hidden="true"
                class="v-icon notranslate mdi mdi-account-circle mr-4"
              ></i>
              <span>{{ currentUser }}</span>
            </v-list-item-title>
            <v-list-item-title class="d.flex justify-space-between logout">
              <span @click="LogOut">
                <i
                  aria-hidden="true"
                  class="v-icon notranslate mdi mdi-logout mr-4"
                />
                Log Out
              </span>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn
        v-if="!currentUser"
        class="ma-1 white--text v-btn v-btn--is-elevated bg-black theme--light v-size--default secondary color-white"
        @click="LogIn"
      >
        <span class="v-btn__content theme--light">
          Login
          <i
            aria-hidden="true"
            class="v-icon notranslate mdi mdi-login theme--light"
          ></i>
        </span>
      </v-btn>
    </nav>
    <v-btn
      class="mobile-nav-btn"
      icon="mdi-menu"
      @click="toggleMenu"
      flat
    ></v-btn>
  </header>
  <nav class="mobile-nav" aria-label="mobile">
    <v-btn to="/" flat @click="toggleMenu">Home</v-btn>
    <v-btn to="/dashboard" flat @click="toggleMenu">Dashboard</v-btn>
    <v-btn to="/leaderboard" flat @click="toggleMenu">Leaderboard</v-btn>
    <v-btn flat @click="toggleMenu">Login</v-btn>
  </nav>
</template>

<style>
header {
  height: 64px;
  width: 100%;
  background-color: #006699;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.left-side {
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
  text-decoration: none;
}

.desktop-nav {
  display: none;
}

button.v-btn.login-btn {
  background-color: black;
}

button.v-btn.mobile-nav-btn {
  margin-inline-end: 10px;
  background-color: transparent;
  color: white;
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  color: black;
  width: 200px;
  position: absolute;
  top: 64px;
  right: 0;
  transform: translateX(200px) scaleX(0);
  transition: 0.3s;
}

.mobile-nav-display {
  transform: translateX(0) scaleX(1);
  transition: 0.3s;
}

.mobile-nav * {
  border-radius: 0 !important;
}

header > .left-side img {
  margin-inline-start: 10px;
}

@media (min-width: 800px) {
  .desktop-nav {
    display: flex;
    align-items: center;
    margin-inline-end: 10px;
    gap: 5px;
  }

  .desktop-nav > .v-btn {
    background-color: transparent;
    color: white;
  }

  .desktop-nav > .v-btn {
    background-color: transparent;
    color: white;
  }

  button.v-btn.mobile-nav-btn {
    display: none;
  }
}

.logout:hover {
  cursor: pointer;
}
</style>
