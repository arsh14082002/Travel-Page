import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { IoCall, IoMailSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const footerData = [
  {
    title: 'Water & Rocks: Discovering the ',
    link: '/',
  },
  {
    title: 'Beauty of New Zealand',
    link: '/',
  },
  {
    title: 'Updates: People Who Work',
    link: '/',
  },
  {
    title: 'Overseas and Fly For Free',
    link: '/',
  },
];

const Footer = () => {
  return (
    <div className="">
      <div className="bg-[#333]  lg:p-[100px] p-[20px]">
        <div className="grid  lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
          <div className="flex flex-col gap-5">
            <div className="logo">
              <h2 className="text-2xl text-white">
                <span className="font-bold text-[#00bdbb]">GO</span>travel
              </h2>
            </div>
            <div>
              <p className="text-white ">
                This is Photoshop's version of Lorem Ipsn gravida nibh vel velit auctor
                aliquet.Aenean sollicitudin, lorem quis bibendum auci elit.{' '}
              </p>
            </div>
            <div>
              <a
                href="tel:=1234678909"
                target="_blank"
                className="flex text-white items-center justify-center w-fit"
              >
                <span>
                  <IoCall />
                </span>{' '}
                <span>+1234567890</span>{' '}
              </a>
              <a
                href="tel:=1234678909"
                target="_blank"
                className="flex text-white items-center justify-center w-fit"
              >
                <span>
                  <FaLocationDot />
                </span>{' '}
                <span>Saket, New Delhi</span>{' '}
              </a>
              <a
                href="tel:=1234678909"
                target="_blank"
                className="flex text-white items-center justify-center w-fit"
              >
                <span>
                  <IoMailSharp />
                </span>{' '}
                <span>gotravel@qode.com </span>{' '}
              </a>
            </div>
          </div>

          <div>
            <div>
              <h4 className="text-white">LATEST NEWS</h4>
              <div>
                {footerData.map((data, i) => (
                  <div key={i}>
                    <Link className="text-white">{data.title}</Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div>
              <h4 className="text-white">FOLLOW US</h4>
              <div>
                {footerData.map((data, i) => (
                  <div key={i}>
                    <Link className="text-white">{data.title}</Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div>
              <h4 className="text-white">INSTAGRAM FEED</h4>
              <div>
                {footerData.map((data, i) => (
                  <div key={i}>
                    <Link className="text-white">{data.title}</Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#282828] text-white text-center p-5 ">
        <p>© 2016 Qode Interactive, All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
