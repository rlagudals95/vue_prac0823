import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vue2Editor from "vue2-editor";
//import { VBScrollspyPlugin } from "bootstrap-vue";
import VueScrollSpy from "vue2-scrollspy";

Vue.use(Vue2Editor);
//Vue.use(VBScrollspyPlugin);
Vue.use(VueScrollSpy);

Vue.config.productionTip = false;

Vue.filter("makeComma", (val) => {
  return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
