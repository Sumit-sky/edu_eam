import ProfileTableHeader from "../common/profileTableHeaders";
import ProfileTableRow from "./profileTableRow";

export default function PWTable({ workflowData, itemsPerPage }) {
  return (
    <div className="rounded-md  my-5 border">
      <table className="w-full">
        <ProfileTableHeader
          headers={[
            "ID",
            "Article",
            "Author",
            "Assign To",
            "Status",
            "Actions",
          ]}
        />
        <tbody>
          {workflowData.slice(0, itemsPerPage).map((item) => (
            <ProfileTableRow key={item.id} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
