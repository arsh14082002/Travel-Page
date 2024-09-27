import { Route, Routes } from 'react-router-dom';
import Home from '../app/Home/Home';
import Pages from '../app/Pages/Pages';
import WhatWeOffer from '../app/Pages/WhatWeOffer';
import Index from '../app/Tours/Index';

function Root() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/pages/everything-about-us" element={<Pages />} />
      <Route path="/pages/what-we-offer" element={<WhatWeOffer />} />

      <Route path="/tours" element={<Index />} />
    </Routes>
  );
}

export default Root;
