import initialState from './state'

// Reducer
const todosReducer = (state = initialState.todos, action) => {
  switch (action.type) {
    case 'TODOS/GET/SUCCESS':
      return { ...state, loading: false, error: null, list: action.payload }
    case 'TODOS/GET/FAILURE':
      return { ...state, loading: false, error: action.payload.error }
    case 'TODOS/GET/STARTED':
      return { ...state, loading: true, error: null }
    default:
      return state
  }
}

export default todosReducer