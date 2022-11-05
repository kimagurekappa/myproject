import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import About from '@/components/About.vue'
import StockPre from '@/components/StockPre.vue'
import Keiba from '@/components/Keiba.vue'

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
    },
    {
        path: '/ikeikekappa.s239.xrea.com/',
        name: 'stockpre',
        component: StockPre
    },
    {
        path: '/ikeikekappa.s239.xrea.com/',
        name: 'keiba',
        component: Keiba
    }
]

const router = createRouter({ history: createWebHistory(), routes })
export default router