import React from 'react';
import withHeader from '../HOC/withHeader';
import remodeling from '../assets/work/remodeling.jpg';
import SpecialitiesLandingImage from '../resuables/SpecialitiesLandingImage';
import IntroSection from '../components/IntroSection';
import basement from '../assets/work/basement.svg';
import bathroom from '../assets/work/bathroom.svg';
import kitchen from '../assets/work/kitchen.svg';

const RemodelingScreen = props => {
  const payload = [
    {
      svg: basement,
      text: 'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh',
      alt: 'basement',
      headerText: 'Hello World'
    },
    {
      svg: bathroom,
      text: 'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh',
      alt: 'bathroom',
      headerText: 'Hello World'
    },
    {
      svg: kitchen,
      text: 'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh',
      alt: 'kitchen',
      headerText: 'Hello World'
    }
  ];
  return (
    <>
      <SpecialitiesLandingImage
        src={remodeling}
        name='General Contracting'
        description='Designed differently.'
        arrow={true}
      />

      <IntroSection payload={payload} />
    </>
  );
};

export default withHeader(RemodelingScreen);
