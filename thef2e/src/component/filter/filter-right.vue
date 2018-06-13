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
                    <div class="row mt-3">
                        <div class="col-lg-2">

                            <div class="row card">
                              
                                    <h5 class="card-title">Kogi Cosby sweater.</h5>
                                    <h6 class="card-subtitle mb-2">Ethan Foster</h6>
       
                            </div>
                        </div>
                        <div class="col-lg-10">
                            <div class="row card">
                                <div class="card-body">
                                    <h5 class="card-title">Kogi Cosby sweater.</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <h6 class="card-subtitle mb-2">Ethan Foster</h6>
                                    <small><i class="fa fa-map-marker" aria-hidden="true"></i> Kaohsiung City</small>
                                    <small><i class="fa fa-calendar" aria-hidden="true"></i> 2018/5/24 - 2018/5/31</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </form>
        </div>
    </div>
</template>

<script>

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
    height: 20px;
    padding: 15px;
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