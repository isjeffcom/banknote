<template>
    <div id="block-type-1">
        <div id="block-cont" :style="'background:' + bdata.background + ';color:' + bdata.color + ';'">
            <div id="block-left">
                <div class="block-left-cont"  v-if="mode =='left' || isMobile">
                    <div class="block-img">
                        <div class="block-img-inner" :ref="'filp'+bdata.id">
                            <div class="block-img-front">
                                <img :src="bdata.img" :alt="bdata.title">
                            </div>

                            <div class="block-img-back">
                                <img :src="bdata.backImg" :alt="bdata.title">
                            </div>
                        </div>

                        <div class="block-img-flip" v-on:click="flip(bdata.id)">
                            <svg width="39" height="20" viewBox="0 0 39 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26.5 17.3705C33.2467 16.1024 38 13.0562 38 9.5C38 4.80558 29.7173 1 19.5 1C9.28273 1 1 4.80558 1 9.5C1 12.8361 5.18301 15.7233 11.2707 17.1148" :stroke="bdata.color" stroke-linecap="round" stroke-linejoin="round"/>
                                <line x1="10.0963" y1="14.7228" x2="11.817" y2="17.1802" :stroke="bdata.color" stroke-linecap="round" stroke-linejoin="round"/>
                                <line x1="9.7002" y1="19.2929" x2="11.8215" y2="17.1716" :stroke="bdata.color" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>

                    
                </div>

                <div class="block-left-cont block-text"  v-if="mode == 'right' && !isMobile">
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
                <div class="block-right-cont block-text" v-if="mode == 'left' || isMobile">
                    <wsubtitle class="block-stitle" :txt="bdata.subtitle" :lineColor="bdata.color"></wsubtitle>

                    <div class="block-title">
                        <span>{{bdata.title}}</span>
                    </div>

                    <div class="block-des">
                        <span>{{bdata.des}}</span>
                    </div>
                </div>

                <div class="block-right-cont" v-if="mode == 'right' && !isMobile">
                    <div class="block-img">
                        <div class="block-img-inner" :ref="'filp'+bdata.id">
                            <div class="block-img-front">
                                <img :src="bdata.img" :alt="bdata.title">
                            </div>

                            <div class="block-img-back">
                                <img :src="bdata.backImg" :alt="bdata.title">
                            </div>
                        </div>

                        <div class="block-img-flip" v-on:click="flip(bdata.id)">
                            <svg width="39" height="20" viewBox="0 0 39 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26.5 17.3705C33.2467 16.1024 38 13.0562 38 9.5C38 4.80558 29.7173 1 19.5 1C9.28273 1 1 4.80558 1 9.5C1 12.8361 5.18301 15.7233 11.2707 17.1148" :stroke="bdata.color" stroke-linecap="round" stroke-linejoin="round"/>
                                <line x1="10.0963" y1="14.7228" x2="11.817" y2="17.1802" :stroke="bdata.color" stroke-linecap="round" stroke-linejoin="round"/>
                                <line x1="9.7002" y1="19.2929" x2="11.8215" y2="17.1716" :stroke="bdata.color" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>

                        
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
        isMobile: {
            type: Boolean,
            default: false
        },
        mode: String,
        bdata: {
            id: Number,
            background: String,
            color: String,
            subtitle: String,
            title: String,
            img: String,
            des: String
        }
    },
    methods:{
        flip(id){
            var target = this.$refs['filp'+id]
                      
            if(this.$refs['filp'+id].getAttribute("data-flip") == '1'){

                target.style.transform = "rotateY(0deg)"
                target.setAttribute("data-flip", "0")   

            } else {

                target.style.transform = "rotateY(180deg)"
                target.setAttribute("data-flip", "1")

            }
            
        }
    }
}
</script>

<style scoped>
#block-type-1{
    width: 100%;
    height: 400px;
}

#block-cont{
    width: 100%;
    height: 100%;
    display: flex;
}

#block-left{
    width: 50%;
}

#block-right{
    width: 50%;
}

.block-img{
    width: 85%;
    margin-top: 50px;
    margin-left:auto;
    margin-right: auto;
    perspective: 1000px;
    background-color: transparent;
    user-select: none;
}

.block-img-inner{
    transition: transform 0.8s;
    transform-style: preserve-3d;
}


.block-img-front, .block-img-back{
    position: absolute;
    backface-visibility: hidden;
}

.block-img-back{
    transform: rotateY(180deg);
}

.block-img img{
    width: 100%;
}

.block-img-flip{
    position: absolute;
    width: 100%;
    top: 310px;
    cursor: pointer;
}

.block-img-flip svg{
    width: 36px;
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
    margin-top: 80px;
}

.block-title{
    margin-top: 24px;
}

.block-des{
    width: 85%;
    margin-top: 6px;
    font-size: 20px;
}

@media only screen and (max-device-width : 812px)  { 

    #design_inner{
        margin-top: -50px;
    }

    #block-type-1{
        height: 560px;
    }

    #block-cont{
        display: block;
    }

    .block-img{
        width: 92%;
        padding-top: 40px;
    }

    .block-text{
        width: 92%;
        margin-top: 220px;
    }

    .block-title{
        font-size: 32px;
        font-weight: bold;  
    }

    .block-des{
        font-size: 20px;
        width: 95%;
    }

    #block-left{
        width: 100%;
    }

    #block-right{
        width: 100%;
    }

    .block-stitle {
        margin-top: 0px;
    }

    .block-img-flip[data-v-656177ad] {
        top: 230px;
    }
}

</style>