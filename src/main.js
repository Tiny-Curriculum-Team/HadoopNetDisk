import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "@/assets/icons";
// import { Axios } from "axios";

Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

// Axios.interceptors.request.use(
//   (config) => {
//     if (config.push === "/login") {
//     } else {
//       if (localStorage.getItem("token")) {
//         config.headers.token = localStorage.getItem("token");
//       }
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );
