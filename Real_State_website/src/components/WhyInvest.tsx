import { MapPin, ShieldCheck, TrendingUp, Eye, Users, Headphones } from 'lucide-react';
import { whyInvestReasons, stats } from '@/data/site';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useAnimatedCounter } from '@/hooks/useAnimatedCounter';
import { useInView } from '@/hooks/useInView';

const iconMap: Record<string, typeof MapPin> = {
  MapPin,
  ShieldCheck,
  TrendingUp,
  Eye,
  Users,
  Headphones,
};

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.5);
  const count = useAnimatedCounter(value, 2000, inView);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-4xl sm:text-5xl font-bold text-white">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm text-white/70 mt-1 font-medium uppercase tracking-wider">{label}</div>
    </div>
  );
}

export default function WhyInvest() {
  const sectionRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="why-invest" className="py-20 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-50 border border-gold-200 mb-4">
            <ShieldCheck className="w-4 h-4 text-gold-600" />
            <span className="text-gold-700 text-sm font-medium">Trusted Investment Partner</span>
          </div>
          <h2 className="reveal reveal-delay-1 font-display text-4xl sm:text-5xl font-bold text-navy-800 mb-4">
            Why Invest With Us
          </h2>
          <p className="reveal reveal-delay-2 text-navy-500 text-lg">
            We combine deep market knowledge, trusted partnerships, and transparent processes to help you make confident investment decisions.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {whyInvestReasons.map((reason, index) => {
            const Icon = iconMap[reason.icon] || MapPin;
            return (
              <div
                key={reason.title}
                className={`reveal reveal-delay-${(index % 3) + 1} group p-7 rounded-2xl bg-white border border-navy-100 hover:border-gold-300 hover-lift transition-all duration-300`}
              >
                <div className="w-14 h-14 rounded-xl bg-navy-50 group-hover:bg-gold-50 flex items-center justify-center mb-5 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-navy-700 group-hover:text-gold-600 transition-colors duration-300" />
                </div>
                <h3 className="font-display text-xl font-bold text-navy-800 mb-2">{reason.title}</h3>
                <p className="text-navy-500 leading-relaxed">{reason.description}</p>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="reveal bg-navy-800 rounded-3xl p-10 sm:p-14 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold-500/5 rounded-full blur-3xl" />
          <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <StatCounter key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
