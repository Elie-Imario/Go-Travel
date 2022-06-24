import { createRouter, createWebHashHistory } from 'vue-router';
import AppHeader from '../layout/AppHeader.vue';
import AppFooter from '../layout/AppFooter.vue';
import Home from '../Pages/HomePage.vue';
import Decouvrir from '../Pages/DecouvrirPage.vue';
import MaCarte from '../Pages/MaCarte.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
        header: AppHeader,
        default: Home,
        footer: AppFooter
    }
  },
  {
    path: '/Decouvrir',
    name: 'Decouvrir',
    components: {
        header: AppHeader,
        default: Decouvrir,
        footer: AppFooter
    }
  },
  {
    path: '/MaCarte',
    name: 'MaCarte',
    components: {
        header: AppHeader,
        default: MaCarte,
        footer: AppFooter
    }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
