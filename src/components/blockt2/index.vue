<template>
    <div id="block-type-2">
        <div id="block-cont" :style="'background:' + bdata.background + ';color:' + bdata.color + ';'">
            <div id="block-left">
                <div class="block-left-cont"  v-if="mode =='left'">
                    <div class="block-img">
                        <img :src="bdata.img" :alt="bdata.title">
                    </div>
                </div>

                <div class="block-left-cont block-text"  v-if="mode == 'right'">
                    <wsubtitle class="block-stitle" :txt="bdata.subtitle" :lineColor="bdata.color"></wsubtitle>

                    <div class="block-title">
                        <span>{{bdata.title}}</span>
                    </div>

                    <div class="block-des">
                        <span>{{bdata.des}}</span>
                    </div>
                </div>
                
            </div>
            
            <div id="block-right">
                <div class="block-right-cont block-text" v-if="mode == 'left'">
                    <wsubtitle class="block-stitle" :txt="bdata.subtitle" :lineColor="bdata.color"></wsubtitle>

                    <div class="block-title">
                        <span>{{bdata.title}}</span>
                    </div>

                    <div class="block-des">
                        <span>{{bdata.des}}</span>
                    </div>
                </div>

                <div class="block-right-cont" v-if="mode == 'right'">
                    <div class="block-img">
                        <img :src="bdata.img" :alt="bdata.title">
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>

import wsubtitle from '../widgets/wsubtitle'

export default {
    name: "block-type-1",
    components:{
        wsubtitle
    },
    props:{
        mode: String,
        bdata: {
            background: String,
            color: String,
            subtitle: String,
            title: String,
            img: String,
            des: String
        }
    }
}
</script>

<style scoped>

#block-cont{
    width: 100%;
    display: flex;
}

#block-left{
    width: 50%;
}

#block-right{
    width: 50%;
}

.block-img{
    width: 100%;
}

.block-img img{
    width: 100%;
    object-fit: contain;
}

.block-text{
    text-align: left;
    width: 580px;
    margin-left:auto;
    margin-right: auto;
}

.block-title{
    font-size: 44px;
    font-weight: bold;  
}

.block-des{
    font-size: 24px;
    font-weight: lighter;
}

.block-stitle{
    margin-top: 30px;
}

.block-title{
    margin-top: 24px;
}

.block-des{
    width: 85%;
    margin-top: 6px;
    font-size: 20px;
}

</style>