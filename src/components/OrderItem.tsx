import React, { useContext } from "react";
import "../styles/components/order-item.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Product } from "../lib/dataTypes/product";
import AppContext from "../context/AppContext";

interface OrderItemProps {
  order: Product;
}

const OrderItem = ({ order }: OrderItemProps) => {
  const { removeFromCart } = useContext(AppContext);

  return (
    <div className="order-item">
      <figure>
        <img src={order?.images[0]} alt={order?.title} />
      </figure>
      <p>{order?.title}</p>
      <p>{order?.price}</p>
      <FontAwesomeIcon
        icon={faTimes}
        onClick={() => {
          removeFromCart(order);
        }}
      />
    </div>
  );
};

export default OrderItem;
