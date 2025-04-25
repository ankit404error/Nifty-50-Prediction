import StockChart from "./components/StockChart";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/DashBoard";
import Pricing from "./pages/Pricing";
import StartTrial from "./pages/StartTrial";
import Footer from "./components/Footer";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";
import APIPage from "./pages/APIPage";
import DocumentationPage from "./pages/DocumentationPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/api" element={<APIPage />} />
        <Route path="/docs" element={<DocumentationPage />} />
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