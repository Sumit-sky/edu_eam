import React from "react";

export default function Card({ image, title }) {
  return (
    <button className="bg-[#1a1a2e] mb-5 text-white rounded-xl">
      <img src={image} className="bg-[#2c2c54] rounded-t-xl" alt="image" />
      <p className="py-5">{title}</p>
    </button>
  );
}
