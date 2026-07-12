function RecentCrops({ crops }) {
  const recentCrops = crops.slice(0, 5);

  return (
    <div className="rounded-xl bg-white p-6 shadow dark:bg-gray-800">
      <h2 className="mb-4 text-xl font-bold text-green-700 dark:text-green-400">
        🌱 Recent Crops
      </h2>

      {recentCrops.length === 0 ? (
        <p className="text-gray-500">
          No crop data available.
        </p>
      ) : (
        <ul className="space-y-3">
          {recentCrops.map((crop) => (
            <li
              key={crop.id}
              className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-700"
            >
              <h3 className="font-semibold text-green-700 dark:text-green-300">
                {crop.name}
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-300">
                🌾 Season: {crop.season}
              </p>

              <p className="text-sm text-gray-600 dark:text-gray-300">
                🦠 Disease: {crop.disease}
              </p>

              <p className="text-sm text-gray-600 dark:text-gray-300">
                💧 Irrigation: {crop.irrigation}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RecentCrops;