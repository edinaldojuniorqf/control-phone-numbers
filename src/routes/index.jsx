import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Phones from '../pages/phones/List'
import PhonesCreate from '../pages/phones/Create'
import PhonesEdit from '../pages/phones/Edit'

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Phones} exact />
      <Route path="/phone/new" component={PhonesCreate} />
      <Route path="/phone/edit/:id" component={PhonesEdit} />
    </Switch>
  )
}

export default Routes
