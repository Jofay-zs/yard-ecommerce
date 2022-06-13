import { useEffect, useState } from "react";
import axios from "axios";

const useGetProducts = (API: string) => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const { data } = await axios(API);
    setProducts(data);
  };

  useEffect(() => {
    getProducts().then();
  }, []);

  return products;
};

export default useGetProducts;
