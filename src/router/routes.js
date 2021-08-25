import AppLayout from '@/layouts/AppLayout.vue';
import PublicLayout from '@/layouts/PublicLayout.vue';

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
      {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login.vue')
      },
      {
        path: '/register',
        name: 'Register',
        component: () => import('@/views/Register.vue')
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