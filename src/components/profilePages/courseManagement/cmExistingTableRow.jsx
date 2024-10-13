import React from "react";
import CmActionButtons from "./cmActionButtons";

export default function CmExistingTableRow({ item }) {
  return (
    <tr className="border-b">
      <td className="py-2 px-4 text-left">{item.title}</td>
      <td className="py-2 px-4 text-left">{item.desc}</td>
      <td className="py-2 px-4 text-left">{item.courseType}</td>
      <td className="py-2 px-4 text-left">{item.model}</td>
      <td className="py-2 px-4 text-left">{item.status}</td>
      <td className="py-3 px-4">
        <CmActionButtons />
      </td>
    </tr>
  );
}
