import React from 'react';
import { SlCalender } from 'react-icons/sl';
import { FaTrainSubway } from 'react-icons/fa6';
import { MdOutlineFlag } from 'react-icons/md';
import { CiForkAndKnife } from 'react-icons/ci';
import { IoDiamond } from 'react-icons/io5';
import { IoSunnyOutline } from 'react-icons/io5';

import bg from '../../assets/pages/about-2-parallax-1.jpg';

const offerFeatureData = [
  {
    name: 'Cool Destinations',
    icon: <SlCalender />,
    description: 'Explore the world with our curated list of cool destinations',
  },
  {
    name: 'Amazing Transport',
    icon: <FaTrainSubway />,
    description: 'Enjoy convenient and fast transportation options',
  },
  {
    name: 'Adventure Awaits',
    icon: <MdOutlineFlag />,
    description: 'Find thrilling adventures at every corner',
  },
  {
    name: 'Tasty Treats',
    icon: <CiForkAndKnife />,
    description: 'Savor delicious local cuisines from around the world',
  },
  {
    name: 'Luxury Travel',
    icon: <IoDiamond />,
    description: 'Experience luxury and comfort in your travels',
  },
  {
    name: 'Sunny Escapes',
    icon: <IoSunnyOutline />,
    description: 'Relax in sunny destinations and recharge',
  },
];

const OffersFeatures = () => {
  return (
    <div
      className="s-container grid grid-cols-3 gap-8 p-[80px]"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {offerFeatureData.map((data, i) => (
        <div key={i} className="flex justify-start gap-4">
          <div className="mt-3">{data.icon}</div>
          <div>
            <h3 className="icons-content-style">{data.name}</h3>
            <p className="secondary-content">{data.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OffersFeatures;
