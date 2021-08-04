import React from 'react';
import withHeader from '../HOC/withHeader';
import SpecialitiesLandingImage from '../resuables/SpecialitiesLandingImage';
import hvac from '../assets/work/hvac.jpg';

const HVACScreen = props => {
  return (
    <>
      <SpecialitiesLandingImage
        src={hvac}
        name='General Contracting'
        description='Integrety is our value.'
        arrow={true}
      />
    </>
  );
};

export default withHeader(HVACScreen);
