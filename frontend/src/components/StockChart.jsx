import React, { useState, useEffect, useRef } from 'react';
import { FiCopy, FiCheck, FiSun, FiMoon, FiRefreshCw } from 'react-icons/fi';
import Chatbot from '../components/Chatbot';

const StockChart = () => {
  const [darkMode, setDarkMode] = useState(false);
  // const [prediction, setPrediction] = useState('');
  // const [copied, setCopied] = useState(false);
  const [timePeriod, setTimePeriod] = useState('1D');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const widgetRef = useRef(null);
  const containerRef = useRef(null);
  const [chartKey, setChartKey] = useState(Date.now());

  // TradingView widget configuration
  const getTradingViewConfig = () => ({
    width: '100%',
    height: '500px',
    symbol: 'BSE:SENSEX',
    interval: timePeriod,
    timezone: 'Asia/Kolkata',
    theme: darkMode ? 'dark' : 'light',
    style: '1',
    locale: 'in',
    toolbar_bg: darkMode ? '#1e222d' : '#f1f3f6',
    enable_publishing: false,
    hide_top_toolbar: false,
    hide_side_toolbar: false,
    allow_symbol_change: true,
    details: true,
    hotlist: true,
    calendar: true,
    studies: [
      'MACD@tv-basicstudies',
      'StochasticRSI@tv-basicstudies',
      'Volume@tv-basicstudies'
    ],
    container_id: `tradingview-${chartKey}`,
    overrides: {
      "paneProperties.background": darkMode ? "#1e222d" : "#ffffff",
      "paneProperties.vertGridProperties.color": darkMode ? "#363c4e" : "#f0f3fa",
      "paneProperties.horzGridProperties.color": darkMode ? "#363c4e" : "#f0f3fa"
    }
  });

  // useEffect(() => {
  //   // Generate sample prediction for Sensex
  //   const trends = ['bullish', 'bearish', 'neutral'];
  //   // const trend = trends[Math.floor(Math.random() * trends.length)];
  //   // const changePercent = (Math.random() * 5).toFixed(2);
  //   // const predictionText = `Sensex shows ${trend} momentum (${trend === 'bullish' ? '+' : ''}${changePercent}%). ` +
  //     `Key levels: Resistance ~₹${(60000 + Math.random() * 2000).toFixed(2)}, ` +
  //     `Support ~₹${(58000 + Math.random() * 2000).toFixed(2)}`;
  //   // setPrediction(predictionText);
  // }, [timePeriod]);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const loadTradingView = () => {
      if (typeof window.TradingView === 'undefined') {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/tv.js';
        script.async = true;
        script.onload = initializeWidget;
        script.onerror = () => {
          setError('Failed to load TradingView script');
          setLoading(false);
        };
        document.body.appendChild(script);
      } else {
        initializeWidget();
      }
    };

    const initializeWidget = () => {
      try {
        // Clean up previous widget if it exists
        if (widgetRef.current) {
          widgetRef.current.remove();
          widgetRef.current = null;
        }

        // Ensure container exists
        if (!containerRef.current) {
          setError('Chart container not found');
          setLoading(false);
          return;
        }

        // Clear container
        containerRef.current.innerHTML = '';

        // Create new widget
        const widgetOptions = {
          ...getTradingViewConfig(),
          autosize: true
        };

        // Only create widget if container exists
        if (document.getElementById(widgetOptions.container_id)) {
          widgetRef.current = new window.TradingView.widget(widgetOptions);
          setLoading(false);
        } else {
          setError('Chart container not found in DOM');
          setLoading(false);
        }
      } catch (err) {
        console.error('TradingView widget error:', err);
        setError('Failed to initialize TradingView chart');
        setLoading(false);
      }
    };

    // Initialize with slight delay to ensure DOM is ready
    const initTimer = setTimeout(() => {
      loadTradingView();
    }, 100);

    return () => {
      clearTimeout(initTimer);
      // Cleanup on unmount
      if (widgetRef.current) {
        try {
          widgetRef.current.remove();
        } catch (e) {
          console.warn('Error removing widget:', e);
        }
        widgetRef.current = null;
      }
      
      const script = document.querySelector('script[src="https://s3.tradingview.com/tv.js"]');
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, [timePeriod, darkMode, chartKey]);

  const handleTimePeriodChange = (period) => {
    if (period === 'Refresh Button') {
      handleRefresh();
      return;
    }
    setTimePeriod(period);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleRefresh = () => {
    // Force complete reinitialization with new chart key
    setChartKey(Date.now());
    setLoading(true);
    setError(null);
  };

  

  return (
    <div className={`min-h-screen p-4 md:p-6 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-800'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <h1 className="text-2xl font-bold">BSE Sensex Dashboard</h1>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {error || 'Real-time Sensex chart powered by TradingView'}
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-yellow-300' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'}`}
              title={darkMode ? 'Light Mode' : 'Dark Mode'}
            >
              {darkMode ? <FiSun /> : <FiMoon />}
            </button>
          </div>
        </div>

        {/* Time Period Selector */}
        <div className="flex flex-wrap gap-2 mb-6">
          {['1D', '1W', '1M', '3M', 'Refresh Button'].map(period => (
            <button
              key={period}
              onClick={() => handleTimePeriodChange(period)}
              disabled={loading}
              className={`px-3 py-1.5 text-sm rounded-lg transition ${
                timePeriod === period && period !== 'Refresh Button'
                  ? 'bg-blue-500 text-white'
                  : darkMode
                    ? 'bg-gray-700 hover:bg-gray-600'
                    : 'bg-gray-200 hover:bg-gray-300'
              } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {period === 'Refresh Button' ? (
                <>
                  <FiRefreshCw className="inline mr-1" /> Refresh
                </>
              ) : (
                period
              )}
            </button>
          ))}
        </div>

        {/* Loading State */}
        {loading && (
          <div className={`rounded-xl shadow-lg mb-6 h-[500px] flex items-center justify-center ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}

        {/* TradingView Chart */}
        <div className={`rounded-xl shadow-lg mb-6 overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <div 
            id={`tradingview-${chartKey}`}
            ref={containerRef}
            style={{ 
              height: '500px',
              width: '100%',
              visibility: loading ? 'hidden' : 'visible'
            }} 
          />
        </div>

        {/* Error State */}
        {error && (
          <div className={`p-4 rounded-xl shadow-lg mb-6 ${darkMode ? 'bg-red-900 border-red-700' : 'bg-red-100 border-red-200'} border`}>
            <p className={darkMode ? 'text-red-200' : 'text-red-800'}>
              {error}. Please try refreshing the page.
            </p>
            <button
              onClick={handleRefresh}
              className={`mt-2 px-3 py-1 rounded-lg ${darkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
              Retry
            </button>
          </div>
        )}

        {/* Prediction Section
        {!loading && !error && (
          <div className={`p-4 rounded-xl shadow-lg mb-6 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-blue-50 border-blue-200'} border`}>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
              <div>
                <h3 className="font-bold mb-1">Market Analysis</h3>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{prediction}</p>
              </div>
              <button
                onClick={handleCopy}
                disabled={!prediction}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-lg transition ${
                  copied 
                    ? 'bg-green-500 text-white'
                    : darkMode
                      ? 'bg-gray-700 hover:bg-gray-600'
                      : 'bg-blue-100 hover:bg-blue-200'
                } ${!prediction ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {copied ? (
                  <>
                    <FiCheck /> Copied!
                  </>
                ) : (
                  <>
                    <FiCopy /> Copy
                  </>
                )}
              </button>
            </div>
          </div>
        )} */}
      </div>
      <Chatbot/>
    </div>
  );
};

export default StockChart;