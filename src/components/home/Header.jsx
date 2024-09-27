import React, { useEffect } from 'react';
import Slider from 'react-slick';
import { gsap } from 'gsap';
import slide1 from '../../assets/header-img/slide-1.jpg';
import slide2 from '../../assets/header-img/slide-2.jpg';
import slide3 from '../../assets/header-img/slide-3.jpg';
import slide4 from '../../assets/header-img/slide-4.jpg';
import { MdPushPin } from 'react-icons/md';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const ttype = ['Exotic', 'On Budget', 'Romantic', 'Sightseeing', 'Vacation'];

const Header = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1500,
    // autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    pauseOnHover: true,
    // prevArrow: '<button type="button" class="slick-prev">Previous</button>',
    // nextArrow: '<button type="button" class="slick-next">Next</button>',
    afterChange: (current) => animateSlide(current), // Trigger animation on slide change
  };

  const animateSlide = (current) => {
    const headingRef = document.querySelector(`#heading-${current}`);
    const paragraphRef = document.querySelector(`#paragraph-${current}`);
    const imageRef = document.querySelector(`#image-${current}`);

    gsap.fromTo(imageRef, { scale: 1.1 }, { scale: 1, duration: 1, ease: 'power2.out' });

    // Text animations
    gsap.fromTo(
      headingRef,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power2.out' },
    );

    gsap.fromTo(
      paragraphRef,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power2.out', delay: 0.3 },
    );
  };

  useEffect(() => {
    animateSlide(0);
  }, []);

  return (
    <div className="slider-container relative">
      <Slider {...settings}>
        {[slide1, slide2, slide3, slide4].map((slide, index) => (
          <div key={index}>
            <div className="w-full lg:h-auto h-screen object-cover relative">
              <img
                id={`image-${index}`}
                src={slide}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] lg:w-[50%] w-full">
                <h2
                  id={`heading-${index}`}
                  className="lg:text-5xl md:text-3xl text-xl font-bold text-white text-center uppercase"
                  style={{ opacity: 0 }}
                >
                  your journey begins
                </h2>
                <p
                  id={`paragraph-${index}`}
                  className="text-center md:text-xl text-md text-white"
                  style={{ opacity: 0 }} // Initial opacity set to 0
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis voluptatum
                  iusto modi. Debitis veniam omnis facilis ipsam sequi beatae vero.
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <div className="absolute w-full bg-black lg:h-[100px] flex p-3 justify-center items-center bg-opacity-70  z-0 bottom-0">
        <div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-0 gap-3 lg:pr-[200px] lg:pl-[200px]">
          <div>
            <input
              type="text"
              placeholder="Where To?"
              className=" px-3 w-full lg:h-[50px] h-auto p-2 bg-white outline-none"
            />
          </div>

          <div>
            <select
              id="month"
              name="month"
              defaultValue=""
              className=" px-3 w-full lg:h-[50px] h-auto p-2 bg-white outline-none"
            >
              <option value="" disabled>
                Select a month
              </option>
              {months.map((month, index) => (
                <option key={index} value={month.toLowerCase()}>
                  {month}
                </option>
              ))}
            </select>
          </div>

          <div>
            <select
              id="travel-type"
              name="travel-type"
              defaultValue=""
              className=" px-3 w-full lg:h-[50px] h-auto p-2 bg-white outline-none"
            >
              <option value="" disabled>
                <MdPushPin />
                TRAVEL TYPE
              </option>
              {ttype.map((type, index) => (
                <option key={index} value={type.toLowerCase()}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div>
            <button className="bg-red-500 lg:p-3 pr-6 pl-6 lg:h-[50px] h-auto p-2 text-white text-sm tracking-wider">
              FIND NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
