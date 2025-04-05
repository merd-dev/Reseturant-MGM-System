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

    <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
        
      </div>
    </div>
  </div>
    
    <Footer />
  </div>
);

export default AboutUs;
