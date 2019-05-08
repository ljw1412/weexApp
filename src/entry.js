/* global Vue */

/* weex initialized here, please do not move this line */
import router from './router'
import store from './store'
import App from '@/App.vue'
import { sync } from 'vuex-router-sync'
import mixins from '@/mixins'


// sync the router with the vuex store.
// this registers `store.state.route`
sync(store, router)

Vue.mixin(mixins)

/* eslint-disable no-new */
new Vue(Vue.util.extend({ el: '#root', router, store }, App))

router.push({ name: 'welcome' })
