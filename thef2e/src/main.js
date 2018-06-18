import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
// all file n router
import App from './App.vue'
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap'
import 'font-awesome/css/font-awesome.css';

Vue.use(VueRouter);
//global
Vue.prototype.$http = axios;

new Vue({
  el: '#app',
  render: h => h(App)
})
