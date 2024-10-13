import { FaEye, FaTrash } from "react-icons/fa";
import { FiRotateCcw } from "react-icons/fi";

export default function PWActionButtons() {
  return (
    <div className="flex">
      <button className="mr-2 bg-teal-500 text-white px-3 py-1 rounded-md flex items-center">
        <FaEye size={16} className="mr-1" /> View
      </button>
      <button className="mr-2 bg-red-500 text-white px-3 py-1 rounded-md flex items-center">
        <FaTrash size={16} className="mr-1" /> Delete
      </button>
      <button className="bg-gray-500 text-white px-3 py-1 rounded-md flex items-center">
        <FiRotateCcw size={16} className="mr-1" /> Send Back
      </button>
    </div>
  );
}
