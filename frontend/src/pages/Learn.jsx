import React from "react";

const Learn = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-bold text-blue-600 mb-8">Learn</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Tutorials</h2>
          <p className="text-gray-700">
            Step-by-step tutorials to help you master trading with TradeBot.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Webinars</h2>
          <p className="text-gray-700">
            Join live webinars hosted by trading experts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Learn;