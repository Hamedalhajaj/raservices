import React from 'react';
import withHeader from '../HOC/withHeader';
import SpecialitiesLandingImage from '../resuables/SpecialitiesLandingImage';
import general from '../assets/work/general.jpg';

const GeneralContracting = props => {
  return (
    <>
      <SpecialitiesLandingImage
        src={general}
        name='General Contracting'
        description='Well defined planning.'
        arrow={true}
      />
      <h1>For testing....</h1>
      <h1>For testing....</h1>
      <h1>For testing....</h1>
      <h1>For testing....</h1>
      <h1>For testing....</h1>
    </>
  );
};

export default withHeader(GeneralContracting);
