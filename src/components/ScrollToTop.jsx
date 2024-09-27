import React, { useEffect } from 'react';
import { FaCaretUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll
    });
  };

  return (
    <div
      onClick={scrollToTop}
      className="fixed bottom-10 right-10 bg-red-600 w-10 h-10 flex justify-center items-center"
    >
      <FaCaretUp color="white" size={30} />
    </div>
  );
};

export default ScrollToTop;
