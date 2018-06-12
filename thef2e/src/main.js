import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap'
// import 'font-awesome/css/font-awesome.css'

Vue.use(VueRouter);

new Vue({
  el: '#app',
  render: h => h(App)
})
