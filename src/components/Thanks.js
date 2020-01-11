import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from './Navbar';

const Thanks = () => {
  console.log('Cart is now empty');

  return (
    <div>
      <Helmet>
        <title>Thank you!</title>
      </Helmet>
      <Navbar />

      <h1>Thank you for shopping!</h1>
    </div>
  );
};
export default Thanks;
