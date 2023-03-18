import "./product-card.styles.scss";
import Button from "../button/button.component";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const ProductCard = ({ product }) => {
  const { addItem } = useContext(CartContext);

  const { name, imageUrl, price } = product;
  const addItemToCartHandler = () => {
    addItem(product);
  };
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <Button buttonType="inverted" onClick={addItemToCartHandler}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;

/**
 * 
 *     <div key={id} className="product-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="product-body-container">
        <h2>{name.toUpperCase()}</h2>
        <h3>{`$${price}`}</h3>
        <p>Buy Now</p>
      </div>
    </div>
 */
