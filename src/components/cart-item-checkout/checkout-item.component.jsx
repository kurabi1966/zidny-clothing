import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { removeItem, addItem, deleteItem } = useContext(CartContext);

  const deleteItemHandler = () => {
    deleteItem(cartItem);
  };

  const incrementItemQuantitiyHandler = () => {
    addItem(cartItem);
    // incrementItemQuantitiy(cartItem);
  };
  const decrementItemQuantitiyHandler = () => {
    removeItem(cartItem);
  };

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img alt={name} src={imageUrl} />
      </div>

      <span className="name">{name}</span>
      <span className="quantity">
        <i
          onClick={decrementItemQuantitiyHandler}
          className="fa-sharp fa-solid fa-circle-down"
        ></i>
        <span className="value"> {quantity}</span>
        <i
          onClick={incrementItemQuantitiyHandler}
          className="fa-sharp fa-solid fa-circle-up"
        ></i>
      </span>
      <span className="price">${price}</span>
      <span className="price">${price * quantity}</span>

      <div className="remove-button" onClick={deleteItemHandler}>
        <i className="fa fa-trash" aria-hidden="true"></i>
      </div>
    </div>
  );
};

export default CheckoutItem;
