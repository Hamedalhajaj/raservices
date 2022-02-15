import React from "react";
import withHeader from "../HOC/withHeader";
import SpecialitiesLandingImage from "../resuables/SpecialitiesLandingImage";
import pit from "../assets/work/pit.jpg";

const WhoWeAre = (props) => {
  return (
    <div style={{ position: "relative" }}>
      <SpecialitiesLandingImage src={pit} name='Who We Are' description='Who We Are' />
      <div className='whoWeAreContainer'>
        <h1>Your Remodeling Is Our Expertise</h1>
        <p style={{ width: "50vw" }}>
          R.A Services specializes in commercial – residential and exterior – interior construction
          and remodeling services for clients with all kinds of requisites from the vast range of
          constructive details. We are a licensed and insured enterprise (HIC# PA162082), holding
          experience in all particularized fields which spring around our services. We guarantee
          that the vision for your property will be realized at our hands with incredible finesse.
        </p>
      </div>
      <div style={{ justifyContent: "center", display: "flex", padding: 10 }}>
        <iframe
          title='my map'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48593.46065111412!2d-77.69611962089843!3d40.428977399999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834f172e51d90fb%3A0xda692fb7d7e181c3!2sR.A%20Services%20LLC!5e0!3m2!1sen!2sus!4v1629251626997!5m2!1sen!2sus'
          width='600'
          height='600'
          allowFullScreen={true}
          loading='lazy'
        ></iframe>
      </div>
    </div>
  );
};

export default withHeader(WhoWeAre);
