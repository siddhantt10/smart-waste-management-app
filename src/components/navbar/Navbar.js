import React from 'react';
import { Link } from 'react-router-dom'; // Make sure to import Link if you're using React Router
import './Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
      <div className='logo'>
        <Link to='/'>
          <img src='logo-lte.png' alt='Logo' />
        </Link>
      </div>

      <div className='nav-links'>
        <Link to='/' className='nav-link' activeClassName='active'>
          Dashboard
        </Link>
        <Link to='/map' className='nav-link' activeClassName='active'>
          Map
        </Link>
        <Link to='/addform' className='nav-link' activeClassName='active'>
          Add Sensor
        </Link>
      </div>

      <div className='logout'>
        <Link to='/logout' className='nav-link' activeClassName='active'>
          Logout
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
