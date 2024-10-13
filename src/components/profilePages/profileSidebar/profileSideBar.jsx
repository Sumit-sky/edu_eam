import React, { useState, useEffect } from "react";
import ProfileSideBarContainer from "./profileSideBarContainer";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function ProfileSideBar({ active, setActive }) {
  const [isProfileSidebarVisible, setIsProfileSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsProfileSidebarVisible(!isProfileSidebarVisible);
  };

  const handleResize = () => {
    if (window.innerWidth >= 800) {
      setIsProfileSidebarVisible(true);
    } else {
      setIsProfileSidebarVisible(false);
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
    <div className="flex bg-[#2c2c54] min-h-screen w-auto">
      {isProfileSidebarVisible && (
        <ProfileSideBarContainer active={active} setActive={setActive} />
      )}
      <button
        onClick={toggleSidebar}
        style={{
          position: "absolute",
          left: isProfileSidebarVisible ? "185px" : "0px",
          top: "0px",
        }}
        className="bg-white border rounded-[100%] w-8 h-8 flex justify-center items-center"
      >
        {isProfileSidebarVisible ? <IoIosArrowBack /> : <IoIosArrowForward />}
      </button>
    </div>
  );
}
