import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './routes'
import VueCryptojs from 'vue-cryptojs'
import VueMoment from 'vue-moment'


import { MdButton, MdField, MdList, MdCard, MdProgress } from 'vue-material/dist/components'

import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'


Vue.config.productionTip = false
Vue.use(VueCryptojs)
Vue.use(VueRouter)
Vue.use(VueMoment);


// md
Vue.use(MdButton)
Vue.use(MdCard)
Vue.use(MdList)
Vue.use(MdField)
Vue.use(MdProgress)

const router = new VueRouter({
   routes,
   scrollBehavior () {
      return { x: 0, y: 0 }
   }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
