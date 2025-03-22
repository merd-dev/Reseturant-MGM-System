import React from "react";
import images from "../../constants/images"; 

const SubHeading = ({ title }) => (
  <div>
    <div style={{ marginBottom: "1rem" }}>
      <p className="p-cormorant">{title}</p>
      <img src={images.spoon} alt="spoon" className="spoon-img" />
    </div>
  </div>
);

export default SubHeading;
