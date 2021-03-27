import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";
import VueCountdownTimer from "vuejs-countdown-timer/";

Vue.use(VueCountdownTimer);
Vue.config.productionTip = false;

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(function (registrations) {
    for (let registration of registrations) {
      registration.update()
    }
  })
}

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
