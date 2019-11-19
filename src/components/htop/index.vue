<template>
    <div id="top">
        <div id="t_ill">
            <img :src="isMobile ? bgMobile : bg" alt="new banknote design released">
        </div>

        <div id="t_intro">
            <div id="t_intro_cont">
                <span>{{intro}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { isMobile } from '../../utils'
export default {
    name: "htop",
    props:{
        isMobile: {
            type: Boolean,
            default: false
        },
        intro: String,
    },
    data () {
        return{
            bg: "./assets/img/top_ill.png",
            bgMobile: "./assets/img/top_ill_mob.png"
        }
    }
}
</script>

<style scoped>

#t_ill{
    width: 100%;
    margin-top: -60px;
    user-select: none;
}

#t_ill img{
    width: 100%;
}

#t_intro{
    width: 100%;
    margin-top: 100px;
    margin-bottom: 100px;
}

#t_intro_cont{
    width: 60%;
    margin-left: auto;
    margin-right: auto;
}

#t_intro span{
    font-size: 32px;
    font-weight: lighter;
}

@media only screen and (max-device-width : 812px)  { 

    #t_intro{
        margin-top: 50px;
        margin-bottom: 50px;
    }

    #t_intro_cont{
        width: 80%;
    }

    #t_intro_cont span{
        font-size: 24px;
    }

    #t_intro span{
        font-size: 20px;
    }
}
</style>