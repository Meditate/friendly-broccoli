<template>
  <div id="app">
    <keep-alive include="Index">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
    }
  },
  methods: {
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
  margin: 60px 30px;
}
</style>
