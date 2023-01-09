<template>
  <section class="dashboard-header">
        <img src="src/assets/logo-main.svg" height="100" width="100" alt=""/>
        <div>
          <h1>Welcome back, {{ username }}!</h1>
          <p>
            Here on the Dashboard, you can view your latest contributions and check out global contributions and statistics about Toolhub and the Toolhunt project.
          </p>
        </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      username: "NicoleLBee"
    }
  }
}
</script>

<style>
.dashboard-header {
  display: flex;
  align-items: center;
  gap: 16px;
  max-width: 800px;
  margin-inline: auto;
}

.dashboard-header p {
  display: none;
}

.dashboard-header img {
  height: 50px;
  width: 50px;
}

@media (min-width: 600px) {
  .dashboard-header p {
    display: block;
  }

  .dashboard-header img {
    height: 100px;
    width: 100px;
  }
}
</style>