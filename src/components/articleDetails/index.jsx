import React from "react";

export default function Index({ activeIndex, setActiveIndex,contentArray }) {
  // const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="rounded-xl w-4/12 bg-white mx-4 mt-[-50px] shadow-2xl p-0 mb-10 h-max">
      {contentArray.length > 0 &&
        contentArray.map((content, index) => (
          <React.Fragment key={index}>
            <div
              onClick={() => setActiveIndex(index)}
              className={`p-3 px-6 text-left hover:cursor-pointer ${
                activeIndex === index
                  ? "text-[#E8F1FD] bg-[#1a1a2e]"
                  : "bg-white text-[#2c2c54]"
              } ${index === 0 ? "rounded-t-lg" : ""} ${
                index === contentArray.length - 1 ? "rounded-b-lg" : ""
              }`}
            >
              <h2 className="text-2xl font-semibold">{content.title}</h2>
              <p>
                {content.desc.length > 110
                  ? content.desc.slice(0, 110) + "..."
                  : content.desc}
              </p>
            </div>
            <hr />
          </React.Fragment>
        ))}
    </div>
  );
}
