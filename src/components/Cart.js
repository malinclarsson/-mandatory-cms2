import React/*,{ useState }*/ from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';

const Cart = () => {

  /*
  const [result, setResult] = useState(JSON.parse(localStorage.getItem('cart')) || []); //cart ELLER tom array

  function clearCart() { // is defined but never used
    localStorage.deleteItem('cart');
    console.log('Cart cleared');
    window.location.reload();
  }

  function submitCart() { // is defined but never used
    localStorage.deleteItem('cart');
    console.log('Succesfully bought ' + result.length + ' items!');

    window.location.reload();
  }

  function deleteItem(value) {
    const index = result.findIndex(cart => cart.Name === value.Name);
    const cart = [...result];
    if (index > -1) {
      cart.splice(index, 1);
      setResult(cart);
      localStorage.setItem('cart', JSON.stringify(cart));
    }
    console.log('item removed');
  }
  */
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
						<button className='checkout' onClick={(<Link to='/Checkout'></Link>)}>Go to checkout</button>
    </div>
  );
};
export default Cart;
