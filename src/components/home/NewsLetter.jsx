import React from 'react';
import newsletterImage from '../../assets/newletter/main-home.jpg';

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

const NewsLetter = () => {
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
    <div className="grid lg:grid-cols-2 grid-cols-1">
      <div
        className="flex flex-col gap-4 bg-cover bg-center p-20"
        style={{ backgroundImage: `url(${newsletterImage})` }}
      >
        <div className="bg-white  p-6 flex flex-col gap-4">
          <div className="text-black text-center">
            <h2 className="font-bold text-3xl">JOIN THE NEWSLETTER</h2>
            <p>To receive our best monthly deals</p>
          </div>
          <input type="text" placeholder="E-mail" className="p-3 border w-full" />
          <div className="flex justify-center items-center">
            <button className="bg-blue-500 text-white p-2 w-fit ">SUBSCRIBE</button>
          </div>
        </div>
      </div>
      <div>
        <div>
          <Slider>
            <div className="flex items-center flex-col">
              <img src={icon1} alt="" className="w-full h-full" />
              <h4 className="font-bold text-3xl mt-3 text-center">
                BARCELONA <span className="text-blue-400">50% OFF</span>
              </h4>
            </div>

            <div className="flex items-center flex-col">
              <img src={icon1} alt="" className="w-full h-full" />
              <h4 className="font-bold text-3xl mt-3 text-center">
                BARCELONA <span className="text-blue-400">50% OFF</span>
              </h4>
            </div>

            <div className="flex items-center flex-col text-center">
              <img src={icon1} alt="" className="w-full h-full" />
              <h4 className="font-bold text-3xl mt-3">
                BARCELONA <span className="text-blue-400">50% OFF</span>
              </h4>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
