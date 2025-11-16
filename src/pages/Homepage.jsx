import React from "react";
import { motion } from "framer-motion";
import { 
  Search, 
  Star, 
  TrendingUp, 
  Shield, 
  Mail,
  MapPin,
  Heart,
  Eye,
  Home,
  Key,
  Building2,
  Crown,
  Target,
  Users,
  Clock
} from "lucide-react";
import AnimatedBackground from "../components/AnimatedBackground";
import FloatingElements from "../components/FloatingElements";

// Sample data
const properties = [
  { 
    id: 1, 
    title: "Modern Villa", 
    type: "Villa", 
    price: 250000, 
    location: "Beverly Hills, CA",
    beds: 4,
    baths: 3,
    sqft: 3200,
    image: "/api/placeholder/400/300",
    featured: true
  },
  { 
    id: 2, 
    title: "Downtown Apartment", 
    type: "Apartment", 
    price: 120000, 
    location: "Manhattan, NY",
    beds: 2,
    baths: 2,
    sqft: 1200,
    image: "/api/placeholder/400/300",
    featured: false
  },
  { 
    id: 3, 
    title: "Cozy Bungalow", 
    type: "Bungalow", 
    price: 180000, 
    location: "Portland, OR",
    beds: 3,
    baths: 2,
    sqft: 1800,
    image: "/api/placeholder/400/300",
    featured: true
  },
  { 
    id: 4, 
    title: "Luxury Penthouse", 
    type: "Penthouse", 
    price: 400000, 
    location: "Miami, FL",
    beds: 3,
    baths: 3,
    sqft: 2800,
    image: "/api/placeholder/400/300",
    featured: false
  },
  { 
    id: 5, 
    title: "Lakefront Estate", 
    type: "Estate", 
    price: 750000, 
    location: "Lake Tahoe, NV",
    beds: 5,
    baths: 4,
    sqft: 4500,
    image: "/api/placeholder/400/300",
    featured: true
  },
  { 
    id: 6, 
    title: "Urban Loft", 
    type: "Loft", 
    price: 195000, 
    location: "Chicago, IL",
    beds: 1,
    baths: 1,
    sqft: 1500,
    image: "/api/placeholder/400/300",
    featured: false
  },
];

const testimonials = [
  { 
    id: 1, 
    name: "Alice Johnson", 
    text: "Amazing service! Found my dream home in just 2 weeks. The team was incredibly professional.", 
    role: "First-time Buyer",
    rating: 5,
    avatar: "/api/placeholder/60/60"
  },
  { 
    id: 2, 
    name: "Bob Smith", 
    text: "Smooth and seamless process. Highly recommended for anyone looking to sell their property quickly.", 
    role: "Property Seller",
    rating: 5,
    avatar: "/api/placeholder/60/60"
  },
  { 
    id: 3, 
    name: "Charlie Brown", 
    text: "Great selection of properties and user-friendly website. Made finding our family home so easy!", 
    role: "Family Buyer",
    rating: 4,
    avatar: "/api/placeholder/60/60"
  },
];

const services = [
  { icon: Home, title: "Buy Homes", description: "Find your perfect home with our extensive listings and expert guidance." },
  { icon: TrendingUp, title: "Sell Properties", description: "Get the best value for your property with our marketing expertise." },
  { icon: Shield, title: "Property Management", description: "Comprehensive management services for rental properties." },
  { icon: Search, title: "Property Valuation", description: "Accurate market valuations for informed decision making." },
  { icon: Crown, title: "Luxury Homes", description: "Exclusive access to premium luxury properties worldwide." },
  { icon: Target, title: "Location Analysis", description: "In-depth analysis of neighborhoods and market trends." },
];

const stats = [
  { number: "10K+", label: "Properties", icon: Building2 },
  { number: "5K+", label: "Happy Clients", icon: Users },
  { number: "50+", label: "Cities", icon: MapPin },
  { number: "24/7", label: "Support", icon: Clock }
];

