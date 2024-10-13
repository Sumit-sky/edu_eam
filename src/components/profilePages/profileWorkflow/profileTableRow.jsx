import PWActionButtons from "./pwActionButtons";

export default function ProfileTableRow({ item }) {
  return (
    <tr className="border-b">
      <td className="py-2 px-4 text-left">{item.id}</td>
      <td className="py-2 px-4 text-left">{item.articles}</td>
      <td className="py-2 px-4 text-left">{item.author}</td>
      <td className="py-2 px-4 text-left">{item.assignTo}</td>
      <td className="py-2 px-4 text-left">
        <span
          className={` px-2 py-1 rounded-full text-sm ${
            item.status === `Pending`
              ? `bg-yellow-100 text-yellow-800`
              : `bg-green-100 text-green-800`
          }`}
        >
          {item.status}
        </span>
      </td>
      <td className="py-3 px-4">
        <PWActionButtons />
      </td>
    </tr>
  );
}