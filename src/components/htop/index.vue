<template>
    <div id="top">
        <div id="t_ill">
            <img src="../../assets/top_ill.png" alt="">
        </div>

        <div id="t_intro">
            <div id="t_intro_cont">
                <span>{{intro}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "htop",
    props:{
        intro: String,
    }
}
</script>

<style scoped>

#t_ill{
    width: 100%;
    margin-top: -60px;
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
</style>