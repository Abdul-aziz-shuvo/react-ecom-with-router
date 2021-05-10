
import './App.css';

import Product from './product/Product'
import Home from './Home'
import Cart from './product/Cart'

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {ProductProvider} from './context/ProductContext'

function App() {
  return (
    <Router>
     <ProductProvider>
     <Switch>
        <Route path="/"  exact component={Home} />
        <Route path="/product/:id" component={Product} />
        <Route path="/cart"  exact component={Cart} />
      </Switch>
     </ProductProvider>
    </Router>
  );
}

export default App;
