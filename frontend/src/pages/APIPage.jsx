import React from 'react';
import { FiCpu } from 'react-icons/fi';
import { FiCode, FiServer, FiShield, FiZap, FiDatabase, FiKey, FiBarChart2 } from 'react-icons/fi';

const APIPage = () => {
  const externalApis = [
    {
      name: 'Yahoo Finance API',
      description: 'Used to fetch real-time and historical market data for Sensex (^BSESN)',
      endpoint: 'https://query1.finance.yahoo.com/v8/finance/chart/%5EBSESN',
      access: 'Public (via AllOrigins proxy)',
      example: `fetch(\`https://api.allorigins.win/get?url=\${encodeURIComponent('https://query1.finance.yahoo.com/v8/finance/chart/%5EBSESN?interval=1d&range=1d')}\`)`,
      icon: <FiBarChart2 className="h-5 w-5 text-blue-500" />
    },
    {
      name: 'TradingView Widget',
      description: 'Interactive charting library for market data visualization',
      endpoint: 'https://s3.tradingview.com/tv.js',
      access: 'Public',
      example: `<script src="https://s3.tradingview.com/tv.js"></script>`,
      icon: <FiBarChart2 className="h-5 w-5 text-purple-500" />
    },
    {
      name: 'Clerk Authentication',
      description: 'User authentication and session management',
      endpoint: 'Clerk.js SDK',
      access: 'Private (via publishable key)',
      example: `VITE_CLERK_PUBLISHABLE_KEY=pk_test_c2ltcGxlLWRvZS04MS5jbGVyay5hY2NvdW50cy5kZXYk`,
      icon: <FiShield className="h-5 w-5 text-green-500" />
    },
    {
      name: 'Groq AI API',
      description: 'AI-powered predictions and natural language processing',
      endpoint: 'https://api.groq.com/openai/v1/chat/completions',
      access: 'Private (via API key)',
      example: `fetch("https://api.groq.com/openai/v1/chat/completions", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": \`Bearer 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\`
  },
  body: JSON.stringify({...})
})`,
      icon: <FiCpu className="h-5 w-5 text-orange-500" />
    }
  ];

  // const ourEndpoints = [
  //   {
  //     method: 'GET',
  //     path: '/api/v1/market-data',
  //     description: 'Retrieve real-time market data from Yahoo Finance',
  //     parameters: [
  //       { name: 'symbol', type: 'string', required: true, example: '^BSESN' },
  //       { name: 'interval', type: 'string', required: false, example: '1d' }
  //     ]
  //   },
  //   {
  //     method: 'POST',
  //     path: '/api/v1/predict',
  //     description: 'Get AI prediction for given stock using our models',
  //     parameters: [
  //       { name: 'symbol', type: 'string', required: true },
  //       { name: 'period', type: 'string', required: true, example: '1d' },
  //       { name: 'model', type: 'string', required: false, example: 'lstm' }
  //     ]
  //   },
  //   {
  //     method: 'GET',
  //     path: '/api/v1/historical',
  //     description: 'Access historical market data',
  //     parameters: [
  //       { name: 'symbol', type: 'string', required: true },
  //       { name: 'start_date', type: 'string', required: false },
  //       { name: 'end_date', type: 'string', required: false }
  //     ]
  //   }
  // ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              TradingBot API
            </span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Comprehensive documentation for all APIs powering our trading platform
          </p>
        </div>

        {/* External APIs Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <FiDatabase className="mr-2 text-indigo-600" />
            External APIs We Use
          </h2>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="border-t border-gray-200">
              <dl>
                {externalApis.map((api, index) => (
                  <div key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} px-4 py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6`}>
                    <dt className="text-sm font-medium text-gray-500 flex items-center">
                      <span className="mr-2">{api.icon}</span>
                      {api.name}
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1">
                      <div className="font-mono text-xs bg-gray-100 p-1 rounded overflow-x-auto">
                        {api.endpoint}
                      </div>
                    </dd>
                    <dd className="mt-1 text-sm text-gray-500 sm:mt-0">
                      {api.description}
                    </dd>
                    <dd className="mt-1 text-sm text-gray-900 font-mono sm:mt-0">
                      <pre className="text-xs bg-gray-800 text-gray-100 p-2 rounded overflow-x-auto">
                        {api.example}
                      </pre>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* Our API Endpoints
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <FiServer className="mr-2 text-indigo-600" />
            Our API Endpoints
          </h2>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Method</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Endpoint</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Parameters</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {ourEndpoints.map((endpoint, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        endpoint.method === 'GET' ? 'bg-green-100 text-green-800' :
                        endpoint.method === 'POST' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {endpoint.method}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-indigo-600">
                      {endpoint.path}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {endpoint.description}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {endpoint.parameters.map((param, i) => (
                        <div key={i} className="mb-1">
                          <span className="font-mono bg-gray-100 px-1 rounded">{param.name}</span>
                          <span className="text-xs text-gray-400 ml-1">({param.type}{param.required ? ', required' : ''})</span>
                        </div>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div> */}

        Authentication
        <div className="mt-16 bg-white shadow rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <FiKey className="mr-2 text-indigo-600" />
            Authentication
          </h2>
          <div className="prose prose-indigo text-gray-500">
            <p>
              Our API uses JWT tokens for authentication. You'll need to include your API key in the Authorization header:
            </p>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded overflow-x-auto text-sm">
              {`Authorization: Bearer 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`}
            </pre>
            <p className="mt-4">
              For frontend authentication, we use Clerk.js with the following publishable key:
            </p>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded overflow-x-auto text-sm">
              {`VITE_CLERK_PUBLISHABLE_KEY=pk_test_c2ltcGxlLWRvZS04MS5jbGVyay5hY2NvdW50cy5kZXYk`}
            </pre>
          </div>
        </div>

        {/* Get Started
        <div className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white">Ready to get started?</h3>
          <p className="mt-2 text-indigo-100">
            Sign up for an API key and start integrating our powerful trading predictions today.
          </p>
          <div className="mt-8">
            <a
              href="/signup"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-600 bg-white hover:bg-indigo-50"
            >
              Get API Key
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default APIPage;