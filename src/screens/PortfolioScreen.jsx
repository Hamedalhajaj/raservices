import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import withHeader from '../HOC/withHeader';
import one from '../assets/portfolio/1.png';
import two from '../assets/portfolio/2.png';
import three from '../assets/portfolio/3.png';
import four from '../assets/portfolio/4.png';
import five from '../assets/portfolio/5.png';
import six from '../assets/portfolio/6.png';
import seven from '../assets/portfolio/7.png';
import eight from '../assets/portfolio/8.jpg';

const PortfolioScreen = props => {
  const images = [
    { src: one, alt: 'basement' },
    { src: two, alt: 'basement' },
    { src: three, alt: 'bathroom' },
    { src: four, alt: 'bathroom' },
    { src: five, alt: 'bathroom' },
    { src: six, alt: 'bathroom' },
    { src: seven, alt: 'attic' },
    { src: eight, alt: 'roof' }
  ];

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    }
  };
  return (
    <>
      <Swiper pagination={pagination} className='mySwiper' navigation={true}>
        {images.map(({ src, alt }) => (
          <SwiperSlide key={alt}>
            <img src={src} alt={alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default withHeader(PortfolioScreen);
