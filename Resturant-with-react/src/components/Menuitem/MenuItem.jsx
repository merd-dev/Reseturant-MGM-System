// src/components/MenuItem/MenuItem.jsx
import React, { useContext } from "react";
import { OrderContext } from "../../components/OrderContext/OrderContext.jsx";
import "./MenuItem.css";

const MenuItem = ({ title, price, tags }) => {
  const { addToCart } = useContext(OrderContext);

  const handleAddToCart = (e) => {
    addToCart({ title, price, tags }, e);
  };

  return (
    <div className="app__menuitem">
      <div className="app__menuitem-head">
        <div className="app__menuitem-name">
          <p className="p__cormorant" style={{ color: "#DCCA87" }}>
            {title}
          </p>
        </div>
        <div className="app__menuitem-dash" />
        <div className="app__menuitem-price">
          <p className="p__cormorant">{price}</p>
        </div>
      </div>
      <div className="app__menuitem-sub">
        <p className="p__opensans" style={{ color: "#AAAAAA" }}>
          {tags}
        </p>
      </div>
      <button
        className="custom__button"
        onClick={handleAddToCart}
        style={{ marginTop: "1rem" }}
      >
        Add to Order
      </button>
    </div>
  );
};

export default MenuItem;
