<template>
  <div>
    <h1>Здарвствуйте, представьтесь пожалуйста:</h1>

    <h3 v-if="showFirstHelpNotification == true">Подумай хорошо</h3>

    <div v-if="showSecondHelpNotification == true">
      <p>Возможные варианты:</p>

      <ul>
        <li v-for="variant in nameVariants" v-bind:key="variant">
          {{variant}}
        </li>
      </ul>
    </div>

    <button v-on:click="tryName">Да, это моё имя</button>

    <input v-model="name" placeholder="Имя">

    <div v-if="nameAccepted == true">
      <h3 >{{greeting}}</h3>

      <button v-on:click="submit">Что вы хотите от меня?</button>
    </div>
  </div>
</template>

<script>
  import hello_json from '../store/hello.json'
  import { stringInterpolator } from '../helpers/stringInterpolator.js'
  import { stringDecryptor} from '../helpers/stringDecryptor.js'

  export default {
    name: 'Hello',
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
