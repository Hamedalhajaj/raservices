import React from "react";
import withHeader from "../HOC/withHeader";
import SpecialitiesLandingImage from "../resuables/SpecialitiesLandingImage";
import contact from "../assets/work/contact.jpg";
import facebook from "../assets/work/facebook.svg";
import instagram from "../assets/work/instagram.svg";
import linkedin from "../assets/work/linkedin.svg";

const ContactScreen = props => {
  const handleSocialClick = social => {
    switch (social) {
      case "facebook":
        window.open("https://www.facebook.com/RA-Services-LLC-106606648330868/");
        break;
      case "instagram":
        window.open("https://www.instagram.com/r.aservicesllc/");
        break;
      case "linkedin":
        window.open("https://www.linkedin.com/company/r-a-services-llc/");
        break;
      default:
        return;
    }
  };

  return (
    <>
      <SpecialitiesLandingImage src={contact} name='Contact Us' description='Contact Us' titleStyles = {{color: "white"}} />
      <div className='socialMediaIcons'>
        <img
          src={facebook}
          alt={facebook}
          onClick={() => {
            handleSocialClick("facebook");
          }}
        />
        <img
          src={instagram}
          alt={instagram}
          onClick={() => {
            handleSocialClick("instagram");
          }}
        />
        <img
          src={linkedin}
          alt={linkedin}
          onClick={() => {
            handleSocialClick("linkedin");
          }}
        />
      </div>
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
