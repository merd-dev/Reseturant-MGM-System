// src/components/CartPreview/CartPreview.jsx
import React, { useContext } from "react";
import { OrderContext } from "../../components/OrderContext/OrderContext.jsx";
import "./CartPreview.css";

const CartPreview = () => {
  const { cart } = useContext(OrderContext);

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  if (totalItems === 0) return null;

  return (
    <div className="cart-preview">
      <span className="cart-preview-count">{totalItems}</span>
      <span className="cart-preview-text">items in cart</span>
    </div>
  );
};

export default CartPreview;
