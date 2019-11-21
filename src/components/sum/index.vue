<template>
    <div id="sum">
        <div id="sum-title">
            <wsubtitle lineColor="#262626" txt="summary"></wsubtitle>
        </div>

        <div id="sum-data">
            <div class="sum-s" v-for="item in sumData" :key="item.id" :style="'background:' + item.background">

                <div class="sum-s-inner">
                    <div class="sum-s-title">
                        <span>{{item.title}}</span>
                    </div>

                    <div class="sum-s-val">
                        <span>{{item.val}}</span>
                    </div>
                </div>
                

            </div>
        </div>


        <div id="sum-more">
            <div id="sum-more-btn">
                <span v-on:click="viewImage(0)">Full Release Detail >></span>
            </div>
        </div>
    </div>
</template>

<script>
import wsubtitle from '../widgets/wsubtitle'

export default {
    name: "sum",
    components:{
        wsubtitle
    },
    props:{
        sumData: Array,
        poster: Array
    },
    created(){
        this.$imageViewer.images(this.poster)
    },
    methods:{
        viewImage(index) {
            this.$imageViewer.index(index)
            this.$imageViewer.show()
        }
    }
}
</script>

<style scoped>

#sum{
    margin-bottom: 50px;
    cursor: default;
    user-select: none;
}

#sum-title{
    margin-left: 60px;
    margin-bottom: 40px;
}

#sum-data{
    display: flex;
}

.sum-s{
    width: calc(100%/3);
    height: 280px;
    color: #ffffff;
    text-align: left;
}

.sum-s-inner{
    margin-left: 50px;
    margin-top: 104px;
    overflow: hidden;
}

.sum-s-title{
    font-size: 32px;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 6px;
}

.sum-s-val{
    font-size: 24px;
    font-weight: lighter;
    text-transform: uppercase;
}

.sun-more{
    margin-top: 60px;
}

@media only screen and (max-device-width : 812px)  { 

    #sum-title{
        margin-left: 16px;
        margin-bottom: 20px;
    }

    #sum-data{
        display: block;
    }

    .sum-s{
        width: 100%;
    }

    .sum-s-inner{
        margin-top: 0px;
        margin-left: 30px;
    }

    .sum-s-title{
        margin-top: 110px;
    }
}
</style>