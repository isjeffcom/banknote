<template>
    <div id="wSubtitle">
        <div id="sub_text">
            <span>{{txt}}</span>
        </div>

        <div id="line" :style="'background:' + lineColor + ';'"></div>
    </div>
</template>

<script>
export default {
    name: "wSubtitle",
    props:{
        lineColor: String,
        txt: String
    }
}
</script>

<style scoped>
#sub_text{
    text-align: left;
    cursor: default;
    user-select: none;
}

#sub_text span{
    font-family: robotoRegular;
    font-size: 24px;
    font-weight: lighter;
    letter-spacing: 1.36px;
}

#line{
    margin-top: 9px;
    width: 136px;
    height: 1px;
    background: #ffffff;
}

@media only screen and (max-device-width : 812px)  { 
    #sub_text span{
        font-size: 18px;
    }
}
</style>