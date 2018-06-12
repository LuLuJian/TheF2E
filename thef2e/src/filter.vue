<template>
  <div>
    <nav class="navbar navbar-light bg-purple">
      
      <form class="form-inline">
      	<p class="navbar-search-title">HaveFun</p>
        <input class="solid" type="search" placeholder="Explore your activities">
      </form>
    </nav>
  </div>
</template>

<style lang="scss">

.navbar-search-title{
	color: #ffffff;
	font-size: 30px;
	font-weight:bold;
}

.bg-purple{
	background-color: #7828B4 ;
}

.solid {
	border: 0px;
	outline: none;
	background-color: #7828B4 ;
	border-bottom: 3px solid #ffffff;
}

::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #ffffff;
    opacity: 1; /* Firefox */
}

</style>

