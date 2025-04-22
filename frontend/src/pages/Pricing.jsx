import React from "react";

const plans = [
  {
    name: "Basic",
    price: "₹2,399/month",
    features: ["Automated Trading", "24/7 Support", "Basic Analytics"],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "₹8,199/month",
    features: ["Advanced Tools", "Backtesting", "Portfolio Management"],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom Pricing",
    features: ["Custom Solutions", "Dedicated Support", "API Access"],
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-blue-800 mb-4">Pricing Plans</h1>
        <p className="text-lg text-gray-600 mb-12">
          Choose a plan that fits your trading journey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative bg-white p-10 rounded-3xl shadow-xl transition transform hover:scale-[1.02] ${
                plan.highlighted
                  ? "border-4 border-blue-600"
                  : "border border-gray-200"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-bl-xl rounded-tr-3xl">
                  Best Value
                </div>
              )}

              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {plan.name}
              </h2>
              <p className="text-3xl font-bold text-blue-600 mb-6">
                {plan.price}
              </p>

              <ul className="space-y-4 text-gray-700 text-left">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-blue-500">✔</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
