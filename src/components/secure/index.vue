<template>
    <div id="secure">
        <div id="secure-title">
            <div id="secure-title-icon">
                <img :src="secure.titleIcon" alt="security">
            </div>

            <div id="secure-title-text">
                <span style="font-weight: lighter">{{secure.title}} <span style="font-family: robotoBold;">{{secure.titleBold}}</span> </span>
            </div>
        </div>

        <div id="secure-intro">
            <div v-for="item in secure.sdata" :key="item.id">
                <blockt2 :bdata="item" :mode="item.mode" :isMobile="isMobile"></blockt2>
            </div>
        </div>
    </div>
</template>

<script>

import blockt2 from "../blockt2"

export default {
    name: "secure",
    components:{
        blockt2
    },
    props: {
        isMobile: Boolean,
        secure:{
            titleIcon: String,
            title: String,
            titleBold: String,
            sdata: Array,
        }
    }
}
</script>

<style scoped>

#secure{
    margin-top: 100px;
    margin-bottom: 100px;
}

#secure-title-icon img{
    width: 60px;
}

#secure-title-text{
    margin-top: 10px;
}

#secure-title-text span{
    font-size: 32px;
}

#secure-intro{
    margin-top: 60px;
}

@media only screen and (max-device-width : 812px)  { 

    #secure{
        margin-top: 60px;
    }

    #secure-intro{
        margin-top: 30px;
    }

    #secure-title-icon img{
        width: 32px;
    }

    #secure-title-text span{
        font-size: 24px;
    }
}
</style>