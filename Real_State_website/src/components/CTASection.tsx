import { ArrowRight, Phone, Calendar } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function CTASection() {
  const { navigate, setEnquiryOpen } = useApp();
  const sectionRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="py-20 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal relative rounded-3xl overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/16110999/pexels-photo-16110999.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Luxury Building"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-navy-900/85" />
          </div>

          {/* Content */}
          <div className="relative px-6 py-16 sm:px-12 sm:py-20 text-center">
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white mb-4 max-w-3xl mx-auto">
              Ready to Find Your Next Property Investment?
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
              Let our property experts help you discover the right project, location, and investment opportunity.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => navigate({ page: 'projects' })}
                className="group flex items-center gap-2 px-7 py-3.5 rounded-lg bg-gold-500 text-white font-semibold hover:bg-gold-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Explore Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => setEnquiryOpen(true)}
                className="flex items-center gap-2 px-7 py-3.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/30 text-white font-semibold hover:bg-white/20 transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                Talk to an Expert
              </button>
              <button
                onClick={() => setEnquiryOpen(true)}
                className="flex items-center gap-2 px-7 py-3.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/30 text-white font-semibold hover:bg-white/20 transition-all duration-300"
              >
                <Calendar className="w-4 h-4" />
                Schedule a Site Visit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
