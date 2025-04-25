import React from 'react';
import { FiCode, FiDatabase, FiTrendingUp, FiBarChart2, FiCpu, FiShield, FiKey, FiDownload } from 'react-icons/fi';

const DocumentationPage = () => {
  const apis = [
    {
      name: 'Yahoo Finance API',
      description: 'Fetches real-time and historical market data for Sensex (^BSESN)',
      usage: 'Used for getting OHLC (Open, High, Low, Close) prices and volume data',
      example: `fetch(\`https://api.allorigins.win/get?url=\${encodeURIComponent(
        'https://query1.finance.yahoo.com/v8/finance/chart/%5EBSESN?interval=1d&range=1d'
      )}\`)`,
      note: 'Uses AllOrigins proxy to bypass CORS restrictions'
    },
    {
      name: 'TradingView Widget',
      description: 'Interactive charting library for market visualization',
      usage: 'Embedded in the dashboard for technical analysis',
      example: `<script src="https://s3.tradingview.com/tv.js"></script>`,
      note: 'Automatically loads when the StockChart component mounts'
    },
    {
      name: 'Groq AI API',
      description: 'Provides AI-powered market predictions',
      usage: 'Generates trading signals and market analysis',
      example: `fetch("https://api.groq.com/openai/v1/chat/completions", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_API_KEY"
  },
  body: JSON.stringify({
    model: "mixtral-8x7b-32768",
    messages: [...]
  })
})`,
      note: 'Requires proper authentication key'
    }
  ];

  const setupSteps = [
    {
      step: 1,
      title: 'Clone Repository',
      command: 'git clone https://github.com/ankit404error/Nifty-50-Prediction.git'
    },
    {
      step: 2,
      title: 'Install Dependencies',
      command: 'npm install'
    },
    {
      step: 3,
      title: 'Configure Environment',
      content: `Create a .env file with:
VITE_CLERK_PUBLISHABLE_KEY=your_publishable_key
GROQ_API_KEY=your_groq_key`
    },
    {
      step: 4,
      title: 'Run Development Server',
      command: 'npm run dev'
    }
  ];

  return (
    <div className="bg-gray-900 min-h-screen text-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="block bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Trading Bot Documentation
            </span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-lg text-gray-400 sm:text-xl md:mt-5 md:max-w-3xl">
            Complete guide to APIs, setup, and usage of our AI-powered trading system
          </p>
        </div>

        {/* API Reference Section */}
        <section className="mb-16 bg-gray-800 rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <FiCode className="mr-2 text-indigo-400" />
            API Reference
          </h2>
          
          <div className="space-y-8">
            {apis.map((api, index) => (
              <div key={index} className="bg-gray-700 rounded-lg p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-indigo-500/10 p-2 rounded-lg">
                    {index === 0 && <FiDatabase className="h-6 w-6 text-indigo-400" />}
                    {index === 1 && <FiBarChart2 className="h-6 w-6 text-indigo-400" />}
                    {index === 2 && <FiCpu className="h-6 w-6 text-indigo-400" />}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold">{api.name}</h3>
                    <p className="text-gray-300 mt-1">{api.description}</p>
                    <p className="text-gray-400 text-sm mt-2"><strong>Usage:</strong> {api.usage}</p>
                    
                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-gray-400 mb-1">Example:</h4>
                      <pre className="bg-black/50 p-4 rounded text-sm overflow-x-auto">
                        <code className="text-green-400">{api.example}</code>
                      </pre>
                    </div>
                    
                    {api.note && (
                      <div className="mt-3 p-3 bg-gray-800/50 rounded border-l-4 border-yellow-500">
                        <p className="text-yellow-400 text-sm">{api.note}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Authentication Section */}
        <section className="mb-16 bg-gray-800 rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <FiKey className="mr-2 text-indigo-400" />
            Authentication
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Clerk Authentication</h3>
              <p className="text-gray-300 mb-4">
                User authentication is handled via Clerk. You need to set up your publishable key:
              </p>
              <pre className="bg-black/50 p-4 rounded text-sm overflow-x-auto">
                <code className="text-yellow-400">VITE_CLERK_PUBLISHABLE_KEY=pk_test_c2ltcGxlLWRvZS04MS5jbGVyay5hY2NvdW50cy5kZXYk</code>
              </pre>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Groq API Key</h3>
              <p className="text-gray-300 mb-4">
                For AI predictions, you need a valid Groq API key:
              </p>
              <pre className="bg-black/50 p-4 rounded text-sm overflow-x-auto">
                <code className="text-yellow-400">Authorization: Bearer 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</code>
              </pre>
            </div>
          </div>
        </section>

        {/* Setup Instructions */}
        <section className="mb-16 bg-gray-800 rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <FiDownload className="mr-2 text-indigo-400" />
            Setup Instructions
          </h2>
          
          <div className="space-y-6">
            {setupSteps.map((step) => (
              <div key={step.step} className="flex">
                <div className="flex-shrink-0 bg-indigo-500/10 h-10 w-10 rounded-full flex items-center justify-center">
                  <span className="text-indigo-400 font-bold">{step.step}</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  {step.command ? (
                    <pre className="mt-2 bg-black/50 p-3 rounded text-sm overflow-x-auto">
                      <code className="text-green-400">{step.command}</code>
                    </pre>
                  ) : (
                    <div className="mt-2 bg-black/50 p-3 rounded text-sm text-gray-300">
                      {step.content}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Usage Examples */}
        <section className="mb-16 bg-gray-800 rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <FiTrendingUp className="mr-2 text-indigo-400" />
            Usage Examples
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Fetching Market Data</h3>
              <pre className="bg-black/50 p-4 rounded text-sm overflow-x-auto">
                <code className="text-blue-400">{`// Using Yahoo Finance API via AllOrigins
async function fetchMarketData() {
  const response = await fetch(
    \`https://api.allorigins.win/get?url=\${encodeURIComponent(
      'https://query1.finance.yahoo.com/v8/finance/chart/%5EBSESN?interval=1d&range=1d'
    )}\`
  );
  const data = await response.json();
  return JSON.parse(data.contents);
}`}</code>
              </pre>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Making Predictions</h3>
              <pre className="bg-black/50 p-4 rounded text-sm overflow-x-auto">
                <code className="text-blue-400">{`// Using Groq AI API for predictions
async function getPrediction(symbol) {
  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": \`Bearer \${process.env.GROQ_API_KEY}\`
    },
    body: JSON.stringify({
      model: "mixtral-8x7b-32768",
      messages: [{
        role: "user",
        content: \`Predict next day trend for \${symbol} based on recent data\`
      }]
    })
  });
  return await response.json();
}`}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* License */}
        <section className="bg-gray-800 rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <FiShield className="mr-2 text-indigo-400" />
            License & Disclaimer
          </h2>
          <div className="text-gray-300 space-y-4">
            <p>
              This project is licensed under the <strong></strong>. You're free to use, modify, and distribute the code.
            </p>
            <div className="bg-black/50 rounded-lg p-4 mt-4">
              <pre className="text-gray-400 text-sm overflow-x-auto">
                {`

Copyright (c) 2023 TradingBot

Permission is hereby granted... [standard  text]`}
              </pre>
            </div>
            <div className="p-4 bg-yellow-900/20 rounded-lg border-l-4 border-yellow-500">
              <p className="text-yellow-400">
                <strong>Disclaimer:</strong> This trading bot is for educational purposes only. Past performance is not indicative of future results.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DocumentationPage;