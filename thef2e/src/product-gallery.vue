<template>
    <div class="row"> 
        <div class="grid-container">
          <div class="grid-item nav-title">
            <div class="second-title">CCCLOTHES</div>
            <div class="main-title">MEN'S TOPS</div>
          </div>
          <div class="grid-item block-01 content-01">
            <div class="title">LINEN BLAZER</div>
            <div class="xs-text">Men's outfit</div>
            <div class="number">01</div>
            <div class="outline-box"></div>
            <div class="zebra"></div>
          </div>
          <div class="grid-item block-02 content-02">
            <div class="title">FREELIFT</div>
            <div class="xs-text">Men's basics</div>
            <div class="number">02</div>
            <div class="solid-box"></div>
            <div class="outline-box"></div>
          </div>
          <div class="grid-item block-03 content-03">
            <div class="title">SUPER SKINNY</div>
            <div class="xs-text">Men's pattern shirts</div>
            <div class="number">03</div>
            <div class="solid-box"></div>
            <div class="outline-box"></div>
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
// https://ppt.cc/f1MFix@.jpg
// https://ppt.cc/fGI5Hx@.jpg
$xs-font:12pt;
$md-font:28pt;
$lg-font:36pt;
$white-color: #fff;
$dark-color: #000;
$green-color: #50e3c2;

@mixin zebra{
  background-image: 
    repeating-linear-gradient(-45deg,
    transparent,
    transparent 20px,
    $green-color 10px,
    $green-color 35px);
}

@mixin textrotate{
  transform:rotate(90deg);
  font-size: $xs-font;
  font-weight: bold;
}

.grid-container {
  width: 960px;
  display: grid;
  grid-template-columns: repeat(10, 1fr) ;
  grid-template-rows: repeat(10, 100px);
  grid-template-areas:
  "header header header . main main main";
}

.grid-item div {
  display: flex;
  align-items: center;
}

// top-title
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

//content block-01
.block-01 {
  grid-area: header;
  grid-column: 2 / 6;
  grid-row: 3 / 6;
  background-position: center;
  background-size: cover;
  background-image: url(https://ppt.cc/fcE7sx@.jpg);
  position: relative;
}

.content-01{
  .title {
    font-size: $md-font;
    font-weight: bold;
    position: absolute;
    top: -24px;
    &::before{
      content: 'LINEN BLAZER';
      clip:rect(0px,300px,27px,0px);
      position: absolute;
      top: -14px;
      opacity: 0.4; 
    }
    &::after{
      content: 'LINEN BLAZER';
      clip:rect(0px,300px,21px,0px);
      position: absolute;
      top: -22px;
      opacity: 0.2; 
    }
  }
  .xs-text{
    @include textrotate;
    position: absolute;
    bottom: 8px;
    right: -55px;
  }

  .number {
    font-size: $md-font;
    font-weight: bold;
    position: absolute;
    bottom: -50px;
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
    @include zebra;
    width: 240px;
    position: absolute;
    left: 60px;
    bottom: -50px;
  }
}

.block-02 {
  background-color: #748CC5;
  grid-area: main;
  grid-column: 7 / 9;
  grid-row: 4 / 6;
  background-position: center;
  background-size: cover;
  background-image: url(https://ppt.cc/faRd0x@.jpg);
  position: relative;
  top: -30px;
}

.content-02{
  .title {
    font-size: $md-font;
    font-weight: bold;
    position: absolute;
    bottom: -70px;
    right: -50px;
    &::before{
      content: 'FREELIFT';
      clip:rect(0px,300px,27px,0px);
      position: absolute;
      top: -14px;
      opacity: 0.4; 
    }
    &::after{
      content: 'FREELIFT';
      clip:rect(0px,300px,21px,0px);
      position: absolute;
      top: -22px;
      opacity: 0.2; 
    }
  }
  .xs-text{
    position: absolute;
    top: -20px;
    left: 0px;
    font-weight: bold;
  }

  .number {
    font-size: $md-font;
    font-weight: bold;
    position: absolute;
    top: -80px;
    right: -200px;
  }

  .outline-box{
    border: 15px solid $green-color;
    height: 200px;
    width: 180px;
    transform: translate(120%, -50%);
    position: absolute;
    top: 30px;
    z-index: -1;
  }
  .solid-box{
    background: $green-color;
    height: 200px;
    width: 180px;
    position: absolute;
    top: -30px;
    right: -100px;
    z-index: -1;
  }
}

.block-03 {
  grid-area: header;
  grid-column: 2 / 6;
  grid-row: 8 / 10;
  background-position: center;
  background-size: cover;
  background-image: url(https://ppt.cc/f1MFix@.jpg);
  position: relative;
}

.content-03{
  .title {
    font-size: $md-font;
    font-weight: bold;
    position: absolute;
    top: -42px;
    right: 0px;
    &::before{
      content: 'SUPER SKINNY';
      clip:rect(0px,300px,27px,0px);
      position: absolute;
      top: -14px;
      opacity: 0.4; 
    }
    &::after{
      content: 'SUPER SKINNY';
      clip:rect(0px,300px,21px,0px);
      position: absolute;
      top: -22px;
      opacity: 0.2; 
    }
  }
  .xs-text{
    position: absolute;
    bottom: -20px;
    left: 0px;
    font-weight: bold;
  }

  .number {
    font-size: $md-font;
    font-weight: bold;
    position: absolute;
    right: -30px;
    bottom: -50px;
  }

  .outline-box{
    border: 15px solid $green-color;
    height: 200px;
    width: 200px;
    transform: translate(120%, -50%);
    position: absolute;
    bottom: 0px;
    z-index: -1;
  }

  .zebra{
    height: 100px;
    @include zebra;
    width: 240px;
    position: absolute;
    left: 60px;
    bottom: -50px;
  }
}
</style>


