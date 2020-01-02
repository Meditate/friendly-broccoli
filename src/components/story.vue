<template>
  <div>
    <h2> Часть Первая </h2>
    <div class="content">
      <p v-html="firstParagraph.content"></p>

      <StoryFirstQuestion class="question" v-if="firstQuestion == true" @correctAnswer="onCorrectFirstAnswer"/>

      <p v-if="secondParagraph.content" v-html="secondParagraph.content"></p>

      <StorySecondQuestion class="question" v-if="secondQuestion == true" @correctAnswer="onCorrectSecondAnswer"/>

      <p v-if="thirdParagraph.content" v-html="thirdParagraph.content"></p>

      <StoryThirdQuestion class="question" v-if="thirdQuestion == true" @correctAnswer="onCorrectThirdAnswer"/>

      <p v-if="fourthParagraph.content" v-html="fourthParagraph.content"></p>

      <StoryPrizes class="question" v-if="storyPrizes == true"/>
    </div>
  </div>
</template>

<script>
  import { stringPresenter } from '../helpers/stringPresenter.js'
  import StoryFirstQuestion from './story/firstQuestion'
  import StorySecondQuestion from './story/secondQuestion'
  import StoryThirdQuestion from './story/thirdQuestion'
  import StoryPrizes from './story/prizes'
  import story_json from '../store/story.json'

  export default {
    name: 'Story',
    props: ['name'],
    components: {
      StoryFirstQuestion,
      StorySecondQuestion,
      StoryThirdQuestion,
      StoryPrizes
    },
    data() {
      return {
        boysName: "",
        firstParagraph: { content: "" },
        secondParagraph: { content: "" },
        thirdParagraph: { content: "" },
        fourthParagraph: { content: "" },
        firstQuestion: false,
        secondQuestion: false,
        thirdQuestion: false,
        storyPrizes: true
      };
    },
    created() {
       this.showParagraph(this.firstParagraph, story_json.message.first)

       setTimeout(function() { this.firstQuestion = true }.bind(this), 3000)
    },
    methods: {
      onCorrectFirstAnswer: function() {
        this.firstQuestion = false

        this.showParagraph(this.secondParagraph, story_json.message.second)

        setTimeout(function() { this.secondQuestion = true }.bind(this), 3000)
      },

      onCorrectSecondAnswer: function() {
        this.secondQuestion = false

        this.showParagraph(this.thirdParagraph, story_json.message.third)

        setTimeout(function() { this.thirdQuestion = true }.bind(this), 3000)
      },

      onCorrectThirdAnswer: function(boysName) {
        this.thirdQuestion = false

        this.boysName = boysName

        this.showParagraph(this.fourthParagraph, story_json.message.fourth, { name: boysName })
      },

      showParagraph: function(paragraphObject, paragraphContent, dictionary = { name: this.name }) {
        paragraphObject.content = stringPresenter(paragraphContent, dictionary )
      },
    }
  }
</script>

<style>
  h3 {
    margin-bottom: 5%;
  }
  .content {
    text-align: left;
  }
  .question {
    text-align: center;
  }
  .highlight {
    border-bottom: 2px solid red;
  }
</style>
