import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, User } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Properties", path: "/properties" },
    { label: "Services", path: "#services" },
    { label: "About", path: "#about" },
    { label: "Testimonials", path: "#testimonials" },
    { label: "Contact", path: "#contact" }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 no-underline">
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="w-8 h-8 bg-linear-to-r from-indigo-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Home size={20} className="text-white" />
              </div>
              <span className="text-2xl font-bold bg-linear-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                EstatePro
              </span>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.div key={item.label}>
                {item.path.startsWith("#") ? (
                  <a
                    href={item.path}
                    className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
                    whileHover={{ y: -2 }}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    to={item.path}
                    className={`font-medium transition-colors duration-300 ${
                      location.pathname === item.path
                        ? "text-white"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </motion.div>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <motion.button
              className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <User size={18} />
              Sign In
            </motion.button>
            <motion.button
              className="px-6 py-2 bg-linear-to-r from-indigo-600 to-purple-600 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className="md:hidden mt-4 py-4 border-t border-white/10"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.path.startsWith("#") ? (
                    <a
                      href={item.path}
                      className="text-gray-300 hover:text-white transition-colors py-2 block"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      to={item.path}
                      className="text-gray-300 hover:text-white transition-colors py-2 block"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="flex gap-4 pt-4">
                <button className="flex-1 py-2 text-gray-300 border border-gray-600 rounded-lg">
                  Sign In
                </button>
                <button className="flex-1 py-2 bg-indigo-600 rounded-lg font-semibold">
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}