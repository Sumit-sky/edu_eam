import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { topicsArray } from "../staticData";

export default function TopicScroller() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 16;

  const handleNext = () => {
    if (currentIndex + itemsPerPage < topicsArray.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  return (
    // fixed top-[64px]
    <div className="flex items-center bg-[#2c2c54] text-white">
      <button
        onClick={handlePrev}
        disabled={currentIndex === 0}
        className="text-white px-2"
      >
        <FaAngleLeft />
      </button>
      <div className="flex overflow-x-scroll no-scrollbar">
        {topicsArray
          .slice(currentIndex, currentIndex + itemsPerPage)
          .map((topic) => (
            <div key={topic.title} className="p-2">
              <a
                href={topic.link}
                className="mx-2 w-max text-nowrap hover:text-violet-500"
              >
                {topic.title}
              </a>
            </div>
          ))}
      </div>
      <button
        onClick={handleNext}
        disabled={currentIndex + itemsPerPage >= topicsArray.length}
        className=" text-white px-2"
      >
        <FaAngleRight />
      </button>
    </div>
  );
}
