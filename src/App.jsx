import React from "react";
import { MotionConfig } from "framer-motion";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import PropertiesPage from "./pages/PropertiesPage";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <MotionConfig reducedMotion="user">
        <div className="bg-[#030712] text-gray-100 min-h-screen flex flex-col">
          <Navbar />
          <div className="pt-20 flex-1">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/properties" element={<PropertiesPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </MotionConfig>
    </Router>
  );
}