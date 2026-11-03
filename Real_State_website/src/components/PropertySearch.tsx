import { useState } from 'react';
import { Search, MapPin, Home, DollarSign, Target, ChevronDown } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { popularLocations } from '@/data/site';

const propertyTypes = ['All Types', 'Residential', 'Commercial', 'Plots', 'Apartments', 'Villas'];
const budgets = ['Any Budget', 'Under ₹50L', '₹50L - ₹1Cr', '₹1Cr - ₹2Cr', 'Above ₹2Cr'];
const purposes = ['Buy', 'Invest', 'Commercial'];

export default function PropertySearch() {
  const { navigate } = useApp();
  const [location, setLocation] = useState('');
  const [type, setType] = useState('All Types');
  const [budget, setBudget] = useState('Any Budget');
  const [purpose, setPurpose] = useState('Buy');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSearch = () => {
    navigate({
      page: 'projects',
      searchParams: {
        location: location || 'All Locations',
        type,
        budget,
        purpose,
      },
    });
  };

  const filteredLocations = popularLocations.filter((loc) =>
    loc.toLowerCase().includes(location.toLowerCase())
  );

  return (
    <section className="relative z-20 -mt-16 mb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 border border-navy-100">
          <h2 className="font-display text-2xl font-bold text-navy-800 mb-1">
            Find Your Property in the Right Location
          </h2>
          <p className="text-navy-500 text-sm mb-6">
            Search by city, locality or project to discover premium investment opportunities
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {/* Location */}
            <div className="relative">
              <label className="flex items-center gap-1.5 text-xs font-semibold text-navy-600 mb-1.5">
                <MapPin className="w-3.5 h-3.5 text-gold-500" />
                Location / City
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value);
                  setShowSuggestions(true);
                }}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                placeholder="Search by city, locality or project..."
                className="w-full px-4 py-2.5 rounded-lg border border-navy-200 text-sm text-navy-800 placeholder:text-navy-300 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-100 transition-all"
              />
              {showSuggestions && filteredLocations.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-xl border border-navy-100 z-30 overflow-hidden">
                  {filteredLocations.map((loc) => (
                    <button
                      key={loc}
                      onClick={() => {
                        setLocation(loc);
                        setShowSuggestions(false);
                      }}
                      className="w-full text-left px-4 py-2.5 text-sm text-navy-700 hover:bg-navy-50 flex items-center gap-2 transition-colors"
                    >
                      <MapPin className="w-3.5 h-3.5 text-gold-400" />
                      {loc}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Property Type */}
            <div>
              <label className="flex items-center gap-1.5 text-xs font-semibold text-navy-600 mb-1.5">
                <Home className="w-3.5 h-3.5 text-gold-500" />
                Property Type
              </label>
              <div className="relative">
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="w-full appearance-none px-4 py-2.5 pr-10 rounded-lg border border-navy-200 text-sm text-navy-800 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-100 transition-all bg-white"
                >
                  {propertyTypes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-navy-400 pointer-events-none" />
              </div>
            </div>

            {/* Budget */}
            <div>
              <label className="flex items-center gap-1.5 text-xs font-semibold text-navy-600 mb-1.5">
                <DollarSign className="w-3.5 h-3.5 text-gold-500" />
                Budget
              </label>
              <div className="relative">
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full appearance-none px-4 py-2.5 pr-10 rounded-lg border border-navy-200 text-sm text-navy-800 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-100 transition-all bg-white"
                >
                  {budgets.map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-navy-400 pointer-events-none" />
              </div>
            </div>

            {/* Purpose */}
            <div>
              <label className="flex items-center gap-1.5 text-xs font-semibold text-navy-600 mb-1.5">
                <Target className="w-3.5 h-3.5 text-gold-500" />
                Purpose
              </label>
              <div className="relative">
                <select
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                  className="w-full appearance-none px-4 py-2.5 pr-10 rounded-lg border border-navy-200 text-sm text-navy-800 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-100 transition-all bg-white"
                >
                  {purposes.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-navy-400 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Popular locations */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-xs font-medium text-navy-400">Popular:</span>
            {popularLocations.map((loc) => (
              <button
                key={loc}
                onClick={() => setLocation(loc)}
                className="px-3 py-1 rounded-full bg-navy-50 text-navy-600 text-xs font-medium hover:bg-gold-50 hover:text-gold-700 transition-colors"
              >
                {loc}
              </button>
            ))}
          </div>

          {/* Search Button */}
          <button
            onClick={handleSearch}
            className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-gold-500 text-white font-semibold hover:bg-gold-600 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <Search className="w-5 h-5" />
            Search Properties
          </button>
        </div>
      </div>
    </section>
  );
}
