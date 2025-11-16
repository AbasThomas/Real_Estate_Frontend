import React from "react";
import { motion } from "framer-motion";
import { 
  Home, 
  Building, 
  Key, 
  Landmark, 
  Trees, 
  Warehouse, 
  Sprout, 
  Shield,
  MapPin,
  Star,
  Heart,
  Search,
  TrendingUp,
  Crown,
  Target,
  Users
} from "lucide-react";

export default function FloatingElements() {
  const icons = [
    Home, Building, Key, Landmark, Trees, 
    Warehouse, Sprout, Shield, MapPin, Star,
    Heart, Search, TrendingUp, Crown, Target, Users
  ];
  
  // More elements for header area (hero section)
  const headerElements = 20; // Increased number for header
  const restElements = 6;    // Fewer elements for rest of page
  
  return (
    <>
      {/* Header Area Elements - More dense and concentrated */}
      {[...Array(headerElements)].map((_, i) => {
        const IconComponent = icons[i % icons.length];
        const size = 20 + Math.random() * 24; // Sizes: 20-44px
        const isLeft = Math.random() > 0.5;
        const colors = ["text-blue-200", "text-slate-200", "text-slate-300"];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        return (
          <motion.div
            key={`header-${i}`}
            className={`absolute ${color} z-0 pointer-events-none`}
            style={{
              left: isLeft ? `${5 + Math.random() * 40}%` : `${55 + Math.random() * 40}%`,
              top: `${5 + Math.random() * 70}%`, // Concentrated in top 75% of viewport
            }}
            animate={{
              y: [0, -40 - Math.random() * 40, 0],
              x: [0, Math.random() * 30 - 15, 0],
              rotate: [0, Math.random() * 180, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [0.8, 1.1, 0.8],
            }}
            transition={{
              duration: 8 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          >
            <IconComponent size={size} />
          </motion.div>
        );
      })}
      
      {/* Rest of Page Elements - More subtle */}
      {[...Array(restElements)].map((_, i) => {
        const IconComponent = icons[(i + headerElements) % icons.length];
        const size = 16 + Math.random() * 20; // Sizes: 16-36px
        const colors = ["text-slate-200", "text-blue-100"];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        return (
          <motion.div
            key={`rest-${i}`}
            className={`absolute ${color} z-0 pointer-events-none`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${70 + Math.random() * 30}%`, // Bottom 30% of viewport
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              rotate: [0, Math.random() * 120, 0],
              opacity: [0.05, 0.15, 0.05],
              scale: [0.7, 0.9, 0.7],
            }}
            transition={{
              duration: 10 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          >
            <IconComponent size={size} />
          </motion.div>
        );
      })}
    </>
  );
}