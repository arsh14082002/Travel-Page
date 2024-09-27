import React from 'react';
import last1 from '../../assets/last-minute/last-minute1.jpg';

const lastMinuteData = [
  {
    title: 'Amsterdam Fun',
    image: last1,
    price: 259,
    description: 'Lorem ipsum dolor sit amet consectetur.',
  },
  {
    title: 'Amsterdam Fun',
    image: last1,
    price: 259,
    description: 'Lorem ipsum dolor sit amet consectetur.',
  },
  {
    title: 'Amsterdam Fun',
    image: last1,
    price: 259,
    description: 'Lorem ipsum dolor sit amet consectetur.',
  },
  {
    title: 'Amsterdam Fun',
    image: last1,
    price: 259,
    description: 'Lorem ipsum dolor sit amet consectetur.',
  },
];

const LastMinute = ({ title, description }) => {
  return (
    <div className="s-container p-[80px]">
      <h2 className="secondary-heading mb-4">{title && title}</h2>
      <p className="secondary-content mb-4 ">{description && description} </p>

      <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-4">
        {lastMinuteData.map((data, i) => (
          <div key={i} className="relative group overflow-hidden">
            {/* Image */}
            <img
              src={data.image}
              alt={data.title}
              className="transition-transform duration-300 ease-in-out transform group-hover:scale-110 "
            />

            {/* Title and Description */}
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-4 transform translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0">
              <h3 className="text-lg font-bold">{data.title}</h3>
              <p className="">{data.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LastMinute;
