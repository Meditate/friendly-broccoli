<template>
  <div>
    <md-card>
      <md-card-header>
        <div class="md-title">
              Здравствуйте, представьтесь пожалуйста:
        </div>
      </md-card-header>
      <md-card-content>
        <div v-if="showSecondHelpNotification == true">
          <p>Возможные варианты:</p>

          <md-list>
            <md-list-item @click="chooseName(variant)" v-for="variant in nameVariants" v-bind:key="variant">{{variant}}</md-list-item>
          </md-list>
        </div>

        <md-field :class="messageClass">
          <md-input class="name-input" v-model="name" required></md-input>
          <span class="md-error">Подумай хорошо</span>
        </md-field>

        <md-button v-if="nameAccepted == false" class="md-raised" :md-ripple="false" v-on:click="tryName">Да, это моё имя</md-button>
        <md-button v-if="nameAccepted == true" class="md-raised" :md-ripple="false" v-on:click="submit">Что вы хотите от меня?</md-button>
      </md-card-content>

    </md-card>

  </div>
</template>

<script>
  import hello_json from '../store/hello.json'
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
      }
    },
    computed: {
      messageClass () {
        return {
          'md-invalid': this.showFirstHelpNotification || this.showSecondHelpNotification

        }
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
        }
        else {
          this.nameAccepted = false
          this.counter += 1;

          if (this.counter > 0) {
            this.showFirstHelpNotification = true
          }

          if (this.counter > 4) {
            this.showSecondHelpNotification = true
          }
        }
      },
      submit: function() {
        this.$emit('submitted', this.name)
      }
    }
  }
</script>

<style>
  .name-input {
    text-align: center;
  }
  .name-error {
    color: red;
  }
  h3 {
    margin-bottom: 5%;
  }
</style>
