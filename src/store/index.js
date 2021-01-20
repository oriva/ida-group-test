import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        libraries: []
    },
    mutations: {
        SET_CATALOG: (state, response) => {
            state.libraries = response
        }
    },
    getters: {
        setLibraries(state, response) {
            state.libraries = response
        },
        getLibraries(state) {
            return state.libraries
        },
        getLibrary(state) {
            return (id) => {
                return state.reports.find((item) => {
                    return item.id === id
                })
            }
        }
    },
    actions: {
        setJsonLibrary({commit, libraries}) {
            commit('increment', libraries)
        }
    }
});

export default store