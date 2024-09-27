import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Header from '../../components/pages/Header';

import headerImage from '../../assets/pages/about-title-image2.jpg';
import OffersFeatures from '../../components/pages/OffersFeatures';
import DiverseDestination from '../../components/pages/DiverseDestination';
import Counter from '../../components/pages/Counter';
import PageReviews from '../../components/pages/PageReviews';

const WhatWeOffer = () => {
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

      <OffersFeatures />
      <DiverseDestination />
      <Counter />
      <PageReviews />
      <Footer />
    </div>
  );
};

export default WhatWeOffer;
