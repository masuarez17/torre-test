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
  }
}
