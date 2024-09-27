import React from 'react';
import Slider from 'react-slick';
import tourList1 from '../../assets/tour-list/tour-list1.jpg';
import { SlCalender } from 'react-icons/sl';
import { FaUserFriends, FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { popularTourData } from '../../services/offline';

const PopularTours = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 500,
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

  // Helper function to render stars based on the rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating / 2); // Full stars
    const halfStar = rating % 2 >= 1 ? true : false; // Half star if rating is .5 or more
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0); // Remaining empty stars

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-500" />);
    }

    // Add half star if needed
    if (halfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-500" />);
    }

    // Add empty stars
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-500" />);
    }

    return stars;
  };

  const slicesData = popularTourData.slice(0, 8);

  return (
    <div className="mt-32 lg:pr-[150px] lg:pl-[150px]">
      <div>
        <h2 className="font-bold text-5xl text-center">MOST POPULAR TOURS</h2>
        <p className="text-center leading-6">
          Lorem ipsum dolor sit amet. This is Photoshop’s version of Lorem Ipsn gravida. Ing
          business like this takes much more effort than doing your own.
        </p>
      </div>

      <div>
        <Slider {...settings}>
          {slicesData.map((tour, i) => (
            <div key={i}>
              <div className="p-3">
                <img src={tour.image} alt="Tour" className="w-full h-auto rounded-md" />
                <div className="p-3">
                  <div className="flex justify-between items-center">
                    <h3>{tour.title}</h3>
                    <div className="flex gap-3">
                      <p className="text-lg font-bold">
                        <strike>₹{tour.MRP}</strike>
                      </p>
                      <p className="text-lg font-bold">₹{tour.price}</p>
                    </div>
                  </div>

                  {/* Rating Section */}
                  <div className="flex items-center mt-2">
                    {renderStars(tour.rating)}
                    <p className="text-lg font-bold ml-2">
                      {tour.rating} {tour.rating <= 6 ? 'Good' : 'Superb'}
                    </p>
                  </div>

                  <div>
                    <p>{tour.description}</p>
                  </div>

                  <div className="bg-[#000] text-white p-4 mt-4 flex justify-between items-center ">
                    <div className="flex items-center">
                      <SlCalender /> <span className="ml-2">{tour.time} Days</span>
                    </div>

                    <div className="flex items-center">
                      <FaUserFriends /> <span className="ml-2">{tour.user} People</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PopularTours;
