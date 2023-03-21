import {
  CartItemContainer,
  Image,
  ItemDetails,
  Name,
  Total,
} from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <Image alt={name} src={imageUrl} />
      <ItemDetails>
        <Name>{name}</Name>
        <Total>
          {quantity} x ${price} = ${price * quantity}
        </Total>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
