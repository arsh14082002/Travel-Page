import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink
import { FaAngleDown } from 'react-icons/fa';
import { RiMenu3Line } from 'react-icons/ri';

const navLinks = [
  {
    name: 'Home',
    path: '/',
    dropdown: [
      { name: 'About Us', path: '/about' },
      { name: 'What we Offer', path: '/contact' },
    ],
  },
  {
    name: 'Pages',
    path: '/pages',
    dropdown: [
      { name: 'Everything About Us', path: '/pages/everything-about-us' },
      { name: 'What we Offer', path: '/pages/what-we-offer' },
      { name: 'FAQ Page', path: '/pages/faq-page' },
      { name: 'Contact Page', path: '/pages/contact-page' },
      { name: 'Meet Our Guides', path: '/pages/meet-our-guides' },
    ],
  },
  {
    name: 'Tours',
    path: '/tours',
    dropdown: [
      // { name: 'Popular Tours', path: '/tours/popular' },
      // { name: 'Upcoming Tours', path: '/tours/upcoming' },
    ],
  },
  {
    name: 'Blog',
    path: '/blog',
    dropdown: [
      { name: 'About Us', path: '/about' },
      { name: 'Contact Us', path: '/contact' },
    ],
  },
  {
    name: 'Shop',
    path: '/shop',
    dropdown: [
      { name: 'About Us', path: '/about' },
      { name: 'Contact Us', path: '/contact' },
    ],
  },
  {
    name: 'Elements',
    path: '/elements',
    dropdown: [
      { name: 'Buttons', path: '/elements/buttons' },
      { name: 'Forms', path: '/elements/forms' },
    ],
  },
];

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  const handleMouseEnter = (index) => {
    setDropdownOpen(index);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(null);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className={`w-full absolute z-10 flex justify-center items-center`}>
        <div
          className={`navbar-container flex lg:justify-between justify-between items-center lg:w-[80%] w-full bg-white p-6 ${
            menuOpen ? 'blur-background' : ''
          }`}
        >
          <div className="lg:hidden block">
            <button onClick={toggleMenu} aria-label="Toggle menu">
              {menuOpen ? (
                <RiMenu3Line className="rotate-90 transition-transform duration-300" />
              ) : (
                <RiMenu3Line />
              )}
            </button>
          </div>

          <div className="logo">
            <h2 className="text-2xl">
              <span className="font-bold text-[#00bdbb]">GO</span>travel
            </h2>
          </div>

          <div></div>

          <div
            ref={menuRef}
            className={`fixed left-0 top-0 w-64 h-full bg-white shadow-lg transition-transform duration-300 ${
              menuOpen ? 'translate-x-0 z-40' : '-translate-x-full'
            }`}
          >
            <ul className="flex flex-col p-4 pt-[100px]">
              {navLinks.map((link, index) => (
                <li key={index} className="py-2 relative group">
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive
                        ? 'flex justify-center items-center gap-1 font-bold text-blue-500'
                        : 'flex justify-center items-center gap-1'
                    }
                  >
                    <span className="uppercase tracking-wider">{link.name}</span>
                    {link.dropdown.length > 0 && <FaAngleDown />}
                  </NavLink>
                  {link.dropdown.length > 0 && (
                    <ul
                      className={`absolute left-0 top-full mt-2 w-[150px] bg-[#1e1e1e] text-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-600 ease-in-out ${
                        dropdownOpen === index ? 'opacity-100 visible' : 'invisible'
                      }`}
                    >
                      {link.dropdown.map((dropdownLink, idx) => (
                        <li key={idx} className="p-2 hover:bg-slate-800 overflow-hidden">
                          <NavLink
                            to={dropdownLink.path}
                            className={({ isActive }) =>
                              isActive ? 'font-bold text-blue-500 flex ' : ''
                            }
                          >
                            {dropdownLink.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <ul className="lg:flex hidden justify-center z-20 items-center gap-8 relative">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? 'font-bold text-blue-500 flex items-center justify-center gap-1'
                      : 'flex justify-center items-center gap-1'
                  }
                >
                  <span className="uppercase tracking-wider">{link.name}</span>
                  {link.dropdown.length > 0 && <FaAngleDown />}
                </NavLink>
                {link.dropdown.length > 0 && (
                  <ul
                    className={`absolute left-0 top-full mt-2 w-fit bg-[#1e1e1e] text-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-600 ease-in-out ${
                      dropdownOpen === index ? 'opacity-100 visible' : 'invisible'
                    }`}
                  >
                    {link.dropdown.map((dropdownLink, idx) => (
                      <li key={idx} className="p-2 hover:bg-slate-800 overflow-hidden">
                        <NavLink
                          to={dropdownLink.path}
                          className={({ isActive }) => (isActive ? 'font-bold text-blue-500' : '')}
                        >
                          {dropdownLink.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
