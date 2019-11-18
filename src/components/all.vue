<template>
  <div class="all" v-if="loaded">
    <hheader :navs="navs"></hheader>
    <htop :intro="intro"></htop>
    <numdata :numd="numd"></numdata>
    <design :design="design"></design>
    <coin :cdata="coin"></coin>
    <secure :secure="secure"></secure>
    <sum :sumData="sumData"></sum>
    <ffooter :foot="foot"></ffooter>
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
    ffooter
  },
  data(){
    return{
      loaded: false,
      navs: Array,
      intro: String,
      numd: Array,
      design: Array,
      coin: Object,
      secure: Object,
      sumData: Array,
      foot: Object,
      idNavMap:Array
    }
  },
  created(){
    
    this.axios.get("./data.json").then((response) => {
      var res = response.data
      this.navs = res.navs
      this.intro = res.intro
      this.numd = res.numd
      this.design = res.design
      this.coin = res.coin
      this.secure = res.secure
      this.sumData = res.sumData
      this.foot = res.foot

      this.$nextTick(()=>{
        this.loaded = true
      })

    })

    // Scroll to desired position
    EventBus.$on("to", (val)=>{
      for(var i=0;i<this.idNavMap.length;i++){
        if(val == this.idNavMap[i].nav){
          this.$scrollTo("#"+this.idNavMap[i].id, 500)
        }
      }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
