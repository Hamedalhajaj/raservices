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
      text: 'Here at R. A Services LLC, we strive to give you that "Dream Home" feeling with our extensive knowledge and experience with interior renovations. Whether you want to update your kitchen or bathroom, change out your carpet for beautiful hardwood floors, or just update your light fixtures, our team will help make your house feel like a home.',
      alt: 'interior',
      headerText: 'Interior Renovation'
    },
    {
      svg: exterior,
      text: "If the outside of your house looks weathered and faded, our team at R. A Services LLC can help revamp your exterior and bring your home more curb appeal. Let us work with you to update your home's siding, roof, or even bring new life to your cracked driveway or sidewalk.",
      alt: 'exterior',
      headerText: 'Exterior Renovation'
    },
    {
      svg: home,
      text: 'Is your house outdated? Do you love the house but wish it felt more like a home? Our #1 goal at R. A Services LLC is to create for you  a home that you love. A few updates can really transform a room and bring it back to life!',
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
