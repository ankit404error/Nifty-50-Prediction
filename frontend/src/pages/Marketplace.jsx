import React from "react";

const Marketplace = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-bold text-blue-600 mb-8">Marketplace</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Strategies</h2>
          <p className="text-gray-700">
            Explore and purchase trading strategies created by experts.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Indicators</h2>
          <p className="text-gray-700">
            Enhance your trading with powerful indicators.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Templates</h2>
          <p className="text-gray-700">
            Use pre-built templates to jumpstart your trading.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;