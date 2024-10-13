import React, { useState } from "react";
import userImage from "./userImage.png";
import MPInputBox from "./mpInputBox";
import { FaPen } from "react-icons/fa";

export default function ProfileMyProfile() {
  const [profileFormDisabled, isProfileFormDisabled] = useState(true);
  return (
    <div className="flex justify-between w-10/12">
      <div className="flex flex-col">
        <div className="relative">
          <img
            src={userImage}
            alt="User"
            className="h-[300px] w-[300px] rounded-full"
          />
          <button
            type="button"
            className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md"
          >
            <FaPen />
          </button>
        </div>
        <p className="text-xl text-center">Sumit Kumar</p>
      </div>
      <div className="flex flex-col items-start p-3 w-[70%]">
        <h1>Personal Information</h1>
        <form action="" className="my-2 w-full flex flex-wrap justify-between">
          <MPInputBox
            label={"Name"}
            type={"text"}
            isDisabled={profileFormDisabled}
          />
          <MPInputBox
            label={"Email"}
            type={"email"}
            isDisabled={profileFormDisabled}
          />
          <MPInputBox
            label={"Mobile"}
            type={"tel"}
            isDisabled={profileFormDisabled}
          />
          <div className="w-full flex my-4">
            <button
              type="button"
              className={`${
                profileFormDisabled ? "block" : "hidden"
              } p-2 px-4 bg-[#2c2c54] mr-3 text-white rounded-lg`}
              onClick={() => isProfileFormDisabled(false)}
            >
              Edit Profile
            </button>
            <button
              type="button"
              className={`${
                profileFormDisabled ? "hidden" : "block"
              } p-2 px-4 bg-[#2c2c54] mr-3 text-white rounded-lg`}
            >
              Save
            </button>
            <button
              type="button"
              className={`${
                profileFormDisabled ? "hidden" : "block"
              } p-2 px-4 bg-[#2c2c54] mr-3 text-white rounded-lg`}
              onClick={() => isProfileFormDisabled(true)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
