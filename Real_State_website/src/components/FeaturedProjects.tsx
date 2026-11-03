import { useState, useMemo } from 'react';
import { MapPin, Building2, ArrowRight, Star, TrendingUp, Clock } from 'lucide-react';
import { properties, propertyFilters, filterProperties } from '@/data/properties';
import { useApp } from '@/context/AppContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function FeaturedProjects() {
  const { navigate, setEnquiryOpen, setEnquiryProject } = useApp();
  const [activeFilter, setActiveFilter] = useState('All');
  const sectionRef = useScrollReveal<HTMLDivElement>();

  const filtered = useMemo(() => filterProperties(activeFilter).slice(0, 6), [activeFilter]);

  return (
    <section id="featured-projects" className="py-20 bg-navy-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-100 border border-gold-200 mb-4">
              <TrendingUp className="w-4 h-4 text-gold-700" />
              <span className="text-gold-800 text-sm font-medium">Premium Investment Opportunities</span>
            </div>
            <h2 className="reveal reveal-delay-1 font-display text-4xl sm:text-5xl font-bold text-navy-800 mb-3">
              Featured Investment Opportunities
            </h2>
            <p className="reveal reveal-delay-2 text-navy-500 text-lg">
              Handpicked projects with strong growth potential from trusted developers across prime locations.
            </p>
          </div>
          <button
            onClick={() => navigate({ page: 'projects' })}
            className="reveal reveal-delay-2 flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-navy-200 text-navy-700 font-semibold hover:border-gold-400 hover:text-gold-600 transition-all duration-300 self-start lg:self-auto"
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Filters */}
        <div className="reveal flex flex-wrap gap-2 mb-8">
          {propertyFilters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === f
                  ? 'bg-navy-800 text-white shadow-md'
                  : 'bg-white text-navy-600 border border-navy-200 hover:border-gold-300 hover:text-gold-600'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((property, index) => (
            <div
              key={property.id}
              className={`reveal reveal-delay-${(index % 3) + 1} group bg-white rounded-2xl overflow-hidden border border-navy-100 hover-lift transition-all duration-300`}
            >
              {/* Image */}
              <div className="relative h-56 img-zoom">
                <img src={property.image} alt={property.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent" />
                {/* Status badge */}
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    property.status === 'New Launch'
                      ? 'bg-gold-500 text-white'
                      : property.status === 'Ready to Move'
                      ? 'bg-green-600 text-white'
                      : 'bg-navy-700 text-white'
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
                {/* Rating */}
                <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm">
                  <Star className="w-3.5 h-3.5 text-gold-500 fill-gold-500" />
                  <span className="text-xs font-semibold text-navy-800">{property.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
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

                {/* Highlights */}
                <ul className="space-y-1.5 mb-4">
                  {property.investmentHighlights.slice(0, 2).map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-navy-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-1.5 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Price + CTAs */}
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

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-navy-400 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