export default function Homepage() {
  return (
    <main className="flex flex-col items-center px-2 sm:px-4 py-8 sm:py-14 space-y-16 sm:space-y-24 relative overflow-hidden min-h-screen bg-[#030712] text-gray-100">
      {/* Enhanced floating elements with more density in header */}
      <FloatingElements />

      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <StatsSection stats={stats} />

      {/* Featured Properties */}
      <PropertiesSection properties={properties} />

      {/* Services */}
      <ServicesSection services={services} />

      {/* Testimonials */}
      <TestimonialsSection testimonials={testimonials} />

      {/* CTA Section */}
      <CTASection />

      {/* Newsletter */}
      <NewsletterSection />
    </main>
  );
}

// Sub-components for Homepage
const HeroSection = () => (
  <motion.section 
    className="text-center max-w-4xl relative z-10 pt-10 sm:pt-16"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <motion.div
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#111827] border border-[#1e293b] mb-8 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
      <span className="text-sm text-blue-300 font-medium">Trusted by 5,000+ clients worldwide</span>
    </motion.div>

    <motion.h1 
      className="text-4xl sm:text-6xl font-extrabold mb-5 text-white leading-tight"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      Find Your
      <span className="block text-blue-400">
        Dream Home
      </span>
    </motion.h1>
    
    <motion.p 
      className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed font-light"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      Discover exclusive properties with AI-powered recommendations, virtual tours, and seamless buying experience.
    </motion.p>
    
    <motion.div 
      className="flex flex-col sm:flex-row justify-center gap-4 mb-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <motion.button 
        className="px-7 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 flex items-center justify-center gap-3 font-semibold shadow-md group"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        <Search size={20} className="group-hover:scale-110 transition-transform" />
        Explore Properties
      </motion.button>
      <motion.button 
        className="px-7 py-3 border border-gray-700 bg-[#111827] hover:bg-[#1e293b] rounded-lg transition-all duration-300 flex items-center justify-center gap-3 font-semibold text-gray-200 group"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        <Heart size={20} className="group-hover:scale-110 transition-transform text-rose-400" />
        Save Favorites
      </motion.button>
    </motion.div>

    {/* Search Bar */}
    <motion.div 
      className="max-w-xl mx-auto bg-[#111827] rounded-xl p-2 shadow-lg border border-gray-800"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
    >
      <div className="flex flex-col sm:flex-row gap-2">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search by location, property, or keyword..."
            className="w-full px-4 py-3 border-0 focus:outline-none focus:ring-0 text-gray-200 bg-transparent rounded-lg placeholder-gray-500"
          />
        </div>
        <motion.button 
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold flex items-center gap-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Search size={18} />
          Search
        </motion.button>
      </div>
    </motion.div>
  </motion.section>
);

const StatsSection = ({ stats }) => (
  <motion.section 
    className="w-full max-w-4xl relative z-10"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true, margin: "-100px" }}
  >
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className="text-center p-6 rounded-xl bg-[#111827] border border-gray-800 hover:border-blue-700 transition-all duration-500 group shadow-sm hover:shadow-md"
          whileHover={{ scale: 1.05, y: -5 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <motion.div 
            className="w-12 h-12 bg-blue-900/40 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-800/60 transition-colors"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <stat.icon size={24} className="text-blue-400" />
          </motion.div>
          <div className="text-2xl sm:text-3xl font-bold text-white mb-2">
            {stat.number}
          </div>
          <div className="text-gray-400 text-sm sm:text-base group-hover:text-gray-200 transition-colors">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

const PropertiesSection = ({ properties }) => (
  <motion.section 
    id="properties" 
    className="w-full max-w-6xl relative z-10"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true, margin: "-100px" }}
  >
    <motion.div 
      className="text-center mb-10 sm:mb-14"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="inline-flex items-center gap-2 text-blue-400 mb-4">
        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
        <span className="text-sm font-semibold">FEATURED PROPERTIES</span>
      </div>
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
        Premium Selections
      </h2>
      <p className="text-gray-400 text-lg max-w-2xl mx-auto">
        Handpicked properties that combine luxury, location, and exceptional value
      </p>
    </motion.div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
      {properties.map((property, index) => (
        <PropertyCard key={property.id} property={property} index={index} />
      ))}
    </div>
  </motion.section>
);

