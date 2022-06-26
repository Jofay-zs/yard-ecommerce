import React from 'react';
import '../styles/pages/checkout.scss';

function Checkout() {
  return (
    <div className='checkout'>
      <div className='checkout-container'>
        <h1 className='title'>My order</h1>
        <div className='checkout-content'>
          <div className='order'>
            <p>
              <span>03.25.21</span>
              <span>6 articles</span>
            </p>
            <p>$560.00</p>
          </div>
        </div>
        You must insert here an order item
      </div>
    </div>
  );
}

export default Checkout;
