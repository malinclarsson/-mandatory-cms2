import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { FaTrashAlt } from 'react-icons/fa';

const Cart = () => {
	// Local storage
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
              <input type="number" min={0} className='quantity' />
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
            <button className='nope'> <FaTrashAlt /> </button> {/* onClick={() => removeItem(cart)} */}
          </tr>
        </tbody>
      </table>
						</div>
						<button className='checkout' onClick={(<Link to='/Checkout'></Link>)}>Go to checkout</button>
    </div>
  );
};
export default Cart;
