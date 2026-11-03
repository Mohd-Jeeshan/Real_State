import { useState, useEffect } from 'react';
import { Phone, MessageCircle, X } from 'lucide-react';
import { contactInfo } from '@/data/site';

export default function FloatingButtons() {
  const [show, setShow] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Call button */}
      <a
        href={`tel:${contactInfo.phone}`}
        className={`flex items-center gap-2 bg-navy-800 text-white rounded-full shadow-lg hover:bg-navy-900 transition-all duration-300 overflow-hidden ${
          expanded ? 'px-5 py-3.5' : 'w-14 h-14 justify-center'
        }`}
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
      >
        <Phone className="w-5 h-5 flex-shrink-0" />
        {expanded && <span className="text-sm font-medium whitespace-nowrap">Call Now</span>}
      </a>

      {/* WhatsApp button */}
      <a
        href={`https://wa.me/${contactInfo.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 w-14 h-14 justify-center animate-pulse-gold"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}
