import { FaTrash } from "react-icons/fa";

export default function AmExistingTableRow({ item }) {
  return (
    <tr className="border-b">
      <td className="py-2 px-4 text-left">{item.id}</td>
      <td className="py-2 px-4 text-left">{item.title}</td>
      <td className="py-2 px-4 text-left">{item.author}</td>
      <td className="py-2 px-4 text-left">{item.collection}</td>
      <td className="py-2 px-4 text-left">{item.lastModified}</td>
      <td className="py-3 px-4">
        <button className="mr-2 bg-red-500 text-white px-3 py-1 rounded-md flex items-center">
          <FaTrash size={16} className="mr-1" /> Delete
        </button>
      </td>
    </tr>
  );
}