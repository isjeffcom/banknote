<template>
    <div id="block-type-1">
        <div id="block-cont" :style="'background:' + bdata.background + ';color:' + bdata.color + ';'">
            <div id="block-left">
                <div id="block-img">
                    <img :src="bdata.img" :alt="bdata.title">
                </div>
            </div>
            
            <div id="block-right">
                <div id="block-subtitle">
                    <span>{{bdata.subtitle}}</span>
                </div>

                <div id="block-title">
                    <span>{{bdata.title}}</span>
                </div>

                <div id="block-des">
                    <span>{{bdata.des}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "block-type-1",
    props:{
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
#block-type-1{
    width: 100%;
}

#block-cont{
    width: 100%;
}

#block-subtitle{
    font-size: 24px;
}

</style>