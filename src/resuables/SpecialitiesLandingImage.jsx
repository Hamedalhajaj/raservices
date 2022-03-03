import React from "react";
import downarrow from "../assets/work/downarrow.svg";

const SpecialitiesLandingImage = props => {
  const { src, name, description, arrow, titleStyles } = props;

  return (
    <div className='specialitiesLanginImageContainer'>
      <img className='specialitiesLanginImage' src={src} alt={name} />
      <h1 style={titleStyles}>{description}</h1>
      <div className='bottomBorder'></div>
      {arrow && (
        <div className='arrowDiv'>
          <img src={downarrow} alt={downarrow} />
        </div>
      )}
    </div>
  );
};

export default SpecialitiesLandingImage;
