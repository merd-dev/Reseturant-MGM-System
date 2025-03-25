import React from 'react';

import {SubHeading} from '../../components';
import {images} from '../../constants/index.js';
import {data} from '../../constants/index.js'

import './Laurels.css';
const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="awards" />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: "#DCCA87" }}>
        {title}
      </p>
      <p className="p__opensans">{subtitle}</p>
    </div>
  </div>
);
const Laurels = () => (
  <div className="app__bg app__wrapper section__padding" id="awards">
    <div class="app-wrapper_info">
      <SubHeading title="Awards and recognition" />
      <h1 className="headertext__cormorant">Our Laurels</h1>
    </div>
    <div className="app__laurels_awards">
      {data.awards.map((award) => (
        <AwardCard award={award} key={award.title} />
      ))}
    </div>
    <div className="app__wrapper-img">
      <img src={images.laurels} alt="laurels_img" />
    </div>
  </div>
);

export default Laurels;
