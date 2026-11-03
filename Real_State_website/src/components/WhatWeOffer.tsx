import { TrendingUp, Home, Building2, MessageSquare, ClipboardCheck, Settings, ArrowRight } from 'lucide-react';
import { services } from '@/data/site';
import { useApp } from '@/context/AppContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const iconMap: Record<string, typeof TrendingUp> = {
  TrendingUp,
  Home,
  Building2,
  MessageSquare,
  ClipboardCheck,
  Settings,
};

export default function WhatWeOffer() {
  const { navigate, setEnquiryOpen } = useApp();
  const sectionRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="services" className="py-20 bg-navy-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-100 border border-gold-200 mb-4">
            <Settings className="w-4 h-4 text-gold-700" />
            <span className="text-gold-800 text-sm font-medium">Our Services</span>
          </div>
          <h2 className="reveal reveal-delay-1 font-display text-4xl sm:text-5xl font-bold text-navy-800 mb-4">
            What We Offer
          </h2>
          <p className="reveal reveal-delay-2 text-navy-500 text-lg">
            Comprehensive real estate services from investment advisory to property management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || TrendingUp;
            return (
              <div
                key={service.title}
                className={`reveal reveal-delay-${(index % 3) + 1} group bg-white rounded-2xl overflow-hidden border border-navy-100 hover-lift transition-all duration-300`}
              >
                {/* Image */}
                <div className="relative h-44 img-zoom">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 to-transparent" />
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-navy-800 mb-2 group-hover:text-gold-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-navy-500 text-sm mb-4 leading-relaxed">{service.description}</p>
                  <button
                    onClick={() => {
                      if (service.page === 'contact') {
                        setEnquiryOpen(true);
                      } else if (service.page === 'projects') {
                        navigate({ page: 'projects', filter: service.filter });
                      } else {
                        navigate({ page: service.page as 'home' | 'projects' | 'contact', section: service.section });
                      }
                    }}
                    className="flex items-center gap-1.5 text-gold-600 font-semibold text-sm hover:gap-2.5 transition-all"
                  >
                    {service.link}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
