import { useState, useEffect } from 'react';
import { Menu, X, Search, Phone, Building2 } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { navItems } from '@/data/site';

export default function Navbar() {
  const { navigate, setEnquiryOpen } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (item: typeof navItems[number]) => {
    setMobileOpen(false);
    if (item.page === 'home' && !item.section) {
      navigate({ page: 'home' });
    } else if (item.page === 'home' && item.section) {
      navigate({ page: 'home', section: item.section });
    } else if (item.page === 'projects') {
      navigate({ page: 'projects', filter: item.filter });
    } else {
      navigate({ page: item.page });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => navigate({ page: 'home' })}
              className="flex items-center gap-2.5 group"
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                scrolled ? 'bg-navy-800' : 'bg-white/10 backdrop-blur-md border border-white/20'
              }`}>
                <Building2 className={`w-6 h-6 ${scrolled ? 'text-gold-400' : 'text-gold-300'}`} />
              </div>
              <div className="text-left">
                <span className={`font-display font-bold text-xl block leading-none ${
                  scrolled ? 'text-navy-800' : 'text-white'
                }`}>
                  PrimeVest
                </span>
                <span className={`text-[10px] uppercase tracking-[0.2em] font-medium ${
                  scrolled ? 'text-gold-600' : 'text-gold-300'
                }`}>
                  Real Estate
                </span>
              </div>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNav(item)}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 relative group ${
                    scrolled
                      ? 'text-navy-700 hover:text-gold-600'
                      : 'text-white/90 hover:text-gold-300'
                  }`}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => navigate({ page: 'projects' })}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                  scrolled
                    ? 'text-navy-700 hover:bg-navy-50 border border-navy-200'
                    : 'text-white hover:bg-white/10 border border-white/20'
                }`}
              >
                <Search className="w-4 h-4" />
                Search
              </button>
              <button
                onClick={() => setEnquiryOpen(true)}
                className="px-5 py-2.5 rounded-lg text-sm font-semibold bg-gold-500 text-white hover:bg-gold-600 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
              >
                Enquire Now
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-md transition-colors ${
                scrolled ? 'text-navy-800' : 'text-white'
              }`}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="absolute inset-0 bg-navy-900/95 backdrop-blur-md" onClick={() => setMobileOpen(false)} />
        <div
          className={`absolute top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-500 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between p-5 border-b border-navy-100">
            <span className="font-display font-bold text-lg text-navy-800">Menu</span>
            <button onClick={() => setMobileOpen(false)} className="p-2 text-navy-600 hover:text-navy-900">
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav className="p-5 flex flex-col gap-1 overflow-y-auto h-[calc(100vh-80px)]">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNav(item)}
                className="text-left px-4 py-3 text-navy-700 hover:bg-navy-50 hover:text-gold-600 rounded-lg font-medium transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="mt-4 pt-4 border-t border-navy-100 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileOpen(false);
                  navigate({ page: 'projects' });
                }}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-navy-200 text-navy-700 font-medium"
              >
                <Search className="w-4 h-4" />
                Search Properties
              </button>
              <button
                onClick={() => {
                  setMobileOpen(false);
                  setEnquiryOpen(true);
                }}
                className="px-4 py-3 rounded-lg bg-gold-500 text-white font-semibold"
              >
                Enquire Now
              </button>
              <a
                href="tel:+919876543210"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-navy-800 text-white font-medium"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
