<template>
  <div>
    <div class="row">
        <FilterNav></FilterNav>
        <FilterLeft></FilterLeft>
        <FilterRight
        :records="info.result.records"
        ></FilterRight>
    </div>
  </div>
</template>
<script>
import FilterNav from './component/filter/filter-nav.vue';
import FilterLeft from './component/filter/filter-left.vue';
import FilterRight from './component/filter/filter-right.vue';


export default {
    name: 'Filter',
    components:{
        FilterNav,
        FilterLeft,
        FilterRight,
    },
    data(){
        return{
            info: '',
        }
    },
    mounted() {
        //this.$http = axios
        this.$http
        .get('https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97')
        .then(response => (
            this.info = response.data
        ))
    }
}
</script>


