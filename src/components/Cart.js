import React, { useState } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';

const Cart = () => {
  const [result, setResult] = useState(JSON.parse(localStorage.getItem('cart')) || {});

  function removeItem(id) {
    const cart = {...result};
    delete cart[id];
    setResult(cart);
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  function updateItem(id, quantity){
    const cart = {...result};
    cart[id].quantity = quantity;
    setResult(cart);
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  console.log("cart", result);
  const cartItems = Object.values(result);

  return (
    <div>
      <Navbar />
      <h1>Cart</h1>

      <div className='tableContainer'>
        <table>
          
          <thead>
            <tr>
              <th>Product</th>
              <th>{' '}Quantity:</th>
              <th>Price</th>  
              <th>Total amount</th>
              <th>No?</th>
            </tr>
          </thead>

          <tbody>

          {/*} // IF-sats för att kolla ifall items redan finns i cart/samma --> slå ihop antal och pris */}
          {cartItems.map((cart) => ( // Warning: Text nodes cannot appear as a child of <tbody>
            <tr>
              <td>{cart.name}</td>
              <td><input type='number' value={cart.quantity || 1} onChange={e => updateItem(cart._id, e.target.value)} min={1} placeholder='1' className='quantity' /></td>
              <td>{cart.price} sek</td>
              <td>Slutsumma</td>
              <td className='nope' onClick={() => removeItem(cart._id)}>{' '}<FaTrashAlt />{' '}</td>
            </tr>
          ))}
          </tbody>

        </table>
      </div>
      
      <h2 className='total'> Total cost of this order: {Math.round(cartItems.reduce((total, cart) => total + (parseFloat(cart.price) * (cart.quantity || 1)), 0))}sek</h2>

      <Link to='/Checkout'>
        <button className='checkout'>Go to checkout</button>
      </Link>
      
    </div>
  );
};
export default Cart;
