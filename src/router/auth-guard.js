import {store} from '../store'

// to refers to the router we are going to
// from refers to the router we are coming from
// next simply specifies that the function can continue
export default (to, from, next) => {
    if (store.getters.user) {
        next()
    } else {
        next('/signin')
    }
}