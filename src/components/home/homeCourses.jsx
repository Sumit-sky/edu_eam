import React from "react";
import Card from "./card";
import { Link } from "react-router-dom";

export default function HomeCourses() {
  return (
    <div className=" flex justify-center flex-col items-center">
      <div className="flex justify-between w-11/12 text-[#2c2c54]">
        <p className="text-xl">Courses</p>
        <button className="border border-[#2c2c54] rounded-xl px-2 p-1">
          View All
        </button>
      </div>
      <div className="flex justify-between flex-wrap w-11/12 my-6">
        <Link to={"/ArticleDetails"}>
          <Card
            image={
              "https://media.geeksforgeeks.org/auth-dashboard-uploads/Asset-2.webp"
            }
            title={"Maximum Meeting in One Room"}
          />
        </Link>
        <Card
          image={
            "https://media.geeksforgeeks.org/auth-dashboard-uploads/Asset-2.webp"
          }
          title={"Maximum Meeting in One Room"}
        />
        <Card
          image={
            "https://media.geeksforgeeks.org/auth-dashboard-uploads/Asset-2.webp"
          }
          title={"Maximum Meeting in One Room"}
        />
        <Card
          image={
            "https://media.geeksforgeeks.org/auth-dashboard-uploads/Asset-2.webp"
          }
          title={"Maximum Meeting in One Room"}
        />
      </div>
    </div>
  );
}
