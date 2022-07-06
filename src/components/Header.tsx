import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCartPlus,
  faBarsStaggered,
  faCaretDown,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import navbarLogo from '../assets/menu.png';
import AppContext from '../context/AppContext';
import Menu from './Menu';
import MyOrder from '../containers/MyOrder';
import ResponsiveNavbar from './ResponsiveNavbar';

function Header() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const { isAccountNavbarOpen, setIsAccountNavbarOpen } =
    useContext(AppContext);
  const { toggleOrders, setToggleOrders, setProductFilter } =
    useContext(AppContext);
  const { state } = useContext(AppContext);

  return (
    <nav className='navbar'>
      <button type='button' className='navbar-button'>
        <FontAwesomeIcon
          icon={faBarsStaggered}
          onClick={() => {
            setIsNavbarOpen(!isNavbarOpen);
          }}
        />
      </button>

      <Link to='/' className='navbar-header'>
        <img src={navbarLogo} alt='YARD-Sale' className='navbar-header-logo' />
        <div className='navbar-header-title'>
          <span>YARD </span>
          <span> Sale</span>
        </div>
      </Link>

      <section className='navbar-list'>
        <ul>
          <li>
            <button
              type='button'
              onClick={() => {
                setProductFilter('');
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
              }}
            >
              Others
            </button>
          </li>
        </ul>
      </section>

      <section className='navbar-right'>
        <ul>
          <li className='navbar-email'>
            <button
              type='button'
              onClick={() => setIsAccountNavbarOpen(!isAccountNavbarOpen)}
              className='navbar-email-button'
            >
              jofayzs19@gmail.com
              <FontAwesomeIcon icon={faCaretDown} />
            </button>
            {isAccountNavbarOpen && <Menu />}
          </li>
          {toggleOrders && <MyOrder />}
          <li className='navbar-shopping-cart'>
            <button
              type='button'
              onClick={() => {
                setToggleOrders(!toggleOrders);
              }}
            >
              <FontAwesomeIcon icon={faCartPlus} />
              <div style={{ fontSize: '12px' }}>
                {state.cart.length > 0 ? (
                  state.cart.length
                ) : (
                  <FontAwesomeIcon icon={faPlus} />
                )}
              </div>
            </button>
          </li>
        </ul>
      </section>
      {isNavbarOpen && <ResponsiveNavbar />}
    </nav>
  );
}

export default Header;
