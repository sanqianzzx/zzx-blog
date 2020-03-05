import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueResource from 'vue-resource'
import axios from "axios";
import bigHead from './components/bigHead'
import $ from "jquery"

Vue.prototype.$axios = axios;
Vue.use(VueResource)
Vue.config.productionTip = false


Vue.component('bigHead',bigHead)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
