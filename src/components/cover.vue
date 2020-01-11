<template>
  <div class="cover">
    <md-card>
      <md-card-content>
        <p class="letter-number">
          Письмо номер {{number}}
        </p>
        <p>
          {{message}}
        </p>
        <p class="md-caption">За новым письмом приходи завтра</p>
        <md-button id="back-button" class="md-raised" :md-ripple="false" v-on:click="backLink">Вернуться</md-button>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
  import { stringPresenter } from "../helpers/stringPresenter.js"
  import coverJson from "../store/cover.json"


  export default {
    name: 'Cover',
    data() {
      return {
        message: "",
        number: ""
      }
    },
    created: function() {
      this.updateMessage()
    },
    methods: {
      updateMessage: function() {
        let current_date = this.$moment().get('date')

        this.getLetterForDate(current_date)
      },
      getLetterForDate: function(date) {
        console.log(coverJson.letters)

        let todays_letter = coverJson.letters.find(l => { return l.number == date })

        this.number = stringPresenter(todays_letter.number.toString(), {})
        this.message = stringPresenter(todays_letter.text, {})
      },
      backLink: function() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style>
  .letter-number {
    font-style: italic;
  }
  #back-button {
    margin-bottom: 40px;
  }
  h3 {
    margin-bottom: 5%;
  }
</style>
