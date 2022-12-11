import {createRouter, createWebHistory} from 'vue-router'

//importing routes
import Header from '@/components/Header.vue'
import About from '@/components/About Me.vue'

const routes= [
    { path: '/', name: 'Header', component: Header },
    { path: '/about', name: 'About', component: About },
]

/* create router instance */
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router