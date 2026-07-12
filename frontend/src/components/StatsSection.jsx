import StatsCard from "./StatsCard";

function StatsSection() {
  return (
    <section className="bg-green-700 py-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-4">
        <StatsCard title="Crops" value="50+" />
        <StatsCard title="AI Responses" value="1000+" />
        <StatsCard title="Diseases" value="120+" />
        <StatsCard title="Farmers Helped" value="500+" />
      </div>
    </section>
  );
}

export default StatsSection;