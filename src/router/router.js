import {createRouter, createWebHistory} from 'vue-router'
import App from '@/components/SelectionPage/SelectionPage.vue'
import Stats from '@/components/stats/StatsPage.vue'

const routes = [
    {path: "/", component: App },
    {path: "/stats", component: Stats },
]

const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

export default router