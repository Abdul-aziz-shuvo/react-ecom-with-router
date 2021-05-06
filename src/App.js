
import './App.css';

import Product from './product/Product'
import Home from './Home'


import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/"  exact component={Home} />
        <Route path="/product/:id" component={Product} />
        <Route path="/cart"  exact component={Home} />
       

      </Switch>
    </Router>
  );
}

export default App;
