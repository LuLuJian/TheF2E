<template>
  <div>
  	<div class="row">
    	<OrderNar></OrderNar>
    	<div class="col-lg-12">
    		<div class="bg-gray">
	    		<OrderTop></OrderTop>
			
	    		<OrderCenter></OrderCenter>

	    		<OrderBottom></OrderBottom>
	    	</div>
    	</div>
	</div>
  </div>
</template>
<script>
import OrderNar from './component/admin-order/order-nav.vue';
import OrderTop from './component/admin-order/order-top.vue';
import OrderCenter from './component/admin-order/order-center.vue';
import OrderBottom from './component/admin-order/order-bottom.vue';

export default {
    name: 'AdminOrder',
    components:{
        OrderNar,
        OrderTop,
        OrderCenter,
        OrderBottom,
    }
}
</script>
<style lang="scss">
.bg-gray {
	background-color: #eee;

}
</style>
