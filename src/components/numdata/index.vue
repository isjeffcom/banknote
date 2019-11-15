<template>
    <div id="numdata">
        <div id="numdata_cont">
            <div class="numdata_single" v-for="item in numd" :key="item.id">
                <div class="n_icon">
                    <img :src="item.icon" :alt="item.des">
                </div>

                <div class="n_num">
                    <span>{{item.num}}</span>
                </div>

                <div class="n_des">
                    <span>{{item.des}}</span>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    name: "numdata",
    props:{
        numd: Array
    }
}
</script>

<style scoped>
#numdata{
    width: 100%;
    margin-top: 100px;
    margin-bottom: 100px;
}

#numdata_cont{
    display: flex;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
}

.n_icon img{
    width: 60px;
}

.n_num span{
    font-size: 36px;
    font-weight: bold;
}

.n_des{
    width: 50%;
    margin-left: auto;
    margin-right: auto;
}

</style>