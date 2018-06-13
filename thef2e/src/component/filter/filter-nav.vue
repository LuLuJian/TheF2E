<template>
    <nav class="navbar bg-purple">
        <form>
        <div class="row">
            <div class="col-lg-3">
                <p class="search-title text-center">HaveFun</p>
            </div>
            <div class="col-lg-9">
                <i class="fa fa-search fa-lg" aria-hidden="true" style="color:#fff;"></i>
                <input class="search-input" type="search" placeholder="Explore your activities">
            </div>
        </div>
        </form>
    </nav>
</template>

<script>

</script>

<style lang="scss">

$nav-title-color: #ffffff;
$nav-bg-purple: #7828B4;
$right-title-color: #7828B4;
$right-block-bottom-color: #d7d7d7; 

input {
    color: $nav-title-color;
}

::placeholder { 
    color: $nav-title-color;
    font-style: italic;
    opacity: .5;
}

.navbar {
    display: block;
    .search-title {
  	    color: $nav-title-color;
  	    font-size: 30px;
  	    font-weight:bold;
    }
}

.bg-purple {
	background-color: $nav-bg-purple;
}

.search-input {
	border: 0px;
	background-color: $nav-bg-purple;
	border-bottom: 1px solid $nav-title-color;
    margin: 15px 0px;
    outline: none;
    width: 220px;
}

</style>