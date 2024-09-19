import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineFire } from "react-icons/ai";
import { FaAngleDown } from "react-icons/fa6";
import { CiBellOn } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineGTranslate } from "react-icons/md";
import { HiMenu } from "react-icons/hi";

export default function Navbar() {
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSearchBox = () => {
    setShowSearchBox((prev) => !prev);
  };

  const handleDropdownHover = (dropdown) => {
    if (!isMobile) {
      setActiveDropdown(dropdown);
    }
  };

  const handleDropdownLeave = () => {
    if (!isMobile) {
      setActiveDropdown(null);
    }
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu((prev) => !prev);
  };

  const navItems = [
    { name: "Courses", dropdown: ["Course 1", "Course 2", "Course 3"] },
    { name: "Tutorials", dropdown: ["Tutorial 1", "Tutorial 2", "Tutorial 3"] },
    { name: "Jobs", dropdown: ["Job 1", "Job 2", "Job 3"] },
    { name: "Practice", dropdown: ["Practice 1", "Practice 2", "Practice 3"] },
    { name: "Contests", dropdown: ["Contest 1", "Contest 2", "Contest 3"] },
  ];

  return (
    // fixed
    <nav className="w-full bg-[#1a1a2e] z-10"> 
      <div className="flex justify-between items-center h-16 px-4 md:px-6">
        {isMobile ? (
          <>
            <HiMenu
              className="text-white text-2xl cursor-pointer"
              onClick={toggleMobileMenu}
            />
            <Link to="/">
              <img src="" alt="logo" height="30" width="70" />
            </Link>
            <div className="flex items-center">
              <IoSearchOutline
                className="text-white text-2xl mr-4 cursor-pointer"
                onClick={toggleSearchBox}
              />
              <AiOutlineFire className="text-white text-2xl" />
            </div>
          </>
        ) : (
          <>
            <ul className="hidden md:flex flex-row items-center space-x-4 text-white font-sans font-bold text-[17px]">
              {navItems.map((item) => (
                <li
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => handleDropdownHover(item.name)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button className="flex items-center">
                    {item.name} <FaAngleDown className="ml-1" />
                  </button>
                  {activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-[#273239] text-white rounded shadow-lg z-10">
                      <ul>
                        {item.dropdown.map((subItem) => (
                          <li key={subItem} className="p-2 hover:bg-[#1a1a2e]">
                            {subItem}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
            <Link to="/">
              <img src="" alt="logo" height="30" width="70" />
            </Link>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <IoSearchOutline
                  className="text-white text-2xl cursor-pointer"
                  onClick={toggleSearchBox}
                />
                {showSearchBox && (
                  <input
                    type="text"
                    placeholder="Search..."
                    className="absolute right-[30px] top-[-9px] p-2 rounded bg-[#2c2c54] text-white outline-none"
                  />
                )}
              </div>
              <AiOutlineFire className="text-white text-2xl" />
              <CiBellOn className="text-white text-2xl" />
              <MdOutlineGTranslate className="text-white text-2xl" />
              <button className="border-none bg-[#273239] text-white py-2 px-6 rounded">
                Sign In
              </button>
            </div>
          </>
        )}
      </div>
      {isMobile && showMobileMenu && (
        <div className="bg-[#1a1a2e] p-4">
          {navItems.map((item) => (
            <div key={item.name} className="mb-4">
              <button
                className="text-white font-bold mb-2"
                onClick={() =>
                  setActiveDropdown(
                    activeDropdown === item.name ? null : item.name
                  )
                }
              >
                {item.name} <FaAngleDown className="inline ml-1" />
              </button>
              {activeDropdown === item.name && (
                <ul className="ml-4">
                  {item.dropdown.map((subItem) => (
                    <li key={subItem} className="text-white py-1">
                      {subItem}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <div className="flex justify-between mt-4">
            <CiBellOn className="text-white text-2xl" />
            <MdOutlineGTranslate className="text-white text-2xl" />
            <button className="border-none bg-[#1a1a2e] text-white py-2 px-6 rounded">
              Sign In
            </button>
          </div>
        </div>
      )}
      {isMobile && showSearchBox && (
        <div className="bg-[#1a1a2e] p-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 rounded bg-[#2c2c54] text-white outline-none"
          />
        </div>
      )}
    </nav>
  );
}
