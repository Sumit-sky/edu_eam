import React, { useState, useEffect } from "react";
import SidebarButton from "./sideBarButton";
import { FaSearch, FaCapsules, FaBook, FaPuzzlePiece } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Sidebar({ active, setActive }) {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const handleResize = () => {
    if (window.innerWidth < 800) {
      setIsSidebarVisible(false);
    } else {
      setIsSidebarVisible(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    // fixed min-h-[100vh] top-[104px]
    <div className="flex bg-[#2c2c54] fixed min-h-[87vh] top-[104px] w-auto">
      {isSidebarVisible && (
        <div className="flex flex-col px-1 w-[120px]">
          <SidebarButton
            index={0}
            active={active}
            setActive={setActive}
            icon={<FaSearch />}
            label="Explore"
          />
          <SidebarButton
            index={1}
            active={active}
            setActive={setActive}
            icon={<FaCapsules />}
            label="Capsules"
          />
          <SidebarButton
            index={2}
            active={active}
            setActive={setActive}
            icon={<FaBook />}
            label="Personalized Paths"
          />
          <SidebarButton
            index={3}
            active={active}
            setActive={setActive}
            icon={<FaPuzzlePiece />}
            label="Projects"
          />
          <SidebarButton
            index={4}
            active={active}
            setActive={setActive}
            icon={<BsGraphUpArrow />}
            label="Skill Paths"
          />
        </div>
      )}
      <button
        onClick={toggleSidebar}
        style={{
          position: "absolute",
          left: isSidebarVisible ? "100px" : "0px",
          top: "0px",
          // 0px
        }}
        className="bg-white rounded-[100%] w-8 h-8 flex justify-center items-center"
      >
        {isSidebarVisible ? <IoIosArrowBack /> : <IoIosArrowForward />}
      </button>
    </div>
  );
}
