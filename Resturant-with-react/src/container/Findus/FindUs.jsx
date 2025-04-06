import React from 'react';

import { SubHeading } from "../../components";
import { images } from "../../constants";
import Footer from '../Footer/Footer.jsx';
import "./FindUs.css";

const FindUs = () => (
  <div>
    <div className="app__aboutus-header app__bg section__padding">
      <div className="app__header-content">
        <h1 className="app-h1">Contact</h1>
        <div className="app__text">
          <p className="app-p">Don't hesitate to contact us</p>
        </div>
      </div>
    </div>

    <div className="app__bg app__wrapper section__padding" id="contact">
      <div className="app__wrapper_info">
        <SubHeading title="Contact" />
        <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
          Find Us
        </h1>
        <div className="app__wrapper-content">
          <p className="p__opensans">
            Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G
          </p>
          <p
            className="p__cormorant"
            style={{ color: "#DCCA87", margin: "2rem 0" }}
          >
            Opening Hours
          </p>
          <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
          <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
        </div>
        <button
          type="button"
          className="custom_button"
        >
          Visit Us
        </button>
      </div>

      <div className="app__wrapper_img">
        <img src={images.findus} alt="finus_img" />
      </div>
    </div>

    <div className="contact" id="contact">
      <div className="contact-text">
        <h2>
          Contact <span>Us!</span>
        </h2>
        <h4>Eyuel Restaurant</h4>
        <p>
          We love hearing from customers, visitors and people from the Eyuel
          Restaurant. We really appreciate you taking the time to get in touch.
          Please fill in the form below.
        </p>
        <div className="list">
          <li>
            <a href="#">0912234527</a>
          </li>
          <li>
            <a href="#">Eyuel@gmail.com</a>
          </li>
          <li>
            <a href="#">Like Share & Subscribe</a>
          </li>
        </div>
      </div>
      <div className="contact-form">
        <form action="">
          <input type="name" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="tel" placeholder="Your Mobile Number" required />
          <textarea
            placeholder="How Can I Help You"
            cols="35"
            rows="10"
            required
          ></textarea>
          <input
            type="submit"
            value="Send Message"
            className="submit"
            required
          />
        </form>
      </div>
    </div>
    <Footer />
  </div>
);

export default FindUs;
