import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faXmark, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

library.add(faBars, faXmark, faShoppingCart, faInstagram, faYoutube, faWhatsapp)

const app = createApp(App)

app.use(router).component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
