import React, { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import '../styles/tours.css';
import img from '../../assets/tours/banner.png';
import bg from '../../assets/tours/newsletter-background.jpg';

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

const SideSection = () => {
  const options = [
    { title: 'Romantic', checked: false, id: 'romantic' },
    { title: 'Exotic', checked: false, id: 'exotic' },
    { title: 'Sightseeing', checked: false, id: 'sightseeing' },
    { title: 'On Budget', checked: false, id: 'on-budget' },
    { title: 'Vacations', checked: false, id: 'vacations' },
  ];

  const [rangeValue, setRangeValue] = useState(5000);
  const [minRangeValue, setMinRangeValue] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedOptions, setSelectedOptions] = useState(options);

  // Handle range slider change
  const handleSliderChange = (e) => {
    setRangeValue(e.target.value);
  };

  // Handle select dropdown change
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  // Handle checkbox change
  const handleCheckboxChange = (e) => {
    const { id, checked } = e.target;
    setSelectedOptions((prevOptions) =>
      prevOptions.map((option) => (option.id === id ? { ...option, checked } : option)),
    );
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-4 bg-[#f0efef] p-8">
        <div>
          <h2 className="text-md secondary-heading text-center">Find Your Destination</h2>
        </div>
        <div className="flex items-center gap-3 p-3 border-2 border-solid bg-white border-[#f0efef] shadow-md">
          <IoIosSearch size={30} />
          <input type="text" placeholder="Search Tour" className="outline-none w-full" />
        </div>

        <div className="flex items-center gap-3 p-3 border-2 border-solid bg-white border-[#f0efef] shadow-md">
          <IoIosSearch size={30} />
          <input type="text" placeholder="Where To?" className="outline-none w-full" />
        </div>

        <div className="flex items-center gap-3 p-3 border-2 border-solid bg-white border-[#f0efef] shadow-md">
          <IoIosSearch size={30} />
          <select id="month" name="month" defaultValue="" className="bg-transparent w-full">
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

        <div className="flex items-center flex-col gap-3 py-3 w-full">
          <input
            type="range"
            className="outline-none w-full"
            max={10000}
            min={0}
            value={rangeValue}
            onChange={handleSliderChange}
          />
          <div className="flex items-center w-full justify-center gap-3 p-3 border-2 border-solid border-[#f0efef] shadow-md bg-white">
            <span>
              {minRangeValue} - {rangeValue}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-3 w-full">
          {selectedOptions.map((option, i) => (
            <div className="flex items-center gap-3" key={i}>
              <input
                type="checkbox"
                name={option.id}
                checked={option.checked}
                onChange={handleCheckboxChange}
                id={option.id}
              />
              <label htmlFor={option.id}>{option.title}</label>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center w-full">
          <button className="bg-bgColor p-5 text-white w-full">SEARCH</button>
        </div>
      </div>

      <div>
        <img src={img} alt="" />
      </div>

      <div>
        <div
          className="flex flex-col gap-4 bg-cover bg-center "
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="  p-6 flex flex-col gap-4">
            <div className="text-black text-center">
              <h2 className="secondary-heading">Newletter</h2>
              <p className="secondary-content">
                This is Photoshop's version of Lorem Ipsn gravida nibh vel velit auct simbi est
              </p>
            </div>
            <input type="text" placeholder="E-mail" className="p-3 border w-full" />
            <div className="flex justify-center items-center">
              <button className="bg-blue-500 text-white p-2 w-fit ">SUBSCRIBE</button>
            </div>
          </div>
        </div>{' '}
      </div>
    </div>
  );
};

export default SideSection;
