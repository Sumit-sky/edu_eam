import React, { useState } from "react";
// import AmExistingArticles from "./amExistingArticles";
// import AmNewArticle from "./amNewArticle";

export default function ExistingAndNewSwitch({
  page,
  existingComponent,
  newComponent,
}) {
  const [activeTab, setActiveTab] = useState("existing");

  const handleExistingClick = () => {
    setActiveTab("existing");
  };

  const handleNewClick = () => {
    setActiveTab("new");
  };

  return (
    <div className="w-full">
      <div className="flex w-full">
        <button
          className={`w-1/2 h-12 ${
            activeTab === "existing"
              ? "bg-[#2c2c54] text-[#E8F1FD]"
              : "hover:border-[#2c2c54] hover:border-b-4"
          }  transition-all ease-in-out `}
          onClick={handleExistingClick}
        >
          Existing {page}
        </button>
        <button
          className={`w-1/2 py-2  ${
            activeTab === "new"
              ? "bg-[#2c2c54] text-[#E8F1FD]"
              : "hover:border-[#2c2c54] hover:border-b-4"
          }  transition-all ease-in-out`}
          onClick={handleNewClick}
        >
          Create {page}
        </button>
      </div>

      <div className="mt-5">
        {activeTab === "existing" ? existingComponent : newComponent}
      </div>
    </div>
  );
}
