import React from 'react';
import { useRef } from 'react';
import Logo from '../assets/work/Logo.svg';
import LogoDark from '../assets/work/LogoDark.svg';
const Header = React.forwardRef((props, ref) => {
  const ulRef = useRef(null);
  const logoRef = useRef(null);

  const handleSpecialityClick = () => {
    if (
      ulRef.current.style.visibility === 'hidden' ||
      ulRef.current.style.visibility === undefined ||
      !ulRef.current.style.visibility
    ) {
      ulRef.current.style.visibility = 'visible';
    } else {
      ulRef.current.style.visibility = 'hidden';
    }
  };

  const handleCategoryClick = speciality => {
    if (props.history.location.pathname === `/${speciality}`) {
      return (ulRef.current.style.visibility = 'hidden');
    }
    props.history.push(speciality);
  };

  const handleNoneSpecialityClick = route => {
    props.history.push(route);
  };

  return (
    <div className='navBarContainer' ref={ref}>
      <div className='logo'>
        <div>
          <img
            onClick={() => props.history.push('/')}
            className='headerLogo'
            src={props.scrolled ? LogoDark : Logo}
            alt={Logo}
            ref={logoRef}
          />
        </div>
      </div>
      <nav className='navItemsContainer'>
        <div>
          <div className='specialitiesMenue' onClick={handleSpecialityClick}>
            Specialities &#9660;
          </div>
          <ul ref={ulRef}>
            <li onClick={() => handleCategoryClick('general')}>General Contracting</li>
            <li onClick={() => handleCategoryClick('remodel')}>Remodelling</li>
            <li onClick={() => handleCategoryClick('hvac')}>HVAC</li>
          </ul>
        </div>
        <div onClick={() => handleNoneSpecialityClick('portfolio')}>Portfolio</div>
        <div onClick={() => handleNoneSpecialityClick('whoweare')}>Who we are</div>
        <div onClick={() => handleNoneSpecialityClick('contact')}>Contact</div>
      </nav>
    </div>
  );
});

export default Header;
