<template>
  <div>
    <p v-html="firstParagraph"></p>
  </div>
</template>

<script>
  import { stringDecryptor } from '../helpers/stringDecryptor.js'
  import { stringInterpolator } from '../helpers/stringInterpolator.js'
  import story_json from '../store/story.json'

  export default {
    name: 'Story',
    props: ['name'],
    data() {
      return {
        firstParagraph: ""
      };
    },
    mounted() {
       let decyptedString = stringDecryptor(story_json.message.first)
       
       this.firstParagraph = stringInterpolator(decyptedString, { name: this.name })
    },
    methods: {
    }
  }
</script>

<style>
  h3 {
    margin-bottom: 5%;
  }
</style>
