import React, { useState } from "react";
import { existingCourseTypes } from "../../staticData";

export default function CMSArticleType() {
  const [courseType, setCourseType] = useState("");
  const handleNewCoursesTypes = () => {
    if (courseType.trim().length > 0) existingCourseTypes.push(courseType);
    setCourseType("");
  };
  return (
    <div className="w-full px-6 min-h-screen">
      <h1 className="text-2xl text-left">Article Type</h1>
      <div className="w-full flex flex-col items-center justify-center my-5 min-h-[20vh]">
        <div className="flex items-center justify-between w-1/2">
          <input
            type="text"
            placeholder="Create new article type..."
            className="h-12 px-3 rounded-md border-2 border-gray-400 w-10/12 outline-none"
            onChange={(e) => setCourseType(e.target.value)}
            value={courseType}
          />
          <button
            className="px-5 h-12 bg-[#2c2c54] text-[#E8F1FD] rounded-md"
            onClick={handleNewCoursesTypes}
            type="button"
          >
            Create
          </button>
        </div>
        <p className="w-1/2 text-left mt-5">Existing Types:</p>
        <div className="flex w-1/2 my-2 justify-start flex-wrap">
          {existingCourseTypes.length > 0 &&
            existingCourseTypes.map((course) => (
              <p className="my-2 mr-7 bg-[#2c2c54] text-[#E8F1FD] text-nowrap p-2 rounded-md">
                {course}
              </p>
            ))}
        </div>
      </div>
    </div>
  );
}
