import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    users: [],
    user: {}
  },
  mutations: {
    setUsers(state, users) {
      state.users = users
    },

    setUser(state, user) {
      state.user = user
    }
  },
  actions: {
    async fetchUsers({commit}) {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        commit('setUsers', response.data)
      } catch(e) {
        console.log(e)
      }
    },

    async fetchUser({commit}, payload) {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${payload.id}`)
        commit('setUser', response.data)
      } catch(e) {
        console.log(e)
      }
    }
  },
  modules: {
  }
})
