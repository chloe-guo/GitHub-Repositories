import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/css/reset.min.css";

// vue-resource is needed too
import VueResource from 'vue-resource'
Vue.use(VueResource)
 
// import vue-github-api
import GitHubAPI from 'vue-github-api'
Vue.use(GitHubAPI, { token: '31f7a1abc5c6c0c5d7be44a5f046a65439200a53' })

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
