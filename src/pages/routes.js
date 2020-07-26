import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ProductPage from '../pages/products'

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <ProductPage />
        </Route>
      </Switch>
    </Router>
  )
}
