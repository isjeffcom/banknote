<template>
    <div id="popup" :style="'background:' + popData.bgColor + ';'">
        <div id="popup-inner">
            <div id="popup-text">
                <span>{{popData.txt}}</span>
            </div>

            <div id="popup-act">
                <div id="popup-act-btn" v-on:click="refresh">
                    <span>{{popData.act}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "popup",
    props:{
        state: false,
        popData:{
            bgColor: String,
            txt: String,
            act: String
        }
    },
    methods:{
        refresh(){
            location.reload();
        }
    }

}
</script>

<style scoped>
    #popup{
        position: fixed;
        bottom: 0px;
        width: 100%;
        height: 60px;
        background: #00FFC3;
        user-select: none;
    }

    #popup-inner{
        display: flex;
        padding: 12px;
    }

    #popup-text{
        width: 85%;
        margin-top: 8px;
        font-weight: bold;
        font-size: 18px;
        text-align: left;
    }

    #popup-text span{
        color: #333333;
    }

    #popup-act{
        position: absolute;
        right: 20px;
    }

    #popup-act-btn{
        width: auto;
        height: 20px;
        text-align: center;
        color: #333;
        font-weight: bold;
        border-radius: 4px;
        padding: 9px;
        background: rgba(0,0,0,0.2);
        cursor: pointer;
    }

    @media only screen and (max-device-width : 812px)  { 
        #popup{
            height: 60px;
        }

        #popup-act{
            right: 8px;
        }

        
        #popup-text{
            margin-top: 0px;
            font-weight: normal;
            font-size: 14px;
        }

        #popup-act-btn{
            font-size: 14px;
        }
    }
</style>