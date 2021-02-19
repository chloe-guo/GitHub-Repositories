import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/css/reset.min.css";

// vue-resource is needed too
import VueResource from 'vue-resource'
Vue.use(VueResource)
 
// import vue-github-api
import GitHubAPI from 'vue-github-api'
Vue.use(GitHubAPI, { token: '7c71b790be9b29ae2bdfc8cdc9ccd3a12e8e79f7' })

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
