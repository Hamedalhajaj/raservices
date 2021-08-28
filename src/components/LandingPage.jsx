import React, { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import remodeling from '../assets/work/remodeling.jpg';
import hvac from '../assets/work/hvac.jpg';
import general from '../assets/work/general.jpg';
import withHeader from '../HOC/withHeader';
import ImageCard from '../resuables/ImageCard';
const AppStateContext = React.createContext();
AppStateContext.displayName = 'AppStateContext';

const LandingPage = props => {
  const fourImagesContainerRef = useRef(null);

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  });

  //   Desktop
  if (isDesktopOrLaptop) {
    return (
      <AppStateContext.Provider value={{ isDesktopOrLaptop }}>
        <div ref={fourImagesContainerRef} className='fourImagesContainerRef'>
          <ImageCard src={general} name='general' description='General Contracting' {...props} />
          <ImageCard src={remodeling} name='remodel' description='Remodeling' {...props} />
          <ImageCard src={hvac} name='hvac' description='HVAC' {...props} />
        </div>
      </AppStateContext.Provider>
    );
  }
  //   Mobile
  return (
    <AppStateContext.Provider value={{ isDesktopOrLaptop }}>
      <div ref={fourImagesContainerRef} className='fourImagesContainerRef'>
        <ImageCard src={general} name='general' description='General Contracting' {...props} />
        <ImageCard src={remodeling} name='remodel' description='Remodeling' {...props} />
        <ImageCard src={hvac} name='hvac' description='HVAC' {...props} />
      </div>
    </AppStateContext.Provider>
  );
};

export default withHeader(LandingPage);
