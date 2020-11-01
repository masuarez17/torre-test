export default {
  SET_USERS (state, users) {
    state.usersTableData = users
    console.log(state.usersTableData)
    state.haveResults = true
  },
  CLEAR_USERS (state) {
    state.usersTableData = []
    state.haveResults = false
  },
  SEARCHING (state) {
    state.isSearching = true
  },
  STOP_SEARCHING (state) {
    state.isSearching = false
  },
  ADD_TO_COMPARE (state, user) {
    state.compareTableData.push(user)
  },
  REMOVE_FROM_COMPARE (state, user) {
    const index = state.compareTableData.indexOf(user)
    state.compareTableData.splice(index, 1)
  }
}
