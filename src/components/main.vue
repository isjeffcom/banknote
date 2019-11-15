<template>
  <div class="main">
    <hheader :navs="navs"></hheader>
    <htop :intro="intro"></htop>
    <numdata :numd="numd"></numdata>
  </div>
</template>

<script>

import hheader from "./hheader"
import htop from './htop'
import numdata from './numdata'

export default {
  name: 'main',
  components:{
    hheader,
    htop,
    numdata
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
        { id: 0, num: "20%", des: "The 20% of trade market transfer made by note and coin", icon: "https://beeimg.com/images/v52848489272.png" },
        { id: 1, num: "8,000,000", des: "More than 8 million population are using note from Bank of TB", icon: "https://beeimg.com/images/b44897885452.png" },
        { id: 2, num: "32th", des: "The 32th edition of re-design by the digital artist JIANFENG WU", icon: "https://beeimg.com/images/b85113268982.png" }
      ]

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
