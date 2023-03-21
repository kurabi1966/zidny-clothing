import Button, { BUTOON_TYPE_CLASSES } from "../button/button.component";
import { Fragment, useContext } from "react";
import { CartContext } from "../../context/cart.context";
import CartItem from "../cart-item/cart-item.component";
import { useNavigate } from "react-router-dom";
import {
  CartDropdownContainer,
  CartItems,
  Seperator,
  ButtonContainer,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
  const navigate = useNavigate();

  const { cartItems, cartAmount, setIsOpen } = useContext(CartContext);
  const onClickHandler = () => {
    setIsOpen(false);
    navigate("/checkout", { replace: true });
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
        {cartItems.length > 0 && (
          <Fragment>
            <Seperator />
            <span>Total ${cartAmount}</span>
          </Fragment>
        )}
      </CartItems>
      <ButtonContainer>
        <Button onClick={onClickHandler} buttonType={BUTOON_TYPE_CLASSES.base}>
          Checkout
        </Button>
      </ButtonContainer>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
