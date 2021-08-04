import React from 'react';
import withHeader from '../HOC/withHeader';
import remodelling from '../assets/work/remodelling.jpg';
import SpecialitiesLandingImage from '../resuables/SpecialitiesLandingImage';

const RemodellingScreen = props => {
  return (
    <>
      <SpecialitiesLandingImage
        src={remodelling}
        name='General Contracting'
        description='Designed differently.'
        arrow={true}
      />
    </>
  );
};

export default withHeader(RemodellingScreen);
