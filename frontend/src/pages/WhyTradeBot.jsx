import React from "react";

const WhyTradeBot = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-bold text-blue-600 mb-8">Why TradeBot?</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">
            Automated Trading
          </h2>
          <p className="text-gray-700">
            TradeBot automates your trading strategies, allowing you to focus on
            what matters most. No more manual trading or missing opportunities.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">
            24/7 Market Monitoring
          </h2>
          <p className="text-gray-700">
            Our bot monitors the markets 24/7, ensuring you never miss a trading
            opportunity, even while you sleep.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyTradeBot;