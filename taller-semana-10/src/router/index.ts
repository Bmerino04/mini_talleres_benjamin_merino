import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Ruta1View from '@/views/Ruta1View.vue';
import Ruta2View from '@/views/Ruta2View.vue';
import Ruta3View from '@/views/Ruta3View.vue';
import Ruta4View from '@/views/Ruta4View.vue';
import Ruta5View from '@/views/Ruta5View.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/ruta1',
      name: 'ruta1',
      component: Ruta1View
    },
    {
      path: '/ruta2',
      name: 'ruta2',
      component: Ruta2View
    },
    {
      path: '/ruta3',
      name: 'ruta3',
      component: Ruta3View
    },
    {
      path: '/ruta4',
      name: 'ruta4',
      component: Ruta4View
    },
    {
      path: '/ruta5',
      name: 'ruta5',
      component: Ruta5View
    }
  ]
});

export default router;

