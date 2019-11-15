<template>
  <div class="main">
    <hheader :navs="navs"></hheader>
    <htop :intro="intro"></htop>
    <numdata :numd="numd"></numdata>
    <blockt1 :bdata="bdata_100" mode="left"></blockt1>
    <blockt1 :bdata="bdata_500" mode="right"></blockt1>
  </div>
</template>

<script>

import hheader from "./hheader"
import htop from './htop'
import numdata from './numdata'
import blockt1 from './blockt1'

export default {
  name: 'main',
  components:{
    hheader,
    htop,
    numdata,
    blockt1
  },
  data(){
    return{
      navs:[
          { id: 0, val: "KEY FACTS" },
          { id: 1, val: "DESIGN" },
          { id: 2, val: "SECURITY" },
          { id: 3, val: "SUMMARY" },
      ],
      intro: "Our new polymer $100 and $500 note is coming on 20 February 2148. It features the artist JIANFENG WU",
      numd: [
        { id: 0, num: "20%", des: "The 20% of trade market transfer made by note and coin", icon: "./assets/img/1.png" },
        { id: 1, num: "8,000,000", des: "More than 8 million population are using note from Bank of TB", icon: "./assets/img/2.png" },
        { id: 2, num: "32th", des: "The 32th edition of re-design by the digital artist JIANFENG WU", icon: "./assets/img/3.png" }
      ],
      bdata_100:{
          background: "#262626",
          color: "#ffffff",
          subtitle: "design",
          title: "$100",
          img: "./assets/img/100.png",
          des: "The new 100 cred design refelects a scure and prosper place for people living which the Thames Basin offers. Through the Great Shield System, the goverment of TB protects you from war and crime."
      },
      bdata_500:{
          background: "#ffffff",
          color: "#262626",
          subtitle: "design",
          title: "$500",
          img: "./assets/img/500.png",
          des: "The new 500 cred design refelects the ambitions of the Great Exploration Project to the space, a territory the Thames Basin will conquer. For today, to future."
      }

    }
  },
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
