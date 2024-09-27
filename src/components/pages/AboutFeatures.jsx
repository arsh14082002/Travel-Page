import React from 'react';

import icon1 from '../../assets/pages/aboutpageicons/about-us-icon-1.png';
import icon2 from '../../assets/pages/aboutpageicons/about-us-icon-2.png';
import icon3 from '../../assets/pages/aboutpageicons/about-us-icon-3.png';
import icon4 from '../../assets/pages/aboutpageicons/about-us-icon-4.png';

const aboutFeaturesData = [
  {
    title: 'PRIVATE TRANSPORT',
    description: 'We provide private transport for our clients, ensuring their safety and comfort.',
    icon: icon1,
  },
  {
    title: 'PRIVATE TRANSPORT',
    description: 'We provide private transport for our clients, ensuring their safety and comfort.',
    icon: icon2,
  },
  {
    title: 'PRIVATE TRANSPORT',
    description: 'We provide private transport for our clients, ensuring their safety and comfort.',
    icon: icon3,
  },
  {
    title: 'PRIVATE TRANSPORT',
    description: 'We provide private transport for our clients, ensuring their safety and comfort.',
    icon: icon4,
  },
];

const AboutFeatures = () => {
  return (
    <div className="s-container p-[80px]">
      <div className="grid grid-cols-4 gap-3">
        {aboutFeaturesData.map((data, i) => (
          <div key={i} className="flex justify-center flex-col items-center">
            <img src={data.icon} alt={data.title} />
            <h3 className="icons-content-style text-center">{data.title}</h3>
            <p className="secondary-content text-center">{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutFeatures;
