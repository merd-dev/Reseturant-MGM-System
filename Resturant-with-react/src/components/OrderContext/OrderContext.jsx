// src/context/OrderContext.js
import React, { createContext, useState } from "react";

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, event) => {
    event.preventDefault(); // Prevent default button behavior
    event.stopPropagation(); // Stop event bubbling

    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (cartItem) => cartItem.title === item.title
      );
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.title === item.title
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemTitle) => {
    setCart((prevCart) => prevCart.filter((item) => item.title !== itemTitle));
  };

  const updateQuantity = (itemTitle, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(itemTitle);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.title === itemTitle ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <OrderContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
