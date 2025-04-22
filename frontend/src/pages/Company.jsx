import React from "react";

const Company = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-bold text-blue-600 mb-8">Company</h1>
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl text-center">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">About Us</h2>
        <p className="text-gray-700">
          TradeBot is a leading platform for automated trading, empowering users
          to trade smarter and more efficiently. Our mission is to make trading
          accessible to everyone.
        </p>
      </div>
    </div>
  );
};

export default Company;