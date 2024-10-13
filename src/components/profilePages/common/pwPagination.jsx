import { FaChevronDown } from "react-icons/fa";

export default function PWPagination({ itemsPerPage, setItemsPerPage }) {
  return (
    <div className="relative">
      <select
        value={itemsPerPage}
        onChange={(e) => setItemsPerPage(Number(e.target.value))}
        className="appearance-none bg-white border rounded-md py-2 pl-3 pr-10 text-sm"
      >
        <option value={5}>5 per page</option>
        <option value={10}>10 per page</option>
        <option value={20}>20 per page</option>
      </select>
      <FaChevronDown size={16} className="absolute right-3 top-3 text-gray-400" />
    </div>
  );
}
