// src/pages/BookTable.jsx
import React, { useState } from "react";
import "./BookTable.css"; // Optional for styling

const BookTable = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: 1,
    isChefTable: false, // New state for Chef's Table option
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevData) => ({ ...prevData, [name]: checked }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Data:", formData);
    alert(
      formData.isChefTable
        ? "Chef's Table booked successfully!"
        : "Table booked successfully!"
    );
    setFormData({
      name: "",
      phone: "",
      date: "",
      time: "",
      guests: 1,
      isChefTable: false,
    });
  };

  return (
    <div>
      <div className="app__aboutus-header app__bg section__padding">
        <div className="app__header-content">
          <h1 className="app-h1">Book Your Table</h1>
          <div className="app__text">
            <p className="app-p">
              Reserve your table in just a few clicks and enjoy an unforgettable
              dining experience with us.
            </p>
          </div>
        </div>
      </div>

      <div className="book-table-container">
        <h2>Book a Table</h2>
        <form className="book-table-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            type="date"
            name="date"
            required
            value={formData.date}
            onChange={handleChange}
          />
          <input
            type="time"
            name="time"
            required
            value={formData.time}
            onChange={handleChange}
          />
          <input
            type="number"
            name="guests"
            placeholder="Number of Guests"
            min="1"
            required
            value={formData.guests}
            onChange={handleChange}
          />

          {/* Chef's Table Option */}
          <div className="chef-table-option">
            <label htmlFor="isChefTable">
              <input
                type="checkbox"
                name="isChefTable"
                id="isChefTable"
                checked={formData.isChefTable}
                onChange={handleChange}
              />
              Reserve Chef's Table (Exclusive Experience)
            </label>
          </div>

          <button type="submit">Book Table</button>
        </form>
      </div>
    </div>
  );
};

export default BookTable;
