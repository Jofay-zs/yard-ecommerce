import React from "react";
import ProductItem from "../components/ProductItem";
import useGetProducts from "../hooks/useGetProducts";
import { Product } from "../lib/dataTypes/product";
import "../styles/containers/product-list.scss";

const API = "https://api.escuelajs.co/api/v1/products?limit=20&offset=1";

const ProductList = () => {
  const products = useGetProducts(API);

  return (
    <section className="main-container">
      <div className="product-list">
        {products.map((product: Product) => (
          <ProductItem product={product} key={product?.id} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
