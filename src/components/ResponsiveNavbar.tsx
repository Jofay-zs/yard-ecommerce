import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/responsive-navbar.scss';

function ResponsiveNavbar() {
  const { setProductFilter, setIsNavbarOpen } = useContext(AppContext);
  return (
    <nav className='responsive-navbar'>
      <div className='responsive-navbar-categories'>
        <h4>CATEGORIES</h4>
        <Link to='/'>
          <ul>
            <li>
              <button
                type='button'
                onClick={() => {
                  setProductFilter('');
                  setIsNavbarOpen(false);
                }}
              >
                All
              </button>
            </li>
            <li>
              <button
                type='button'
                onClick={() => {
                  setProductFilter('clothes');
                  setIsNavbarOpen(false);
                }}
              >
                Clothes
              </button>
            </li>
            <li>
              <button
                type='button'
                onClick={() => {
                  setProductFilter('electronics');
                  setIsNavbarOpen(false);
                }}
              >
                Electronics
              </button>
            </li>
            <li>
              <button
                type='button'
                onClick={() => {
                  setProductFilter('furniture');
                  setIsNavbarOpen(false);
                }}
              >
                Furnitures
              </button>
            </li>
            <li>
              <button
                type='button'
                onClick={() => {
                  setProductFilter('shoes');
                  setIsNavbarOpen(false);
                }}
              >
                Shoes
              </button>
            </li>
            <li>
              <button
                type='button'
                onClick={() => {
                  setProductFilter('others');
                  setIsNavbarOpen(false);
                }}
              >
                Others
              </button>
            </li>
          </ul>
        </Link>
      </div>
      <div className='responsive-navbar-account'>
        <ul>
          <li>
            <Link
              to='/orders'
              onClick={() => {
                setIsNavbarOpen(false);
              }}
            >
              My orders
            </Link>
          </li>
          <li>
            <Link
              to='/account'
              onClick={() => {
                setIsNavbarOpen(false);
              }}
            >
              My account
            </Link>
          </li>
          <li>
            <Link
              to='/'
              onClick={() => {
                setIsNavbarOpen(false);
              }}
            >
              Sign out
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default ResponsiveNavbar;
