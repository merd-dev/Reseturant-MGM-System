import React, { useContext, useState } from "react";
import { OrderContext } from "../../components/OrderContext/OrderContext.jsx";
import { useNavigate } from "react-router-dom";
import { images } from "../../constants";
import "./Order.css";

const OrderPage = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } =
    useContext(OrderContext);
  const navigate = useNavigate();
  const [showCateringForm, setShowCateringForm] = useState(false);
  const [cateringDetails, setCateringDetails] = useState({
    eventType: "",
    date: "",
    guests: 50,
    location: "",
    specialRequests: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
  });

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

  const handleCateringSubmit = (e) => {
    e.preventDefault();
    alert(
      "Catering request submitted! We'll contact you shortly to discuss details."
    );
    setShowCateringForm(false);
    // Here you would typically send the data to your backend
    console.log("Catering request:", cateringDetails);
  };

  const handleCateringChange = (e) => {
    const { name, value } = e.target;
    setCateringDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="app__order app__bg">
      {/* Hero Header with Background */}
      <div className="app__order-header app__wrapper section__padding">
        <div className="app__wrapper_info">
          <h1 className="headtext__cormorant">Your Order</h1>
          <p className="p__opensans" style={{ margin: "2rem 0" }}>
            Review your selections or inquire about our catering services
          </p>
        
        </div>
        <div className="app__wrapper_img">
          <img src={images.orderImage} alt="order header" />
        </div>
      </div>

      {/* Catering Form Modal */}
      {showCateringForm && (
        <div className="catering-modal">
          <div className="catering-modal-content">
            <button
              className="close-modal"
              onClick={() => setShowCateringForm(false)}
            >
              &times;
            </button>
            <h2 className="headtext__cormorant">Catering Inquiry</h2>
            <form onSubmit={handleCateringSubmit}>
              <div className="form-group">
                <label>Event Type</label>
                <select
                  name="eventType"
                  value={cateringDetails.eventType}
                  onChange={handleCateringChange}
                  required
                >
                  <option value="">Select event type</option>
                  <option value="Wedding">Wedding</option>
                  <option value="Corporate">Corporate Event</option>
                  <option value="Birthday">Birthday Party</option>
                  <option value="Anniversary">Anniversary</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Event Date</label>
                  <input
                    type="date"
                    name="date"
                    value={cateringDetails.date}
                    onChange={handleCateringChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Number of Guests</label>
                  <input
                    type="number"
                    name="guests"
                    min="20"
                    value={cateringDetails.guests}
                    onChange={handleCateringChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Event Location</label>
                <input
                  type="text"
                  name="location"
                  value={cateringDetails.location}
                  onChange={handleCateringChange}
                  required
                  placeholder="Address or venue name"
                />
              </div>

              <div className="form-group">
                <label>Special Requests</label>
                <textarea
                  name="specialRequests"
                  value={cateringDetails.specialRequests}
                  onChange={handleCateringChange}
                  rows="4"
                  placeholder="Dietary restrictions, theme, etc."
                />
              </div>

              <h3 className="headtext__cormorant" style={{ marginTop: "2rem" }}>
                Contact Information
              </h3>

              <div className="form-row">
                <div className="form-group">
                  <label>Your Name</label>
                  <input
                    type="text"
                    name="contactName"
                    value={cateringDetails.contactName}
                    onChange={handleCateringChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="contactEmail"
                    value={cateringDetails.contactEmail}
                    onChange={handleCateringChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="contactPhone"
                  value={cateringDetails.contactPhone}
                  onChange={handleCateringChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="custom_button"
                style={{ marginTop: "1rem" }}
              >
                Submit Catering Request
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Order Content */}
      <div className="app__order-content app__wrapper section__padding">
        {cart.length === 0 && !showCateringForm ? (
          <div className="empty-order">
            <h2 className="headtext__cormorant">Your cart is empty</h2>
            <p className="p__opensans">
              Begin your culinary journey by exploring our menu or requesting
              catering services
            </p>
            <div className="empty-order-buttons">
              <button
                className="custom_button"
                onClick={() => navigate("/menu")}
              >
                Browse Menu
              </button>
              <button
                className="custom_button"
                onClick={() => setShowCateringForm(true)}
                style={{ marginLeft: "1rem" }}
              >
                Request Catering
              </button>
            </div>
          </div>
        ) : showCateringForm ? null : (
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

              <button
                className="custom__button"
                onClick={handleCheckout}
                style={{ cursor: "pointer" }}
              >
                Confirm Order
              </button>
              <button
                className="custom__button catering-btn"
                onClick={() => setShowCateringForm(true)}
                style={{ cursor: "pointer" }}
              >
                Also Need Catering?
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderPage;
