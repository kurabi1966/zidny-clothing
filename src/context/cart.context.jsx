import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
  isOpen: false,
  setIsOpen: () => null,
  cartItems: [],
  setCartItems: () => null,
  cartCount: 0,
  setCartCount: () => null,
  cartAmount: 0,
  setCartAmount: () => null,
  addItem: () => null,
  removeItem: () => null,
  deleteItem: () => null,
});

const addItemToCart = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (!existingCartItem) {
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  }

  return cartItems.map((cartItem) =>
    cartItem.id === productToAdd.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
  );
};
const removeItemFromCart = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );
  if (!existingCartItem) {
    console.log(
      "Error while removing an item from the Cart. The item do not exist"
    );
    return;
  }
  if (productToRemove.quantity === 1) {
    return deleteItemFromCart(cartItems, productToRemove);
  }
  // items's current quanity is > 1
  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? {
          ...cartItem,
          quantity: cartItem.quantity - 1,
        }
      : cartItem
  );
};
const deleteItemFromCart = (cartItems, productToDelete) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToDelete.id
  );
  if (!existingCartItem) {
    console.log(
      "Error while deleting an item from the Cart. The item do not exist"
    );
    return;
  }

  return cartItems.filter((cartItem) => cartItem.id !== productToDelete.id);
};

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const [cartAmount, setCartAmount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, currentItem) => currentItem.quantity + total,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartAmount = cartItems.reduce(
      (total, currentItem) => total + currentItem.price * currentItem.quantity,
      0
    );
    setCartAmount(newCartAmount);
  }, [cartItems]);

  const addItem = (product) => {
    setCartItems(addItemToCart(cartItems, product));
  };
  const removeItem = (product) => {
    setCartItems(removeItemFromCart(cartItems, product));
  };
  const deleteItem = (product) => {
    setCartItems(deleteItemFromCart(cartItems, product));
  };

  const value = {
    isOpen,
    setIsOpen,
    cartItems,
    cartCount,
    addItem,
    cartAmount,
    removeItem,
    deleteItem,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
