<template>
    <div id="sum">
        <div id="sum-title">
            <wsubtitle lineColor="#262626" txt="summary"></wsubtitle>
        </div>

        <div id="sum-data">
            <div class="sum-s" v-for="item in sumData" :key="item.id" :style="'background:' + item.background + ';'" v-on:click="openLink(item.link)">

                <div class="sum-s-inner" :style="item.link.length > 1 ? 'cursor:pointer' : 'cursor:default'">
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
                <span v-on:click="viewImage">About Thames Basin >></span>
            </div>
        </div>

        <transition name="lightbox">
            <div id="img-lightbox" v-if="imgShow" v-on:click="viewImage">
                <div id="img-lightbox-inner">
                    <img :src="poster[0].url">
                </div>

                <div id="img-lightbox-close">
                    <span>CLOSE</span>
                </div>
            </div>
        </transition>

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
    data(){
        return{
            imgShow: false
        }
    },
    methods:{
        viewImage() {
            this.imgShow = !this.imgShow
        },

        openLink (val) {
            if(val.length > 1){
                window.open(val, "_blank")
            }
        }
    }
}
</script>

<style scoped>

.lightbox-enter-active {
  animation: lightbox .2s;
  animation-direction: forwards;
}
.lightbox-leave-active {
  animation: lightbox .12s reverse;
  animation-direction: forwards;
}

@keyframes lightbox {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

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
    transition:all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.sum-s:hover{
    filter: contrast(130%);
}

.sum-s-inner{
    margin-left: 50px;
    margin-top: 104px;
    overflow: hidden;
}

.sum-s-title{
    font-family: robotoBold;
    font-size: 32px;
    text-transform: uppercase;
    margin-bottom: 6px;
}

.sum-s-val{
    font-size: 24px;
    font-weight: lighter;
    text-transform: uppercase;
}

#sum-more{
    margin-top: 120px;
    margin-bottom: 120px;
}

#sum-more-btn{
    cursor: pointer;
}

#sum-more-btn span{
    font-size: 24px;
    text-decoration: underline;
    color: #333;
}

#img-lightbox{
    position: fixed;
    top: 0px;
    z-index: 10000;
    height: 100%;
    width: 100%;
    background: rgba(0,0,0,0.9);
}

#img-lightbox-inner{
    height: 80%;
    transform: translateY(10%);
}

#img-lightbox-inner img{
    height: 100%;
}

#img-lightbox-close{
    position: absolute;
    top: 32px;
    right: 32px;
    font-size: 26px;
    color: #ffffff;
    cursor: pointer;
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