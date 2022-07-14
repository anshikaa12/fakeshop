import axios from "axios";
import { useEffect, useState } from "react";

function useProducts() {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProducts(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => getProducts, []);
  return { products };
}

export { useProducts };
