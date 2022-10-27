import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import About from '@/components/About.vue'

const routes = [
    {
        path: '/ikeikekappa.s239.xrea.com/',
        name: 'home',
        component: Home
    },
    {
        path: '/ikeikekappa.s239.xrea.com/',
        name: 'about',
        component: About
    }
]

const router = createRouter({ history: createWebHistory(), routes })
export default router