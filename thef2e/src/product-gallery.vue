<template>
    <div class="row"> 
        <div class="grid-container">
          <div class="grid-item nav-title">
            <div class="second-title">CCCLOTHES</div>
            <div class="main-title">MEN'S TOPS</div>
          </div>
          <div class="grid-item block-top-left">
            <div class="content-title">LINEN BLAZER</div>
            <div class="content-second-title">Men's outfit</div>
            <div class="content-number">01</div>
            <div class="outline-box"></div>
            <div class="zebra"></div>
          </div>
          <div class="grid-item block-top-right">
            
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

$xs-font:12pt;
$md-font:28pt;
$lg-font:36pt;
$white-color: #fff;
$dark-color: #000;
$green-color: #50E3C2;


@mixin grad{
  background-image: 
    repeating-linear-gradient(-45deg,
    transparent,
    transparent 20px,
    $green-color 10px,
    $green-color 35px);
}
@mixin rotate{
  transform:rotate(90deg);
}

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
  // justify-content: center;
  align-items: center;
}

.nav-title {
  grid-area: header;
  grid-column: 4 / 8;
  grid-row: 1 / 1;
}

.main-title{
  color: $dark-color;
  font-size: $lg-font;
  font-weight: bold;
  justify-content: center; 
}

.second-title{
  background-color: $dark-color;
  color: $white-color;
  font-size: $xs-font;
  height: 20px;
  width: 120px;
  margin: 0px auto;
  justify-content: center;
}

.content-title {
  font-size: $md-font;
  font-weight: bold;
  position: absolute;
  top: -24px;
  &::before{
    content: 'LINEN BLAZER';
    clip:rect(0px,300px,27px,0px);
    position: absolute;
    top: -14px;
    opacity: 0.5; 
  }
  &::after{
    content: 'LINEN BLAZER';
    clip:rect(0px,300px,21px,0px);
    position: absolute;
    top: -22px;
    opacity: 0.2; 
  }
}


.content-number {
  font-size: $md-font;
  font-weight: bold;
  position: absolute;
  bottom: -50px;
}

.content-second-title{
  font-size: $xs-font;
  font-weight: bold;
  @include rotate;
  position: absolute;
  bottom: 8px;
  right: -55px;
}

.outline-box{
  border: 15px solid $green-color;
  height: 200px;
  width: 200px;
  transform: translate(120%, -50%);
  position: absolute;
  top: 40px;
  z-index: -1;
}

.zebra{
  height: 100px;
  @include grad;
  width: 240px;
  position: absolute;
  left: 60px;
  bottom: -50px;
}

.block-top-left {
  // background-color: #8BC574;
  grid-area: header;
  grid-column: 2 / 6;
  grid-row: 3 / 6;
  background-position: center;
  background-size: cover;
  background-image: url(https://ppt.cc/fcE7sx@.jpg);
  position: relative;
}


.block-top-right {
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


