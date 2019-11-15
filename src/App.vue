<template>
  <div id="app">
    <all></all>
  </div>
</template>

<script>
import all from './components/main.vue'

export default {
  name: 'app',
  components: {
    all
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}

#app {
  background: #ffffff;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
