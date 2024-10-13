export default function ProfileTableHeader({ headers }) {
  return (
    <thead className="bg-[#2c2c54] text-white">
      <tr>
        {headers.map((item) => (
          <th className="py-3 font-normal px-4 text-left">{item}</th>
        ))}
      </tr>
    </thead>
  );
}
