import React from 'react';

const Header = ({ img, title, description }) => {
  return (
    <div className="relative">
      <img src={img} alt="header" />
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h2 className="primary-heading">{title}</h2>
        <p className="primary-heading-text">{description}</p>
      </div>
    </div>
  );
};

export default Header;
