import Vue from 'vue'
import Vuex from 'vuex'
import State from './state'
import Mutations from './mutations'
import Actions from './actions'
import Getter from './getter'
import createLogger from 'vuex/dist/logger'

const debug = process.env.NODE_ENV !== 'production'
console.log(Getter)
Vue.use(Vuex)
console.log(State)

export default new Vuex.Store({
    state:State,
    getters:Getter,
    actions:Actions,
    mutations:Mutations,
    strict: debug,
    plugins: debug ? [createLogger()] : []
})