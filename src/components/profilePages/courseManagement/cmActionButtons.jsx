import { FaEye, FaTrash, FaPen } from "react-icons/fa";

export default function CmActionButtons() {
  return (
    <div className="flex justify-between">
      <button className="mr-2 bg-teal-500 text-white px-3 py-1 rounded-md flex items-center">
        <FaEye size={16} className="mr-1" /> 
      </button>
      <button className="mr-2 bg-gray-500 text-white px-3 py-1 rounded-md flex items-center">
        <FaPen size={16} className="mr-1" /> 
      </button>
      <button className="bg-red-500 text-white px-3 py-1 rounded-md flex items-center">
        <FaTrash size={16} className="mr-1" /> 
      </button>
    </div>
  );
}
