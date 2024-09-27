import React from 'react';
import Header from '../../components/home/Header';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TourType from '../../components/home/TourType';
import PopularTours from '../../components/home/PopularTours';
import Reviews from '../../components/home/Reviews';
import LastMinute from '../../components/home/LastMinute';
import Navbar from '../../components/Navbar';
import ParallaxBackground from '../../components/home/ParallaxBackground';
import ScrollToTop from '../../components/ScrollToTop';
import NewsLetter from '../../components/home/NewsLetter';
import DealDiscount from '../../components/home/Deal&Discount';
import Footer from '../../components/Footer';
import NewsLetterRibbon from '../../components/home/NewsLetterRibbon';

const Home = () => {
  return (
    <div className="font-raleway">
      <Navbar />
      <Header />
      <DealDiscount />
      <TourType />
      <PopularTours />
      <Reviews />
      <LastMinute
        title={'Last Minute Tour'}
        description={
          'Lorem ipsum dolor sit amet This is Photoshop’s version of Lorem Ipsn gravida. Ing business like this takes much more effort than doing your own.'
        }
      />
      <ParallaxBackground />
      <NewsLetter />
      <NewsLetterRibbon />
      {/* <ScrollToTop /> */}
      <Footer />
    </div>
  );
};

export default Home;
