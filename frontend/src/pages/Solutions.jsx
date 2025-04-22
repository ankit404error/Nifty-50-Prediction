import React from "react";

const Solutions = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-bold text-blue-600 mb-8">Solutions</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">
            Beginner-Friendly
          </h2>
          <p className="text-gray-700">
            Perfect for beginners. TradeBot provides easy-to-use tools and
            tutorials to get you started.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">
            Advanced Tools
          </h2>
          <p className="text-gray-700">
            For experienced traders, TradeBot offers advanced tools like
            backtesting and customizable strategies.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">
            Portfolio Management
          </h2>
          <p className="text-gray-700">
            Manage your portfolio efficiently with real-time insights and
            analytics.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Solutions;