import React from "react";
import withHeader from "../HOC/withHeader";
import remodeling from "../assets/work/remodeling.jpg";
import SpecialitiesLandingImage from "../resuables/SpecialitiesLandingImage";
import IntroSection from "../components/IntroSection";
import basement from "../assets/work/basement.svg";
import bathroom from "../assets/work/bathroom.svg";
import kitchen from "../assets/work/kitchen.svg";

const RemodelingScreen = props => {
  const payload = [
    {
      svg: kitchen,
      text: "Whether your goal is a multifunctional, family-friendly kitchen or a sleek, contemporary one, our team at R.A Services LLC can work with you to create a custom design you are sure to love. Whether it is a small remodel or building your kitchen from scratch, we will work within your budget to make your vision of your dream kitchen come to life without any hidden costs.",
      alt: "basement",
      headerText: "Kitchen",
      subHeader: "Let us bring your dream kitchen to life..."
    },
    {
      svg: bathroom,
      text: "Looking to update your bathroom? Adding new tile to the floor or walls is a sure-fire way to brighten up any bathroom. Swap out your standard sink for a beautiful vanity to add aesthetics and storage. Whatever changes you are looking to make, let R.A Services LLC help you make that vision a reality. Reinvent the most utilitarian room in the house and explore dozens of beautiful bathroom remodeling ideas comprising all different materials, colors, and designs.",
      alt: "bathroom",
      headerText: "Bathroom",
      subHeader: "Shaping bathrooms into spas..."
    },
    {
      svg: basement,
      text: "Game rooms, \"Man Caves\", additional bedrooms, large storage areas, etc. Add more value to your place by remodeling your basement and get the most out of it. At R.A Services, our basement remodeling services are performed by professionals with years of experience and the most refined eyes for design to not only meet your expectations but to exceed them. We can transform your basement into another great space for you and your friends/family to gather. We have a great deal of experience with waterproofing and foundation work which is essential for any basement remodeling project. Luckily, you do not need to have the craziest budget to have a luxurious basement. We will work with you to determine the right kind of rebuild for your specific budget without any hidden costs. Unlike bathrooms or kitchens, your basement could become any kind of room you envision.",
      alt: "kitchen",
      headerText: "Basement",
      subHeader: "Add even more value to your place..."
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
