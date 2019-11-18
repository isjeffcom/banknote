<template>
    <div id="numdata">
        <div id="numdata_cont">
            <div class="numdata_single" v-for="item in numd" :key="item.id">
                <div class="n_icon">
                    <img :src="item.icon" :alt="item.des">
                </div>

                <div class="n_num" v-if="viewable">
                    <span>
                        <ICountUp :delay="CU_delay" :endVal="item.num" :options="CU_options"/>
                    </span>
                </div>

                <div class="n_des" v-if="viewable">
                    <span>{{item.des}}</span>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import ICountUp from 'vue-countup-v2'

export default {
    name: "numdata",
    components:{
        ICountUp
    },
    props:{
        numd: Array
    },
    data(){
        return{
            CU_delay: 1200,
            CU_options:{
                duration: 3,
                useEasing: true,
                useGrouping: true,
                separator:""
            },
            viewable: false
        }
    },
    mounted(){
        var that = this
        addEventListener("scroll", (e)=>{
            if(window.scrollY > 30){
                that.viewable = true
            }
        })
        
    }
    
}
</script>

<style scoped>
#numdata{
    width: 100%;
    margin-top: 100px;
    margin-bottom: 100px;
    user-select: none;
}

#numdata_cont{
    display: flex;
    width: 60%;
    margin-left: auto;
    margin-right: auto;
}

.numdata_single{
    width: 400px;
}

.n_icon img{
    width: 60px;
}

.n_num{
    margin-top: 16px;
}

.n_num span{
    font-size: 32px;
    font-weight: bold;
}

.n_des{
    width: 85%;
    font-style: italic;
    opacity: .6;
    margin-top: 2px;
    margin-left: auto;
    margin-right: auto;
}

@media only screen and (max-device-width : 812px)  { 
    .numdata_single{
        width: 100%;
    }
    #numdata_cont{
        display: block;
        width: 40%;
    }
}

</style>