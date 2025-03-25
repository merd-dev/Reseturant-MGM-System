import React from "react";
import SubHeading from "../../components/SubHeading/SubHeading";
import images from "../../constants/images";
import "./Header.css";

const Header = () => (
  <header className="app-header app_wrapper section_padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title={"Chase the new flavour"} />
      <h1 className="app-header-h1">The Key to Fine Dining</h1>
      <p className="left-align p__opensans" style={{ margin: "2rem 0" }}>
        Indulge in a culinary journey where flavors come alive. The Key to Fine
        Dining isn’t just about food—it’s about an unforgettable experience.
        <br />
        🔥Savor hand-crafted dishes made with the finest ingredients. <br />
        🍷 Immerse yourself in a world of elegance and taste.
        <br />
        🌟 Experience perfection in every bite.
      </p>
      <button type="button" className="custom-button">
        Explore Menu
      </button>
    </div>
    <div className="app-wrapper-img">
      <img src={images.welcome} alt="header-img" className="header-image" />
    </div>
  </header>
);

export default Header;
