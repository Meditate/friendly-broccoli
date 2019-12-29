<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Hello v-if="step == 3" @submitted="onHelloSubmit"/>
    <Story v-if="step == 1" v-bind:name="name"/>
    <Bandit v-if="step == 2"/>
  </div>
</template>

<script>
import Hello from './components/hello.vue'
import Story from './components/story.vue'
import Bandit from './components/bandit.vue'

export default {
  name: 'app',
  components: {
    Hello,
    Story,
    Bandit
  },
  data() {
    return {
      step: 1,
      name: "test"
    }
  },
  methods: {
    onHelloSubmit: function(name) {
      this.stepCompletted()

      this.name = name;
    },
    stepCompletted: function() {
      this.step += 1;
    }
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
