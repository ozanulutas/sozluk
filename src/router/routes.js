import AppLayout from '@/layouts/App.vue';
import PublicLayout from '@/layouts/Public.vue';

export default [
  {
    component: PublicLayout,
    path: '',
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue')
      },
      {
        path: '/posts',
        name: 'Posts',
        component: () => import('@/views/Posts.vue')
      },
    ]
  },
  {
    component: AppLayout,
    path: '',
    children: [
      {
        path: '/about',
        name: 'About',
        component: () => import('@/views/About.vue')
      },
    ]
  },
];