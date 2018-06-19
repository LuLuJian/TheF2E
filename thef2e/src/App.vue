<template>
  <div id="app" class="container-fluid">
  	<nav class="navbar navbar-light bg-light mb-3">
	  <span class="navbar-brand mb-0 h1"><i class="fa fa-github" aria-hidden="true"></i> THE F2E </span>
	</nav>
  	<div class="row">
	  	<div class="col-lg-2">
		    <ul class="list-group">
			  <li class="list-group-item"><router-link to="/todolist">Lesson1-ToDoList</router-link></li>
			  <li class="list-group-item"><router-link to="/filter">Lesson2-Filter</router-link></li>
			  <li class="list-group-item"><router-link to="/admin-order">Lesson3-AdminOrder</router-link></li>
			</ul>
		</div>
		<div class="col-lg-10">
			<router-view></router-view>
		</div>
	</div>
  </div>
</template>

<script>
import VueRouter from 'vue-router'
import axios from 'axios'
import ToDoList from './todolist.vue'
import Filter from './filter.vue'
import AdminOrder from './admin-order.vue'

const routes = [
        { path: '/todolist' , component: ToDoList },
        { path: '/filter' , component: Filter },
        { path: '/admin-order' , component: AdminOrder },
    ]

export default {
  router: new VueRouter({
      routes
  })
}
</script>