const PropertyCard = ({ property, index }) => (
  <motion.div
    className="rounded-xl overflow-hidden bg-[#111827] border border-gray-800 hover:border-blue-700 transition-all duration-500 group cursor-pointer shadow-sm hover:shadow-lg"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    whileHover={{ y: -8 }}
    viewport={{ once: true }}
  >
    <div className="h-44 bg-linear-to-br from-blue-900/30 to-blue-800/20 relative overflow-hidden">
      {property.featured && (
        <div className="absolute top-3 left-3 z-10">
          <span className="px-3 py-1 bg-amber-600 text-white text-xs font-medium rounded-full shadow-sm">
            Featured
          </span>
        </div>
      )}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-500" />
      <div className="absolute top-3 right-3 flex gap-2">
        <motion.button 
          className="p-2 bg-[#1e293b] rounded-full backdrop-blur-sm hover:bg-rose-600 hover:text-white transition-all duration-300 shadow-sm"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Heart size={16} />
        </motion.button>
        <motion.button 
          className="p-2 bg-[#1e293b] rounded-full backdrop-blur-sm hover:bg-blue-700 hover:text-white transition-all duration-300 shadow-sm"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Eye size={16} />
        </motion.button>
      </div>
      <div className="absolute bottom-3 left-3">
        <span className="px-3 py-1 bg-[#1e293b] backdrop-blur-sm rounded-full text-gray-200 text-xs font-medium shadow-sm">
          {property.type}
        </span>
      </div>
    </div>
    <div className="p-5">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
          {property.title}
        </h3>
        <span className="text-xl font-bold text-blue-400">
          ${property.price.toLocaleString()}
        </span>
      </div>
      <p className="text-gray-400 mb-3 flex items-center gap-2">
        <MapPin size={16} className="text-blue-400" />
        {property.location}
      </p>
      <div className="flex justify-between text-xs text-gray-400 mb-4">
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
          {property.beds} Beds
        </span>
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 bg-green-400 rounded-full"></span>
          {property.baths} Baths
        </span>
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
          {property.sqft} sqft
        </span>
      </div>
      <motion.button 
        className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 font-semibold shadow-sm hover:shadow-md"
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        View Details
      </motion.button>
    </div>
  </motion.div>
);

const ServicesSection = ({ services }) => (
  <motion.section 
    id="services" 
    className="w-full max-w-6xl relative z-10"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true, margin: "-100px" }}
  >
    <motion.div 
      className="text-center mb-10 sm:mb-14"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="inline-flex items-center gap-2 text-blue-400 mb-4">
        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
        <span className="text-sm font-semibold">OUR SERVICES</span>
      </div>
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
        Complete Real Estate Solutions
      </h2>
      <p className="text-gray-400 text-lg max-w-2xl mx-auto">
        End-to-end services designed to make your property journey seamless and successful
      </p>
    </motion.div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {services.map((service, index) => (
        <ServiceCard key={index} service={service} index={index} />
      ))}
    </div>
  </motion.section>
);

const ServiceCard = ({ service, index }) => (
  <motion.div
    className="p-6 sm:p-8 rounded-xl bg-[#111827] border border-gray-800 hover:border-blue-700 transition-all duration-500 group text-center cursor-pointer shadow-sm hover:shadow-md"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    whileHover={{ y: -5 }}
    viewport={{ once: true }}
  >
    <motion.div 
      className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-blue-900/40 rounded-xl mb-6 group-hover:bg-blue-800/60 transition-colors duration-500 shadow-sm"
      whileHover={{ rotate: 5, scale: 1.1 }}
      transition={{ duration: 0.3 }}
    >
      <service.icon size={28} className="text-blue-400" />
    </motion.div>
    <h3 className="text-lg font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
      {service.title}
    </h3>
    <p className="text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors">
      {service.description}
    </p>
  </motion.div>
);

