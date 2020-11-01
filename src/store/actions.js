import { fetchUsers } from '../api/fetchUsers'
// import { searchDetails } from '../api/searchUserDetails'

export default {
  fetchUsers ({ commit }, query) {
    return new Promise((resolve, reject) => {
      commit('SEARCHING')
      commit('CLEAR_USERS')
      fetchUsers(query).then(response => {
        console.log('Response: ', response)
        const data = response.data.results
        const results = []
        data.forEach(user => {
          user.isComparing = false
          // searchDetails(user.username)
          results.push(user)
        })
        console.log('RESULTS: ', results)
        commit('STOP_SEARCHING')
        commit('SET_USERS', results)
        resolve()
      }).catch(error => {
        console.log('Error: ', error)
        commit('CLEAR_USERS')
        commit('STOP_SEARCHING')
        reject(error)
      })
    })
  },
  addToCompare ({ commit }, user) {
    commit('ADD_TO_COMPARE', user)
  },
  removeFromCompare ({ commit }, user) {
    commit('REMOVE_FROM_COMPARE', user)
  }
}
