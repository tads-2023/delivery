import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SplashView from '../views/SplashView.vue'
import DetalheCategoriaView from '../views/DetalheCategoriaView.vue'
import DetalheProdutoView from '../views/DetalheProdutoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'splash',
      component: SplashView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/detalhe-categoria',
      name: 'detalhe-categoria',
      component: DetalheCategoriaView
    },
    {
      path: '/detalhe-produto',
      name: 'detalhe-produto',
      component: DetalheProdutoView
    },
  ]
})

export default router
