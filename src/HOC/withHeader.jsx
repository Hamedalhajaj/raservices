import React, {useRef} from "react";
import {useState} from "react";
import Header from "../components/Header";
import QuoteForm from "../components/QuoteForm";
import {useMediaQuery} from "react-responsive";
import phone from "../assets/work/phone.svg"
import close from "../assets/work/close.svg";
import {Button} from "react-bootstrap";

const withHeader = (Component) => {
  return (props) => {
    const [scrolled, setScrolled] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const headerRef = useRef(null);
    const [showMenu, setShowMenu] = useState(false);

    const isDesktopOrLaptop = useMediaQuery({
      query: "(min-device-width: 1224px)",
    });

    const handleScroll = (event) => {
      if (isDesktopOrLaptop)
      {
        if (event.target.scrollTop >= headerRef.current.scrollHeight)
        {
          headerRef.current.className = "headerAnimation";
          headerRef.current.children[1].children[0].children[0].style.color =
            "#525252";
          headerRef.current.children[1].children[1].style.color = "#525252";
          headerRef.current.children[1].children[2].style.color = "#525252";
          headerRef.current.children[1].children[3].style.color = "#525252";

          headerRef.current.children[0].children[0].children[0].className =
            "logoAnimation";
          setScrolled(true);
        }
        if (
          event.target.scrollTop < headerRef.current.scrollHeight &&
          scrolled
        )
        {
          headerRef.current.className = "headerAnimationReverted";
          headerRef.current.children[0].children[0].children[0].className =
            "logoAnimationReverted";
          headerRef.current.children[1].children[0].children[0].style.color =
            "#fbfbfb";
          headerRef.current.children[1].children[1].style.color = "#fbfbfb";
          headerRef.current.children[1].children[2].style.color = "#fbfbfb";
          headerRef.current.children[1].children[3].style.color = "#fbfbfb";
          setScrolled(false);
        }
      }
    };
    const handleNoneSpecialityClick = (route) => {
      setShowMenu(false);
      props.history.push(route);
    };

    if (showMenu)
    {
      return (
        <>
          <div className="mobileMenuContainer">
            <div className="closeButton" onClick={() => setShowMenu(!showMenu)}>
              <img src={close} alt={close} />
            </div>
            <a href="tel:+1-412-616-6791">
              <img src={phone} alt="phone"
                className="phone" />
            </a>
          </div>
          <div className="dropdownMobileContainer">
            <div onClick={() => handleNoneSpecialityClick("general")}>
              <span> General Contracting</span>
            </div>
            <div onClick={() => handleNoneSpecialityClick("remodel")}>
              <span> Remodeling</span>
            </div>
            <div onClick={() => handleNoneSpecialityClick("hvac")}>
              <span> HVAC</span>
            </div>
            <div onClick={() => handleNoneSpecialityClick("portfolio")}>
              <span> Portfolio</span>
            </div>
            <div onClick={() => handleNoneSpecialityClick("whoweare")}>
              <span> Who we are</span>
            </div>
            <div onClick={() => handleNoneSpecialityClick("contact")}>
              <span> Contact</span>
            </div>
            <Button
              variant="danger"
              onClick={() => {
                setShowMenu(false);
                setShowModal(true);
              }}
            >
              Request A Quote
            </Button>
          </div>
        </>
      );
    }

    return (
      <div style={{height: "100vh"}} onScroll={handleScroll}>
        <Header
          ref={headerRef}
          scrolled={scrolled}
          {...props}
          setShowModal={setShowModal}
          showMenu={showMenu}
          setShowMenu={setShowMenu}
        />
        <Component {...props} />
        {showModal && <QuoteForm {...props} setShowModal={setShowModal} />}
      </div>
    );
  };
};

export default withHeader;
