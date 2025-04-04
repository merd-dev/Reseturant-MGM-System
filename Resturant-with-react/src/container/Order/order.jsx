import React, { useContext } from "react";
import { OrderContext } from "../../components/OrderContext/OrderContext.jsx";
import { useNavigate } from "react-router-dom";
import { images } from "../../constants";
import "./Order.css";

const OrderPage = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } =
    useContext(OrderContext);
  const navigate = useNavigate();

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.price.replace("$", ""));
      return total + price * item.quantity;
    }, 0);
  };

  const handleCheckout = () => {
    alert(`Order confirmed! Total: $${calculateTotal().toFixed(2)}`);
    clearCart();
    navigate("/");
  };

  return (
    <div className="app__order app__bg">
      {/* Hero Header with Background */}
      <div className="app__order-header app__wrapper section__padding">
        <div className="app__wrapper_info">
          <h1 className="headtext__cormorant">Your Order</h1>
          <p className="p__opensans" style={{ margin: "2rem 0" }}>
            Review your selections before finalizing your dining experience
          </p>
        </div>
        <div className="app__wrapper_img">
          <img src={images.orderImage} alt="order header" />
        </div>
      </div>

      {/* Order Content */}
      <div className="app__order-content app__wrapper section__padding">
        {cart.length === 0 ? (
          <div className="empty-order">
            <h2 className="headtext__cormorant">Your cart is empty</h2>
            <p className="p__opensans">
              Begin your culinary journey by exploring our menu
            </p>
            <button
              className="custom__button"
              onClick={() => navigate("/menu")}
            >
              Browse Menu
            </button>
          </div>
        ) : (
          <div className="order-container">
            <div className="order-items">
              {cart.map((item, index) => (
                <div key={index} className="order-item">
                  <div className="item-info">
                    <h3 className="p__cormorant" style={{ color: "#DCCA87" }}>
                      {item.title}
                    </h3>
                    <p className="p__opensans">{item.tags}</p>
                  </div>
                  <div className="item-controls">
                    <div className="quantity-controls">
                      <button
                        className="quantity-btn"
                        onClick={() =>
                          updateQuantity(item.title, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <span className="p__cormorant">{item.quantity}</span>
                      <button
                        className="quantity-btn"
                        onClick={() =>
                          updateQuantity(item.title, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                    <div className="item-price">
                      <p className="p__cormorant">{item.price}</p>
                    </div>
                    <button
                      className="remove-btn p__opensans"
                      onClick={() => removeFromCart(item.title)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="order-summary">
              <h3 className="headtext__cormorant">Order Summary</h3>
              <div className="summary-details">
                <div className="summary-row">
                  <p className="p__opensans">Subtotal:</p>
                  <p className="p__cormorant">${calculateTotal().toFixed(2)}</p>
                </div>
                <div className="summary-row">
                  <p className="p__opensans">Service Fee:</p>
                  <p className="p__cormorant">$2.00</p>
                </div>
                <div className="summary-row total">
                  <p className="p__opensans">Total:</p>
                  <p className="p__cormorant">
                    ${(calculateTotal() + 2).toFixed(2)}
                  </p>
                </div>
              </div>
              <button className="custom__button" onClick={handleCheckout}>
                Confirm Order
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderPage;
