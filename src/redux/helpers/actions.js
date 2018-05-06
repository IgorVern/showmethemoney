export const fulfill = (actionName, data) => ({
  type: `${actionName}_FULFILLED`,
  payload: data,
})

export const reject = (actionName, error) => ({
  type: `${actionName}_REJECTED`,
  payload: error,
})
