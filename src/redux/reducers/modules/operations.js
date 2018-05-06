
const GET_OPERATIONS = '/operations/GET_OPERATIONS'

const initState = {
  loading: true,
  operations: [],
  error: null,
}

export const operations = (state = initState, {type, payload}) => {
  switch (type) {
  case GET_OPERATIONS:
    return initState
  default:
    return state
  }
}
