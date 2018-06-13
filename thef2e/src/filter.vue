<template>
  <div>
    <FilterNav></FilterNav>
    <FilterLeft></FilterLeft>
  </div>
</template>
<script>
import FilterNav from './component/filter/filter-nav.vue';
import FilterLeft from './component/filter/filter-left.vue';

export default{
    components:{
        FilterNav,
        FilterLeft
    }
}
</script>


