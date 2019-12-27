<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Bandit/>
  </div>
</template>

<script>
import Bandit from './components/bandit.vue'

export default {
  name: 'app',
  components: {
    Bandit 
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
