import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import bg from '../../assets/pages/about-2-background-1.jpg';

gsap.registerPlugin(ScrollTrigger);

const counterData = [
  {
    title: 'CRUISES',
    startValue: 0,
    endValue: 275,
  },
  {
    title: 'TOURS',
    startValue: 0,
    endValue: 150,
  },
  {
    title: 'HOTELS',
    startValue: 0,
    endValue: 100,
  },
  {
    title: 'FLIGHTS',
    startValue: 0,
    endValue: 300,
  },
];

const Counter = () => {
  const counterRefs = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      counterRefs.current.forEach((el, index) => {
        const { startValue, endValue } = counterData[index];

        // Smooth GSAP animation for each counter
        gsap.fromTo(
          el,
          { innerText: startValue },
          {
            innerText: endValue,
            duration: 2,
            scrollTrigger: {
              trigger: el,
              start: 'top 80%',
              end: 'bottom top',
              //   markers: true,
            },
            ease: 'power1.out', // Easing for smooth transition
            onUpdate: function () {
              const current = Math.floor(this.targets()[0].innerText);
              // Use smooth interpolation for the number
              el.innerText = gsap.utils
                .interpolate(startValue, endValue, this.progress())
                .toFixed(0);
            },
          },
        );
      });
    });

    return () => ctx.revert(); // Cleanup GSAP context on unmount
  }, []);

  return (
    <div
      className="s-container p-[80px]"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-6">
        {counterData.map((item, index) => (
          <div key={index} className="flex flex-col justify-between items-center mb-10">
            <div
              ref={(el) => (counterRefs.current[index] = el)} // Store each counter ref
              className="text-3xl font-bold"
            >
              {item.startValue}
            </div>
            <h2 className="text-xl font-bold">{item.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counter;
