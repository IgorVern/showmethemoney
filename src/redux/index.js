import thunk from 'redux-thunk'
import {createStore, applyMiddleware, combineReducers} from 'redux'

import {operations} from './modules/operations'
import * as operationsAPI from './api/operations'


export const rootReducer = combineReducers({
  operations,
})

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk.withExtraArgument({operationsAPI})),
)
