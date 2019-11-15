<template>
    <div id="hheader">
        <div id="h_logo">
            <img src="../../assets/logo.png" alt="">
        </div>

        <div id="h_nav">
            <div id="h_nav_inner">
                <div class="h_nav_single" v-for="item in navs" :key="item.id" v-on:click="goto(item.val)">
                    <span>{{item.val}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { EventBus } from '../../bus'
export default {
    name: "hheader",
    props:{
        navs: Array,
    },
    methods:{
        goto(pos){
            EventBus.$emit('to', pos)
        }
    }
}
</script>

<style scoped>
#hheader{
    position: absolute;
    top: 0px;
    width: 100%;
    display: flex;
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
    margin-top: 48px;
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


</style>