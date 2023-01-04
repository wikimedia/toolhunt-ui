import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import "@mdi/font/css/materialdesignicons.css";

import "vuetify/styles";
import { createVuetify } from "vuetify";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(createVuetify());

app.mount("#app");
