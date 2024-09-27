import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Header from '../../components/pages/Header';
import AboutContent from '../../components/pages/AboutContent';
import AboutFeatures from '../../components/pages/AboutFeatures';
import RecommandTours from '../../components/pages/RecommandTours';
import LastMinute from '../../components/home/LastMinute';
import headerImage from '../../assets/pages/about-title-image2.jpg';

const Pages = () => {
  return (
    <div>
      <Navbar />
      <Header
        img={headerImage}
        title={'Everything About Us'}
        description={
          "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh. "
        }
      />
      <AboutContent />
      <AboutFeatures />
      <LastMinute title={'Recommended Tours'} />
      <Footer />
    </div>
  );
};

export default Pages;
