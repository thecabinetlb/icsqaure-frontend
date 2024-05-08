import ContactView from '../views/ContactView.vue'
import Contact from '../components/ContactForm.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView },
    { path: '/about', component: AboutView },
    { path: '/contact', component: ContactView },
    { path: '/#contact', component: Contact },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
        return savedPosition
    } else if (to.hash) {
        return {
          el: to.hash,
          behavior: 'smooth',
      }
    }
      return { top: 0,  behavior: 'smooth' }
  }  
})

export default router
