import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/menu.scss';

function Menu() {
  return (
    <div className='navbar-email-menu'>
      <ul>
        <li>
          <Link to='/orders' className='title'>
            My orders
          </Link>
        </li>
        <li>
          <Link to='/account'>My account</Link>
        </li>
        <li>
          <Link to='/'>Sign out</Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
