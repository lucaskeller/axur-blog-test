import React, { Component } from 'react'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import history from './history'

import AppRoutes from './routes'

import './styles/main.scss'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <AppRoutes />
        </Router>
      </Provider>
    )
  }
}

export default App
