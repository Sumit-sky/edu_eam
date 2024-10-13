import React from "react";

export default function AmNewArticle() {
  return (
    <div className="flex justify-center">
      <form action="" className="flex flex-col w-9/12 text-[#2c2c54]">
        <input
          type="text"
          className="h-12 border-gray-400 border rounded-lg px-3 outline-none my-2"
          placeholder="Title"
        />
        <input
          type="text"
          className="h-12 border-gray-400 border rounded-lg px-3 outline-none my-2"
          placeholder="Tags"
        />
        <textarea
          name=""
          id=""
          className="border-gray-400 border rounded-lg p-3 outline-none my-3"
          rows={10}
          placeholder="Content here."
        ></textarea>

        <div className="flex justify-between mb-3 text-gray-500 text-lg">
          <p>Words : 0</p>
          <p>Characters : 0</p>
        </div>

        <div className="flex justify-between">
          <div className="flex w-5/12 justify-between">
            <button
              type="button"
              className="p-2 px-3 bg-green-600 rounded-lg text-white"
            >
              Submit for Review
            </button>
            <button
              type="button"
              className="p-2 px-3 bg-yellow-500 rounded-lg text-white"
            >
              Save for Later
            </button>
            <button
              type="button"
              className="p-2 px-3 bg-red-500 rounded-lg text-white"
            >
              Cancel
            </button>
          </div>
          <button
            type="button"
            className="p-2 px-3 bg-[#2c2c54] rounded-lg text-white"
          >
            Preview
          </button>
        </div>
      </form>
    </div>
  );
}
