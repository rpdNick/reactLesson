import "./Products.scss";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ProductCard from "./ProductCard/ProductCard";
import Loader from "../Loader/Loader";
import axios from "axios";

const Products = () => {
  let [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setProducts(response.data.products);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loader />;
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
