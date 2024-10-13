import React, { useState } from "react";
import ProfileTableHeader from "../common/profileTableHeaders";
import AmExistingTableRow from "./amExistingTableRow";
import { articleManagementData } from "../../staticData";
import PWPagination from "../common/pwPagination";

export default function AmExistingArticles() {
  const [itemsPerPage, setItemsPerPage] = useState(5);
  return (
    <>
      <div className="rounded-md  my-5 border">
        <table className="w-full">
          <ProfileTableHeader
            headers={[
              "ID",
              "Title",
              "Author",
              "Collection",
              "Last Modified",
              "Actions",
            ]}
          />
          <tbody>
            {articleManagementData.slice(0, itemsPerPage).map((item) => (
              <AmExistingTableRow key={item.id} item={item} />
            ))}
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
