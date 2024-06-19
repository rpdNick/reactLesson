import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./ProductItem.scss";

const ProductItem = () => {
  let [product, setProduct] = useState(null);
  let { productId } = useParams();
  console.log(productId);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
        console.log(response.data);
      });
  }, []);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="ProductItem container">
      <div className="product_header">
        <div className="product_brand">{product.brand}</div>
        <div className="product_rating">Rating: {product.rating}</div>
      </div>
      <div className="columns_container">
        <div className="column_wrap">
          <div className="product_name">{product.title}</div>
          <img className="product_image" src={product.images[0]} alt="product" />
          <div className="price">{product.price}$</div>
        </div>
        <div className="column_wrap">{product.description}</div>
      </div>
    </div>
  );
};

export default ProductItem;
