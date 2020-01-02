<template>
  <div>
    <h1>Здравствуйте, представьтесь пожалуйста:</h1>

    <div v-if="showSecondHelpNotification == true">
      <p>Возможные варианты:</p>

      <md-list>
        <md-list-item @click="chooseName(variant)" v-for="variant in nameVariants" v-bind:key="variant">{{variant}}</md-list-item>
      </md-list>
    </div>

    <md-card>
      <md-card-content>
        <md-field md-inline>
          <md-button class="md-raised" :md-ripple="false" v-on:click="tryName">Да, это моё имя</md-button>
          <md-input v-model="name" required></md-input>
          <span class="md-error" v-if="showFirstHelpNotification == true">Подумай хорошо</span>
          <div v-if="nameAccepted == true">
            <h3 >{{greeting}}</h3>

            <md-button class="md-raised" :md-ripple="false" v-on:click="submit">Что вы хотите от меня?</md-button>
          </div>
        </md-field>
      </md-card-content>

    </md-card>

  </div>
</template>

<script>
  import hello_json from '../store/hello.json'
  import { stringInterpolator } from '../helpers/stringInterpolator.js'
  import { stringDecryptor} from '../helpers/stringDecryptor.js'

  export default {
    name: 'Login',
    data() {
      return {
        counter: 0,
        showFirstHelpNotification: false,
        showSecondHelpNotification: false,
        name:  "",
        nameVariants: this.mappedVariantsFromJson(),
        nameAccepted: false,
        greeting: ""
      }
    },
    methods: {
      mappedVariantsFromJson: function() {
        return hello_json.variants.map((variant) => { return stringDecryptor(variant.name) })
      },
      chooseName: function(chosenName) {
        this.nameAccepted = true
        this.name = chosenName
      },
      tryName: function() {
        if (this.nameVariants.includes(this.name)) {
          this.nameAccepted = true
          this.createGreeting();
        }
        else {
          this.nameAccepted = false
          this.counter += 1;

          if (this.counter > 3) {
            this.showFirstHelpNotification = true
          }

          if (this.counter > 6) {
            this.showSecondHelpNotification = true
          }
        }
      },
      createGreeting: function() {
        this.greeting = stringInterpolator(stringDecryptor(hello_json.message.greeting), { name: this.name })
      },
      submit: function() {
        this.$emit('submitted', this.name)
      }
    }
  }
</script>

<style>
  h3 {
    margin-bottom: 5%;
  }
</style>
