import React from "react";
import images from "../../assets/eating.jpeg";
import images2 from "../../assets/restaurant.jpg";

import "./Welcome.css";

const Welcome = () => (
  <div className="app-Welcome app_wrapper section-padding" id="home">
     <div className="app-wrapper_img">
        <img src={images} alt="welcome image" className="images" />
      </div>
      <div className="app-wrapper_img">
        <img src={images2} alt="welcome2 image" className="images" />
    </div>
    <div className="app-text">
      <p className="left-align p__opensans" style={{ margin: "2rem 0" }}>
        Indulge in a culinary journey where flavors come alive. The Key to Fine
        Dining isn’t just about food—it’s about an unforgettable experience.
        <br />
        🔥Savor hand-crafted dishes made with the finest ingredients. <br />
        🍷 Immerse yourself in a world of elegance and taste.
        <br />
        🌟 Experience perfection in every bite.
      </p>
    </div>
  </div>
);

export default Welcome;
