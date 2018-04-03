import Vue from 'vue'
import App from './App'
import './reset.css'
import dbconfig from './db'

Vue.config.productionTip = false

/* eslint-disable no-new */
dbconfig().then(()=>{
  new Vue({
    el: '#app',
    render:h=>h(App)
  })
})

