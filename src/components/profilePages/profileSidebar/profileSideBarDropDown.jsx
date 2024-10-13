import React from "react";
import ProfileSideBarButton from "./profileSideBarButton";
import { IoIosArrowDown } from "react-icons/io";

export default function ProfileSideBarDropdown({
  label,
  icon,
  isOpen,
  setIsOpen,
  items,
  active,
  setActive,
}) {
  return (
    <>
      <button
        className="border-0 w-full flex text-lg justify-between items-center px-2 py-5 bg-transparent text-white hover:bg-[#E8F1FD] hover:text-[#2c2c54] transition-all ease-in-out"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex justify-start items-center">
          {icon || <IoIosArrowDown />} {/* Default icon */}
          <p className="ml-2">{label}</p>
        </div>
        <IoIosArrowDown />
      </button>
      {isOpen && (
        <div className="mx-4 my-1">
          {items.map((item, index) => (
            <ProfileSideBarButton
              key={index}
              index={item.index}
              active={active}
              setActive={setActive}
              icon={item.icon}
              label={item.label}
            />
          ))}
        </div>
      )}
    </>
  );
}
