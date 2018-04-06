import Vue from 'vue'
import Vuex from 'vuex'
import State from './state'
import Mutations from './mutations'
import Actions from './actions'
import createLogger from 'vuex/dist/logger'

const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)

export default new Vuex.Store({
    state:State,
    actions:Actions,
    mutations:Mutations,
    strict: debug,
    plugins: debug ? [createLogger()] : []
})