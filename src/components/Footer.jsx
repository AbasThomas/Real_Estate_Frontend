import React from "react";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, Home } from "lucide-react";

export default function Footer() {
  const socialIcons = [Facebook, Twitter, Instagram, Linkedin];
  const quickLinks = ["Properties", "Services", "About Us", "Testimonials", "Contact"];
  const services = ["Buy Properties", "Sell Properties", "Property Management", "Valuation", "Consultation"];

  return (
    <footer className="relative backdrop-blur-md bg-black/30 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Home size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                EstatePro
              </span>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Transforming real estate experiences with innovative technology and exceptional service.
            </p>
            <div className="flex gap-4">
              {socialIcons.map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="p-2 bg-white/5 rounded-lg hover:bg-indigo-600 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <Icon size={18} className="text-gray-400 hover:text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <div className="space-y-3">
              {services.map((service) => (
                <a
                  key={service}
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {service}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-semibold text-white mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin size={18} />
                <span>123 Estate Street, City, State 12345</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone size={18} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail size={18} />
                <span>info@estatepro.com</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p>&copy; {new Date().getFullYear()} EstatePro. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}