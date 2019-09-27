import React, { useState } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';

const Cart = () => {

  const [result, setResult] = useState(JSON.parse(localStorage.getItem('cart')) || []);

  function removeItem(value) {
    const index = result.findIndex(cart => cart.name === value.name);
    const cart = [...result];
    if (index > -1) {
      cart.splice(index, 1);
      setResult(cart);
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }

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
          {result.length && result.map(cart => ( // Warning: Text nodes cannot appear as a child of <tbody>.
            <tr>
              <td>{cart.name}</td>
              <td><input type='number' min={1} placeholder='1' className='quantity' /></td>
              <td>{cart.price} sek</td>
              <td>Slutsumma</td>
              <td className='nope' onClick={() => removeItem(cart)}>{' '}<FaTrashAlt />{' '}</td>

            </tr>
          ))}
          </tbody>

        </table>
      </div>

      <Link to='/Checkout'>
        <button className='checkout'>Go to checkout</button> {/* onClick={goToCheckout} */}
      </Link>
      
    </div>
  );
};
export default Cart;
