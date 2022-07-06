import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/containers/my-order.scss';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import OrderItem from '../components/OrderItem';
import AppContext from '../context/AppContext';
import { Product } from '../lib/dataTypes/product';

function MyOrder() {
  const { state } = useContext(AppContext);
  const { setToggleOrders } = useContext(AppContext);

  const calculateTotalOrders = () => {
    let total = 0;
    state.cart.forEach((order: Product) => {
      total += order.price;
    });

    return total;
  };

  return (
    <aside className='my-order'>
      <div className='title-container'>
        <FontAwesomeIcon
          icon={faArrowLeft}
          style={{ cursor: 'pointer' }}
          onClick={() => {
            setToggleOrders(false);
          }}
        />
        <p className='title'>My order</p>
      </div>
      <div className='my-order-content'>
        <div className='my-order-content-list'>
          {state.cart.map((order: Product) => (
            <OrderItem order={order} key={`order-item-${order?.id}`} />
          ))}
        </div>
        <div className='order'>
          <p>
            <span>Total</span>
          </p>
          <p>${calculateTotalOrders()}</p>
        </div>
        <Link
          to='/checkout'
          className='primary-button'
          onClick={() => {
            setToggleOrders(false);
          }}
        >
          Checkout
        </Link>
      </div>
    </aside>
  );
}

export default MyOrder;
