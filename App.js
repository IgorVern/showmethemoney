import React from 'react'
import {AppRegistry} from 'react-native'
import {Provider} from 'react-redux'

import {Container} from './src/app'
import {store} from './src/redux'

const App = () => (
  <Provider store={store}>
    <Container />
  </Provider>
)

export default App

AppRegistry.registerComponent('showmethemoney', () => App)
