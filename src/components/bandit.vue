<template>
  <div>
    <h3>Bandit:</h3>
    <button v-on:click="take_random_cells">Попробовать ещё</button>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">what:</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="cell in cells" v-bind:key="cell.id">
          <td>{{cell.name}}</td>
        </tr>
      </tbody>
    </table> 
  </div>
</template>

<script>
  import cells_from_json from '../store/bandit.json'

  export default {
    name: 'Bandit',
    data() {
      return {
          cells: []
      };
    },
    mounted: function() {
      this.cells = []; 
    },
    methods: {
      take_random_cells: function () {
        let first = cells_from_json[Math.floor(Math.random() * cells_from_json.length)]
        let second = cells_from_json[Math.floor(Math.random() * cells_from_json.length)]

        this.cells = [first, second];
      }
    }
  }
</script>

<style>
  h3 {
    margin-bottom: 5%;
  }
</style>
