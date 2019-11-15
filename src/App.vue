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
  font-family: 'Roboto';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #262626;
  margin-top: 60px;
}
</style>
