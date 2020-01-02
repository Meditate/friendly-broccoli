<template>
  <div>
    <p>Какое желание исполнить?</p>

    <md-button class="md-raised" :md-ripple="false" v-on:click="openLink('cover')">Волшебный конверт</md-button>
    <md-button class="md-raised" :md-ripple="false" v-on:click="openLink('status')">Волшебный камень</md-button>
  </div>
</template>

<script>
  export default {
    name: 'StoryPrizes',
    methods: {
      openLink: function(path) {
        this.$router.push(path)
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
