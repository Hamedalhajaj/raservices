import React from 'react';
import withHeader from '../HOC/withHeader';
import SpecialitiesLandingImage from '../resuables/SpecialitiesLandingImage';
import general from '../assets/work/general.jpg';
import interior from '../assets/work/interior.svg';
import exterior from '../assets/work/exterior.svg';
import home from '../assets/work/home.svg';
import IntroSection from '../components/IntroSection';

const GeneralContracting = props => {
  const payload = [
    {
      svg: interior,
      text: 'Whether you are ',
      alt: 'interior',
      headerText: 'Interior Renovation'
    },
    {
      svg: exterior,
      text: 'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh',
      alt: 'exterior',
      headerText: 'Exterior Renovation'
    },
    {
      svg: home,
      text: 'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh',
      alt: 'home',
      headerText: 'Home Revamp'
    }
  ];

  return (
    <>
      <SpecialitiesLandingImage
        src={general}
        name='General Contracting'
        description='Well defined planning.'
        arrow={true}
      />
      <IntroSection payload={payload} />
    </>
  );
};

export default withHeader(GeneralContracting);
