import store from '@/store'

export default function (next) {
  // let isLoggedIn = false

  if (store.state.isLoggedIn) {
    next()
  } else {
    next('/')
  }
}