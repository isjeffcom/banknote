<template>
  <div id="app">
    <all></all>
  </div>
</template>

<script>
import all from './components/all.vue'

export default {
  name: 'app',
  components: {
    all
  }
}
</script>

<style>

@font-face {
  font-family: robotoRegular;
  src: url('./assets/font/Roboto-Light.ttf');
}

@font-face {
  font-family: robotoBold;
  src: url('./assets/font/Roboto-Bold.ttf');
}

*{
  margin: 0;
  padding: 0;
}

#app {
  background: #ffffff;
  font-family: robotoRegular;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #262626;
  margin-top: 60px;
}
</style>
