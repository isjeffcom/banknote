<template>
    <div id="design">
        <div id="design_inner" v-for="item in design" :key="item.id">
            <blockt1 :bdata="item" :mode="item.mode"></blockt1>
        </div>
    </div>
</template>

<script>
import blockt1 from '../blockt1'
export default {
    name: "design",
    components:{
        blockt1
    },
    props:{
        design: Array
    }
}
</script>

<style scoped>
#design{
    margin-bottom: 50px;
}
</style>