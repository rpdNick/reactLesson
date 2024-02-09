import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./ProductItem.scss";

const ProductItem = () => {
  let [product, setProduct] = useState(null);
  let {productId} = useParams();
  console.log(productId)

  useEffect(()=> {
    axios.get(`https://dummyjson.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
        console.log(response.data)
      });
    }, []);

    if (!product) {
      return <div>Loading...</div>;
    }

  return (
    <div className="ProductItem container">
      <div className="product_tetle">Product Item</div>
      <div className="product_name">{product.title}</div>
      <img src={product.images[0]} alt="product" />
    </div>
  );
};

export default ProductItem;
