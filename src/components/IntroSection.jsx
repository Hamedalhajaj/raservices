import React from 'react';

const IntroSection = props => {
  const { payload } = props;
  return (
    <>
      {payload.map(({ svg, text, alt, headerText, subHeader }) => (
        <div className='introSectionContainer' key={alt}>
          <img src={svg} alt={alt} />
          <div className='introTextContainer'>
            <h1 style={{ fontSize: 72 }}>{headerText}</h1>
            <h2>{subHeader}</h2>
            <p style={{ wordBreak: 'break-all' }}>{text}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default IntroSection;
