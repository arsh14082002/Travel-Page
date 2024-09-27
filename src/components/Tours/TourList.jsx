import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlCalender } from 'react-icons/sl';
import { FaUserFriends, FaFacebookF } from 'react-icons/fa';
import { IoMdWallet } from 'react-icons/io';
import { FaSquareXTwitter, FaGooglePlusG, FaArrowUpFromBracket } from 'react-icons/fa6';
import { RiPencilRulerFill } from 'react-icons/ri';
import { popularTourData } from '../../services/offline'; // Assuming this is the data array
import SideSection from './SideSection';

const pageSize = 5;

const filterTextData = [
  {
    title: 'date',
    icon: <SlCalender />,
  },
  {
    title: 'price-low-to-high',
    icon: <IoMdWallet />,
  },
  {
    title: 'price-high-to-low',
    icon: <FaArrowUpFromBracket />,
  },
  {
    title: 'name',
    icon: <RiPencilRulerFill />,
  },
];

const TourList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [currentTours, setCurrentTours] = useState([]);
  const [sortOption, setSortOption] = useState('date'); // Initially, no sorting option is selected

  const page = parseInt(searchParams.get('page')) || 1;

  const sortTours = (tours) => {
    switch (sortOption) {
      case 'date':
        return tours.sort((a, b) => new Date(a.date) - new Date(b.date));
      case 'price-low-to-high':
        return tours.sort((a, b) => a.price - b.price);
      case 'price-high-to-low':
        return tours.sort((a, b) => b.price - a.price);
      case 'name':
        return tours.sort((a, b) => a.title.localeCompare(b.title));
      default:
        return tours;
    }
  };

  useEffect(() => {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    const sortedTours = sortTours([...popularTourData]);
    setCurrentTours(sortedTours.slice(startIndex, endIndex));
    setCurrentPage(page);

    window.scrollTo({
      top: 0,
    });
  }, [page, sortOption]);

  const handlePageChange = (newPage) => {
    setSearchParams({ page: newPage });
  };

  const handleSortChange = (option) => {
    setSortOption(option);
    setSearchParams({ page: 1, sort: option }); // Reset to the first page on sort change
  };

  return (
    <div className="s-container p-[50px]">
      <div className=" tours-main">
        <div>
          {/* Sorting Options */}
          <div className="flex justify-start items-end mb-5">
            {filterTextData.map((option) => (
              <button
                key={option.title}
                onClick={() => handleSortChange(option.title)}
                className={`flex flex-col gap-3 justify-center items-center p-2 px-6 ${
                  sortOption === option.title
                    ? 'bg-bgColor text-white h-20' // Red when active
                    : 'bg-gray-200' // Default background color
                } transition-all duration-200`}
              >
                {option.icon}
                <div className="text-base">{option.title.replace(/-/g, ' ').toUpperCase()}</div>
              </button>
            ))}
          </div>

          {/* Tour List */}
          <div className="grid grid-cols-1 gap-8">
            {currentTours.map((data, i) => (
              <div key={i}>
                <div className="flex lg:flex-row w-full flex-col gap-3">
                  <div className="flex lg:w-[400px] justify-center items-center">
                    <img src={data.image} alt="" className="h-full w-full object-cover" />
                  </div>

                  <div className="flex flex-col gap-8">
                    <div>
                      <h2 className="secondary-heading">{data.title}</h2>
                      <h4 className="text-fontColor">{data.rating} Superb</h4>
                      <p className="secondary-content">{data.description}</p>
                    </div>

                    <div className="flex justify-between">
                      <div>
                        <span className="text-bgColor font-bold">{data.price}</span>/
                        <span className="text-fontColor"> per person</span>
                      </div>

                      <div className="flex gap-3">
                        <a href="#" target="_blank" className="text-fontColor">
                          <FaFacebookF />
                        </a>
                        <a href="#" target="_blank" className="text-fontColor">
                          <FaSquareXTwitter />
                        </a>
                        <a href="#" target="_blank" className="text-fontColor">
                          <FaGooglePlusG />
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-3 text-fontColor">
                      <div className="flex items-center">
                        <SlCalender />
                        <span>{data.time || 0} days</span>
                      </div>
                      <div className="flex items-center">
                        <FaUserFriends />
                        <span>{data.user || 0} people</span>
                      </div>
                      <div className="flex items-center">
                        {<data.type.icon1 />}
                        <span>{data.type.name1}</span>
                      </div>{' '}
                      <div className="flex items-center">
                        {<data.type.icon2 />}
                        <span>{data.type.name2}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between mt-8">
            <button
              className="bg-fontColor p-2 px-4 rounded-lg hover:bg-bgColor"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <button
              className="bg-fontColor p-2 px-4 rounded-lg hover:bg-bgColor"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage * pageSize >= popularTourData.length}
            >
              Next
            </button>
          </div>
        </div>

        <div>
          <SideSection />
        </div>
      </div>
    </div>
  );
};

export default TourList;
