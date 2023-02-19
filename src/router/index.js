import { createRouter, createWebHistory } from 'vue-router';
import PublicLayout from '@/layouts/PublicLayout.vue';

const routes = [
  {
    path: '/',
    component: () => import('@/components/Home.vue'),
    name: 'Home',
    meta: {
      layout: PublicLayout 
    }
  },
  {
    path: '/lorem-first',
    component: () => import('@/components/Blank.vue'),
    name: 'LOREM FIRST',
    meta: {
      layout: PublicLayout 
    }
  },
  {
    path: '/loremipsum',
    component: () => import('@/components/Blank.vue'),
    name: 'LOREMIPSUM',
    meta: {
      layout: PublicLayout 
    }
  },
  {
    path: '/lorem-ipsum',
    component: () => import('@/components/Blank.vue'),
    name: 'LOREM & IPSUM',
    meta: {
      layout: PublicLayout 
    }
  },
  {
    path: '/lorem',
    component: () => import('@/components/Blank.vue'),
    name: 'LOREM',
    meta: {
      layout: PublicLayout 
    }
  }
]

const router = createRouter({
  history : createWebHistory(),
  routes
});

export default router;