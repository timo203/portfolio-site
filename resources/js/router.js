import { createRouter, createWebHistory } from 'vue-router'

import PortfolioHome from './pages/PortfolioHome.vue'
import Home from './pages/Home.vue'
import Career from './pages/Career.vue'

const routes = [
    { path: '/', name: 'portfolio', component: PortfolioHome },
    { path: '/old-home', name: 'home', component: Home },
    { path: '/career', name: 'career', component: Career },
]

export default createRouter({
    history: createWebHistory(),
    routes
})
