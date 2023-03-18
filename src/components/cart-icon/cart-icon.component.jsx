import "./cart-icon.styles.scss";
import { ReactComponent as ShopingIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
const CartIcon = () => {
  const { isOpen, cartCount, setIsOpen } = useContext(CartContext);

  const OnClickHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="cart-icon-container" onClick={OnClickHandler}>
      <ShopingIcon className="shoping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
