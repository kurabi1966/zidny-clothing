import { ReactComponent as ShopingIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import {
  CartIconContainer,
  ShopingIconContainer,
  ItemCount,
} from "./cart-icon.styles";

const CartIcon = () => {
  const { isOpen, cartCount, setIsOpen } = useContext(CartContext);

  const OnClickHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <CartIconContainer onClick={OnClickHandler}>
      <ShopingIconContainer>
        <ShopingIcon />
      </ShopingIconContainer>
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
