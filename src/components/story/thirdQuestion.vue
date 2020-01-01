<template>
  <div>
    <p> А звали мальчика </p>

    <Bandit @success="onBanditSuccess"/>

    <p v-if="helpMessage">{{helpMessage}}</p>
  </div>
</template>

<script>
  import Bandit from '../bandit.vue'

  export default {
    name: 'StorySecondQuestion',
    components: {
      Bandit
    },
    data() {
      return {
        helpMessage: ""
      };
    },
    methods: {
      onBanditSuccess: function(name) {
        this.$emit('correctAnswer', name)
      }
    }
  }
</script>

<style>
  h3 {
    margin-bottom: 5%;
  }
  .highlight {
    border-bottom: 2px solid red;
  }
</style>
