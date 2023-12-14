import React from 'react';
import { Link } from 'react-router-dom';
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
        <Link to='/collection' className='nav-link' activeClassName='active'>
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
