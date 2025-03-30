import React from "react";
import { images } from "../../constants";
import {Footer} from '../../container/Footer/Footer.jsx'
import "./AboutUs.css";

const AboutUs = () => (
  <div className="app__aboutus">
    {/* First Section - About Us Header */}
    <div className="app__aboutus-header app__bg section__padding">
      <div className="app__header-content">
        <h1 className="app-h1">About Us</h1>
        <div className="app__text">
          <p className="app-p">Write your best history with us</p>
        </div>
      </div>
    </div>

    {/* Second Section - About Content */}
    <div className="app__aboutus-content app__bg section__padding">
      <div className="app__aboutus-content_container">
        <div className="app__aboutus-content_about">
          <h1 className="headtext__cormorant">About</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
        </div>

        <div className="app__aboutus-content_knife flex__center">
          <img src={images.knife} alt="about_knife" />
        </div>

        <div className="app__aboutus-content_history">
          <h1 className="headtext__cormorant">our History</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
            veniam in porro nulla suscipit minus similique est at earum nostrum
            sed iure nemo iste eligendi, rerum inventore facere sit libero.
          </p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default AboutUs;
