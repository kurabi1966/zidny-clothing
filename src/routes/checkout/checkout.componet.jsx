import { useContext } from "react";
import CartItemCheckout from "../../components/cart-item-checkout/checkout-item.component";
import EmptyCart from "../../components/empty-cart/empty-cart.component";
import { CartContext } from "../../context/cart.context";

import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, cartAmount } = useContext(CartContext);
  //   console.log(cartItems);
  if (cartItems && cartItems.length > 0) {
    return (
      <div className="checkout-container">
        <div className="checkout-header">
          <div className="header-block">
            <span>Product</span>
          </div>
          <div className="header-block">
            <span>Description</span>
          </div>
          <div className="header-block">
            <span>Quantity</span>
          </div>
          <div className="header-block">
            <span>Price</span>
          </div>
          <div className="header-block">
            <span>Total</span>
          </div>
          <div className="header-block">
            <span>Remove</span>
          </div>
        </div>

        {cartItems.map((cartItem) => (
          <CartItemCheckout key={cartItem.id} cartItem={cartItem} />
        ))}

        <span className="total">Total: ${cartAmount}</span>
      </div>
    );
  } else {
    return <EmptyCart />;
  }
};

export default Checkout;
