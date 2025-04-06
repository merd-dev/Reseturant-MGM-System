import React from "react";
import images from "../../assets/eat.webp";
import images2 from "../../assets/restaurant.jpg";

import "./Welcome.css";
import { Link } from "react-router-dom";
const Welcome = () => (
  <div className="app__bg app__wrapper section-padding" id="home">
    <div className="app-wrapper_img">
      <img src={images} alt="welcome image" className="images" />
    </div>
    <div className="app-wrapper_img">
      <img src={images2} alt="welcome2 image" className="images" />
    </div>
    <div className="app-text">
      <h1 className="app-welcome-h1">Welcome to Eyuel Restaurant</h1>
      <p className="left-align p__opensans" style={{ margin: "2rem 0" }}>
        Experience the joy of great food and warm hospitality. Our chefs craft
        each dish with passion, using the finest ingredients to create
        unforgettable flavors. Whether it's a family gathering, a romantic
        dinner, or a special treat, we promise a meal that delights your heart
        and taste buds. Delicious food, happy moments—served with love!
      </p>
       <Link to="/about" className="custom_button">
              Discover More
            </Link>
    </div>
  </div>
);

export default Welcome; 
