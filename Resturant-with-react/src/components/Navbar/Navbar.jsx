import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app-navbar">
      <div className="app-navbar-logo">
        <img src={images.gericht} alt="app logo" />
      </div>
      <ul className="app-navbar-links">
        <li><a href="#Home">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Menu">Menu</a></li>
        <li><a href="#Award">Award</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>
      <div className="app-navbar-login">
        <a href="#">Login/Register</a>
        <div />
        <a href="#">Book Table</a>
      </div>
      <div className="app-navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app-navbar-smallscreen-overlay flex-center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay-close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app-navbar-smallscreen-links">
              <li><a href="#Home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#About" onClick={() => setToggleMenu(false)}>About</a></li>
              <li><a href="#Menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
              <li><a href="#Award" onClick={() => setToggleMenu(false)}>Award</a></li>
              <li><a href="#Contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
