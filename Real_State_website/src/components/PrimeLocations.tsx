import { MapPin, ArrowRight } from 'lucide-react';
import { locationCards } from '@/data/site';
import { useApp } from '@/context/AppContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function PrimeLocations() {
  const { navigate } = useApp();
  const sectionRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="locations" className="py-20 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-50 border border-navy-200 mb-4">
            <MapPin className="w-4 h-4 text-gold-600" />
            <span className="text-navy-700 text-sm font-medium">Discover by Location</span>
          </div>
          <h2 className="reveal reveal-delay-1 font-display text-4xl sm:text-5xl font-bold text-navy-800 mb-4">
            Projects in Prime Locations
          </h2>
          <p className="reveal reveal-delay-2 text-navy-500 text-lg">
            Explore investment opportunities in the most sought-after real estate destinations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locationCards.map((loc, index) => (
            <div
              key={loc.id}
              className={`reveal reveal-delay-${(index % 3) + 1} group relative rounded-2xl overflow-hidden h-80 img-zoom cursor-pointer`}
              onClick={() => navigate({ page: 'projects', location: loc.name })}
            >
              <img src={loc.image} alt={loc.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/30 to-transparent" />

              {/* Project count badge */}
              <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30">
                <span className="text-white text-sm font-semibold">{loc.projectCount} Projects</span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display text-2xl font-bold text-white mb-2">{loc.name}</h3>
                <p className="text-white/80 text-sm mb-3 line-clamp-2">{loc.description}</p>
                <div className="flex items-center gap-2 text-gold-300 text-sm font-semibold group-hover:text-gold-200 transition-colors">
                  Explore
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => navigate({ page: 'projects' })}
            className="reveal inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-navy-800 text-white font-semibold hover:bg-navy-900 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Explore Properties by Location
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
