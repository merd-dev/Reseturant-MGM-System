import React from 'react';
import { SubHeading } from '../../components';
import images from '../../constants/images';

import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding ">
    <div className="app-wrapper-img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>
    <div className="app-wrapper-info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext-cormorant" style={{color:'white'}}>What we Believe In</h1>

      <div className="app-chef-content">
        <div className="app-chef-content_quote">
          <img src={images.quote} alt="qoute_images" />

          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
            doloremque explicabo quaerat culpa maiores magnam deleniti
          </p>
        </div>
        <br/>
        <p className="p__opensans">
          Iure doloremque explicabo quaerat culpa maiores magnam deleniti
          exercitationem quasi natus, commodi ullam assumenda perspiciatis
          soluta? Dolorum pariatur voluptatem eligendi aliquam itaque!
        </p>
      </div>

      <div className="app-chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
