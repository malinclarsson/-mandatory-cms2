import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from './components/Main.js';
import Details from './components/Details.js';
import Reviews from './components/Reviews.js';
import Cart from './components/Cart.js';
import Checkout from './components/Checkout.js';
import Thanks from './components/Thanks.js';
import NotFound from './components/NotFound.js';

const App = () => {
  const [cart, setCart] = useState({});
  console.log("cart app",cart);
  

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/Details/:id' render={(props) => <Details {...props} cart={cart} setCart={setCart} />} />
        <Route path='/Reviews/' component={Reviews} />
        <Route path='/Cart' render={() => <Cart cart={cart} setCart={setCart} />} />
        <Route path='/Checkout' component={Checkout} />
        <Route path='/Thanks' component={Thanks} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
