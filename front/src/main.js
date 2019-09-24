import Vue from 'vue'
import './plugins/axios'
import './plugins/mint-ui'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
// Vue.use(Mint)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
