<template>
    <div class="col-lg-3">
        <section class="">
            <form>
                <div class="row bg-gray">
                    <div class="left-location col-lg-12">
                        <div class="form-group">
                            <label for="location">Location</label>
                            <select class="form-control" id="location">
                                <option>Taiwan</option>
                                <option>Japan</option>
                            </select>
                        </div>
                    </div>
                    <div class="left-date mt-3 col-lg-12">
                        <label>Date</label>
                        <div class="form-group form-inline pull-right">
                            <label for="date-from" class="label-subtitle">from</label>
                            <input type="date" class="form-control" id="date-from" name="">
                        </div>
                        <div class="form-group form-inline pull-right">
                            <label for="date-to" class="label-subtitle">to</label>
                            <input type="date" class="form-control" id="date-to" name="">
                        </div>
                    </div>
                    <div class="left-categories mt-3 col-lg-12">
                        <label>Categories</label>
                        <div class="checkbox">
                            <label class="label-subtitle"><input type="checkbox" value=""> All</label>
                        </div>
                        <div class="checkbox">
                            <label class="label-subtitle"><input type="checkbox" value=""> Food</label>
                        </div>
                        <div class="checkbox disabled">
                            <label class="label-subtitle"><input type="checkbox" value="" disabled> Outdoor</label>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    </div>
</template>

<script>
export default {
    name: 'FilterLeft'
}
</script>

<style lang="scss">

$left-bg-gray: #ebebeb;
$border-gray: #d7d7d7;

@mixin label{
    font-weight:bold;
    font-size: 14pt;
}

@mixin border-gray{
    border-bottom: 1px solid $border-gray;
}

@mixin label-subtitle{
    font-weight: normal;
    font-size: 12pt;
    margin: 0px 10px;
}

.bg-gray {

	background-color: $left-bg-gray;
    margin-left: 30px;
    padding: 10px;
    width: 300px;
    
    .left-location{
        @include label;
        @include border-gray;
        height: 127px;
    }

    .left-date{
        @include label;
        @include border-gray;
        height: 171px;
        .label-subtitle{
            @include label-subtitle;
        } 
    }

    .left-categories{
        @include label;
        height: 209px;
        .label-subtitle{
            @include label-subtitle;
        } 
    }
}

</style>