# 📈 Trading Bot Documentation

Welcome to the **AI-Powered Trading Bot** documentation. This guide will help you set up the project, understand the core APIs, and explore usage examples for market prediction and analysis.

---

## 🚀 Setup Instructions

1. **Clone Repository**

   ```bash
   git clone https://github.com/ankit404error/Nifty-50-Prediction.git
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Configure Environment**
   Create a `.env` file in the root directory:

   ```env
   VITE_CLERK_PUBLISHABLE_KEY=your_publishable_key
   GROQ_API_KEY=your_groq_key
   ```

4. **Run Development Server**

   ```bash
   npm run dev
   ```

---

## 🔐 Authentication

### Clerk Authentication

User authentication is managed via Clerk. Include your publishable key in the `.env`:

```env
VITE_CLERK_PUBLISHABLE_KEY=pk_test_c2ltcGxlLWRvZS04MS5jbGVyay5hY2NvdW50cy5kZXYk
```

### Groq API Key

For AI-powered market predictions, add your Groq key:

```http
Authorization: Bearer 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
```

---

## 📡 API Reference

### 1. Yahoo Finance API

- **Description:** Fetches real-time and historical market data for Sensex (^BSESN)
- **Usage:** OHLC prices and volume data
- **Example:**
  ```js
  fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(
    'https://query1.finance.yahoo.com/v8/finance/chart/%5EBSESN?interval=1d&range=1d'
  )}`)
  ```
- **Note:** Uses AllOrigins proxy to bypass CORS

### 2. TradingView Widget

- **Description:** Interactive charting library
- **Usage:** Embedded for technical analysis
- **Example:**
  ```html
  <script src="https://s3.tradingview.com/tv.js"></script>
  ```
- **Note:** Loads automatically in StockChart component

### 3. Groq AI API

- **Description:** AI-powered market predictions
- **Usage:** Generates trading signals
- **Example:**
  ```js
  fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer YOUR_API_KEY"
    },
    body: JSON.stringify({
      model: "mixtral-8x7b-32768",
      messages: [...]
    })
  })
  ```
- **Note:** Requires valid API key

---

## 📊 Usage Examples

### 📥 Fetching Market Data

```js
async function fetchMarketData() {
  const response = await fetch(
    `https://api.allorigins.win/get?url=${encodeURIComponent(
      'https://query1.finance.yahoo.com/v8/finance/chart/%5EBSESN?interval=1d&range=1d'
    )}`
  );
  const data = await response.json();
  // parse and use data.contents
}
```

### 🤖 AI Market Prediction

```js
gasync function getPrediction() {
  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer YOUR_API_KEY"
    },
    body: JSON.stringify({
      model: "mixtral-8x7b-32768",
      messages: [
        { role: "system", content: "You are a stock analyst." },
        { role: "user", content: "Predict today's Sensex movement." }
      ]
    })
  });
  const result = await response.json();
  console.log(result);
}
```

---

