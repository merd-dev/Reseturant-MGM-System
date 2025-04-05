import React from "react";
import { images } from "../../constants";
import Footer from '../Footer/Footer.jsx';
import "./service.css";
import { Link } from "react-router-dom";

const RestaurantService = () => (
  <div className="app__restaurant">
    {/* Hero Header */}
    <div className="app__restaurant-header app__bg section__padding">
      <div className="app__header-content">
        <h1 className="app-h1">Our Services</h1>
        <div className="app__text">
          <p className="app-p">Exquisite dining experiences crafted for you</p>
        </div>
      </div>
    </div>

    {/* Main Content */}
    <div
      className="app__restaurant-content app__bg section__padding"
      id="services"
    >
      {/* Private Dining Section */}
      <div className="app__restaurant-service flex__center">
        <div className="app__restaurant-service_image">
          <img src={images.privateDining} alt="Private Dining" />
        </div>

        <div className="app__restaurant-service_info">
          <h1 className="headtext__cormorant">Private Dining</h1>
          <img src={images.spoon} alt="service_spoon" className="spoon__img" />
          <p className="p__opensans">
            Experience intimate gatherings in our exclusive private dining
            rooms, perfect for special occasions and business meetings.
          </p>
          <div className="service__features">
            <p>
              <span>Capacity:</span> Up to 20 guests
            </p>
            <p>
              <span>Menu:</span> Customizable chef's tasting menu
            </p>
            <p>
              <span>Extras:</span> Dedicated sommelier service
            </p>
          </div>
          <Link to="/book-table" className="custom__button">
            Book Now
          </Link>
        </div>
      </div>

      {/* Catering Service Section */}
      <div className="app__restaurant-service flex__center reverse__flex">
        <div className="app__restaurant-service_info">
          <h1 className="headtext__cormorant">Event Catering</h1>
          <img src={images.spoon} alt="service_spoon" className="spoon__img" />
          <p className="p__opensans">
            Bring our culinary excellence to your venue with our professional
            catering services for any event size.
          </p>
          <div className="service__features">
            <p>
              <span>Services:</span> Full-service catering
            </p>
            <p>
              <span>Range:</span> 20-500 guests
            </p>
            <p>
              <span>Options:</span> Buffet or plated service
            </p>
          </div>
          <Link to="/order" className="custom__button">
            Inquire
          </Link>
        </div>

        <div className="app__restaurant-service_image">
          <img src={images.catering} alt="Catering Service" />
        </div>
      </div>

      {/* Chef's Table Section */}
      <div className="app__restaurant-service flex__center">
        <div className="app__restaurant-service_image">
          <img src={images.chefsTable} alt="Chef's Table" />
        </div>

        <div className="app__restaurant-service_info">
          <h1 className="headtext__cormorant">Chef's Table</h1>
          <img src={images.spoon} alt="service_spoon" className="spoon__img" />
          <p className="p__opensans">
            An immersive dining experience where you'll witness culinary
            artistry firsthand at our kitchen counter.
          </p>
          <div className="service__features">
            <p>
              <span>Experience:</span> 10-course omakase menu
            </p>
            <p>
              <span>Duration:</span> 2-3 hours
            </p>
            <p>
              <span>Availability:</span> Thursday-Saturday evenings
            </p>
          </div>
          <Link to="/book-table" className="custom__button">
            Reserve
          </Link>
        </div>
      </div>

      {/* Additional Services */}
      <div className="app__restaurant-extras flex__center">
        <div className="extras__card">
          <img src={images.wineTasting} alt="Wine Tasting" />
          <h3>Wine Pairing</h3>
          <p>Curated selections by our sommelier</p>
        </div>

        <div className="extras__card">
          <img src={images.cookingClass} alt="Cooking Class" />
          <h3>Cooking Classes</h3>
          <p>Learn from our master chefs</p>
        </div>

        <div className="extras__card">
          <img src={images.specialEvents} alt="Special Events" />
          <h3>Seasonal Events</h3>
          <p>Unique culinary experiences</p>
        </div>
      </div>
    </div>

    {/* Testimonials */}
    <div className="app__restaurant-testimonials app__bg section__padding">
      <h1 className="headtext__cormorant">Guest Experiences</h1>
      <img src={images.spoon} alt="testimonial_spoon" className="spoon__img" />

      <div className="testimonials__grid">
        <div className="testimonial__card">
          <p className="p__opensans">
            "The private dining experience exceeded all expectations. The
            attention to detail was remarkable."
          </p>
          <div className="testimonial__author">
            <img src={images.client1} alt="Client" />
            <p>Sarah Johnson</p>
            <p>Corporate Event</p>
          </div>
        </div>

        <div className="testimonial__card">
          <p className="p__opensans">
            "Our wedding catering was flawless. Guests are still talking about
            the food weeks later!"
          </p>
          <div className="testimonial__author">
            <img src={images.client2} alt="Client" />
            <p>Michael & Emma</p>
            <p>Wedding Reception</p>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
);

export default RestaurantService;
