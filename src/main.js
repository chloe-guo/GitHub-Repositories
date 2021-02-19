import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/css/reset.min.css";

// vue-resource is needed too
import VueResource from 'vue-resource'
Vue.use(VueResource)
 
// import vue-github-api
import GitHubAPI from 'vue-github-api'
Vue.use(GitHubAPI, { token: 'edb482ac573c1ac2e68c282c802b48bca12d7fe8' })

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
