import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        libraries: []
    },
    mutations: {
        SET_LIBRARIES: (state, response) => {
            state.libraries = response
        }
    },
    actions: {
        setJsonLibrary({commit}, libraries) {
            commit('SET_LIBRARIES', libraries)
        }
    },
    getters: {
        getLibraries(state) {
            return state.libraries
        },
        getLibrary: (state) => (id) => {
            console.log(state.libraries)
            console.log(id)
            return state.libraries.find((item) => {
                return parseInt(item.id) === parseInt(id)
            })
        }
    }
});

export default store