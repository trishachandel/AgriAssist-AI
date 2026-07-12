import { Brain, Sprout, Droplets, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Crop Advisory",
    description:
      "Get instant AI-powered guidance for crop cultivation and farming questions.",
  },
  {
    icon: Sprout,
    title: "Crop Recommendations",
    description:
      "Discover suitable crops based on farming requirements and conditions.",
  },
  {
    icon: Droplets,
    title: "Irrigation Guidance",
    description:
      "Learn efficient irrigation methods to improve crop productivity.",
  },
  {
    icon: ShieldCheck,
    title: "Disease Assistance",
    description:
      "Identify common crop diseases and receive treatment suggestions.",
  },
];

function Features() {
  return (
    <section className="bg-white py-16 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-4xl font-bold text-green-700">
          Features
        </h2>

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-xl bg-gray-50 p-6 shadow hover:shadow-lg dark:bg-gray-800"
              >
                <Icon className="mb-4 h-12 w-12 text-green-700" />

                <h3 className="text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-3 text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;