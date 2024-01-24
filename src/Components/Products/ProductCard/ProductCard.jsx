import "./ProductCard.scss";

const ProductCard = (props) => {
  return (
    <div className="ProductCard">
      <div className="badge">Hot</div>
      <div className="product_tumb">
        <img src="" alt="product_image" />
      </div>
      <div className="product_details">
        <span className="product_catagory">Women,bag</span>
        <h4>
          <p>Women leather bag</p>
        </h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
          possimus nostrum!
        </p>
        <div className="product_bottom_details">
          <div className="product_price">
            <small>$96.00</small>$230.99
          </div>
        </div>
        <div className="show_more">
          <button className="button primary">Show more</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
