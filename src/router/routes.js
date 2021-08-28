import DashboardLayout from '@/layouts/DashboardLayout.vue';
import PublicLayout from '@/layouts/PublicLayout.vue';

export default [
  {
    component: PublicLayout,
    path: '',
    children: [
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
    component: DashboardLayout,
    path: '',
    children: [
      {
        meta: { middleware: 'auth' },
        path: '/profile',
        name: 'Profile',
        component: () => import('@/views/Profile.vue'),
      },
      {
        meta: { middleware: 'auth' },
        path: '/topic',
        name: 'Topic',
        component: () => import('@/views/Topic.vue')
      },
    ]
  },
];