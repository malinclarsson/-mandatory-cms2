import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import '../index.css';

const Navbar = () => {
  return (
    <div className='link'>
      <Link to='/'>Home</Link>
      <Link to='/Cart'>
        <FaShoppingCart />
      </Link>
    </div>
  );
};

export default Navbar;
