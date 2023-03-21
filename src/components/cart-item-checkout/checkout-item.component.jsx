import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import {
  CeckoutItemContainer,
  ImageContainer,
  Image,
  Field,
  Quantity,
  Italic,
  RemoveButton,
  Value,
} from "./checkout-item.styles";

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
    <CeckoutItemContainer>
      <ImageContainer>
        <Image alt={name} src={imageUrl} />
      </ImageContainer>

      <Field>{name}</Field>
      <Quantity>
        <Italic
          onClick={decrementItemQuantitiyHandler}
          className="fa-sharp fa-solid fa-circle-down"
        ></Italic>
        <Value> {quantity}</Value>
        <Italic
          onClick={incrementItemQuantitiyHandler}
          className="fa-sharp fa-solid fa-circle-up"
        ></Italic>
      </Quantity>
      <Field>${price}</Field>
      <Field>${price * quantity}</Field>

      <RemoveButton onClick={deleteItemHandler}>
        <i className="fa fa-trash" aria-hidden="true"></i>
      </RemoveButton>
    </CeckoutItemContainer>
  );
};

export default CheckoutItem;
