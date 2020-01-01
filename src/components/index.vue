<template>
  <div id="index">
    <Login v-if="step == 1" @submitted="onHelloSubmit"/>
    <Story v-if="step == 2" v-bind:name="name"/>
  </div>
</template>

<script>
import Login from './login.vue'
import Story from './story.vue'

export default {
  name: 'Index',
  components: {
    Login,
    Story
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
#index {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px 30px;
}
</style>
