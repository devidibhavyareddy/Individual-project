const DashboardCard = ({
  title,
  value,
}) => {
  return (
    <div className="bg-white shadow rounded-xl p-5">

      <h3 className="text-gray-500">
        {title}
      </h3>

      <h2 className="text-4xl font-bold mt-2">
        {value}
      </h2>

    </div>
  );
};

export default DashboardCard;