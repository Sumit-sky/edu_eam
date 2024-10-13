import React, { useState } from "react";
import ProfileTableHeader from "../common/profileTableHeaders";
import CmExistingTableRow from "./cmExistingTableRow";
import PWPagination from "../common/pwPagination";
import { courseManagementData } from "../../staticData";

export default function CmExistingCourses() {
  const [itemsPerPage, setItemsPerPage] = useState(2);
  return (
    <>
      <div className="rounded-md my-5 border">
        <table className="w-full">
          <ProfileTableHeader
            headers={[
              "Title",
              "Description",
              "Course Type",
              "Model",
              "Status",
              "Actions",
            ]}
          />
          <tbody>
            {/* <div className="overflow-y-scroll h-[80vh]"> */}
            {courseManagementData.slice(0, itemsPerPage).map((item) => (
              <CmExistingTableRow key={item.id} item={item} />
            ))}
            {/* </div> */}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <PWPagination
          itemsPerPage={itemsPerPage}
          setItemsPerPage={setItemsPerPage}
        />
      </div>
    </>
  );
}
