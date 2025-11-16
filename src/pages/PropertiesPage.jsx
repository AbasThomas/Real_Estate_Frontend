import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, Filter, MapPin, Heart, Eye, Star, X,
  Bed, Bath, Square, Grid3X3, List, Calendar,
  Home, TrendingUp, Crown
} from "lucide-react";

import AnimatedBackground from "../components/AnimatedBackground";
import FloatingElements from "../components/FloatingElements";
import { getAllProperties } from "../services/propertyService";

// Filters
const propertyTypes = ["All", "Villa", "Apartment", "Bungalow", "Penthouse", "Estate", "Loft", "Cabin", "Beach House"];
const priceRanges = [
  { label: "Any Price", min: 0, max: Infinity  },
  { label: "Under $200K", min: 0, max: 200000 },
  { label: "$200K - $400K", min: 200000, max: 400000 },
  { label: "$400K - $600K", min: 400000, max: 600000 },
  { label: "Over $600K", min: 600000, max: 1000000 }
];

export default function PropertiesPage() {
  const [properties, setProperties] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [priceRange, setPriceRange] = useState(priceRanges[0]);
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState("grid");
  const [favorites, setFavorites] = useState(new Set());
  const [showFilters, setShowFilters] = useState(false);

  // Fetch Properties From Backend
  useEffect(() => {
    let mounted = true;

    const loadData = async () => {
      try {
        const data = await getAllProperties();

        if (!mounted) return;

        // Normalize backend fields to match UI and filter needs
        const normalized = data.map((p) => ({
          id: p.id,
          title: p.title || "Untitled Property",
          propertyType: p.propertyType || "Property",
          price: p.price || 0,
          city: p.city || "",
          state: p.state || "",
          yearBuilt: p.yearBuilt || "-",
          description: p.description || "No description available.",
          image: p.imageUrl || "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop",

          // Add required fields for filters
          location: `${p.city ?? ""} ${p.state ?? ""}`,
          type: p.propertyType,
          rating: p.rating || 5,
          featured: p.featured || false,

          beds: p.beds || 3,
          baths: p.baths || 2,
          sqft: p.sqft || 1800,
        }));

        setProperties(normalized);
        setFiltered(normalized);
      } catch (err) {
        console.error(err);
        setError("Failed to load properties.");
      } finally {
        setLoading(false);
      }
    };

    loadData();
    return () => (mounted = false);
  }, []);

  // Apply filtering + sorting whenever filters change
  useEffect(() => {
    let result = [...properties];

    // Search filter
    result = result.filter((p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (p.location && p.location.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    // Type filter
    if (selectedType !== "All") {
      result = result.filter((p) => p.type === selectedType);
    }

    // Price filter
    result = result.filter(
      (p) => p.price >= priceRange.min && p.price <= priceRange.max
    );

    // Sorting
    result.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        case "newest":
          return b.yearBuilt - a.yearBuilt;
        default:
          return (b.featured === true) - (a.featured === true);
      }
    });

    setFiltered(result);
  }, [searchTerm, selectedType, priceRange, sortBy, properties]);

  const toggleFavorite = (id) => {
    const newFav = new Set(favorites);
    newFav.has(id) ? newFav.delete(id) : newFav.add(id);
    setFavorites(newFav);
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedType("All");
    setPriceRange(priceRanges[0]);
    setSortBy("featured");
  };

  // Loading UI
  if (loading)
    return (
      <div className="min-h-screen bg-[#030712] flex items-center justify-center text-gray-400">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          Loading premium properties...
        </div>
      </div>
    );

  // Error UI  
  if (error)
    return (
      <div className="min-h-screen bg-[#030712] flex items-center justify-center text-red-500">
        {error}
      </div>
    );

  return (
    <main className="min-h-screen bg-[#01050a] text-gray-100 relative overflow-hidden">
      <AnimatedBackground />
      <FloatingElements />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-8">

        {/* --- HEADER --- */}
        <Header />

        {/* --- SEARCH + FILTER BAR --- */}
        <SearchFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          showFilters={showFilters}
          setShowFilters={setShowFilters}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          priceRanges={priceRanges}
          clearFilters={clearFilters}
        />

        {/* --- SORT + VIEW CONTROLS --- */}
        <Controls
          sortBy={sortBy}
          setSortBy={setSortBy}
          viewMode={viewMode}
          setViewMode={setViewMode}
          filtered={filtered}
        />

        {/* --- PROPERTIES GRID --- */}
        <PropertiesGrid
          properties={filtered}
          viewMode={viewMode}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />
      </div>
    </main>
  );
}

