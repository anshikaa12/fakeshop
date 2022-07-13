import axios from "axios";
import { useEffect, useState } from "react";

function useProducts() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((data) => {
        setProducts(data.data);
        console.log(data.data);
      })
      .catch((e) => console.error(e));
  }, []);
  return { products };
}

export { useProducts };
