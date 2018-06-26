<template>
	<div class="col-lg-12">
	 <div class="row">
	    <div class="col-lg-12 mt-3">
	    	<div class="p-3" style="background-color:#fff;">
	         	<p class="h4">Activity</p>
	      		<ve-line :data="chartData"></ve-line>
	  		</div>
	    </div>
	  </div>
	</div>
</template>
<script>
import VeLine from 'v-charts/lib/line.common'
export default {
    name: 'OrderCenter',
    components: { VeLine },
  data () {
    return {
      chartData: {
        columns: ['date', '訪問用戶' , '訂單數'],
        rows: [
          { 'date': '01-01', '訪問用戶': 2231 , '訂單數': 1831},
          { 'date': '01-01', '訪問用戶': 3341 , '訂單數': 1431},
          { 'date': '01-01', '訪問用戶': 2331 , '訂單數': 1331},
          { 'date': '01-01', '訪問用戶': 3231 , '訂單數': 3231},
          { 'date': '01-01', '訪問用戶': 2241 , '訂單數': 4131},
          { 'date': '01-01', '訪問用戶': 5531 , '訂單數': 5231}
        ]
      }
    }
  }
}
</script>
