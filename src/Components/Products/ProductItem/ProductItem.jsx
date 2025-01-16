import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Loader from "../../Loader/Loader";
import Reviews from "../../Comments/Comments";
import "./ProductItem.scss";

const ProductItem = () => {
  const navigate = useNavigate();

  let [product, setProduct] = useState(null);
  let { productId } = useParams();
  // console.log(productId);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${productId}`)
      .then((response) => {
        // console.log(response)
        setProduct(response.data);
      });
  }, [productId]);

  if (!product) {
    return <Loader />
  }

  return (
    <>
      <div className="ProductItem container">
        <button className="button primary back_button" onClick={() => navigate(-1)}>Back</button>
        <div className="product_details">
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
      </div>
      <Reviews /> 
    </>
  );
};

export default ProductItem;
