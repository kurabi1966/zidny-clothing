import Button from "../button/button.component";
import "./cart-dropdown.styles.scss";
import { Fragment, useContext } from "react";
import { CartContext } from "../../context/cart.context";
import CartItem from "../cart-item/cart-item.component";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const navigate = useNavigate();

  const { cartItems, cartAmount, setIsOpen } = useContext(CartContext);
  const onClickHandler = () => {
    setIsOpen(false);
    navigate("/checkout", { replace: true });
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
        {cartItems.length > 0 && (
          <Fragment>
            <span className="seperator" />
            <span>Total ${cartAmount}</span>
          </Fragment>
        )}
      </div>
      <Button onClick={onClickHandler}>Checkout</Button>
    </div>
  );
};

export default CartDropdown;
