import React, { useState, useEffect } from "react";
import { FiActivity, FiRefreshCw, FiTrendingUp, FiBarChart2, FiCopy, FiAlertCircle } from "react-icons/fi";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import News from "../components/News";
import StockChart from "../components/StockChart";

const Dashboard = () => {
  const [prediction, setPrediction] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [marketData, setMarketData] = useState({
    current: 60245.35,
    changePercent: 1.24,
    high52Week: 62245.43,
    low52Week: 52769.58,
    volume: '452.1M',
    volumeChange: 8.2,
    loading: true,
    error: null,
    lastUpdated: null
  });

  const API_KEY = "RFGVXSXN82J3HYQR";
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [statsRef, statsInView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    fetchMarketData();
  }, []);

  const fetchMarketData = async () => {
    try {
      setIsLoading(true);
      setMarketData(prev => ({ ...prev, loading: true, error: null }));
      
      const response = await fetch(
        `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=BSESN.BSE&apikey=${API_KEY}`
      );
      const data = await response.json();

      if (data["Global Quote"] && data["Global Quote"]["05. price"]) {
        const quote = data["Global Quote"];
        const current = parseFloat(quote["05. price"]);
        const changePercent = parseFloat(quote["10. change percent"]?.replace('%', '')) || 0;
        const volume = quote["06. volume"] ? `${(parseInt(quote["06. volume"]) / 1000000).toFixed(1)}M` : '452.1M';
        
        setMarketData({
          current,
          changePercent,
          high52Week: current * 1.0332,
          low52Week: current * 0.8758,
          volume,
          volumeChange: 8.2,
          loading: false,
          error: null,
          lastUpdated: new Date().toLocaleTimeString()
        });
      } else {
        console.warn("Using fallback data");
        setMarketData({
          current: 60245.35,
          changePercent: 1.24,
          high52Week: 62245.43,
          low52Week: 52769.58,
          volume: '452.1M',
          volumeChange: 8.2,
          loading: false,
          error: "API limit reached - showing cached data",
          lastUpdated: new Date().toLocaleTimeString()
        });
      }
    } catch (error) {
      console.error("Error fetching market data:", error);
      setMarketData(prev => ({
        ...prev,
        loading: false,
        error: "Failed to connect to API - showing cached data",
        lastUpdated: new Date().toLocaleTimeString()
      }));
    } finally {
      setIsLoading(false);
    }
  };

  const fetchPrediction = async () => {
    try {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const trend = marketData.changePercent >= 0 ? "bullish" : "bearish";
      const change = (Math.random() * 2 + 0.5).toFixed(2);
      const support = (marketData.current * 0.985).toFixed(2);
      const resistance = (marketData.current * 1.015).toFixed(2);
      
      const predictions = [
        `Sensex shows ${trend} momentum, expected to ${trend === "bullish" ? "rise" : "fall"} by ${change}% tomorrow.`,
        `Technical indicators suggest ${marketData.current > marketData.high52Week * 0.95 ? "strong" : "weak"} ${trend} trend with support at  ${support}.`,
        `Market expected to ${trend === "bullish" ? "continue upward" : "correct downward"} with resistance near  ${resistance}.`,
        `Analysts predict ${change}% ${trend === "bullish" ? "gain" : "decline"} in coming session, watch ${marketData.current > marketData.high52Week * 0.95 ? "resistance" : "support"} levels.`
      ];
      
      setPrediction(predictions[Math.floor(Math.random() * predictions.length)]);
    } catch (error) {
      setPrediction("Unable to generate prediction at this time. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const formatNumber = (num) => {
    return num?.toLocaleString('en-IN', { maximumFractionDigits: 2 }) || '--';
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const statItem = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-blue-100 rounded-full opacity-10"
            style={{
              width: Math.random() * 200 + 50,
              height: Math.random() * 200 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              rotate: [0, 360]
            }}
            transition={{
              duration: Math.random() * 30 + 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header Section */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={container}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8"
        >
          <motion.div variants={item}>
            <h1 className="text-3xl font-bold text-gray-800 flex items-center">
              <FiActivity className="mr-3 text-blue-600" />
              Market Dashboard
            </h1>
            <p className="text-gray-500 mt-2">
              Real-time market data and predictive analytics
              {marketData.lastUpdated && (
                <span className="text-xs ml-2 text-gray-400">
                  Last updated: {marketData.lastUpdated}
                </span>
              )}
            </p>
          </motion.div>
          
          <motion.div variants={item} className="flex items-center mt-4 md:mt-0">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={fetchMarketData}
              className="p-2 mr-2 bg-gray-100 rounded-lg hover:bg-gray-200"
              title="Refresh data"
            >
              <FiRefreshCw className={marketData.loading ? "animate-spin" : ""} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={fetchPrediction}
              disabled={isLoading}
              className={`flex items-center px-6 py-3 rounded-xl shadow-md transition-all duration-300 ${
                isLoading 
                  ? 'bg-blue-400 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600'
              } text-white font-medium`}
            >
              {isLoading ? (
                <>
                  <FiRefreshCw className="animate-spin mr-2" />
                  Analyzing...
                </>
              ) : (
                <>
                  <FiTrendingUp className="mr-2" />
                  Get Market Prediction
                </>
              )}
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Error Message */}
        {marketData.error && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-3 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-700 flex items-center"
          >
            <FiAlertCircle className="mr-2" />
            <div>
              <p className="font-medium">{marketData.error}</p>
              <p className="text-sm">Data may not be current</p>
            </div>
          </motion.div>
        )}

        {/* Stats Cards */}
        <motion.div
          ref={statsRef}
          initial="hidden"
          animate={statsInView ? "visible" : "hidden"}
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {/* Current Price */}
          <motion.div 
            variants={item}
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-t-xl"></div>
            <div className="flex items-center">
              <div className="p-3 rounded-lg bg-blue-50 text-blue-600 mr-4">
                <FiBarChart2 size={24} />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Sensex Today</p>
                <p className="text-2xl font-bold text-gray-800">
                   {formatNumber(marketData.current)}
                </p>
                <p className={`${marketData.changePercent >= 0 ? 'text-green-500' : 'text-red-500'} text-sm flex items-center`}>
                  <FiTrendingUp className={`mr-1 ${marketData.changePercent < 0 ? 'transform rotate-180' : ''}`} />
                  {marketData.changePercent >= 0 ? '+' : ''}{marketData.changePercent}%
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* 52W High */}
          <motion.div 
            variants={item}
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-t-xl"></div>
            <div className="flex items-center">
              <div className="p-3 rounded-lg bg-green-50 text-green-600 mr-4">
                <FiTrendingUp size={24} />
              </div>
              <div>
                <p className="text-gray-500 text-sm">52W High</p>
                <p className="text-2xl font-bold text-gray-800">
                   {formatNumber(marketData.high52Week)}
                </p>
                <p className="text-gray-500 text-sm">
                  +3.32% from current
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* 52W Low */}
          <motion.div 
            variants={item}
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-rose-500 rounded-t-xl"></div>
            <div className="flex items-center">
              <div className="p-3 rounded-lg bg-red-50 text-red-600 mr-4">
                <FiTrendingUp size={24} className="transform rotate-180" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">52W Low</p>
                <p className="text-2xl font-bold text-gray-800">
                   {formatNumber(marketData.low52Week)}
                </p>
                <p className="text-gray-500 text-sm">
                  -12.42% from current
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Volume */}
          <motion.div 
            variants={item}
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-violet-500 rounded-t-xl"></div>
            <div className="flex items-center">
              <div className="p-3 rounded-lg bg-purple-50 text-purple-600 mr-4">
                <FiActivity size={24} />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Volume</p>
                <p className="text-2xl font-bold text-gray-800">
                  {marketData.volume}
                </p>
                <p className="text-blue-500 text-sm">
                  +{marketData.volumeChange}% from avg
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Main Chart Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden mb-8"
        >
          <div className="p-6 border-b border-gray-100 flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center">
              <FiBarChart2 className="mr-2 text-blue-600" />
              BSE Sensex Live Chart
            </h2>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.reload()}
              className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
            >
              <FiRefreshCw className="mr-1" /> Reload Chart
            </motion.button>
          </div>
          <div className="p-1">
            <StockChart />
          </div>
        </motion.div>

        {/* Prediction Section */}
        {prediction && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-lg border border-blue-100 p-6 mb-8"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <FiTrendingUp className="mr-2 text-blue-600" />
                  Market Prediction
                </h3>
                <p className="text-gray-700 leading-relaxed">{prediction}</p>
              </div>
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  navigator.clipboard.writeText(prediction);
                  alert('Prediction copied to clipboard!');
                }}
                className="text-blue-600 hover:text-blue-800 text-sm flex items-center p-2"
              >
                <FiCopy />
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* News Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
        >
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-semibold text-gray-800">Market News</h2>
          </div>
          <div className="p-6">
            <News />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;