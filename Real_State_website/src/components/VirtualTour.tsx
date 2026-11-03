import { Camera, Video, Images, Map, LayoutGrid, Trees, Building, Compass, ArrowRight } from 'lucide-react';
import { virtualTourFeatures } from '@/data/site';
import { useApp } from '@/context/AppContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const iconMap: Record<string, typeof Camera> = {
  Camera,
  Video,
  Images,
  Map,
  LayoutGrid,
  Trees,
  Building,
  Compass,
};

export default function VirtualTour() {
  const { navigate, setEnquiryOpen } = useApp();
  const sectionRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="virtual-tour" className="py-20 bg-navy-900 relative overflow-hidden" ref={sectionRef}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gold-400 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold-400 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-4">
            <Camera className="w-4 h-4 text-gold-300" />
            <span className="text-gold-200 text-sm font-medium">Immersive Experience</span>
          </div>
          <h2 className="reveal reveal-delay-1 font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Explore Our Projects Virtually
          </h2>
          <p className="reveal reveal-delay-2 text-white/70 text-lg">
            Take a virtual walkthrough and experience the project before scheduling your site visit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Featured tour card */}
          <div className="reveal group relative rounded-2xl overflow-hidden h-[420px]">
            <video
              src="https://cdn.coverr.co/videos/coverr-aerial-view-of-a-luxury-house-2633/1080p.mp4"
              poster="https://images.pexels.com/photos/8089172/pexels-photo-8089172.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/30 to-transparent" />

            {/* Label */}
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-gold-300 text-sm font-medium uppercase tracking-wider">Featured Virtual Tour</span>
              <h3 className="font-display text-2xl font-bold text-white mt-1">Aurum Heights - Full Walkthrough</h3>
              <button
                onClick={() => navigate({ page: 'projects', projectId: 'aurum-heights' })}
                className="mt-3 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/30 text-white text-sm font-semibold hover:bg-white/20 transition-all"
              >
                View Virtual Tour
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Features list */}
          <div className="reveal reveal-delay-1">
            <h3 className="font-display text-2xl font-bold text-white mb-2">Explore From Anywhere</h3>
            <p className="text-white/70 mb-6">
              Experience every project with immersive 360° tours, detailed floor plans, location maps, and amenity views — all from the comfort of your home.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {virtualTourFeatures.map((feature) => {
                const Icon = iconMap[feature.icon] || Camera;
                return (
                  <div
                    key={feature.label}
                    className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gold-500/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-gold-300" />
                    </div>
                    <span className="text-white/90 text-sm font-medium">{feature.label}</span>
                  </div>
                );
              })}
            </div>

            <button
              onClick={() => setEnquiryOpen(true)}
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gold-500 text-white font-semibold hover:bg-gold-600 transition-all duration-300 shadow-lg"
            >
              Schedule a Site Visit
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
