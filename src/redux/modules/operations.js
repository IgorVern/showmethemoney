import {reject, fulfill} from '../helpers/actions'

const GET_OPERATIONS = '/operations/GET_OPERATIONS'

const initState = {
  loading: true,
  data: [],
  error: null,
}

export const getOperations = () => (dispatch, getStore, {operationsAPI}) => operationsAPI.fetchOperations()
  .then((data) => dispatch(fulfill(GET_OPERATIONS, data)))
  .catch((error) => dispatch(reject(GET_OPERATIONS, error)))

export const operations = (state = initState, {type, payload}) => {
  switch (type) {
  case GET_OPERATIONS:
    return initState
  case `${GET_OPERATIONS}_FULFILLED`:
    return {...state, loading: false, data: payload}
  case `${GET_OPERATIONS}_REJECTED`:
    return {...state, error: payload}
  default:
    return state
  }
}
