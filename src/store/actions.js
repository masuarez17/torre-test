import { fetchUsers } from '../api/fetchUsers'

export default {
  fetchUsers ({ commit }, query) {
    commit('SEARCHING')
    fetchUsers(query).then(response => {
      console.log('Response: ', response)
      commit('STOP_SEARCHING')
      commit('SET_USERS', response.data.results)
    }).catch(error => {
      console.log('Error: ', error)
      commit('CLEAR_USERS')
    })
  }
}
