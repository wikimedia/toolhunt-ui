import { RouterLink, RouterView } from "vue-router";

export default {
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
      <v-btn class="login-btn" icon="mdi-account-circle" size="small" flat></v-btn>
    </nav>
    <v-btn class="mobile-nav-btn" icon="mdi-menu" @click="toggleMenu" flat></v-btn>
  </header>
    <nav class="mobile-nav" aria-label="mobile">
      <v-btn to="/" flat @click="toggleMenu">Home</v-btn>
      <v-btn to="/dashboard" flat @click="toggleMenu">Dashboard</v-btn>
      <v-btn to="/leaderboard" flat @click="toggleMenu">Leaderboard</v-btn>
      <v-btn flat @click="toggleMenu">Login</v-btn>
    </nav>
</template>


<script>
export default {
  methods: {
    toggleMenu: () => {
      document.querySelector(".mobile-nav").classList.toggle("mobile-nav-display");
    },
  }
}
</script>

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
    transform: translateX(200px) scale(0);
    transition: 0.3s;
  }

  .mobile-nav-display {
    transform: translateX(0) scale(1);
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
</style>
}