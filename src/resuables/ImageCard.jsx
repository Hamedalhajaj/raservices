import React from 'react';
import { useRef } from 'react';

const ImageCard = props => {
  const discoverMore = useRef(null);

  const { src, name, description } = props;
  const handleMouseOver = () => {
    discoverMore.current.style.display = 'block';
  };
  const handleMouseOut = () => {
    discoverMore.current.style.display = 'none';
  };

  const handleDiscoverMoreClick = () => {
    props.history.push(name);
  };

  return (
    <div className='imageCardContainer' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <img className='imageCard' src={src} alt={name} onClick={handleDiscoverMoreClick} />
      <h3>{description}</h3>
      <div></div>
      <div onClick={handleDiscoverMoreClick} ref={discoverMore}>
        Discover More &rarr;
      </div>
    </div>
  );
};

export default ImageCard;
