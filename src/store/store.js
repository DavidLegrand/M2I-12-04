
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/index'
import { composeWithDevTools } from 'redux-devtools-extension'
import ReduxThunk from 'redux-thunk'


// Store
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk))
)

export default store