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
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add API integration or storage logic here
    console.log("Booking Data:", formData);
    alert("Table booked successfully!");
    setFormData({ name: "", phone: "", date: "", time: "", guests: 1 });
  };

  return (
    <div>
      <div className="app__aboutus-header app__bg section__padding">
        <div className="app__header-content">
          <h1 className="app-h1">Book Your Table</h1>
          <div className="app__text">
            <p className="app-p">
              Reserve your table in just a few clicks and enjoy an
              unforgettable dining experience with us
            </p>
          </div>
        </div>
      </div>

      <div className="book-table-container ">
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
          <button type="submit">Book Table</button>
        </form>
      </div>
    </div>
  );
};

export default BookTable;
