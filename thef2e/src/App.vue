<template>
  <div class="container-fluid">
  	<nav class="navbar navbar-light bg-light mb-3">
	  <span class="navbar-brand mb-0 h1">THE F2E</span>
	</nav>
  	<div class="row">
	  	<div class="col-lg-2">
		    <ul class="list-group">
			  <li class="list-group-item"><router-link to="/todolist">Lesson1-ToDoList</router-link></li>
			  <li class="list-group-item"><router-link to="/filter">Lesson2-Filter</router-link></li>
			</ul>
		</div>
		<div class="col-lg-10">
			<router-view></router-view>
		</div>
	</div>
  </div>
</template>

<script>
import VueRouter from 'vue-router';
import ToDoList from './todolist.vue'
import Filter from './filter.vue'

export default {
  router: new VueRouter({
    routes: [
      { path: '/todolist' , component: ToDoList },
      { path: '/filter' , component: Filter },
    ],
  })
}
</script>

<style lang="scss">

</style>
