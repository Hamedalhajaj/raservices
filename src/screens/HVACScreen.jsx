import React from 'react';
import withHeader from '../HOC/withHeader';
import SpecialitiesLandingImage from '../resuables/SpecialitiesLandingImage';
import hvac from '../assets/work/hvac.jpg';
import IntroSection from '../components/IntroSection';
import heating from '../assets/work/heating.svg';
import ventilation from '../assets/work/ventilation.svg';
import thermometer from '../assets/work/thermometer.svg';
const payload = [
  {
    svg: heating,
    text: 'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh',
    alt: 'heating',
    headerText: 'Hello World'
  },
  {
    svg: ventilation,
    text: 'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh',
    alt: 'ventilation',
    headerText: 'Hello World'
  },
  {
    svg: thermometer,
    text: 'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh',
    alt: 'thermometer',
    headerText: 'Hello World'
  }
];

const HVACScreen = props => {
  return (
    <>
      <SpecialitiesLandingImage
        src={hvac}
        name='General Contracting'
        description='Integrety is our value.'
        arrow={true}
      />
      <IntroSection payload={payload} />
    </>
  );
};

export default withHeader(HVACScreen);
