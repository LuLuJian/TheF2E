<template>
    <div class="row"> 
        <div class="grid-container">
          <div class="grid-item nav">
            <div class="second-title">CCCLOTHES</div>
            <div class="main-title">MEN'S TOPS</div>
          </div>
          <div class="grid-item header">
            <div>LINEN BLAZER</div>
            <div>Men's outfit</div>
            <div class="outline-box"></div>
          </div>
          <div class="grid-item main">
            
          </div>
          <div class="grid-item sidebar">
            <div></div>
          </div>
          <div class="grid-item footer">
            <div></div>
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

$white-color: #fff;
$dark-color: #000;
$green-color: #50E3C2;

.grid-container {
  width: 960px;
  // height: 45vh;
  display: grid;
  grid-template-columns: repeat(10, 1fr) ;
  grid-template-rows: repeat(10, 100px);
  grid-template-areas:
  "header header header . main main main";
}

.grid-item div {
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav {
  grid-area: header;
  grid-column: 4 / 8;
  grid-row: 1 / 1;
}

.main-title{
  text-align: center;
  color: $dark-color;
}

.second-title{
  background-color: $dark-color;
  color: $white-color;
  font-size: 12pt;
  height: 20px;
  text-align: center;
}

.outline-box{
  border: 15px solid $green-color;
  height: 200px;
  width: 200px;
  transform: translate(120%, -50%);
  position: absolute;
  z-index: -1;
}

.header {
  // background-color: #8BC574;
  grid-area: header;
  grid-column: 2 / 6;
  grid-row: 3 / 7;
  background-position: center;
  background-size: cover;
  background-image: url(https://ppt.cc/fcE7sx@.jpg);
}

.main {
  background-color: #748CC5;
  grid-area: main;
  grid-column: 7 / 9;
  grid-row: 4 / 6;
  background-position: center;
  background-size: cover;
  background-image: url(https://ppt.cc/faRd0x@.jpg);
}

// .sidebar {
//   background-color: #C57474;
//   grid-area: sidebar;
// }

// .footer {
//   background-color: #FCE052;
//   grid-area: footer;
// }
</style>


