import { Newspaper, ArrowRight, Calendar } from 'lucide-react';
import { insights } from '@/data/site';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function RealEstateInsights() {
  const sectionRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="insights" className="py-20 bg-navy-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-100 border border-gold-200 mb-4">
              <Newspaper className="w-4 h-4 text-gold-700" />
              <span className="text-gold-800 text-sm font-medium">Latest Updates</span>
            </div>
            <h2 className="reveal reveal-delay-1 font-display text-4xl sm:text-5xl font-bold text-navy-800 mb-3">
              Real Estate Insights
            </h2>
            <p className="reveal reveal-delay-2 text-navy-500 text-lg">
              Expert analysis, market trends, and investment guides to help you make informed decisions.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {insights.map((article, index) => (
            <article
              key={article.id}
              className={`reveal reveal-delay-${(index % 4) + 1} group bg-white rounded-2xl overflow-hidden border border-navy-100 hover-lift transition-all duration-300 cursor-pointer`}
            >
              <div className="relative h-44 img-zoom">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-gold-500 text-white text-xs font-semibold">
                  {article.category}
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-1.5 text-xs text-navy-400 mb-2">
                  <Calendar className="w-3.5 h-3.5" />
                  {article.date}
                </div>
                <h3 className="font-display text-lg font-bold text-navy-800 mb-2 group-hover:text-gold-600 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm text-navy-500 leading-relaxed line-clamp-2 mb-3">{article.description}</p>
                <div className="flex items-center gap-1.5 text-gold-600 text-sm font-semibold group-hover:gap-2.5 transition-all">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
