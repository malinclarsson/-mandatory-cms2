import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from './components/Main.js';
import Details from './components/Details.js';
import Cart from './components/Cart.js';
import Checkout from './components/Checkout.js';
import Thanks from './components/Thanks.js';
import NotFound from './components/NotFound.js';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/Details' component={Details} />   {/* <Route path='/Details/:id' component={Details} /> */}
        <Route path='/Cart' component={Cart} />
        <Route path='/Checkout' component={Checkout} />
        <Route path='/Thanks' component={Thanks} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
