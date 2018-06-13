<template>
  <div>
    <FilterNav></FilterNav>
    <div class="row">
        <FilterLeft></FilterLeft>
        <FilterRight></FilterRight>
    </div>
  </div>
</template>
<script>
import FilterNav from './component/filter/filter-nav.vue';
import FilterLeft from './component/filter/filter-left.vue';
import FilterRight from './component/filter/filter-right.vue';

export default{
    components:{
        FilterNav,
        FilterLeft,
        FilterRight,
    }
}
</script>


