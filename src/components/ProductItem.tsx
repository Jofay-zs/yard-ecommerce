import React, { useContext } from 'react';
import '../styles/components/product-item.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCartFlatbedSuitcase,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';
import { Product } from '../lib/dataTypes/product';
import AppContext from '../context/AppContext';

interface ProductItemProps {
  product: Product;
}

function ProductItem({ product }: ProductItemProps) {
  const { addToCart, state, removeFromCart } = useContext(AppContext);

  const isProductInCart = () => {
    return state.cart.some((item: Product) => item.id === product.id);
  };

  const handleClick = () => {
    if (isProductInCart()) {
      removeFromCart(product);
    } else {
      addToCart(product);
    }
  };

  return (
    <div className='product-item'>
      {product.images[1] ? (
        <img src={product?.images[1]} alt={product?.title} />
      ) : (
        <div className='product-item-image-not-available'>
          Image not available
        </div>
      )}
      <div className='product-info'>
        <div>
          <p>{product?.price}</p>
          <p className='product-title'>{product?.title}</p>
        </div>
        <button
          type='button'
          onClick={() => {
            handleClick();
          }}
          className={isProductInCart() ? 'selected' : ''}
        >
          {isProductInCart() ? (
            <FontAwesomeIcon icon={faCheck} className='product-item-cart' />
          ) : (
            <FontAwesomeIcon
              icon={faCartFlatbedSuitcase}
              className='product-item-cart'
            />
          )}
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
