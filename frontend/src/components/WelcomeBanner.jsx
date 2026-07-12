function WelcomeBanner() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="mb-8 rounded-xl bg-green-700 p-6 text-white">
      <h1 className="text-3xl font-bold">
        👋 Welcome {user?.name || "Farmer"}!
      </h1>

      <p className="mt-2">
        Get AI-powered crop recommendations,
        disease detection, irrigation advice,
        and fertilizer guidance.
      </p>
    </div>
  );
}

export default WelcomeBanner;