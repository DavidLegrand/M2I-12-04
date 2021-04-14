import { combineReducers } from 'redux'

import usersReducer from './users'
import todosReducer from './todos'

const rootReducer = combineReducers({
  todos: todosReducer,
  users: usersReducer
})

export default rootReducer