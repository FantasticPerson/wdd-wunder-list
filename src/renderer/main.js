import Vue from 'vue'
import App from './App'
import './reset.css'
import dbconfig from './db'
import store from './store'
import Reducers from './store/reducers'
import vmodal from 'vue-js-modal'

Vue.config.productionTip = false
Vue.use(vmodal)

/* eslint-disable no-new */
dbconfig().then(()=>{
  window.my_vue = new Vue({
    el: '#app',
    store,
    render:h=>h(App)
  })
  setTimeout(()=>{
    initData()
  },0)
})

function initData(){
  Promise.all([
    Reducers.getTodoList(),
    Reducers.getSubTodoList(),
    // Reducers.getUserInfo(),
    Reducers.getFilterList()
  ]).then(()=>{
    let FilterList = my_vue.$store.getters.filters
    my_vue.$store.commit('updateFilterId',my_vue.$store.getters.filters[0].id)
  })
}

