
import './App.css';
import Products from './product/Products'
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
import Cart from './product/Cart'
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/"  exact component={Home} />
        <Route path="/product/:id" component={Product} />
        <Route path="/cart" component={Cart} />

      </Switch>
    </Router>
  );
}

export default App;
