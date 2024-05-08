import './assets/css/main.css'

import { createApp } from 'vue'
import { createHead } from '@unhead/vue'
import App from './App.vue'
import router from './router'
import { MotionPlugin } from '@vueuse/motion'
import { VueRecaptchaPlugin } from 'vue-recaptcha/head'

const app = createApp(App)
const head = createHead()
app.use(head)
app.use(MotionPlugin)
app.use(router)
app.use(VueRecaptchaPlugin, {
  v2SiteKey: '6LdshtUpAAAAAJXjt7Dzt3tcOU4HK6FGagOOA62Q',
})
app.mount('#app')