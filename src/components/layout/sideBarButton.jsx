import React from "react";

export default function SidebarButton({
  index,
  active,
  setActive,
  icon,
  label,
}) {
  return (
    <button
      className={`border-0 flex flex-col text-lg justify-center items-center px-2 py-5 ${
        active === index
          ? "bg-[#E8F1FD] text-[#2c2c54]"
          : "bg-transparent text-white"
      }`}
      onClick={() => setActive(index)}
    >
      {icon}
      {label}
    </button>
  );
}
