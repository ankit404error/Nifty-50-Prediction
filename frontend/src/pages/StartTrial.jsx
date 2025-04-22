import React from "react";

const StartTrial = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <div className="bg-white p-8 rounded-lg shadow-2xl max-w-2xl text-center">
        <h1 className="text-5xl font-bold text-blue-600 mb-8">
          Start Your Free Trial
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          Join thousands of traders who are already automating their strategies
          with TradeBot.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">
              Beginner Plan
            </h2>
            <p className="text-gray-700 mb-4">$29/month</p>
            <ul className="text-gray-700 mb-6">
              <li>Automated Trading</li>
              <li>24/7 Support</li>
              <li>Basic Analytics</li>
            </ul>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105">
              Choose Plan
            </button>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">
              Advanced Plan
            </h2>
            <p className="text-gray-700 mb-4">$99/month</p>
            <ul className="text-gray-700 mb-6">
              <li>Advanced Tools</li>
              <li>Backtesting</li>
              <li>Portfolio Management</li>
            </ul>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105">
              Choose Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartTrial;