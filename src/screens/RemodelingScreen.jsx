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
      svg: kitchen,
      text: 'Let us bring your dream kitchen to life. No matter if you need a few small updates or an entire kitchen makeover, our team at R.A Services LLC can work with you to create a custom design you are sure to love.',
      alt: 'basement',
      headerText: 'Kitchen'
    },
    {
      svg: bathroom,
      text: 'Looking to update your bathroom? Adding new tile to the floor or walls is a sure fire way to brighten up any bathroom. Swap out your standard sink for a beautiful vanity to add aesthetics and storage. Whatever changes you are looking to make, let R.A Services LLC help you make that vision a reality.',
      alt: 'bathroom',
      headerText: 'Bathroom'
    },
    {
      svg: basement,
      text: 'Game rooms, "Man Caves", additional bedrooms, etc. We  at R.A Services LLC can transform your basement into another great space for you and your friends/family to gather. We have a great deal of experience with waterproofing and foundation work which is essential for any basement remodeling project. ',
      alt: 'kitchen',
      headerText: 'Basement'
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
