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

</style>