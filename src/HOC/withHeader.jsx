import React, { useRef } from 'react';
import { useState } from 'react';
import Header from '../components/Header';
const withHeader = Component => {
  return props => {
    const [scrolled, setScrolled] = useState(false);
    const headerRef = useRef(null);

    const handleScroll = event => {
      if (event.target.scrollTop >= headerRef.current.scrollHeight) {
        headerRef.current.className = 'headerAnimation';
        headerRef.current.children[1].children[0].children[0].style.color = '#525252';
        headerRef.current.children[1].children[1].style.color = '#525252';
        headerRef.current.children[1].children[2].style.color = '#525252';
        headerRef.current.children[1].children[3].style.color = '#525252';

        headerRef.current.children[0].children[0].children[0].className = 'logoAnimation';
        setScrolled(true);
      }
      if (event.target.scrollTop < headerRef.current.scrollHeight && scrolled) {
        headerRef.current.className = 'headerAnimationReverted';
        headerRef.current.children[0].children[0].children[0].className = 'logoAnimationReverted';
        headerRef.current.children[1].children[0].children[0].style.color = '#fbfbfb';
        headerRef.current.children[1].children[1].style.color = '#fbfbfb';
        headerRef.current.children[1].children[2].style.color = '#fbfbfb';
        headerRef.current.children[1].children[3].style.color = '#fbfbfb';
        setScrolled(false);
      }
    };

    return (
      <div style={{ height: '100vh', overflowY: 'scroll' }} onScroll={handleScroll}>
        <Header ref={headerRef} scrolled={scrolled} {...props} />
        <Component {...props} />
      </div>
    );
  };
};

export default withHeader;
