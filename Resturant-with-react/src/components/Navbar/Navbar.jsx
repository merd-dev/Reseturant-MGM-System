import React, { useContext } from "react";
import { OrderContext } from "../../components/OrderContext/OrderContext.jsx";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import images from "../../assets/eyu.jpg";
import "./Navbar.css";

const Navbar = () => {
  const { cart } = useContext(OrderContext);
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="app-navbar">
      <div className="app-navbar-logo">
        <img
          src={images}
          alt="app logo"
          style={{ width: "30px", height: "auto" }}
        />
      </div>

      <ul className="app-navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/service">Service</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/order">Order ({totalItems})</Link>
        </li>
      </ul>

      <div className="app-navbar-login">
        <Link to="/book-table">Book Table</Link>
      </div>

      {/* Small Screen Menu */}
      <div className="app-navbar-smallscreen">
        <GiHamburgerMenu
          cursor="pointer"
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app-navbar-smallscreen-overlay flex-center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay-close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app-navbar-smallscreen-links">
              <li>
                <Link to="/" onClick={() => setToggleMenu(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={() => setToggleMenu(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/menu" onClick={() => setToggleMenu(false)}>
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/service" onClick={() => setToggleMenu(false)}>
                  Service
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={() => setToggleMenu(false)}>
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/order" onClick={() => setToggleMenu(false)}>
                  Order ({totalItems})
                </Link>
              </li>
              <li>
                <Link to="/book-table" onClick={() => setToggleMenu(false)}>
                  Book Table
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
