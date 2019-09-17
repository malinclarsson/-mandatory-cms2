import React from "react";
import Navbar from "./Navbar";
import { FaTrashAlt } from 'react-icons/fa';

const Cart = () => {
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
            <td> <FaTrashAlt /> </td>
          </tr>
        </tbody>
      </table>
						</div>
						<button className='checkout'>Go to checkout</button>
    </div>
  );
};
export default Cart;
