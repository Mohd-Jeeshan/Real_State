import { Building2, ArrowRight } from 'lucide-react';
import { partners } from '@/data/site';
import { useApp } from '@/context/AppContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function DevelopmentPartners() {
  const { navigate } = useApp();
  const sectionRef = useScrollReveal<HTMLDivElement>();

  const doubled = [...partners, ...partners];

  return (
    <section id="partners" className="py-20 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-50 border border-navy-200 mb-4">
            <Building2 className="w-4 h-4 text-gold-600" />
            <span className="text-navy-700 text-sm font-medium">Trusted Network</span>
          </div>
          <h2 className="reveal reveal-delay-1 font-display text-4xl sm:text-5xl font-bold text-navy-800 mb-4">
            Our Development Partners
          </h2>
          <p className="reveal reveal-delay-2 text-navy-500 text-lg">
            Collaborating with reputed developers to bring quality real estate opportunities to our customers.
          </p>
        </div>
      </div>

      {/* Logo carousel */}
      <div className="marquee-container relative overflow-hidden mb-12">
        <div className="flex gap-6 animate-marquee w-max">
          {doubled.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex-shrink-0 w-80 p-6 rounded-2xl bg-navy-50 border border-navy-100 hover:border-gold-300 hover:bg-white transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl bg-navy-800 flex items-center justify-center group-hover:bg-gold-500 transition-colors">
                  <Building2 className="w-6 h-6 text-gold-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-navy-800">{partner.name}</h3>
                  <span className="text-xs text-gold-600 font-medium">{partner.projects} Projects</span>
                </div>
              </div>
              <p className="text-sm text-navy-500 mb-3">{partner.description}</p>
              <button
                onClick={() => navigate({ page: 'projects' })}
                className="flex items-center gap-1.5 text-navy-600 text-sm font-semibold hover:text-gold-600 transition-colors"
              >
                View Projects
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Fade edges */}
        <div className="absolute top-0 left-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
