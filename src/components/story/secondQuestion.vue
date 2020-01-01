<template>
  <div>
    <p>А номер кабинета в котором это всё происходило:</p>

    <md-button class="md-raised" :md-ripple="false" v-on:click="languageAnswer(false)">201</md-button>
    <md-button class="md-raised" :md-ripple="false" v-on:click="languageAnswer(false)">301</md-button>
    <md-button class="md-raised" :md-ripple="false" v-on:click="languageAnswer(false)">302</md-button>
    <md-button class="md-raised" :md-ripple="false" v-on:click="languageAnswer(false)">203</md-button>
    <md-button class="md-raised" :md-ripple="false" v-on:click="languageAnswer(true)">204</md-button>
    <p v-if="helpMessage">{{helpMessage}}</p>
  </div>
</template>

<script>
  export default {
    name: 'StorySecondQuestion',
    data() {
      return {
        helpMessage: ""
      };
    },
    methods: {
      languageAnswer: function(answer) {
        if (answer == true) {
          this.$emit('correctAnswer', this.name)
        } else {
          this.helpMessage = "no"
        }
      },
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
