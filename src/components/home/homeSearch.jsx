import React from "react";
import { FaSearch } from "react-icons/fa";

export default function HomeSearch() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center">
      <p className="text-[56px] text-[#2c2c54]">
        Knowledge Awaits—Type to Begin
      </p>
      <div className="border rounded-lg bg-white flex items-center justify-between px-3 w-1/3 mt-3">
        <input
          type="text"
          className="h-14 rounded-lg outline-none text-[24px] text-[#2c2c54]"
          placeholder="Let the adventure begin"
        />
        <button className="w-max bg-white text-[#2c2c54] text-2xl">
          <FaSearch className="" />
        </button>
      </div>
    </div>
  );
}
