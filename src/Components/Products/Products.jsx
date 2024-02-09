import "./Products.scss";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ProductCard from "./ProductCard/ProductCard";
import axios from "axios";

const Products = () => {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((response) => {
      setProducts(response.data.products);
    });
  }, []);

  if (!products) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Products">
      {products.map((productCard) => (
        <ProductCard key={uuidv4()} product={productCard} />
      ))}
    </div>
  );
};

export default Products;
