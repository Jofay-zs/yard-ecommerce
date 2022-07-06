import { useState } from 'react';
import { Product } from '../lib/dataTypes/product';

const initialState = {
  cart: <Product[]>[],
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);
  const [toggleOrders, setToggleOrders] = useState(false);
  const [isAccountNavbarOpen, setIsAccountNavbarOpen] = useState(false);
  const [productFilter, setProductFilter] = useState('');

  const addToCart = (payload: Product) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeFromCart = (payload: Product) => {
    setState({
      ...state,
      cart: state.cart.filter((item) => item.id !== payload.id),
    });
  };

  return {
    state,
    toggleOrders,
    isAccountNavbarOpen,
    productFilter,
    addToCart,
    removeFromCart,
    setToggleOrders,
    setIsAccountNavbarOpen,
    setProductFilter,
  };
};

export default useInitialState;
