import React, { useContext, useEffect } from 'react';
import ProductItem from '../components/ProductItem';
import AppContext from '../context/AppContext';
import useGetProducts from '../hooks/useGetProducts';
import { Product } from '../lib/dataTypes/product';
import '../styles/containers/product-list.scss';

const API = 'https://api.escuelajs.co/api/v1/products?limit=500&offset=1';

function ProductList() {
  const products = useGetProducts(API);
  const { productFilter } = useContext(AppContext);

  useEffect(() => {
    products.forEach((product: Product) => {
      console.log(product.category.name);
    });
  }, [products]);

  return (
    <section className='main-container'>
      <div className='product-list'>
        {productFilter === ''
          ? products.map((product: Product) => (
              <ProductItem product={product} key={product?.id} />
            ))
          : products
              .filter(
                (product: Product) =>
                  product.category.name.toLowerCase() ===
                  productFilter.toLowerCase(),
              )
              .map((product: Product) => (
                <ProductItem product={product} key={product?.id} />
              ))}
      </div>
    </section>
  );
}

export default ProductList;
