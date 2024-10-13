import React from "react";

export default function Banner({ title, price }) {
  return (
    <div className="w-full h-[250px] flex flex-col justify-center items-center font-semibold text-white bg-[#2c2c54]">
      <p className="text-[48px]">{title}</p>
      {/* <p className="text-2xl">$ {price}</p> */}
    </div>
  );
}
