import { Building2, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { footerLinks, contactInfo } from '@/data/site';
import { useApp } from '@/context/AppContext';

export default function Footer() {
  const { navigate, setEnquiryOpen } = useApp();

  const handleLink = (link: { page: 'home' | 'projects' | 'contact'; section?: string; filter?: string; location?: string }) => {
    if (link.page === 'home' && link.section) {
      navigate({ page: 'home', section: link.section });
    } else if (link.page === 'projects') {
      navigate({ page: 'projects', filter: link.filter, location: link.location });
    } else {
      navigate({ page: link.page });
    }
  };

  return (
    <footer className="bg-navy-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-lg bg-navy-800 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-gold-400" />
              </div>
              <div>
                <span className="font-display font-bold text-xl block leading-none">PrimeVest</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-gold-400">Real Estate</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Your trusted partner for premium real estate investments across India's high-growth locations.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold-500 hover:border-gold-500 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleLink(link)}
                    className="text-white/60 text-sm hover:text-gold-300 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Properties */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Properties</h4>
            <ul className="space-y-2.5">
              {footerLinks.properties.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleLink(link)}
                    className="text-white/60 text-sm hover:text-gold-300 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Locations</h4>
            <ul className="space-y-2.5">
              {footerLinks.locations.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleLink(link)}
                    className="text-white/60 text-sm hover:text-gold-300 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-white/60 text-sm">
                <Phone className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-gold-300 transition-colors">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-white/60 text-sm">
                <Mail className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-gold-300 transition-colors">
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-white/60 text-sm">
                <MapPin className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                <span>{contactInfo.address}</span>
              </li>
            </ul>
            <button
              onClick={() => setEnquiryOpen(true)}
              className="mt-4 px-5 py-2.5 rounded-lg bg-gold-500 text-white text-sm font-semibold hover:bg-gold-600 transition-colors"
            >
              Enquire Now
            </button>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="rounded-2xl overflow-hidden mb-8 border border-white/10 h-48 bg-navy-800 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-10 h-10 text-gold-400 mx-auto mb-2" />
            <p className="text-white/60 text-sm">{contactInfo.address}</p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-300 text-sm font-medium hover:text-gold-200 transition-colors"
            >
              View on Google Maps
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © 2026 PrimeVest Real Estate. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#" className="text-white/40 text-sm hover:text-gold-300 transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/40 text-sm hover:text-gold-300 transition-colors">Terms & Conditions</a>
            <a href="#" className="text-white/40 text-sm hover:text-gold-300 transition-colors">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
