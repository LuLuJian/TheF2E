<template>
    <div class="col-lg-9">
        <div class="row">
            <form>
                <div class="col-lg-12">
                    <h4 class="mt-3">showing  <strong class="count-color">15</strong> resulys by ...</h4>
                </div>
                <div class="col-lg-12">
                    <div class="search-fillet">
                        <p>gogogo!</p>
                        <div class="delete-icon">
                            <i class="fa fa-times" aria-hidden="true"></i>
                        </div>
                    </div>   
                    <div class="search-fillet">
                        <p>oh my god </p>
                        <div class="delete-icon">
                            <i class="fa fa-times" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div v-for="(item, index) in records" 
                         class="row mt-3" 
                    >
                        <div class="col-lg-3 pr-0">
                         
                            <div style="width: 233px;height: 220px;background-color: #d7d7d7;">
                                <img :src="item.Picture1" style="width:100%;background-color: #d7d7d7;height: 100%;">
                            </div>
                            
                        </div>
                        <div class="col-lg-9 pl-5">
                            
                            <div style="border: 1px solid #d7d7d7;height: 220px;padding: 30px;">
                                <h5 class="card-title">{{ item.Name}}</h5>
                                <p class="card-text">{{ item.Description.length}}</p>
                                <h6 class="card-subtitle mb-2">{{ item.Ticketinfo}}</h6>
                                <small><i class="fa fa-map-marker" aria-hidden="true"></i> {{ item.Zone}}</small>
                                <small><i class="fa fa-calendar" aria-hidden="true"></i> {{ item.Opentime}}</small>
                            </div>
                           
                        </div>
                    </div>
                </div>  
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FilterRight',
    props: ['records'],
    data(){
        return {
            // length: this.records[0].Description,
            maxLength: 20,
        }
    },
    watch: {
        textLenght(){
            // if(this.records[i].Description.length > this.maxLength){
            //     console.log(this.Description);
            // }
        }
    },
    methods: {

    }
}
</script>

<style lang="scss">

$show-count-color:#7828B4;

.count-color {
    color:$show-count-color;
}

.search-fillet {
    border: 1px solid $show-count-color;
    -webkit-border-radius: 35px;
            border-radius: 35px;
    height: auto;
    margin: 0px 5px;
    display: inline-block;
    vertical-align: middle;
    p {
        color:$show-count-color;
        display: inline-block;
        margin: 3px 10px;
    }
}

.delete-icon {
    border: 1px solid $show-count-color;
    display: inline-block;
    -webkit-border-radius: 20px;
            border-radius: 20px;
    height: 10px;
    padding: 10px;
    margin: 5px;
    vertical-align: middle; 
    width: 20px;

    i {
        color:$show-count-color;
        position: relative;
        top: -12px;
        right: 6px;
    }
}
</style>