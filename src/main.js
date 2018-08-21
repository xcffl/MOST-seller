// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VMenu,
  VToolbar,
  transitions,
  VCard,
  VForm,
  VTextField,
  VParallax,
  VTabs,
  VDivider,
  VDataTable,
  VDataIterator,
} from 'vuetify'
import '../node_modules/vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    transitions,
    VCard,
    VForm,
    VTextField,
    VMenu,
    VParallax,
    VTabs,
    VDivider,
    VDataTable,
    VDataIterator,
  }
})

Vue.config.productionTip = false


import AV from "leancloud-storage";

var APP_ID = "gv3b8YLk2FJivsHpsEHlf81U-9Nh9j0Va";
var APP_KEY = "StWz5nlyJxOxeplQn87UyDgR";

AV.init({
  appId: APP_ID,
  appKey: APP_KEY,
});
Vue.prototype.$AV = AV;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

