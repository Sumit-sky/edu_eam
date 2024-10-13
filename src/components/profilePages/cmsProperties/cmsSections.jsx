import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa"; // Import FontAwesome icons
import ProfileTableHeader from "../common/profileTableHeaders";
import { cmsSection } from "../../staticData";

export default function CMSSections() {
  return (
    <div className="w-full px-6 min-h-screen">
      <h1 className="text-2xl text-left">Section</h1>       
      <div className="my-3">
        <table className="w-full border-collapse">
          <ProfileTableHeader
            headers={["Community Name", "Collections", "Actions"]}
          />
          <tbody>
            {cmsSection.map((section, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-2 border text-left">
                  {section.communityName || "No Name"}
                </td>

                <td className="px-4 py-2 border text-left">
                  <ul>
                    {section.collections.map((collection, idx) => (
                      <li key={idx} className="flex justify-start items-center">
                        <span>{collection}</span>
                        <div className="ml-4">
                          <button className="text-blue-500 mr-2">
                            <FaEdit />
                          </button>
                          <button className="text-red-500">
                            <FaTrash />
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                </td>

                <td className="px-4 py-2 border text-left">
                  <button className="text-blue-500 mr-2">
                    <FaEdit />
                  </button>
                  <button className="text-red-500">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