// ------------------
// Component: Header
// ------------------
const Header = () => (
  <motion.header
    className="text-center mb-12"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4">
      <Crown size={16} className="text-blue-400" />
      <span className="text-blue-400 font-medium text-sm">Browse Premium Properties</span>
    </div>

    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
      Find Your Perfect <span className="text-blue-400">Home</span>
    </h1>

    <p className="text-gray-400 max-w-xl mx-auto text-lg">
      Discover exclusive properties tailored to your dreams
    </p>
  </motion.header>
);

// ------------------
// Filters + Search
// ------------------
const SearchFilters = ({
  searchTerm,
  setSearchTerm,
  showFilters,
  setShowFilters,
  selectedType,
  setSelectedType,
  priceRange,
  setPriceRange,
  priceRanges,
  clearFilters
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="mb-8"
  >
    {/* Search Bar */}
    <div className="bg-gradient-to-r from-[#0d1525] to-[#151f33] border border-gray-800 rounded-2xl p-4 mb-4 shadow-lg">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by property name or location..."
            className="w-full bg-[#1a2438] border border-gray-700 rounded-xl pl-12 text-gray-200 py-4 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>

        <button
          onClick={() => setShowFilters(!showFilters)}
          className="px-6 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 border border-blue-500 flex gap-2 items-center font-semibold hover:from-blue-700 hover:to-blue-800 transition shadow-lg"
        >
          <Filter size={18} /> Filters
        </button>
      </div>
    </div>

    {/* Expandable Filters */}
    <AnimatePresence>
      {showFilters && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="bg-gradient-to-br from-[#0d1525] to-[#151f33] border border-gray-800 rounded-2xl p-6 overflow-hidden shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Property Type */}
            <div>
              <label className="text-sm text-gray-300 font-medium mb-2 flex items-center gap-2">
                <Home size={16} />
                Property Type
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full bg-[#1a2438] text-gray-200 border border-gray-700 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              >
                {propertyTypes.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </div>

            {/* Price Range */}
            <div>
              <label className="text-sm text-gray-300 font-medium mb-2 flex items-center gap-2">
                <TrendingUp size={16} />
                Price Range
              </label>
              <select
                value={priceRange.label}
                onChange={(e) => setPriceRange(priceRanges.find((pr) => pr.label === e.target.value))}
                className="w-full bg-[#1a2438] text-gray-200 border border-gray-700 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              >
                {priceRanges.map((p) => (
                  <option key={p.label}>{p.label}</option>
                ))}
              </select>
            </div>

            {/* Clear Filters Button */}
            <div className="flex items-end">
              <button 
                onClick={clearFilters}
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl hover:bg-gray-600/50 transition text-gray-300 font-medium flex items-center justify-center gap-2"
              >
                <X size={16} /> Clear Filters
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

// ------------------
// Controls (Sort + View)
// ------------------
const Controls = ({ sortBy, setSortBy, viewMode, setViewMode, filtered }) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 p-4 bg-[#0d1525]/50 rounded-2xl border border-gray-800"
  >
    <div className="flex items-center gap-3">
      <div className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-lg">
        <span className="text-blue-400 font-semibold">{filtered.length}</span>
        <span className="text-gray-400 ml-1">properties</span>
      </div>
    </div>

    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
      <div className="relative">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full sm:w-48 bg-[#1a2438] border border-gray-700 text-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition appearance-none"
        >
          <option value="featured">Featured First</option>
          <option value="price-low">Price: Low → High</option>
          <option value="price-high">Price: High → Low</option>
          <option value="rating">Highest Rating</option>
          <option value="newest">Newest First</option>
        </select>
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
          </svg>
        </div>
      </div>

      <div className="flex bg-[#1a2438] border border-gray-700 rounded-xl p-1">
        <button
          className={`p-3 rounded-lg transition ${
            viewMode === "grid" 
              ? "bg-blue-600 shadow-lg" 
              : "hover:bg-gray-700"
          }`}
          onClick={() => setViewMode("grid")}
        >
          <Grid3X3 size={18} />
        </button>
        <button
          className={`p-3 rounded-lg transition ${
            viewMode === "list" 
              ? "bg-blue-600 shadow-lg" 
              : "hover:bg-gray-700"
          }`}
          onClick={() => setViewMode("list")}
        >
          <List size={18} />
        </button>
      </div>
    </div>
  </motion.div>
);

// ------------------
// Properties Grid
// ------------------
const PropertiesGrid = ({ properties, viewMode, favorites, toggleFavorite }) => {
  if (properties.length === 0) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-16"
      >
        <div className="text-gray-500 text-lg">No properties found matching your criteria</div>
        <div className="text-gray-600 text-sm mt-2">Try adjusting your filters</div>
      </motion.div>
    );
  }

  return (
    <div className={`${viewMode === "grid" 
      ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" 
      : "space-y-6"
    }`}>
      {properties.map((p, index) => (
        <PropertyCard
          key={p.id}
          property={p}
          index={index}
          viewMode={viewMode}
          isFavorite={favorites.has(p.id)}
          onToggleFavorite={() => toggleFavorite(p.id)}
        />
      ))}
    </div>
  );
};

// ------------------
// Individual Property Card
// ------------------
const PropertyCard = ({ property, index, viewMode, isFavorite, onToggleFavorite }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className={`group relative bg-gradient-to-br from-[#0d1525] to-[#151f33] border border-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:border-blue-500/30 ${
      viewMode === "list" ? "flex" : "flex flex-col"
    }`}
  >
    {/* Image Container */}
    <div className={`relative overflow-hidden ${viewMode === "list" ? "w-1/3" : "h-52"}`}>
      <img 
        src={property.image} 
        alt={property.title} 
        className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
      />
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
      
      {/* Top Badges */}
      <div className="absolute top-4 left-4 flex flex-col gap-2">
        {property.featured && (
          <span className="inline-flex items-center gap-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-1.5 text-xs font-semibold rounded-full shadow-lg">
            <Crown size={12} />
            Featured
          </span>
        )}
        <span className="inline-flex items-center gap-1 bg-black/70 text-white px-3 py-1.5 text-xs font-medium rounded-full backdrop-blur-sm">
          <Home size={12} />
          {property.propertyType}
        </span>
      </div>

      {/* Favorite Button */}
      <button
        onClick={onToggleFavorite}
        className={`absolute top-4 right-4 p-2.5 rounded-full backdrop-blur-sm transition duration-300 ${
          isFavorite 
            ? "bg-rose-500/90 text-white shadow-lg" 
            : "bg-black/50 text-gray-300 hover:bg-black/70 hover:text-rose-400"
        }`}
      >
        <Heart size={18} className={isFavorite ? "fill-current" : ""} />
      </button>

      {/* Rating Badge */}
      <div className="absolute bottom-4 left-4 flex items-center gap-1 bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-full">
        <Star size={14} className="fill-yellow-400 text-yellow-400" />
        <span className="text-xs font-semibold">{property.rating}</span>
      </div>
    </div>

    {/* Content Container */}
    <div className={`p-6 flex-1 flex flex-col ${viewMode === "list" ? "justify-between" : ""}`}>
      {/* Header */}
      <div className="mb-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-white text-xl font-bold line-clamp-1 group-hover:text-blue-400 transition">
            {property.title}
          </h3>
          <span className="text-blue-400 text-xl font-bold ml-2 whitespace-nowrap">
            ${property.price.toLocaleString()}
          </span>
        </div>

        {/* Location */}
        <div className="flex items-center gap-1 text-gray-400 mb-3">
          <MapPin size={16} className="text-blue-400" />
          <span className="text-sm">{property.city}, {property.state}</span>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
          {property.description}
        </p>
      </div>

      {/* Property Features */}
      <div className="grid grid-cols-3 gap-3 mb-4 py-3 border-y border-gray-800">
        <div className="flex items-center gap-2 text-gray-300">
          <Bed size={18} className="text-blue-400" />
          <div>
            <div className="text-sm font-semibold">{property.beds}</div>
            <div className="text-xs text-gray-500">Beds</div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-gray-300">
          <Bath size={18} className="text-blue-400" />
          <div>
            <div className="text-sm font-semibold">{property.baths}</div>
            <div className="text-xs text-gray-500">Baths</div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-gray-300">
          <Square size={18} className="text-blue-400" />
          <div>
            <div className="text-sm font-semibold">{property.sqft}</div>
            <div className="text-xs text-gray-500">Sq Ft</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-auto">
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <Calendar size={14} />
          <span>Built {property.yearBuilt}</span>
        </div>
        
        <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl transition duration-300 shadow-lg hover:shadow-blue-500/25 flex items-center gap-2 group-hover:scale-105">
          <Eye size={16} />
          View Details
        </button>
      </div>
    </div>
  </motion.div>
);