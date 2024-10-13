import React, { useState } from "react";

export default function CmNewCourse() {
  const [inputType, setInputType] = useState("text");
  return (
    <div className="flex justify-center">
      <form action="" className="flex flex-col w-9/12 text-[#2c2c54]">
        <select
          name=""
          id=""
          className="h-12 border-gray-400 border rounded-lg px-3 outline-none my-2 bg-transparent"
        >
          <option value="" selected>
            Select Collection
          </option>
        </select>
        <div className="flex justify-between items-center">
          <input
            type="file"
            className="h-12 border-gray-400 border rounded-lg px-2 py-2 outline-none my-2 w-10/12"
          />
          <button className="bg-[#2c2c54] px-6 rounded-lg h-12 text-white">
            Upload
          </button>
        </div>
        <div className="flex my-2 items-center">
          <input
            type="checkbox"
            name=""
            id=""
            className="w-4 h-4 accent-[#2c2c54]"
          />
          <label htmlFor="" className="mx-2">
            Confirm License
          </label>
        </div>
        <div className="flex flex-wrap justify-between">
          <input
            type="text"
            className="h-12 border-gray-400 border rounded-lg px-3 outline-none my-2 w-[48%]"
            placeholder="Author"
          />
          <input
            type="text"
            className="h-12 border-gray-400 border rounded-lg px-3 outline-none my-2 w-[48%]"
            placeholder="Title"
          />
          <input
            type={inputType}
            className="h-12 border-gray-400 border rounded-lg px-3 outline-none my-2 w-[48%]"
            placeholder="Date of Issue"
            onFocus={() => setInputType("date")}
            // onBlur={() => setInputType("text")}
          />
          <input
            type="text"
            className="h-12 border-gray-400 border rounded-lg px-3 outline-none my-2 w-[48%]"
            placeholder="Publisher"
          />

          <input
            type="text"
            className="h-12 border-gray-400 border rounded-lg px-3 outline-none my-2 w-[48%]"
            placeholder="Type"
          />
        </div>
      </form>
    </div>
  );
}
