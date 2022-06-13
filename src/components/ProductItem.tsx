import React, { useContext, useEffect } from "react";
import "../styles/components/product-item.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Product } from "../lib/dataTypes/product";
import AppContext from "../context/AppContext";

interface ProductItemProps {
  product: Product;
}

const ProductItem = ({ product }: ProductItemProps) => {
  const { addToCart, state, removeFromCart } = useContext(AppContext);

  const handleClick = () => {
    isProductInCart() ? removeFromCart(product) : addToCart(product);
  };

  const isProductInCart = () =>
    state.cart.some((item: Product) => item.id === product.id) ? true : false;

  return (
    <div className="product-item">
      {product.images[1] ? (
        <img src={product?.images[1]} alt={product?.title} />
      ) : (
        <div className="product-item-image-not-available">
          Image not available
        </div>
      )}
      <div className="product-info">
        <div>
          <p>{product?.price}</p>
          <p>{product?.title}</p>
        </div>
        <figure
          onClick={() => {
            handleClick();
          }}
          className={isProductInCart() ? "selected" : ""}
        >
          {isProductInCart() ? (
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="product-item-cart"
            />
          ) : (
            <FontAwesomeIcon icon={faCartPlus} className="product-item-cart" />
          )}
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
