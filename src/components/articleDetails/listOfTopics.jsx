import React from "react";

export default function ListOfTopics({ contentArray }) {
  return (
    <div className="border-2 flex flex-wrap p-3 rounded-lg justify-evenly w-full my-3">
      {contentArray
        .filter(content => content?.topic?.length > 0)
        .map((content, index) => (
          <p key={index} className="border p-2 px-4 bg-[#2c2c54] text-[#E8F1FD] rounded-xl">
            {content.topic}
          </p>
        ))}
    </div>
  );
}
