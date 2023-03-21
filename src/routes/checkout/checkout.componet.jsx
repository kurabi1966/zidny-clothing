import { useContext } from "react";
import CartItemCheckout from "../../components/cart-item-checkout/checkout-item.component";
import EmptyCart from "../../components/empty-cart/empty-cart.component";
import { CartContext } from "../../context/cart.context";

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout.styles";

const Checkout = () => {
  const { cartItems, cartAmount } = useContext(CartContext);
  //   console.log(cartItems);
  if (cartItems.length > 0) {
    return (
      <CheckoutContainer>
        <CheckoutHeader>
          <HeaderBlock className="header-block">
            <span>Product</span>
          </HeaderBlock>
          <HeaderBlock className="header-block">
            <span>Description</span>
          </HeaderBlock>
          <HeaderBlock className="header-block">
            <span>Quantity</span>
          </HeaderBlock>
          <HeaderBlock className="header-block">
            <span>Price</span>
          </HeaderBlock>
          <HeaderBlock className="header-block">
            <span>Total</span>
          </HeaderBlock>
          <HeaderBlock className="header-block">
            <span>Remove</span>
          </HeaderBlock>
        </CheckoutHeader>

        {cartItems.map((cartItem) => (
          <CartItemCheckout key={cartItem.id} cartItem={cartItem} />
        ))}

        <Total>Total: ${cartAmount}</Total>
      </CheckoutContainer>
    );
  } else {
    return <EmptyCart />;
  }
};

export default Checkout;
