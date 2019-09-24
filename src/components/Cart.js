import React/*,{ useState }*/ from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';

const Cart = () => {

//-----------------------------------------------------------------------
function goToCheckout() {
  alert('Go to Checkout')
}
//-----------------------------------------------------------------------

// remove item in cart
// total sum
// purchase/buy/submit -> go to checkout
// emty cart -> timeout -> back to home

  return (
    <div>
      <Navbar />
      <h1>Cart</h1>

      <div className='tableContainer'>
						<table>
        <thead>
          <tr>
            <th>Product</th>
            <th> Quantity: 
              <input type='number' min={0} className='quantity' />
            </th>
            <th>Price</th>
            <th>Total amount</th>
												<th>No?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Artikel</td>
            <td>Antal</td>
            <td>Pris</td>
            <td>Slutsumma</td>
            <button className='nope' > <FaTrashAlt /> </button>
          </tr>
        </tbody>
      </table>
						</div>
						<Link to='/Checkout'>
              <button className='checkout' onClick={goToCheckout}>Go to checkout</button>
            </Link>
    </div>
  );
};
export default Cart;
