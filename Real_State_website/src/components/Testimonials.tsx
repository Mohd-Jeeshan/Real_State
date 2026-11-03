import { useState, useEffect, useCallback } from 'react';
import { Star, BadgeCheck, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '@/data/site';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const sectionRef = useScrollReveal<HTMLDivElement>();

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 7000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section id="testimonials" className="py-20 bg-navy-50" ref={sectionRef}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-100 border border-gold-200 mb-4">
            <Star className="w-4 h-4 text-gold-700" />
            <span className="text-gold-800 text-sm font-medium">Customer Stories</span>
          </div>
          <h2 className="reveal reveal-delay-1 font-display text-4xl sm:text-5xl font-bold text-navy-800 mb-4">
            What Our Customers Say
          </h2>
          <p className="reveal reveal-delay-2 text-navy-500 text-lg">
            Real experiences from investors and homeowners who trusted us with their property journey.
          </p>
        </div>

        {/* Testimonial card */}
        <div className="reveal relative">
          <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 relative overflow-hidden">
            <Quote className="absolute top-6 right-6 w-20 h-20 text-navy-50" />

            <div key={current} className="animate-fade-in-up relative">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonials[current].avatar}
                  alt={testimonials[current].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-gold-300"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-display text-lg font-bold text-navy-800">{testimonials[current].name}</h3>
                    {testimonials[current].verified && (
                      <span className="flex items-center gap-1 text-xs text-green-600 font-medium">
                        <BadgeCheck className="w-4 h-4" />
                        Verified
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-navy-500">{testimonials[current].location}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold-500 fill-gold-500" />
                ))}
              </div>

              {/* Review */}
              <p className="text-navy-700 text-lg leading-relaxed mb-4">
                "{testimonials[current].review}"
              </p>

              {/* Project */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-navy-50">
                <span className="text-xs text-navy-400 uppercase tracking-wider">Purchased:</span>
                <span className="text-sm font-semibold text-navy-700">{testimonials[current].project}</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`transition-all duration-500 rounded-full ${
                    index === current
                      ? 'w-8 h-2.5 bg-gold-500'
                      : 'w-2.5 h-2.5 bg-navy-200 hover:bg-navy-300'
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-navy-200 flex items-center justify-center text-navy-600 hover:bg-navy-50 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-navy-200 flex items-center justify-center text-navy-600 hover:bg-navy-50 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
