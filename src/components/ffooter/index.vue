<template>
    <div id="ffooter">
        <div id="f-inner">
            <div id="f-logo">
                <img :src="foot.logo" alt="bank of thames basin">
            </div>

            <div id="f-contact">
                <div id="f-contact-tele">
                    <div class="f-contact-s f-contact-phone">
                        <span>{{foot.tel}}</span>
                    </div>

                    <div class="f-contact-s f-contact-email">
                        <span>{{foot.email}}</span>
                    </div>
                </div>

                <div id="f-contact-add">
                    <span v-html="foot.add"></span>
                </div>
            </div>

            <div id="f-right">
                <div id="f-right-logo">
                    <img :src="foot.wIcon" alt="gs system logo">
                </div>

                <div id="f-right-text">
                    <span v-html="foot.warning"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ffooter",
    props:{
        foot:{
            logo: String,
            tel: String,
            email: String,
            add: String,
            wIcon: String,
            warning: String
        }
    }
}
</script>

<style scoped>

#ffooter{
    width: 100%;
    height: 200px;
    background: #eaeaea;
    text-align: left;
    font-weight: lighter;
}

#f-inner{
    display: flex;
    opacity: .5;
}

#f-logo{
    margin-left: 80px;
    margin-top: 80px;
}

#f-logo img{
    width: 220px;
}

#f-contact-tele{
    
}

#f-contact{
    font-size: 16px;
    text-transform: uppercase;
    display: flex;
    margin-top: 80px;
    margin-left: 120px;
}

.f-contact-phone{
    margin-bottom:6px;
}

#f-contact-add{
    margin-left: 80px;
}

#f-right{
    position: absolute;
    right: 50px;
    margin-top: 80px;
    display: flex;
}

#f-right-logo img{
    width: 64px;
}


</style>