import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Main from '../pages/main'

class AppRoutes extends Component {
  render() {
    return (
      <Switch>
        <Route to="/" component={Main} />
      </Switch>
    )
  }
}

export default AppRoutes
