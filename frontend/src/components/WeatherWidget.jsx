function WeatherWidget() {
  return (
    <div className="rounded-xl bg-white p-6 shadow dark:bg-gray-800">
      <h2 className="mb-4 text-xl font-bold text-green-700 dark:text-green-400">
        🌤 Weather
      </h2>

      <div className="space-y-2 text-gray-700 dark:text-gray-300">
        <p>
          <strong>Location:</strong> Dehradun
        </p>

        <p>
          <strong>Temperature:</strong> 28°C
        </p>

        <p>
          <strong>Condition:</strong> Partly Cloudy
        </p>

        <p>
          <strong>Humidity:</strong> 65%
        </p>

        <p>
          <strong>Wind:</strong> 10 km/h
        </p>
      </div>
    </div>
  );
}

export default WeatherWidget;