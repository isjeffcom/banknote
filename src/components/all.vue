<template>
  <div class="all" v-if="loaded">
    <hheader :navs="navs" :isMobile="isMobile"></hheader>
    <htop :intro="intro" :isMobile="isMobile"></htop>
    <numdata :numd="numd" :isMobile="isMobile"></numdata>
    <design :design="design" :isMobile="isMobile"></design>
    <coin :cdata="coin"></coin>
    <secure :secure="secure" :isMobile="isMobile"></secure>
    <sum :sumData="sumData" :poster="poster"></sum>
    <ffooter :foot="foot" :isMobile="isMobile"></ffooter>

    <transition name="pop">
      <popup :popData="popData" v-if="popupAlert"></popup>
    </transition>
    
  </div>
</template>

<script>

import { EventBus } from '../bus'

import hheader from "./hheader"
import htop from './htop'
import numdata from './numdata'
import design from './design'
import coin from './coin'
import secure from './secure'
import sum from './sum'
import ffooter from './ffooter'
import popup from './popup'

export default {
  name: 'all',
  components:{
    hheader,
    htop,
    numdata,
    design,
    coin,
    secure,
    sum,
    ffooter,
    popup
  },
  data(){
    return{
      // Flags
      loaded: false,
      isMobile: false,
      lastIsMobile: Boolean,

      // Data
      navs: Array,
      intro: String,
      numd: Array,
      design: Array,
      coin: Object,
      secure: Object,
      sumData: Array,
      poster: Array,
      foot: Object,

      // Helper
      idNavMap:[
        {nav: "top", id: "app"},
        {nav: "KEY FACTS", id: "numdata"},
        {nav: "DESIGN", id: "block-type-1"},
        {nav: "SECURITY", id: "secure"},
        {nav: "SUMMARY", id: "sum"},
      ],

      popData: {
        bgColor: "#00FFC3",
        txt: "View window size appear to be changed, refresh is recommoned.",
        act: "Refresh"
      },

      popupAlert: false
    }
  },
  watch:{
    isMobile: function() {
      if(this.lastIsMobile != this.isMobile){
        this.popupAlert = true
        //this.lastIsMobile = this.isMobile
      } else {
        this.popupAlert = false
      }
    }
  },
  mounted(){
    // Do once on load
    this.isMobile = document.body.clientWidth < 600 ? true : false

    // Var for detect if the is mobile status is changed
    this.lastIsMobile = this.isMobile

    // Do when resize
    addEventListener("resize", (e)=>{
      this.isMobile = document.body.clientWidth < 600 ? true : false
    })
  },
  created(){

    if(window.location.href.indexOf("http") == -1){
      alert("This website require running in server environment")
    }
    
    if(window.scrollY != 0){
      this.$scrollTo("#app", 20, { offset: 0})
    }

    // Feed in data from json
    this.axios.get("./data.json").then((response) => {
      var res = response.data
      this.navs = res.navs
      this.intro = res.intro
      this.numd = res.numd
      this.design = res.design
      this.coin = res.coin
      this.secure = res.secure
      this.sumData = res.sumData
      this.poster = res.poster
      this.foot = res.foot

      this.$nextTick(()=>{
        this.loaded = true
      })

    })

    // Scroll to desired position
    EventBus.$on("to", (val)=>{
      for(var i=0;i<this.idNavMap.length;i++){
        if(val == this.idNavMap[i].nav){
          this.$scrollTo("#"+this.idNavMap[i].id, 500, { offset: -100})
        }
      }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@keyframes popup {
  0% {opacity: 0; transform: translateY(70px);}
  100% {opacity: 1; transform: translateY(0px);}
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.pop-enter-active {
  animation: popup .8s;
  animation-fill-mode: forwards;
}

.pop-leave-active {
  animation: popup .8s reverse;
  animation-fill-mode: forwards;
}
</style>
