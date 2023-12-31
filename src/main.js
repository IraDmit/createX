import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//style
import "@/assets/scss/global.scss";
import "normalize.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
