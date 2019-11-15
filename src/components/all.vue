<template>
  <div class="all">
    <hheader :navs="navs"></hheader>
    <htop :intro="intro"></htop>
    <numdata :numd="numd"></numdata>
    <blockt1 :bdata="bdata_100" mode="left"></blockt1>
    <blockt1 :bdata="bdata_500" mode="right"></blockt1>
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
import blockt1 from './blockt1'
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
    blockt1,
    coin,
    secure,
    sum,
    ffooter
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
        { id: 0, num: 20, text: "%", des: "The 20% of trade market transfer made by note and coin", icon: "./assets/img/1.png" },
        { id: 1, num: 8000000, text:"", des: "More than 8 million population are using note from Bank of TB", icon: "./assets/img/2.png" },
        { id: 2, num: 32, text:"th", des: "The 32th edition of re-design by the digital artist JIANFENG WU", icon: "./assets/img/3.png" }
      ],
      bdata_100:{
          background: "#262626",
          color: "#ffffff",
          subtitle: "design",
          title: "D100",
          img: "./assets/img/100.png",
          des: "The new 100 cred design refelects a scure and prosper place for people living which the Thames Basin offers. Through the Great Shield System, the goverment of TB protects you from war and crime."
      },
      bdata_500:{
          background: "#ffffff",
          color: "#262626",
          subtitle: "design",
          title: "D500",
          img: "./assets/img/500.png",
          des: "The new 500 cred design refelects the ambitions of the Great Exploration Project to the space, a territory the Thames Basin will conquer. For today, to future."
      },
      coin:{
        titleIcon: "./assets/img/coin_title.png",
        intro: "Coin desgin has inherted element from the note design. As coin design only take less than 1% of all money trasnfer in market. The coin mianly design for memorational purpose."
      },
      secure:{
        titleIcon: "./assets/img/sec.png",
        title: "Money",
        titleBold: "has memory",
        sdata: [
          {
            id: 0,
            mode: "left",
            background: "#ffffff",
            color: "#262626",
            subtitle: "secure",
            title: "DNA Tracker",
            img: "./assets/img/sec_1.png",
            des: "The most advance Thames Basin security technology can id every note and coin user. No one can escape from justice."
          },
          {
            id: 1,
            mode: "right",
            background: "#ffffff",
            color: "#262626",
            subtitle: "secure",
            title: "Shield System",
            img: "./assets/img/sec_2.png",
            des: "Deeply integrate with Great Shield System (Thames Basin National AI CCTV System). We always protecting."
          }
        ]
      },
      sumData: [
        { 
          id: 0, 
          title: "publish date", 
          val: "20.02.2148", 
          background: "#AB7D46" 
        },
        { 
          id: 1, 
          title: "total value", 
          val: "D100,000M", 
          background: "#3B3B3B" 
        },
        { 
          id: 2, 
          title: "ARTIST", 
          val: "JIANFENG WU", 
          background: "#4674AB" 
        }
      ],
      foot:{
        logo: "./assets/img/flogo.png",
        tel: "+33 07837442833 - 19",
        email: "Helpline.new@btb.com",
        add: "26 ZERO STREET, GREEN ZONE,<br>DISTRICT A19,<br>NEWDON,THAMES BASIN",
        wIcon: "./assets/img/fsafe.png",
        warning: "PROTECTED BY NATIONAL<br>GS SYSTEM.CYBER CRIME<br>IS A FELONY."
      },

      idNavMap:[
        {nav: "KEY FACTS", id: "numdata"},
        {nav: "DESIGN", id: "block-type-1"},
        {nav: "SECURITY", id: "secure"},
        {nav: "SUMMARY", id: "sum"},
      ]
      
    }
  },
  created(){

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
