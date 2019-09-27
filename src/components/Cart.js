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
//------------------------------------------------------
// totalsumma för ordern
//------------------------------------------------------
  let array = [59, 59, 59, 59, 59, 599, 129, 249]; // FABRICATED from cart
  let totalSum;
 
  function getSum(total, num) {
    return total + Math.round(num);
  }
  
  function myFunction(item) {
    totalSum = array.reduce(getSum, 0);
    console.log('räknar');
  }

  myFunction();
//------------------------------------------------------


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
          {result.length && result.map(cart => ( // Warning: Text nodes cannot appear as a child of <tbody>
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
      
      {result.length && result.map(cart => (
        <p>{cart.price}</p> // få dessa till en array
      ))}
      <h2 className='total'> Total cost of this order: {totalSum}sek</h2>

      <Link to='/Checkout'>
        <button className='checkout'>Go to checkout</button>
      </Link>
      
    </div>
  );
};
export default Cart;
