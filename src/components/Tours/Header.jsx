import React from 'react';
import bg from '../../assets/tours/tour-list-title-image-1.jpg';

const Header = () => {
  return (
    <div className="relative">
      <img src={bg} alt="header" />
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h2 className="primary-heading">Tour Standard List</h2>
      </div>
    </div>
  );
};

export default Header;
