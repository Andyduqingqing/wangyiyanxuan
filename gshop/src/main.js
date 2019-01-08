import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './mock/mocksever'
import store from './store'
import VueLazyLoad from "vue-lazyload"
import loading from "./common/images/loading.gif"

Vue.use(VueLazyLoad, {
  loading
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render:h => h(App),
  router,
  store
})
