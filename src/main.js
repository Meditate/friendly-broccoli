import Vue from 'vue'
import App from './App.vue'
import VueCryptojs from 'vue-cryptojs'


Vue.config.productionTip = false
Vue.use(VueCryptojs)

new Vue({
  render: h => h(App),
}).$mount('#app')
