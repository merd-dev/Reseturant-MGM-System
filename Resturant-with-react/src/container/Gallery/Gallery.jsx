import React from "react";

import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import { SubHeading } from "../../components";
import images from "../../constants/images.js";
import { Link } from "react-router-dom";

import "./Gallery.css";

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__bg app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p
          className="p__opensans"
          style={{ color: "#AAAAA", marginTop: "2rem" }}
        >
          A taste of our kitchen, captured in every shot. From sizzling starters
          to sweet finales, explore the passion, color, and creativity that
          define our dishes
        </p>
        <Link to="/menu" className="custom_button">
          View More
        </Link>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images__container" ref={scrollRef}>
          {[
            images.gallery01,
            images.gallery02,
            images.gallery03,
            images.gallery04,
          ].map((image, index) => (
            <div
              className="app__gallery-images_card flex__center"
              key={`gallery_image-${index + 1}`}
            >
              <img src={image} alt="gallery_image" />

              <a
                href="https://www.instagram.com/restaurantname" // Replace with your restaurant's Instagram URL
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsInstagram className="gallery__image-icon" />
              </a>
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
