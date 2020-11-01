import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Font Awesome Icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

// Bootstrap Vue
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
library.add(faUserCircle)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
