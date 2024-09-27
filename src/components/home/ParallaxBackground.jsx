import React from 'react';
import '../styles/ParallaxBackground.css'; // Import the CSS file

const ParallaxBackground = () => {
  return (
    <div className="parallax-container w-full mt-[50px] mb-[50px] h-[300px] flex justify-center items-center">
      <div className="parallax-background"></div>
      <div className="z-30 text-white text-center ">
        <h1 className="text-3xl font-bold">Your Content Here</h1>
        <p>This is where you can place your content. Scroll down to see the parallax effect!</p>
      </div>
    </div>
  );
};

export default ParallaxBackground;
