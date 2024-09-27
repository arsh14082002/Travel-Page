import React from 'react';
import backgroundImage from '../../assets/home-image/home-image.jpg';

import icon1 from '../../assets/home-image/icons/icon-1.png';
import icon2 from '../../assets/home-image/icons/icon-2.png';
import icon3 from '../../assets/home-image/icons/icon-3.png';
import icon4 from '../../assets/home-image/icons/icon-4.png';
import Slider from 'react-slick';

const tourtypeData = [
  {
    icon: icon1,
    title: 'Sidney Opera House',
    rating: 8.5,
  },
  {
    icon: icon2,
    title: 'London Eye',
    rating: 6.3,
  },
  {
    icon: icon3,
    title: 'The Pantheon',
    rating: 7.2,
  },
  {
    icon: icon4,
    title: 'Space Needle',
    rating: 9.0,
  },
  {
    icon: icon4,
    title: 'Eiffel Tower',
    rating: 8.0,
  },
  {
    icon: icon4,
    title: 'Tower Bridge',
    rating: 5.4,
  },
];

const TourType = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="bg-cover bg-center h-[500px] flex flex-col items-center justify-center pb-48 relative"
    >
      <div className="text-center mb-8">
        <h2 className="font-bold text-center text-white text-4xl">TOUR TYPE</h2>
        <p className="text-[18px] font-normal leading-6 text-white max-w-md mx-auto">
          Lorem ipsum dolor sit amet. This is Photoshop’s version of Lorem Ipsn gravida. Doing
          business like this takes much more effort than doing your own.
        </p>
      </div>

      <div className="w-full px-8 absolute bottom-[-50px] overflow-x-hidden">
        <Slider {...settings}>
          {tourtypeData.map((tour, index) => (
            <div key={index} className="px-4">
              <div className="flex flex-col shadow-md rounded-lg bg-white p-4 items-center group justify-center gap-3 hover:translate-y-[-12px] transition-transform ease-in">
                {/* Image with hover scaling */}
                <img src={tour.icon} alt={tour.title} />
                <h3 className="text-black text-xl font-bold text-center">{tour.title}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TourType;
