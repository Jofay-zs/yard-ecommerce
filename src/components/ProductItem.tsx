import React, { useContext, useEffect } from "react";
import "../styles/components/product-item.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartFlatbedSuitcase } from "@fortawesome/free-solid-svg-icons";
import { Product } from "../lib/dataTypes/product";
import AppContext from "../context/AppContext";

interface ProductItemProps {
  product: Product;
}

const ProductItem = ({ product }: ProductItemProps) => {
  const { addToCart } = useContext(AppContext);

  const handleClick = (item: Product) => {
    addToCart(item);
  };

  return (
    <div className="product-item">
      {product.images[1] ? (
        <img src={product?.images[1]} alt={product?.title} />
      ) : (
        <div className="product-item-image-not-available">Image not available</div>
      )}
      <div className="product-info">
        <div>
          <p>{product?.price}</p>
          <p>{product?.title}</p>
        </div>
        <figure
          onClick={() => {
            handleClick(product);
          }}
        >
          <FontAwesomeIcon
            icon={faCartFlatbedSuitcase}
            className="prduct-item-cart"
          />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
