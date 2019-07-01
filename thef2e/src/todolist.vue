<template>
	<div class="col-lg-12">
		</br>
		<div class="col-lg-6">
			<div class="bg">
			<label>To Do List</label>
			<div class="input-group">
      			<input type="text" v-model="newItem" class="form-control" placeholder="輸入待辦事項...">
       			<button type="button" @click="addItem" class="btn btn-success"> 新增</button>
    		</div>
    		</div>
		</div>
		</br>
		<div class="col-lg-6">
			<ul>
				<li v-for="(item, index) in items" :index="index">
					<input type="text" v-if="item.editShow" @blur="onEnter(item, index)" v-model="items[index].newItem" class="form-control item" placeholder="輸入待辦事項..." >
					<span class="item" v-if="!item.editShow" @dblclick="edit(item, index)">{{ item.newItem }}</span>

					<button type="button" class="btn btn-info" @click="edit(item, index)">編輯</button>
					<button type="button" class="btn btn-danger" @click="removeItem(index)">刪除</button>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
export default {
    name: 'ToDoList',
    data(){
        return{
        	newItem: '',
            items:[],
        	editShow: '',
        	editItem: ''
        }
    },
    methods:{
    	addItem(){
    		this.items.push({newItem:this.newItem, editShow:false})
    		this.newItem = '';
    	},
    	removeItem(index){
    		vm.$delete(this.items, index)
    	},
    	edit(item, index){
    		this.items[index].editShow = !this.items[index].editShow;
    	},
    	onEnter(item, index){
    		this.items[index].editShow = false;
    	}
    }
}
</script>
<style lang="scss">
ul {
	list-style-type: none;
	padding: 0px;
}

li {
	padding: 5px 0px 5px 10px;
	background-color: #eee;
	border-bottom: 1px solid #c3c3c3;
}
.bg{
	background-color: #eee;
	padding: 10px;
}

.item{
	color: #6f6f6f;
	display: inline-block;
	width: 75%;
}
</style>
