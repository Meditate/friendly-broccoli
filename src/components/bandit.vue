<template>
  <div>
    <p class="md-caption">жми кнопку, пока не выпадет 2 одинаковых имени</p>

    <md-button class="md-raised" :md-ripple="false" v-on:click="runBandit">Нет, это не его имя</md-button>

    <md-button class="md-raised" v-if="canAcceptName == true" :md-ripple="false" v-on:click="acceptName">Да, это его имя!</md-button>

    <md-card v-for="(cell, index) in cells" v-bind:key="index">
      <md-card-content>
        {{cell}}
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
  import { stringDecryptor } from '../helpers/stringDecryptor.js'
  import cells_from_json from '../store/bandit.json'

  export default {
    name: 'Bandit',
    data() {
      return {
          cells: [],
          showSpinner: false,
          canAcceptName: false
      };
    },
    mounted: function() {
      this.cells = []; 
    },
    methods: {
      runBandit: function() {
        this.showSpinner = true

        this.repickRandomCells();
      },
      repickRandomCells: function () {
        let first = cells_from_json[Math.floor(Math.random() * cells_from_json.length)].name
        let second = cells_from_json[Math.floor(Math.random() * cells_from_json.length)].name

        this.cells = [stringDecryptor(first), stringDecryptor(second)];

        this.checkIfNameAcceptable()
      },
      checkIfNameAcceptable: function() {
        if(this.cells.length > 0 && ( this.cells[0] == this.cells[1] )) {
          this.canAcceptName = true
        } else {
          this.canAcceptName = false
        }
      },
      acceptName: function() {
        this.$emit('success', this.cells[0])
      }
    }
  }
</script>

<style>
  h3 {
    margin-bottom: 5%;
  }
</style>
