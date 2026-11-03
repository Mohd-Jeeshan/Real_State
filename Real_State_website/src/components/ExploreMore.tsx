import {
  Building2, Home, Briefcase, TrendingUp, Rocket, MapPin,
  Video, Newspaper, Info, Phone, ArrowRight,
} from 'lucide-react';
import { exploreMoreCards } from '@/data/site';
import { useApp } from '@/context/AppContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const iconMap: Record<string, typeof Building2> = {
  Building2, Home, Briefcase, TrendingUp, Rocket, MapPin, Video, Newspaper, Info, Phone,
};

export default function ExploreMore() {
  const { navigate } = useApp();
  const sectionRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="explore-more" className="py-20 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-50 border border-navy-200 mb-4">
            <Newspaper className="w-4 h-4 text-gold-600" />
            <span className="text-navy-700 text-sm font-medium">Discover More</span>
          </div>
          <h2 className="reveal reveal-delay-1 font-display text-4xl sm:text-5xl font-bold text-navy-800 mb-4">
            Explore More
          </h2>
          <p className="reveal reveal-delay-2 text-navy-500 text-lg">
            Browse all our property categories, resources, and services in one place.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {exploreMoreCards.map((card, index) => {
            const Icon = iconMap[card.icon] || Building2;
            return (
              <button
                key={card.title}
                onClick={() => {
                  if (card.page === 'home' && card.section) {
                    navigate({ page: 'home', section: card.section });
                  } else if (card.page === 'projects') {
                    navigate({ page: 'projects', filter: card.filter });
                  } else {
                    navigate({ page: card.page as 'home' | 'projects' | 'contact' });
                  }
                }}
                className={`reveal reveal-delay-${(index % 5) + 1} group p-5 rounded-2xl bg-navy-50 border border-navy-100 hover:border-gold-300 hover:bg-white hover-lift transition-all duration-300 text-left`}
              >
                <div className="w-12 h-12 rounded-xl bg-navy-800 group-hover:bg-gold-500 flex items-center justify-center mb-4 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-gold-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-semibold text-navy-800 text-sm mb-2">{card.title}</h3>
                <div className="flex items-center gap-1 text-gold-600 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore More
                  <ArrowRight className="w-3 h-3" />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
