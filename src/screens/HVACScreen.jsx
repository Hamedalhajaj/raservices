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
    text: 'For any reason, you want to replace an older heating system with a newer, energy-efficient model, R.A Services LLC experts have the skills and experience to handle all of your heating system installation and replacement needs. Our expertise in first-in-class heating system systems help keep you comfortable, reduce allergens, and give you greater control of the temperature in your home — all while keeping your energy expenses to a minimum.',
    alt: 'heating',
    headerText: 'Heating',
    subHeader: 'Trust the experts...'
  },
  {
    svg: thermometer,
    text: 'Sometimes you need to replace an air conditioning system due to high cost, compromised efficiency, or other reasons. However, reliable AC replacement is anything but a one-size-fits-all situation. R.A Services LLC air conditioning installation team will come to your home to determine precisely which cooling system will work best for you. If you need us to install a new AC system, we’ll work with you to consider your budget and preferences.',
    alt: 'cooling',
    headerText: 'Cooling',
    subHeader: 'Smart energy saving...'
  },
  {
    svg: ventilation,
    text: 'We are experts in providing fast and efficient solutions to your ventilation requirements. Providing a range of services from the design of a single domestic house to a large hotel, business unit, office or retail building. We have a wealth of experience working with architects and contractors on huge one-off domestic properties with numerous bedrooms/bathrooms, premium bathrooms, and large radiators. To select the correct products for the application, we work closely with numerous manufacturers. Our ventilation systems will help you with controlling impurities, air regulation, stopping condensation, and reducing temperatures.',
    alt: 'ventilation',
    headerText: 'Ventilation',
    subHeader: 'Hot or Cold, Our Service is Gold...'
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
