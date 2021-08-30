import DashboardLayout from '@/layouts/DashboardLayout.vue';
import PublicLayout from '@/layouts/PublicLayout.vue';

export default [
  {
    component: PublicLayout,
    path: '',
    children: [
      {
        path: '/topic',
        name: 'Topic',
        component: () => import('@/views/Topic.vue')
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
        path: '/account',
        name: 'Account',
        component: () => import('@/views/Account.vue'),
      },
      {
        meta: { middleware: 'auth' },
        path: '/new-topic',
        name: 'NewTopic',
        component: () => import('@/views/NewTopic.vue')
      },
    ]
  },
];