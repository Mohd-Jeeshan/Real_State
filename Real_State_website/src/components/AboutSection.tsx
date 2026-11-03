import { Building2, Users, Award, Target, ArrowRight, Linkedin, Mail } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const teamMembers = [
  {
    name: 'Rajesh Mehta',
    role: 'Founder & CEO',
    photo: 'https://images.pexels.com/photos/34762353/pexels-photo-34762353.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
    bio: '20+ years in real estate investment and market analysis.',
  },
  {
    name: 'Priya Nair',
    role: 'Head of Investments',
    photo: 'https://images.pexels.com/photos/36733305/pexels-photo-36733305.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
    bio: 'Expert in identifying high-growth corridors and ROI opportunities.',
  },
  {
    name: 'Amit Saxena',
    role: 'Director of Operations',
    photo: 'https://images.pexels.com/photos/34299170/pexels-photo-34299170.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
    bio: 'Leads project advisory and end-to-end client support operations.',
  },
  {
    name: 'Sneha Reddy',
    role: 'Senior Property Consultant',
    photo: 'https://images.pexels.com/photos/27015641/pexels-photo-27015641.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
    bio: 'Specializes in residential and commercial portfolio strategy.',
  },
];

export default function AboutSection() {
  const { setEnquiryOpen } = useApp();
  const sectionRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className="py-20 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="reveal relative">
            <div className="relative rounded-2xl overflow-hidden h-[500px]">
              <img
                src="https://images.pexels.com/photos/33175650/pexels-photo-33175650.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="About PrimeVest"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border border-navy-100 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gold-50 flex items-center justify-center">
                  <Award className="w-7 h-7 text-gold-600" />
                </div>
                <div>
                  <div className="font-display text-2xl font-bold text-navy-800">10+ Years</div>
                  <div className="text-sm text-navy-500">of Excellence</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="reveal reveal-delay-1">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-50 border border-navy-200 mb-4">
              <Building2 className="w-4 h-4 text-gold-600" />
              <span className="text-navy-700 text-sm font-medium">About PrimeVest</span>
            </div>
            <h2 className="font-display text-4xl font-bold text-navy-800 mb-4">
              Your Trusted Real Estate Investment Partner
            </h2>
            <p className="text-navy-500 text-lg mb-6 leading-relaxed">
              For over a decade, PrimeVest has helped investors and homeowners discover premium properties across India's fastest-growing locations. We combine deep market expertise with transparent processes to make property investment simple, secure, and rewarding.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: Target, title: 'Our Mission', text: 'To make real estate investment accessible, transparent, and profitable for everyone.' },
                { icon: Users, title: 'Our Team', text: 'Experienced property experts with deep knowledge of local markets and regulations.' },
              ].map((item) => (
                <div key={item.title} className="p-5 rounded-xl bg-navy-50 border border-navy-100">
                  <item.icon className="w-7 h-7 text-gold-600 mb-3" />
                  <h3 className="font-display font-bold text-navy-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-navy-500 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => setEnquiryOpen(true)}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-navy-800 text-white font-semibold hover:bg-navy-900 transition-all duration-300 shadow-md"
            >
              Talk to Our Experts
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Meet Our Core Team */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-50 border border-navy-200 mb-4">
              <Users className="w-4 h-4 text-gold-600" />
              <span className="text-navy-700 text-sm font-medium">Our People</span>
            </div>
            <h3 className="reveal reveal-delay-1 font-display text-3xl sm:text-4xl font-bold text-navy-800 mb-3">
              Meet Our Core Team
            </h3>
            <p className="reveal reveal-delay-2 text-navy-500">
              Experienced professionals dedicated to helping you make confident property investment decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className={`reveal reveal-delay-${(index % 4) + 1} group bg-white rounded-2xl overflow-hidden border border-navy-100 hover-lift transition-all duration-300`}
              >
                <div className="relative h-64 overflow-hidden img-zoom">
                  <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href="#" className="w-9 h-9 rounded-lg bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-gold-500 transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-9 h-9 rounded-lg bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-gold-500 transition-colors">
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <div className="p-5 text-center">
                  <h4 className="font-display text-lg font-bold text-navy-800 mb-1">{member.name}</h4>
                  <span className="text-gold-600 text-sm font-semibold">{member.role}</span>
                  <p className="text-sm text-navy-500 mt-2 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
