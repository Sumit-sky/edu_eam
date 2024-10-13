import React from "react";

export default function ProfileSideBarButton({
  index,
  active,
  setActive,
  icon,
  label,
}) {
  return (
    <button
      className={`border-0 w-full flex text-lg justify-start items-center px-2 py-5 hover:bg-[#E8F1FD] hover:text-[#2c2c54] transition-all ease-in-out ${
        active === index
          ? "bg-[#E8F1FD] text-[#2c2c54]"
          : "bg-transparent text-white"
      }`}
      onClick={() => setActive(index)}
    >
      {icon}
      <p className="ml-2">{label}</p>
    </button>
  );
}
