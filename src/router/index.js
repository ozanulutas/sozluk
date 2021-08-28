import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '@/router/routes'


Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  if(to.meta.middleware) {
    const middleware = require(`@/middleware/${to.meta.middleware}`)
    middleware ? middleware.default(next) : next()
  } else {
    next()
  }
})


export default router
