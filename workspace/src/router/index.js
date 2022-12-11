import {createRouter, createWebHistory} from 'vue-router'

//importing routes
import Header from '@/components/Header.vue'
import About from '@/components/About.vue'
import Educatuion from '@/components/Education.vue'
import Projects from '@/components/Projects.vue'
import Contact from '@/components/Contact.vue'
import KeySkills from '@/components/Key Skills.vue'

const routes= [
    { path: '/', name: 'Header', component: Header },
    { path: '/About', name: 'About', component: About },
    { path: '/Key Skills', name: 'Key Skills', component: KeySkills },
    { path: '/Projects', name: 'Projects', component: Projects },
    { path: '/Contact', name: 'Contact', component: Contact },
    { path: '/Education', name: 'Education', component: Educatuion },
]

/* create router instance */
const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
          return {
            el: to.hash,
            behavior: 'smooth'
          }
        }
        return { top: 0 ,
          behavior: 'smooth'
        }
      }
})

export default router