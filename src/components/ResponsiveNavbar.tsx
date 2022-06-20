import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/responsive-navbar.scss';

function ResponsiveNavbar() {
  return (
    <nav className='responsive-navbar'>
      <div className='responsive-navbar-categories'>
        <h4>CATEGORIES</h4>
        <ul>
          <li>
            <Link to='/'>All</Link>
          </li>
          <li>
            <Link to='/'>Clothes</Link>
          </li>
          <li>
            <Link to='/'>Electronics</Link>
          </li>
          <li>
            <Link to='/'>Furnitures</Link>
          </li>
          <li>
            <Link to='/'>Toys</Link>
          </li>
          <li>
            <Link to='/'>Others</Link>
          </li>
        </ul>
      </div>
      <div className='responsive-navbar-account'>
        <ul>
          <li>
            <a href='/'>My orders</a>
          </li>
          <li>
            <a href='/'>My account</a>
          </li>
          <li>
            <a href='/'>Sign out</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default ResponsiveNavbar;
