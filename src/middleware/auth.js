import store from '@/store'

export default function (next) {
  if (store.state.isLoggedIn) {
    next()
  } else {
    next('/posts')
  }
}