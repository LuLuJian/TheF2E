<template>
	<div>
	<div class="col-lg-12">
		</br>
		<div class="col-lg-6">
			<div class="bg">
				<label>To Do List</label>
				<div class="input-group">
	 				<input type="text" v-model="newItem" class="form-control" placeholder="輸入待辦事項..." >
					<button type="button" @click="add" class="btn btn-success"> 新增</button>
				</div>
			</div>
		</div>
		</br>
		<div class="col-lg-6">
			<ul>
				<li v-for="(item, index) in items" :key="index" :index="index">
					<input v-if="item.isShow" type="text" v-model="items[index].name" class="form-control" placeholder="" >
					<span v-if="!item.isShow" class="item">{{item.name}}</span>
					<button type="button" @click="edit(index)" class="btn btn-info"> 編輯</button>
					<button type="button" @click="delet(index)" class="btn btn-danger"> 刪除</button>
				</li>
			</ul>
		</div>
	</div>
	</div>
</template>
<script>
export default {
    name: 'ToDoList',
    data(){
        return{
        	newItem: '',
        	items: [],
        }
    },
    methods:{
    	add(){
    		this.items.push({name: this.newItem, isShow: false})
    		this.newItem = "";
    	},
    	delet(index){
    		vm.$delete(this.items, index )
    	},
    	edit(index){
    		this.items[index].isShow = !this.items[index].isShow;
    	}

    }
}
</script>
<style lang="scss">
ul {
	list-style-type: none;
	padding: 5px;
}

li {
	background-color: #eee;
	padding: 5px;
	border-bottom: 1px solid #000;
}

.bg {
	background-color: #eee;
	padding: 5px;
}

.item {
	display: inline-block;
	width:70%;
}

</style>