const TestimonialsSection = ({ testimonials }) => (
  <motion.section 
    id="testimonials" 
    className="max-w-4xl w-full relative z-10"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true, margin: "-100px" }}
  >
    <motion.div 
      className="text-center mb-10 sm:mb-14"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="inline-flex items-center gap-2 text-amber-400 mb-4">
        <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
        <span className="text-sm font-semibold">TESTIMONIALS</span>
      </div>
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
        Client Success Stories
      </h2>
      <p className="text-gray-400 text-lg max-w-2xl mx-auto">
        Discover why thousands of clients trust us with their real estate journey
      </p>
    </motion.div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
      ))}
    </div>
  </motion.section>
);

const TestimonialCard = ({ testimonial, index }) => (
  <motion.div
    className="p-6 sm:p-8 rounded-xl bg-[#111827] border border-gray-800 hover:border-amber-400 transition-all duration-500 group shadow-sm hover:shadow-md"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    whileHover={{ y: -5 }}
    viewport={{ once: true }}
  >
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          size={16} 
          className={i < testimonial.rating ? "text-amber-400 fill-amber-400" : "text-gray-700"} 
        />
      ))}
    </div>
    <p className="text-gray-200 mb-6 italic group-hover:text-white transition-colors">
      "{testimonial.text}"
    </p>
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 bg-linear-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold shadow-sm">
        {testimonial.name.charAt(0)}
      </div>
      <div>
        <p className="font-bold text-white">{testimonial.name}</p>
        <p className="text-gray-400 text-sm group-hover:text-gray-200 transition-colors">
          {testimonial.role}
        </p>
      </div>
    </div>
  </motion.div>
);

const CTASection = () => (
  <motion.section 
    className="max-w-4xl w-full relative z-10 text-center"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true, margin: "-100px" }}
  >
    <div className="rounded-2xl p-8 sm:p-12 bg-linear-to-br from-blue-900/80 to-blue-800/80 border border-blue-900 relative overflow-hidden shadow-2xl">
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      <div className="relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
          Start Your Journey Today
        </h2>
        <p className="text-blue-200 mb-8 text-lg max-w-2xl mx-auto">
          Join thousands of successful clients and discover the perfect property with our expert guidance and cutting-edge technology.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button 
            className="px-8 py-4 bg-white text-blue-700 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-white/25 flex items-center gap-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Key size={20} />
            Get Started
          </motion.button>
          <motion.button 
            className="px-8 py-4 border border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm flex items-center gap-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Mail size={20} />
            Schedule a Call
          </motion.button>
        </div>
      </div>
    </div>
  </motion.section>
);

const NewsletterSection = () => (
  <motion.section 
    id="contact" 
    className="text-center max-w-xl relative z-10"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true, margin: "-100px" }}
  >
    <div className="inline-flex items-center gap-2 text-blue-400 mb-4">
      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
      <span className="text-sm font-semibold">NEWSLETTER</span>
    </div>
    <h2 className="text-3xl font-bold mb-4 text-white">
      Stay Informed
    </h2>
    <p className="text-gray-400 mb-8 text-lg">
      Get exclusive property insights, market trends, and early access to new listings.
    </p>
    <motion.form 
      className="flex flex-col sm:flex-row gap-4 justify-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <input
        type="email"
        placeholder="Enter your email"
        className="px-6 py-4 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#111827] flex-1 min-w-0 text-gray-200 placeholder-gray-500 shadow-sm"
      />
      <motion.button
        type="submit"
        className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 font-semibold flex items-center gap-2 shadow-sm hover:shadow-md"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        <Mail size={20} />
        Subscribe
      </motion.button>
    </motion.form>
  </motion.section>
);