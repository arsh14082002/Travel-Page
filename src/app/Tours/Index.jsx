import React from 'react';
import Header from '../../components/Tours/Header';
import TourList from '../../components/Tours/TourList';
import Footer from '../../components/Footer';
import Navbar from "../../components/Navbar"

const Index = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <TourList />
      <Footer />
    </div>
  );
};

export default Index;
