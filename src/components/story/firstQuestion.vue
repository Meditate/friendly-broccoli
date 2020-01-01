<template>
  <div>
    <p>Что это был за язык?</p>

    <md-button class="md-raised" :md-ripple="false" v-on:click="languageAnswer(false)">Ямало-ненецкий</md-button>
    <md-button class="md-raised" :md-ripple="false" v-on:click="languageAnswer(true)">Немецкий</md-button>
    <md-button class="md-raised" :md-ripple="false" v-on:click="languageAnswer(false)">Кадетский</md-button>

    <p v-if="helpMessage">{{helpMessage}}</p>
  </div>
</template>

<script>
  export default {
    name: 'StoryFirstQuestion',
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
