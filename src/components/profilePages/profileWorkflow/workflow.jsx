import React, { useState } from "react";
import { workflowData } from "../../staticData";
import PWTable from "./pwTable";
import PWPagination from "../common/pwPagination";
import { FaSearch } from "react-icons/fa";

export default function ProfileWorkflow() {
  const [itemsPerPage, setItemsPerPage] = useState(5);

  return (
    <div className="flex w-full px-6 flex-col">
      <div className="flex justify-between">
        <h1 className="text-2xl text-left">Workflow</h1>
        <div className="border border-gray-400 rounded-md flex items-center px-3">
          <input
            type="text"
            placeholder="Search by Title"
            className="outline-none h-10 text-[#2c2c54] text-lg border-none"
          />
          <button type="button">
            <FaSearch />
          </button>
        </div>
      </div>

      <PWTable workflowData={workflowData} itemsPerPage={itemsPerPage} />

      <div className="mt-4 flex justify-between items-center">
        <PWPagination
          itemsPerPage={itemsPerPage}
          setItemsPerPage={setItemsPerPage}
        />
      </div>
    </div>
  );
}
