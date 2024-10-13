import React from "react";

export default function MPInputBox({ label, type, isDisabled }) {
  return (
    <div className="flex flex-col items-start w-5/12">
      <label htmlFor="">{label}</label>
      <input
        type={type}
        className="border my-1 h-10 px-2 rounded-md border-gray-400 outline-none w-full"
        disabled={isDisabled}
      />
    </div>
  );
}
