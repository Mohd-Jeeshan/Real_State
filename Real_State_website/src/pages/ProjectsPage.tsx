import { useState, useMemo, useEffect } from 'react';
import { Search, SlidersHorizontal, MapPin, Grid3x3, List, ArrowRight, Star, TrendingUp, Clock, Building2, X, ChevronDown } from 'lucide-react';
import { properties, propertyFilters } from '@/data/properties';
import { useApp } from '@/context/AppContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { popularLocations } from '@/data/site';

type SortOption = 'featured' | 'price-low' | 'price-high' | 'newest' | 'roi';

export default function ProjectsPage() {
  const { filter, location, projectId, searchParams, navigate, setEnquiryOpen, setEnquiryProject } = useApp();
  const sectionRef = useScrollReveal<HTMLDivElement>();

  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [showFilters, setShowFilters] = useState(false);
  const [activeFilter, setActiveFilter] = useState(filter || 'All');
  const [locationFilter, setLocationFilter] = useState(location || searchParams?.location || 'All Locations');
  const [budgetFilter, setBudgetFilter] = useState(searchParams?.budget || 'Any Budget');
  const [typeFilter, setTypeFilter] = useState(searchParams?.type || 'All Types');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (filter) setActiveFilter(filter);
    if (location) setLocationFilter(location);
    if (searchParams) {
      if (searchParams.location) setLocationFilter(searchParams.location);
      if (searchParams.budget) setBudgetFilter(searchParams.budget);
      if (searchParams.type) setTypeFilter(searchParams.type);
    }
  }, [filter, location, searchParams]);

  const filtered = useMemo(() => {
    let result = [...properties];

    // Category filter
    if (activeFilter !== 'All') {
      if (activeFilter === 'High ROI') {
        result = result.filter((p) => p.roi === 'High ROI');
      } else if (activeFilter === 'New Launch' || activeFilter === 'Ready to Move') {
        result = result.filter((p) => p.status === activeFilter);
      } else {
        result = result.filter((p) => p.type === activeFilter);
      }
    }

    // Location filter
    if (locationFilter !== 'All Locations') {
      const loc = locationFilter.toLowerCase();
      result = result.filter((p) =>
        p.city.toLowerCase().includes(loc) ||
        p.locality.toLowerCase().includes(loc) ||
        p.location.toLowerCase().includes(loc)
      );
    }

    // Type filter
    if (typeFilter !== 'All Types') {
      result = result.filter((p) => p.type === typeFilter);
    }

    // Budget filter
    if (budgetFilter !== 'Any Budget') {
      const budgetMap: Record<string, [number, number]> = {
        'Under ₹50L': [0, 50],
        '₹50L - ₹1Cr': [50, 100],
        '₹1Cr - ₹2Cr': [100, 200],
        'Above ₹2Cr': [200, 9999],
      };
      const [min, max] = budgetMap[budgetFilter];
      result = result.filter((p) => p.priceValue > min && p.priceValue <= max);
    }

    // Search query
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter((p) =>
        p.name.toLowerCase().includes(q) ||
        p.location.toLowerCase().includes(q) ||
        p.developer.toLowerCase().includes(q)
      );
    }

    // Sort
    switch (sortBy) {
      case 'price-low': result.sort((a, b) => a.priceValue - b.priceValue); break;
      case 'price-high': result.sort((a, b) => b.priceValue - a.priceValue); break;
      case 'newest': result.sort((a, b) => (b.status === 'New Launch' ? 1 : 0) - (a.status === 'New Launch' ? 1 : 0)); break;
      case 'roi': result.sort((a, b) => (b.roi === 'High ROI' ? 1 : 0) - (a.roi === 'High ROI' ? 1 : 0)); break;
      default: break;
    }

    return result;
  }, [activeFilter, locationFilter, typeFilter, budgetFilter, searchQuery, sortBy]);

  const clearFilters = () => {
    setActiveFilter('All');
    setLocationFilter('All Locations');
    setTypeFilter('All Types');
    setBudgetFilter('Any Budget');
    setSearchQuery('');
  };

  return (
    <div className="pt-24 pb-20 bg-navy-50 min-h-screen" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-display text-4xl font-bold text-navy-800 mb-2">
            {activeFilter === 'All' ? 'All Projects' : activeFilter}
          </h1>
          <p className="text-navy-500">
            {filtered.length} {filtered.length === 1 ? 'project' : 'projects'} found
            {locationFilter !== 'All Locations' && ` in ${locationFilter}`}
          </p>
        </div>

        {/* Search bar */}
        <div className="bg-white rounded-2xl shadow-md p-4 mb-6 border border-navy-100">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-navy-300" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by project name, location, or developer..."
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-navy-200 text-sm focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-100"
              />
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-navy-200 text-navy-700 text-sm font-medium hover:border-gold-300 transition-colors"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="appearance-none pl-4 pr-10 py-2.5 rounded-lg border border-navy-200 text-navy-700 text-sm font-medium focus:outline-none focus:border-gold-400 bg-white cursor-pointer"
                >
                  <option value="featured">Sort: Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest First</option>
                  <option value="roi">Investment Potential</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-navy-400 pointer-events-none" />
              </div>
              <div className="flex items-center border border-navy-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2.5 transition-colors ${viewMode === 'grid' ? 'bg-navy-800 text-white' : 'text-navy-400 hover:text-navy-700'}`}
                >
                  <Grid3x3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2.5 transition-colors ${viewMode === 'list' ? 'bg-navy-800 text-white' : 'text-navy-400 hover:text-navy-700'}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Expandable filters */}
          {showFilters && (
            <div className="mt-4 pt-4 border-t border-navy-100 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Location */}
                <div>
                  <label className="text-xs font-semibold text-navy-600 mb-1.5 block">Location</label>
                  <select
                    value={locationFilter}
                    onChange={(e) => setLocationFilter(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-navy-200 text-sm focus:outline-none focus:border-gold-400 bg-white"
                  >
                    <option value="All Locations">All Locations</option>
                    {popularLocations.map((loc) => (
                      <option key={loc} value={loc}>{loc}</option>
                    ))}
                  </select>
                </div>
                {/* Type */}
                <div>
                  <label className="text-xs font-semibold text-navy-600 mb-1.5 block">Property Type</label>
                  <select
                    value={typeFilter}
                    onChange={(e) => setTypeFilter(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-navy-200 text-sm focus:outline-none focus:border-gold-400 bg-white"
                  >
                    <option value="All Types">All Types</option>
                    {['Residential', 'Commercial', 'Plots', 'Apartments', 'Villas'].map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
                {/* Budget */}
                <div>
                  <label className="text-xs font-semibold text-navy-600 mb-1.5 block">Budget</label>
                  <select
                    value={budgetFilter}
                    onChange={(e) => setBudgetFilter(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-navy-200 text-sm focus:outline-none focus:border-gold-400 bg-white"
                  >
                    <option value="Any Budget">Any Budget</option>
                    {['Under ₹50L', '₹50L - ₹1Cr', '₹1Cr - ₹2Cr', 'Above ₹2Cr'].map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="mt-3 flex justify-end">
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-1 text-sm text-navy-500 hover:text-red-500 transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                  Clear all filters
                </button>
              </div>
            </div>
          )}

          {/* Quick category filters */}
          <div className="flex flex-wrap gap-2 mt-3">
            {propertyFilters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeFilter === f
                    ? 'bg-navy-800 text-white'
                    : 'bg-navy-50 text-navy-600 border border-navy-200 hover:border-gold-300'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        {filtered.length === 0 ? (
          <div className="bg-white rounded-2xl p-16 text-center border border-navy-100">
            <Search className="w-12 h-12 text-navy-200 mx-auto mb-4" />
            <h3 className="font-display text-xl font-bold text-navy-800 mb-2">No projects found</h3>
            <p className="text-navy-500 mb-4">Try adjusting your filters or search criteria.</p>
            <button
              onClick={clearFilters}
              className="px-5 py-2.5 rounded-lg bg-gold-500 text-white font-semibold hover:bg-gold-600 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'flex flex-col gap-4'}>
            {filtered.map((property, index) => (
              <div
                key={property.id}
                className={`reveal reveal-delay-${(index % 3) + 1} group bg-white rounded-2xl overflow-hidden border border-navy-100 hover-lift transition-all duration-300 ${
                  viewMode === 'list' ? 'flex flex-row' : ''
                }`}
              >
                {/* Image */}
                <div className={`relative img-zoom ${viewMode === 'list' ? 'w-72 flex-shrink-0' : 'h-56'}`}>
                  <img src={property.image} alt={property.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      property.status === 'New Launch' ? 'bg-gold-500 text-white' :
                      property.status === 'Ready to Move' ? 'bg-green-600 text-white' :
                      'bg-navy-700 text-white'
                    }`}>
                      {property.status}
                    </span>
                    {property.roi === 'High ROI' && (
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-red-500 text-white flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        High ROI
                      </span>
                    )}
                  </div>
                  <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm">
                    <Star className="w-3.5 h-3.5 text-gold-500 fill-gold-500" />
                    <span className="text-xs font-semibold text-navy-800">{property.rating}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1">
                  <h3 className="font-display text-xl font-bold text-navy-800 mb-1 group-hover:text-gold-600 transition-colors">
                    {property.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-navy-500 text-sm mb-3">
                    <MapPin className="w-4 h-4 text-gold-500" />
                    {property.location}
                  </div>

                  <div className="flex items-center gap-3 text-xs text-navy-400 mb-4 pb-4 border-b border-navy-100">
                    <span className="flex items-center gap-1">
                      <Building2 className="w-3.5 h-3.5" />
                      {property.developer}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {property.possession}
                    </span>
                  </div>

                  <ul className="space-y-1.5 mb-4">
                    {property.investmentHighlights.slice(0, 2).map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-navy-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-1.5 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-xs text-navy-400 uppercase tracking-wider">Starting from</span>
                      <div className="font-display text-xl font-bold text-navy-800">{property.priceFrom}</div>
                    </div>
                    <span className="text-xs text-navy-400">{property.units}</span>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => navigate({ page: 'projects', projectId: property.id })}
                      className="flex-1 px-4 py-2.5 rounded-lg bg-navy-800 text-white text-sm font-semibold hover:bg-navy-900 transition-colors"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => {
                        setEnquiryProject(property.name);
                        setEnquiryOpen(true);
                      }}
                      className="flex-1 px-4 py-2.5 rounded-lg border-2 border-gold-300 text-gold-700 text-sm font-semibold hover:bg-gold-50 transition-colors"
                    >
                      Enquire
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
