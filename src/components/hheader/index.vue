<template>
    <div id="hheader">
        <div id="h_logo">
            <img :src="isMobile ? logoW : logo" alt="bank of thames basin logo">
        </div>

        <div id="h_nav">
            <div id="h_nav_inner" v-if="!isMobile">
                <div class="h_nav_single" v-for="item in navs" :key="item.id" v-on:click="goto(item.val)">
                    <span :style="hNavSingleStyle">{{item.val}}</span>
                </div>
            </div>

            <div id="h_nav_inner_mob" v-if="isMobile" v-on:click="openHam">
                <transition name="fade">
                    <div class="h_nav_ham" v-show="!hamMenu">
                        <div class="h_nav_ham_s"></div>
                        <div class="h_nav_ham_s"></div>
                        <div class="h_nav_ham_s"></div>
                    </div>
                </transition>

                <transition name="fade">
                    <div class="h_nav_ham" v-show="hamMenu">
                        <svg style="width:40px;" t="1574169800055" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2004" xmlns:xlink="http://www.w3.org/1999/xlink" width="100" height="100"><path d="M810.666667 273.493333L750.506667 213.333333 512 451.84 273.493333 213.333333 213.333333 273.493333 451.84 512 213.333333 750.506667 273.493333 810.666667 512 572.16 750.506667 810.666667 810.666667 750.506667 572.16 512z" p-id="2005" fill="#ffffff"></path></svg>
                    </div>
                </transition>
            </div>
        </div>

        <transition name="hamani">
            <div id="h_menu" v-show="hamMenu">
                <div id="h_menu_inner">
                    <div class="h_menu_single" v-for="item in navs" :key="item.id" v-on:click="goto(item.val)">
                        <span>{{item.val}}</span>
                    </div>
                </div>
            </div>
        </transition>

    </div>
</template>

<script>
import { EventBus } from '../../bus'
import { isMobile } from '../../../../isjeffcom-portfolio-front/src/utils'
export default {
    name: "hheader",
    props:{
        isMobile: {
            type: Boolean,
            default: false
        },
        navs: Array,
    },
    data(){
        return{
            logo: "./assets/img/logo.png",
            logoW: "./assets/img/logo_w.png",
            hNavSingleStyle: "color: #ffffff",
            hamMenu: false,
            limit: this.isMobile ? 100 : 200
        }
    },

    mounted(){

        addEventListener("scroll", (e)=>{
            if(window.scrollY > this.limit){
                if(!this.isMobile){
                    this.hNavSingleStyle = "color: #1a1a1a"
                    document.getElementById('hheader').style.background = "rgba(245,245,245,1)"
                }else{
                    document.getElementById('hheader').style.background = "rgba(26,26,26,1)"
                }
                
            } else {
                this.hNavSingleStyle = "color: #ffffff"
                document.getElementById('hheader').style.background = "rgba(0,0,0,0)"
            }
        })
    },

    methods:{
        openHam () {
            this.hamMenu = !this.hamMenu
        },

        goto(pos){
            this.hamMenu = false
            EventBus.$emit('to', pos)
        }
    }
}
</script>

<style scoped>

@keyframes ani {
    0% { opacity: 0; height: 0%; }
    100% { opacity: 1; height: 100%; }
}

@keyframes ea {
    0% { opacity: 0;}
    100% { opacity: 1;}
}

#hheader{
    position: fixed;
    top: 0px;
    width: 100%;
    height: 100px;
    z-index: 9999;
    display: flex;
    user-select: none;
    background: rgba(0,0,0,0);
    transition: all 0.25s ease-out;
}

#h_logo{
    margin-left:40px;
    margin-top: 36px;
}

#h_logo img{
    width: 200px;
}

#h_nav{
    position: absolute;
    right: 40px;
}

#h_nav_inner{
    display: flex;
    margin-top: 44px;
}

.h_nav_single{
    margin-left: 10px;
    margin-right: 10px;
    cursor: pointer;
    user-select: none;
}

.h_nav_single span{
    color: #ffffff;
    font-weight: lighter;
}

#h_menu{
    position: fixed;
    z-index: 9998;
    height: 100%;
    width: 100%;
    background: #262626;
}

#h_menu_inner{
    width: 100%;
    height: 100%;
    margin-top: 200px;
}

.h_menu_single{
    margin-bottom: 50px;
}

.h_menu_single span{
    color: #ffffff;
    font-size: 36px;
    font-weight: lighter;
}

#h_nav_inner_mob{
    position: fixed;
    right: 20px;
    z-index: 9999;
}

.h_nav_ham_s{
    width: 24px;
    height: 2px;
    background: #fafafa;
    margin-bottom: 4px;
}


/*Animation*/

.hamani-enter-active {
  animation: ani .4s;
  animation-fill-mode: forwards;
}

.hamani-leave-active {
  animation: ani .4s reverse;
  animation-fill-mode: forwards;
}

.fade-enter-active{
    animation: ea .2s;
    animation-fill-mode: forwards;
}

.fade-leave-active{
    animation: ea .2s reverse;
    animation-fill-mode: forwards;
}


@media only screen and (max-device-width : 812px)  { 

    #hheader{
        height: 80px;
    }

    #h_logo {
        margin-left: 20px;
        margin-top: 30px;
    }

    #h_logo img{
        width: 150px;
    }

    #h_nav{
        right: 20px;
        top: 36px;
    }
}

</style>