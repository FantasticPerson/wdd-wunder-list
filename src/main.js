import Vue from 'vue'
import App from './App'
import './reset.css'
import dbconfig from './db'
import store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
dbconfig().then(()=>{
  window.my_vue = new Vue({
    el: '#app',
    store,
    render:h=>h(App)
  })
})

