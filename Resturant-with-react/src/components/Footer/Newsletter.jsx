import React from "react";

import SubHeading from "../SubHeading/SubHeading";
import "./Newsletter.css";

const Newsletter = () => (
  <div className="app-wrapper-newsletter">
    <div className="app-wrapper-info">
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
      <p className="p__opensans">And never miss latest Updates!</p>
    </div>
    <div className="app-newsletter-input flex__center">
      <input type="email" placeholder="Enter your Email address" />
      <button type="button" className="custom-button">
        Subscribe
      </button>
    </div>
  </div>
);

export default Newsletter;
