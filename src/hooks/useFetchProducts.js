// src/hooks/useFetchProducts.js
import { useEffect, useState } from "react";

const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  // custom hook to fetch data which return product and error

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => setError(err.message));
  }, []);

  return { products, error };
};

export default useFetchProducts;
