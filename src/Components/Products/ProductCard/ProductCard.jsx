import { NavLink } from "react-router-dom";
import "./ProductCard.scss";

const ProductCard = (props) => {
    // console.log(props)
  return (
    <div className="ProductCard">
      <div className="badge">Hot</div>
      <div className="product_tumb">
        <img src={props.product.images[0]} alt="product_image" />
      </div>
      <div className="product_details">
        <span className="product_catagory">{props.product.category}</span>
        <h4>
          <p>{props.product.brand}</p>
        </h4>
        <p>{props.product.description}</p>
        <div className="product_bottom_details">
          <div className="product_price">
            <small>rating: {props.product.rating}</small>
            <p>${props.product.price}</p>
          </div>
        </div>
        <div className="show_more">
          <NavLink to={`/products/${props.product.id}`}>
            <button className="button primary" >Show more</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
