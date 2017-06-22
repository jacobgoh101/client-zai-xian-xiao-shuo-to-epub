// The Vue build version to load with the `import` command (runtime-only or
// standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-light.css' // use carbon theme
import VuexStore from './vuex/store'
import {sync} from 'vuex-router-sync'
Vue.use(MuseUI)
Vue.use(Vuex)

const store = new Vuex.Store(VuexStore)
sync(store, router)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({el: '#app', router, store, template: '<App/>', components: {
    App
  }})
