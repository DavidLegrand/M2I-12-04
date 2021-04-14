import axios from 'axios'
import API from 'api'
const TODOS_GET_SUCCESS = payload => ({ type: 'TODOS/GET/SUCCESS', payload })
const TODOS_GET_FAILURE = error => ({ type: 'TODOS/GET/FAILURE', payload: { error } })
const TODOS_GET_STARTED = () => ({ type: 'TODOS/GET/STARTED' })


const TODOS_GET = (...params) => {
  return (dispatch, getstate) => {
    dispatch(TODOS_GET_STARTED())
    axios.get(API)
      .then(response => dispatch(TODOS_GET_SUCCESS(response.data)))
      .catch(err => dispatch(TODOS_GET_FAILURE(err)))
  }
}

export default TODOS_GET