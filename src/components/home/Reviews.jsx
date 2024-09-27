import React, { useState } from 'react';
import bg from '../../assets/bg.jpg';
import vdoImgHome from '../../assets/video-image-home.jpg';
import Slider from 'react-slick';
import profile1 from '../../assets/profileimage/image1.jpeg';
import { FaRegStar, FaStar, FaPlay, FaTimes } from 'react-icons/fa';
import video from '../../assets/video.mp4';

const reviews = [
  {
    company: 'Sendra Medina',
    name: 'John Doe',
    rating: 5,
    profileImage: profile1,
    review:
      'Everything was seamless. The private guides were interesting and knowledgeable. We felt that they were more than just guides. It was like we had a friend in each city. I cannot speak highly enough about our 3 week trip to this place and the services provided by them.',
  },
  {
    company: 'Sendra Medina',
    name: 'John Doe',
    rating: 5,
    profileImage: profile1,
    review:
      'Everything was seamless. The private guides were interesting and knowledgeable. We felt that they were more than just guides. It was like we had a friend in each city. I cannot speak highly enough about our 3 week trip to this place and the services provided by them.',
  },
  {
    company: 'Sendra Medina',
    name: 'John Doe',
    rating: 5,
    profileImage: profile1,
    review:
      'Everything was seamless. The private guides were interesting and knowledgeable. We felt that they were more than just guides. It was like we had a friend in each city. I cannot speak highly enough about our 3 week trip to this place and the services provided by them.',
  },
  {
    company: 'Sendra Medina',
    name: 'John Doe',
    rating: 5,
    profileImage: profile1,
    review:
      'Everything was seamless. The private guides were interesting and knowledgeable. We felt that they were more than just guides. It was like we had a friend in each city. I cannot speak highly enough about our 3 week trip to this place and the services provided by them.',
  },
  {
    company: 'Sendra Medina',
    name: 'John Doe',
    rating: 5,
    profileImage: profile1,
    review:
      'Everything was seamless. The private guides were interesting and knowledgeable. We felt that they were more than just guides. It was like we had a friend in each city. I cannot speak highly enough about our 3 week trip to this place and the services provided by them.',
  },
  // Add more review objects as needed
];

const Reviews = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplaySpeed: 3000,
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => {
      return index < rating ? (
        <FaStar key={index} className="text-yellow-500" />
      ) : (
        <FaRegStar key={index} className="text-yellow-500" />
      );
    });
  };

  const handleVideoClick = () => {
    setIsVideoOpen(true);
  };

  const closeVideoPopup = () => {
    setIsVideoOpen(false);
  };

  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="bg-cover bg-center lg:h-[500px] py-16 grid lg:grid-cols-2 grid-cols-1 mt-[150px] relative"
    >
      {/* Video thumbnail */}
      <div className="w-full flex justify-center mb-12 relative">
        <div className="max-w-[600px] h-auto lg:absolute top-[-150px] flex justify-center items-center">
          <img src={vdoImgHome} alt="Video" />
          <div
            className="z-50 absolute border-white border-2 border-solid h-[80px] w-[80px] flex justify-center items-center rounded-full cursor-pointer"
            onClick={handleVideoClick}
          >
            <FaPlay size={50} color="white" />
          </div>
        </div>
      </div>

      <div className="relative flex justify-center items-center">
        <div className="bg-white md:w-[500px] w-full p-12 lg:absolute bottom-[-100px] ">
          <div>
            <h3 className="font-bold">TOP REVIEWS</h3>
          </div>
          <div className="container ">
            <Slider {...settings}>
              {reviews.map((rev, i) => (
                <div key={i} className="">
                  <div className="bg-white rounded-lg h-full">
                    <h3 className="font-bold text-3xl">{rev.company}</h3>
                    <div className="flex justify-start gap-2 mb-2">{renderStars(rev.rating)}</div>
                    <p className="text-sm text-left flex justify-start">{rev.review}</p>
                    <div className="flex gap-2 justify-start items-center">
                      <img
                        src={rev.profileImage}
                        alt={rev.name}
                        className="w-16 h-16 rounded-full"
                      />
                      <h4 className="text-xl font-bold text-center mb-2">{rev.company}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      {isVideoOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75 z-50">
          <div className="relative w-[80%] h-[80%]">
            <video
              width="100%"
              className="lg:h-[550px]"
              src={video}
              title="Video Player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              controls
              autoPlay
            ></video>
            <button
              onClick={closeVideoPopup}
              className="absolute top-[-40px] right-0 text-white text-4xl"
            >
              <FaTimes />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reviews;
