import React from "react";

export default function IndexContent({ activeIndex, contentArray }) {
  const content = contentArray[activeIndex];

  return (
    <div className="text-left m-3 w-full text-[#2c2c54]">
      <p className="text-2xl font-bold">{content.title}</p>
      <p className="text-lg text-wrap">{content.desc}</p>
    </div>
  );
}
