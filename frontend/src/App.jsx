import StockChart from "./components/StockChart";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import WhyTradeBot from "./pages/WhyTradeBot";
import Solutions from "./pages/Solutions";
import Pricing from "./pages/Pricing";
import Marketplace from "./pages/Marketplace";
import Learn from "./pages/Learn";
import Company from "./pages/Company";
import StartTrial from "./pages/StartTrial";
import Footer from "./components/Footer";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/why-tradebot" element={<WhyTradeBot />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/company" element={<Company />} />
        <Route path="/start-trial" element={<StartTrial />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/StockChart" element={<StockChart />} />

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;