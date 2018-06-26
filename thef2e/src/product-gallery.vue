<template>
    <div class="row"> 
        <div class="grid-container">
          <div class="grid-item header">
            <div>Header</div>
          </div>
          <div class="grid-item main">
            <div>main</div>
          </div>
          <div class="grid-item sidebar">
            <div>sidebar</div>
          </div>
          <div class="grid-item footer">
            <div>footer</div>
          </div>
        </div>
    </div>
</template>
<script>
// import FilterNav from './component/filter/filter-nav.vue';



export default {
    name: 'ProductGallery',
    components:{

    },
    data(){

    },
    mounted() {

    }
}
</script>
<style lang="scss">
.grid-container {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 10% 10% 10% 10% 10% 10% 10% 10% 10% 10%;
  grid-template-rows: auto;
  grid-template-areas: "header header header header"
                       "main main . sidebar"
                       "footer footer footer footer";
  grid-column-gap: 10px;
  grid-row-gap: 15px;
}

.grid-item div {
  display: flex;
  color: #fff;
  font-size: 2em;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.header {
  background-color: #8BC574;
  grid-area: header;
}

.main {
  background-color: #748CC5;
  grid-area: main;
}

.sidebar {
  background-color: #C57474;
  grid-area: sidebar;
}

.footer {
  background-color: #FCE052;
  grid-area: footer;
}
</style>


