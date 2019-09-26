import React, { useState } from 'react';

import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const [result, setResult] = useState(JSON.parse(localStorage.getItem('cart')) || []);

  //-----------------------------------------------------------------------
  function goToThanks() {
    alert('Go to Thanks')
    localStorage.removeItem('cart');
    alert('Succesfully bought ' + result.length + ' items!');
    //window.location.reload();
    // empty cart
}
//-----------------------------------------------------------------------

  return (
    <div>
      <Navbar />
      <h1>Checkout</h1>

      <div className='formContainer'>
        <form>
          <input type='hidden' /* value='' */></input>

          <div className='form-row'>
            <label>Firstname</label>
            <input
              type='text'
              placeholder='Firstname'
              required
              className='formInput'
            ></input>
          </div>

          <div>
            <label>Lastname</label>
            <input
              type='text'
              placeholder='Lastname'
              required
              className='formInput'
            ></input>
          </div>

          <div>
            <label>Email</label>
            <input
              type='email'
              placeholder='your.name@example.com'
              required
              className='formInput'
            ></input>
          </div>

          <div>
            <label>Street</label>
            <input
              type='text'
              placeholder='Street 1'
              required
              className='formInput'
            ></input>
          </div>
          <div>
            <label>Zip code</label>
            <input
              type='text'
              placeholder='000 00'
              required
              className='formInput'
            ></input>
          </div>
          <div>
            <label>City</label>
            <input
              type='text'
              placeholder='City'
              required
              className='formInput'
            ></input>
          </div>
        </form>
      </div>
      <Link to='/Thanks'>
        <button type='submit' className='pay' onClick={goToThanks}>Pay</button>
      </Link>  
    </div>
  );
};
export default Checkout;
