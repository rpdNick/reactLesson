import "./ProductCard.scss";

 function showMoreHendler() {
    console.log('show more');
 }

const ProductCard = (props) => {
    
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
          <button className="button primary" onClick={showMoreHendler}>Show more</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
