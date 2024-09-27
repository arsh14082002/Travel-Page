import React from 'react';
import '../styles/pagesStyling.css';
import bg from '../../assets/pages/about-2-parallax-3.jpg';

const PageReviews = () => {
  return (
    <div
      className="h-screen "
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      
    </div>
  );
};

export default PageReviews;
