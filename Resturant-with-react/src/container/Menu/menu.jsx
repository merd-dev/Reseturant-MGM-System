import React from "react";
import { SubHeading, MenuItem } from "../../components";
import { data, images } from "../../constants";
import Footer from "../Footer/Footer.jsx";
import "./menu.css";

const Menu = () => (
  <div>
    <div className="app__aboutus-header app__bg section__padding">
      <div className="app__header-content">
        <h1 className="app-h1">Our Menu</h1>
        <div className="app__text">
          <p className="app-p">Delicious offerings for every palate</p>
        </div>
      </div>
    </div>

    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-title">
        <SubHeading title="Culinary delights & fine drinks" />
        <h1 className="headtext__cormorant">Today's Selection</h1>
      </div>

      {/* Food Menu Section */}
      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_appetizers flex__center">
          <p className="app__specialMenu-menu_heading">Appetizers</p>
          <div className="app__specialMenu_menu_items">
            {data.appetizers.map((item, index) => (
              <MenuItem
                key={`appetizer-${index}`}
                title={item.title}
                price={item.price}
                tags={item.tags}
              />
            ))}
          </div>
        </div>

        <div className="app__specialMenu-menu_img">
          <img src={images.specials} alt="food_menu_img" />
        </div>

        <div className="app__specialMenu-menu_mains flex__center">
          <p className="app__specialMenu-menu_heading">Main Courses</p>
          <div className="app__specialMenu_menu_items">
            {data.mainCourses.map((item, index) => (
              <MenuItem
                key={`main-${index}`}
                title={item.title}
                price={item.price}
                tags={item.tags}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Drinks Menu Section */}
      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine flex__center">
          <p className="app__specialMenu-menu_heading">Wine & Beer</p>
          <div className="app__specialMenu_menu_items">
            {data.wines.map((wine, index) => (
              <MenuItem
                key={`wine-${index}`}
                title={wine.title}
                price={wine.price}
                tags={wine.tags}
              />
            ))}
          </div>
        </div>

        <div className="app__specialMenu-menu_img">
          <img src={images.menu} alt="drinks_menu_img" />
        </div>

        <div className="app__specialMenu-menu_cocktails flex__center">
          <p className="app__specialMenu-menu_heading">Cocktails</p>
          <div className="app__specialMenu_menu_items">
            {data.cocktails.map((cocktail, index) => (
              <MenuItem
                key={`cocktail-${index}`}
                title={cocktail.title}
                price={cocktail.price}
                tags={cocktail.tags}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Desserts Section */}
      <div className="app__specialMenu-menu_desserts flex__center">
        <p className="app__specialMenu-menu_heading">Desserts</p>
        <div className="app__specialMenu_menu_items">
          {data.desserts.map((item, index) => (
            <MenuItem
              key={`dessert-${index}`}
              title={item.title}
              price={item.price}
              tags={item.tags}
            />
          ))}
        </div>
      </div>

      <div style={{ marginTop: 15 }}>
        <button type="button" className="custom__button">
          View Full Menu
        </button>
      </div>
    </div>
    <Footer />
  </div>
);
3
export default Menu;
