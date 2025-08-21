

const EarningHistory: React.FC = () => {
  const data = [
    {
      date: "May 24, 2023",
      student: "Alex",
      hours: "1 hour",
      amount: "$25.00",
    },
    {
      date: "May 24, 2023",
      student: "Alex",
      hours: "1 hour",
      amount: "$25.00",
    },
    {
      date: "May 24, 2023",
      student: "Alex",
      hours: "1 hour",
      amount: "$25.00",
    },
    {
      date: "May 24, 2023",
      student: "Alex",
      hours: "1 hour",
      amount: "$25.00",
    },
  ];

  return (
    <div className="overflow-x-auto bg-white p-3 xl:p-6 rounded-xl shadow-sm text-lg font-semibold ">
      <div className="p-2 xl:p-4 flex justify-between items-center">
        <h2 className="text-[16px] xl:text-[24px] font-semibold text-secondary-black">
          Earning History
        </h2>
        <select className=" p-[6px] xlp-[10px] rounded-md border text-xs  xl:text-[16px] font-semibold text-secondary-black border-alt-border">
          <option>This Week</option>
          <option>This Month</option>
          <option>All Time</option>
        </select>
      </div>
      <table className="min-w-full text-sm text-left">
        <thead className="">
          <tr>
            <th className="px-2 xl:px-4 py-1 xl:py-2 text-xs xl:text-[16px] font-semibold text-alt-gray">
              Date
            </th>
            <th className="px-2 xl:px-4 py-1 xl:py-2 text-xs xl:text-[16px] font-semibold text-alt-gray">
              Student
            </th>
            <th className="px-2 xl:px-4 py-1 xl:py-2 text-xs xl:text-[16px] font-semibold text-alt-gray">
              Hours
            </th>
            <th className="px-2 xl:px-4 py-1 xl:py-2 text-xs xl:text-[16px] font-semibold text-alt-gray">
              Amount
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-t  border-t-alt-border">
              <td className="px-2 xl:px-4 text-xs xl:text-[16px] font-normal text-secondary-black py-1 xl:py-2">{item.date}</td>
              <td className="px-2 xl:px-4 text-xs xl:text-[16px] font-normal  text-secondary-black py-1 xl:py-2">{item.student}</td>
              <td className="px-2 xl:px-4 text-xs xl:text-[16px] font-normal text-end text-secondary-black py-1xl:py-2">{item.hours}</td>
              <td className="px-2 xl:px-4 text-xs xl:text-[16px] font-normal text-end text-secondary-black py-1 xl:py-2">{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EarningHistory;
