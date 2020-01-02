<template>
  <div class="status">
    <md-button id="back-button" class="md-raised" :md-ripple="false" v-on:click="openLink">Вернуться</md-button>
    <md-card>
      <md-card-content>
        <p>
          <md-progress-spinner v-if="loading == true" md-mode="indeterminate" class="md-accent"></md-progress-spinner>
        </p>
        <div v-if="loading == false">

          <img src="@/assets/heart.png"/>

          <p>
            {{message}}
          </p>

          <md-button class="md-raised" :md-ripple="false" v-on:click="updateStatus">Получить актуальный статус</md-button>
        </div>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
  import statusJson from "../store/status.json"

  export default {
    name: 'Status',
    data() {
      return {
        loading: true,
        message: ""
      }
    },
    created: function() {
      this.updateStatus()
    },
    methods: {
      updateStatus: function() {
        this.loading = true

        setTimeout(function() { this.finishStatusUpdate() }.bind(this), 3000)
      },

      finishStatusUpdate: function() {
        this.message = statusJson.messages[Math.floor(Math.random() * statusJson.messages.length)].content

        this.loading = false
      },
      openLink: function() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style>
  #back-button {
    margin-bottom: 40px;
  }
  h3 {
    margin-bottom: 5%;
  }
</style>
