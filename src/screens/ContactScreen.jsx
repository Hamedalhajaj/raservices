import React from 'react';
import withHeader from '../HOC/withHeader';
import SpecialitiesLandingImage from '../resuables/SpecialitiesLandingImage';
import contact from '../assets/work/contact.jpg';

const ContactScreen = props => {
  return (
    <>
      <SpecialitiesLandingImage src={contact} name='Contact Us' description='Contact Us' />
      <div className='contactinfo'>
        <h1>Our Office</h1>
        <br />
        <h3>Address:</h3>
        <p>3457 Pleasantvue Dr,</p>
        <p>Pittsburgh, PA, 15227, USA</p>
        <h3>Phone:</h3>
        <p>+1 (412) 519-5553</p>
        <p>+1 (412) 656-0508</p>
        <h3>Email:</h3>
        <p>contact@raservicellc.com</p>
      </div>
    </>
  );
};

export default withHeader(ContactScreen);
