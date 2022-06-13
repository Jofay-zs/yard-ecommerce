import React from "react";
import OrderItem from "../components/OrderItem";
import "../styles/pages/orders.scss";

const Orders = () => {
  return (
    <div className="orders">
      <div className="orders-container">
        <h1 className="title">My orders</h1>
        <div className="orders-content">
          <OrderItem />
        </div>
      </div>
    </div>
  );
};

export default Orders;
