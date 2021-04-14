import initialState from './state'

// Reducer
const usersReducer = (state = initialState.users, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default usersReducer