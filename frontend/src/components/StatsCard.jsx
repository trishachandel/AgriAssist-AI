function StatsCard({ title, value }) {
  return (
    <div className="rounded-xl bg-white p-6 shadow transition hover:shadow-xl">

      <h3 className="text-gray-500">
        {title}
      </h3>

      <h2 className="mt-3 text-4xl font-bold text-green-700">
        {value}
      </h2>

    </div>
  );
}

export default StatsCard;