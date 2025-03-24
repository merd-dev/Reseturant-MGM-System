import React from 'react';
import { SubHeading } from '../../components';
import images from '../../constants/images';

import './Chef.css';

const Chef = () => (
  <div className="app-bg app-wrapper section-padding ">
     <div className='app-wrapper-img app-wrapper_img-reverse'>
      <img src={images.chef} alt="chef" />

     </div>
    Chef
  </div>
);

export default Chef;
