import React from "react";
import withHeader from "../HOC/withHeader";
import SpecialitiesLandingImage from "../resuables/SpecialitiesLandingImage";
import general from "../assets/work/general.jpg";
import interior from "../assets/work/interior.svg";
import exterior from "../assets/work/exterior.svg";
import home from "../assets/work/home.svg";
import IntroSection from "../components/IntroSection";

const GeneralContracting = props => {
  const payload = [
    {
      svg: interior,
      text: "With interior renovation inspiration ideas everywhere, it’s tempting to jump on the upgrade train. If done right, interior remodeling can be a smart investment. Interior renovation will not only add equity to your home, but it will also boost your mood as well. Here at R.A Services LLC, we strive to give you that \"Dream Home\" feeling with our extensive knowledge and experience with interior renovations. Whether you want to update your kitchen or bathroom, change out your carpet for beautiful hardwood floors, or just update your light fixtures, our team will help you create a home that defines who you are.",
      alt: "interior",
      headerText: "Interior Renovation",
      subHeader: "Create a home that defines who you are..."
    },
    {
      svg: exterior,
      text: "When it comes to renovating your home, don’t forget to consider your outdoor areas too. In fact, exterior renovation is as important as interior renovation. When you decide to update the exterior of your home, you’re given a chance to provide it with an entirely different look. Luckily, Updating the exterior of your home may change its appearance, but it will also improve your home’s energy efficiency. In all cases, exterior renovation can increase the overall value of your home if you choose to resell down the line. If the outside of your house looks weathered and faded, our team at R.A Services LLC can help revamp your exterior and bring your home more curb appeal. Let us work with you to update your home's siding, roof, or even bring new life to your cracked driveway or sidewalk.",
      alt: "exterior",
      headerText: "Exterior Renovation",
      subHeader: "Take your outdoor space into account..."
    },
    {
      svg: home,
      text: "Is your house outdated? Do you love the house but wish it felt more like a home? Our #1 goal is to create for you a home that you love. A few updates can really transform a room and bring it back to life! So whether you’re revamping your home to make it more functional or simply more beautiful, R.A Services LLC is your one-stop shop for all things home renovation.",
      alt: "home",
      headerText: "Home Revamp",
      subHeader: "Bring your home back to life..."
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
