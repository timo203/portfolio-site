import { createRouter, createWebHistory } from 'vue-router'

import Home from './pages/Home.vue'
import Career from './pages/Career.vue'

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/career', name: 'career', component: Career },
]

export default createRouter({
    history: createWebHistory(),
    routes
})
