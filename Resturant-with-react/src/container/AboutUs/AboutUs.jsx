import React from "react";
import { images } from "../../constants";
import Footer from '../Footer/Footer.jsx';
import "./AboutUs.css";

const AboutUs = () => (
  <div className="app__aboutus">
    <div className="app__aboutus-header app__bg section__padding">
      <div className="app__header-content">
        <h1 className="app-h1">About Us</h1>
        <div className="app__text">
          <p className="app-p">Write your best history with us</p>
        </div>
      </div>
    </div>

    <div
      className="app__aboutus app__bg flex__center section__padding"
      id="about"
    >
      <div className="app__aboutus-overlay flex__center">
        <img src={images.G} alt="G_overlay" />
      </div>

      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about">
          <h1 className="headtext__cormorant">About Us</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">
            We are more than just a restaurant — we are a place where flavors
            come to life and memories are made. With a focus on fresh
            ingredients, authentic recipes, and heartfelt service, our mission
            is to create a warm and welcoming dining experience for every guest.
            Every dish we serve is a celebration of taste, tradition, and
            creativity.
          </p>
        </div>

        <div className="app__aboutus-content_knife flex__center">
          <img src={images.knife} alt="about_knife" />
        </div>

        <div className="app__aboutus-content_history">
          <h1 className="headtext__cormorant">Our History</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">
            Our story began with a simple idea — to share the joy of good food
            with our community. What started as a small family kitchen has grown
            into a beloved dining destination, built on passion, perseverance,
            and a deep respect for culinary heritage. Through the years, we’ve
            stayed true to our roots while embracing new flavors and techniques,
            always striving to bring the best to your table.
          </p>
        </div>
      </div>
    </div>

    <Footer />
  </div>
);

export default AboutUs;
