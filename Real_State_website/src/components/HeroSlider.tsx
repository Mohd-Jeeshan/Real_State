import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Building, ArrowRight, Phone } from 'lucide-react';
import { heroSlides } from '@/data/site';
import { useApp } from '@/context/AppContext';

export default function HeroSlider() {
  const { navigate, setEnquiryOpen, setEnquiryProject } = useApp();
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [isPaused, next]);

  return (
    <section
      className="relative h-screen min-h-[700px] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.name}
            className={`w-full h-full object-cover transition-transform duration-[8000ms] ${
              index === current ? 'scale-110' : 'scale-100'
            }`}
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
      ))}

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-3xl">
          <div
            key={current}
            className="animate-fade-in-up"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/20 border border-gold-400/40 backdrop-blur-sm mb-6">
              <Building className="w-4 h-4 text-gold-300" />
              <span className="text-gold-200 text-sm font-medium">{heroSlides[current].type}</span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-4">
              {heroSlides[current].name}
            </h1>
            <div className="flex items-center gap-2 text-white/80 mb-4">
              <MapPin className="w-5 h-5 text-gold-300" />
              <span className="text-lg">{heroSlides[current].location}</span>
            </div>
            <p className="text-lg text-white/90 max-w-2xl mb-6 leading-relaxed">
              {heroSlides[current].description}
            </p>
            <div className="flex items-baseline gap-3 mb-8">
              <span className="text-gold-300 text-sm uppercase tracking-wider">Starting from</span>
              <span className="font-display text-3xl font-bold text-white">{heroSlides[current].price}</span>
            </div>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate({ page: 'projects' })}
                className="group flex items-center gap-2 px-7 py-3.5 rounded-lg bg-gold-500 text-white font-semibold hover:bg-gold-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Explore Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => {
                  setEnquiryProject(heroSlides[current].name);
                  setEnquiryOpen(true);
                }}
                className="px-7 py-3.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/30 text-white font-semibold hover:bg-white/20 transition-all duration-300"
              >
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hidden md:flex"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hidden md:flex"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-10">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`transition-all duration-500 rounded-full ${
              index === current
                ? 'w-10 h-2.5 bg-gold-400'
                : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Bottom CTA buttons (always visible) */}
      <div className="absolute bottom-8 right-8 z-10 hidden lg:flex gap-3">
        <button
          onClick={() => navigate({ page: 'projects' })}
          className="px-5 py-2.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium hover:bg-white/20 transition-all"
        >
          Explore Projects
        </button>
        <button
          onClick={() => setEnquiryOpen(true)}
          className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium hover:bg-white/20 transition-all"
        >
          <Phone className="w-4 h-4" />
          Book a Consultation
        </button>
      </div>
    </section>
  );
}
