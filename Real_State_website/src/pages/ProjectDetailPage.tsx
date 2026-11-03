import { useState, useMemo } from 'react';
import {
  MapPin, Building2, Star, TrendingUp, Clock, CheckCircle2, Download,
  Calendar, Phone, MessageCircle, ArrowLeft, ChevronRight, Play,
  Check, Maximize, Layers, Map as MapIcon, Compass, Camera, Video,
  Train, ShoppingBag, School, Hospital, Plane, Car, Zap, ShieldCheck, Trees, Dumbbell, Waves, Wifi, Car as CarIcon,
} from 'lucide-react';
import { properties } from '@/data/properties';
import { testimonials, contactInfo } from '@/data/site';
import { useApp } from '@/context/AppContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const amenityIcons: Record<string, typeof Waves> = {
  'Swimming Pool': Waves, 'Clubhouse': Building2, 'Gymnasium': Dumbbell,
  'Landscaped Gardens': Trees, '24/7 Security': ShieldCheck, 'Power Backup': Zap,
  'Kids Play Area': Trees, 'Multi-purpose Court': Dumbbell, 'Spa': Waves,
  'Tennis Court': Dumbbell, 'Concierge': ShieldCheck, 'Business Center': Building2,
  'Jogging Track': Trees, 'Private Pool': Waves, 'Garden': Trees, 'Smart Home': Wifi,
  'High-Speed Elevators': Layers, 'Central AC': Zap, 'Food Court': ShoppingBag,
  'Parking': CarIcon, 'Conference Rooms': Building2, 'Retail Plaza': ShoppingBag,
  'Metro Connectivity': Train, 'Multiplex': Video, 'Escalators': Layers,
  'Anchor Store': ShoppingBag, 'Internal Roads': CarIcon, 'Street Lighting': Zap,
  'Water Supply': Waves, 'Parks': Trees, 'Commercial Zone': Building2,
  'Temple': Building2, 'Fiber Optic': Wifi, 'Luxury Hotel': Building2,
  'Helipad': Plane, 'Conference Center': Building2, 'Retail Boulevard': ShoppingBag,
  'Community Hall': Building2, 'Basketball Court': Dumbbell,
};

const nearbyLandmarks = [
  { icon: Train, label: 'Metro Station', distance: '0.5 km' },
  { icon: School, label: 'International School', distance: '2 km' },
  { icon: Hospital, label: 'Multi-Specialty Hospital', distance: '3 km' },
  { icon: ShoppingBag, label: 'Shopping Mall', distance: '1.5 km' },
  { icon: Plane, label: 'International Airport', distance: '25 km' },
  { icon: Car, label: 'Highway Access', distance: '1 km' },
];

const connectivityPoints = [
  'Direct metro connectivity to major business hubs',
  '10 minutes to nearest expressway entry',
  'Proposed metro extension within walking distance',
  '30 minutes to international airport via expressway',
];

const faqs = [
  { q: 'What is the possession date for this project?', a: 'The expected possession date is as mentioned in the project details. We provide regular construction updates to keep you informed.' },
  { q: 'Is the project RERA approved?', a: 'Yes, all our listed projects are RERA approved with clear titles and necessary regulatory approvals in place.' },
  { q: 'What financing options are available?', a: 'We assist with home loans from leading banks at competitive interest rates. Our team helps with the entire loan process.' },
  { q: 'Can I schedule a site visit?', a: 'Absolutely. You can book a site visit through our website or call us directly. We arrange guided tours with our property experts.' },
  { q: 'What is the rental yield potential?', a: 'Rental yields vary by project and location. Our investment highlights section provides estimated rental returns for each project.' },
];

export default function ProjectDetailPage() {
  const { projectId, navigate, setEnquiryOpen, setEnquiryProject } = useApp();
  const sectionRef = useScrollReveal<HTMLDivElement>();
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState<'overview' | 'amenities' | 'gallery' | 'location' | 'reviews' | 'faq'>('overview');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const property = useMemo(
    () => properties.find((p) => p.id === projectId) || properties[0],
    [projectId]
  );

  if (!property) {
    return (
      <div className="pt-32 pb-20 text-center">
        <p className="text-navy-500 text-lg">Project not found.</p>
        <button onClick={() => navigate({ page: 'projects' })} className="mt-4 text-gold-600 font-semibold">Back to Projects</button>
      </div>
    );
  }

  const projectTestimonials = testimonials.slice(0, 3);

  return (
    <div className="pt-20 bg-white" ref={sectionRef}>
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-2 text-sm text-navy-400">
          <button onClick={() => navigate({ page: 'home' })} className="hover:text-gold-600 transition-colors">Home</button>
          <ChevronRight className="w-3.5 h-3.5" />
          <button onClick={() => navigate({ page: 'projects' })} className="hover:text-gold-600 transition-colors">Projects</button>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-navy-700 font-medium">{property.name}</span>
        </div>
      </div>

      {/* Hero Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 rounded-2xl overflow-hidden">
          <div className="lg:col-span-3 relative h-80 lg:h-[440px] rounded-2xl overflow-hidden group">
            <img src={property.gallery[activeImage]} alt={property.name} className="w-full h-full object-cover transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 via-transparent to-transparent" />
            <div className="absolute top-4 left-4 flex gap-2">
              <span className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
                property.status === 'New Launch' ? 'bg-gold-500 text-white' :
                property.status === 'Ready to Move' ? 'bg-green-600 text-white' : 'bg-navy-700 text-white'
              }`}>
                {property.status}
              </span>
              {property.roi === 'High ROI' && (
                <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-red-500 text-white flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" /> High ROI
                </span>
              )}
            </div>
            <button className="absolute inset-0 flex items-center justify-center">
              <span className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all">
                <Play className="w-7 h-7 text-white ml-1 fill-white" />
              </span>
            </button>
          </div>
          <div className="grid grid-cols-4 lg:grid-cols-1 gap-3">
            {property.gallery.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={`relative h-20 lg:h-[100px] rounded-xl overflow-hidden border-2 transition-all ${
                  activeImage === i ? 'border-gold-400' : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Title + CTAs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
          <div>
            <h1 className="font-display text-4xl font-bold text-navy-800 mb-2">{property.name}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-navy-500">
              <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-gold-500" />{property.location}</span>
              <span className="flex items-center gap-1.5"><Building2 className="w-4 h-4 text-gold-500" />{property.developer}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-gold-500" />Possession: {property.possession}</span>
              <span className="flex items-center gap-1.5"><Star className="w-4 h-4 text-gold-500 fill-gold-500" />{property.rating} ({property.reviews} reviews)</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-navy-800 text-white text-sm font-semibold hover:bg-navy-900 transition-colors">
              <Download className="w-4 h-4" /> Brochure
            </button>
            <button
              onClick={() => { setEnquiryProject(property.name); setEnquiryOpen(true); }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gold-500 text-white text-sm font-semibold hover:bg-gold-600 transition-colors"
            >
              <Calendar className="w-4 h-4" /> Site Visit
            </button>
            <button
              onClick={() => { setEnquiryProject(property.name); setEnquiryOpen(true); }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg border-2 border-navy-200 text-navy-700 text-sm font-semibold hover:border-gold-300 transition-colors"
            >
              <Phone className="w-4 h-4" /> Callback
            </button>
            <a
              href={`https://wa.me/${contactInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-green-500 text-white text-sm font-semibold hover:bg-green-600 transition-colors"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Price banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="bg-navy-50 rounded-2xl p-6 flex flex-wrap items-center justify-between gap-4 border border-navy-100">
          <div className="flex flex-wrap items-center gap-8">
            <div>
              <span className="text-xs text-navy-400 uppercase tracking-wider block mb-1">Starting from</span>
              <span className="font-display text-3xl font-bold text-navy-800">{property.priceFrom}</span>
            </div>
            <div>
              <span className="text-xs text-navy-400 uppercase tracking-wider block mb-1">Configuration</span>
              <span className="font-semibold text-navy-700">{property.units}</span>
            </div>
            <div>
              <span className="text-xs text-navy-400 uppercase tracking-wider block mb-1">Area Range</span>
              <span className="font-semibold text-navy-700">{property.area}</span>
            </div>
            <div>
              <span className="text-xs text-navy-400 uppercase tracking-wider block mb-1">Type</span>
              <span className="font-semibold text-navy-700">{property.type}</span>
            </div>
          </div>
          <button
            onClick={() => { setEnquiryProject(property.name); setEnquiryOpen(true); }}
            className="px-6 py-3 rounded-lg bg-gold-500 text-white font-semibold hover:bg-gold-600 transition-colors shadow-md"
          >
            Enquire Now
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-wrap gap-1 border-b border-navy-100">
          {(['overview', 'amenities', 'gallery', 'location', 'reviews', 'faq'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-3 text-sm font-semibold capitalize transition-all border-b-2 -mb-px ${
                activeTab === tab ? 'border-gold-500 text-gold-600' : 'border-transparent text-navy-400 hover:text-navy-700'
              }`}
            >
              {tab === 'faq' ? 'FAQ' : tab}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-fade-in">
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl font-bold text-navy-800 mb-4">Project Overview</h2>
              <p className="text-navy-600 leading-relaxed mb-6">{property.description}</p>

              <h3 className="font-display text-xl font-bold text-navy-800 mb-4">Investment Highlights</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {property.investmentHighlights.map((h) => (
                  <div key={h} className="flex items-start gap-3 p-4 rounded-xl bg-navy-50 border border-navy-100">
                    <CheckCircle2 className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-navy-700">{h}</span>
                  </div>
                ))}
              </div>

              <h3 className="font-display text-xl font-bold text-navy-800 mb-4">Construction Updates</h3>
              <div className="space-y-3">
                {[
                  { stage: 'Foundation & Excavation', status: 'Completed', date: 'Jan 2026' },
                  { stage: 'Structure Construction', status: 'In Progress', date: 'Mar 2026' },
                  { stage: 'Floor & Finishing', status: 'Upcoming', date: 'Aug 2026' },
                  { stage: 'Final Inspection & Handover', status: 'Upcoming', date: 'Dec 2027' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-navy-100">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                      item.status === 'Completed' ? 'bg-green-100 text-green-600' :
                      item.status === 'In Progress' ? 'bg-gold-100 text-gold-600' : 'bg-navy-50 text-navy-400'
                    }`}>
                      {item.status === 'Completed' ? <Check className="w-5 h-5" /> : <Clock className="w-5 h-5" />}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-navy-800 text-sm">{item.stage}</div>
                      <div className="text-xs text-navy-400">{item.date}</div>
                    </div>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      item.status === 'Completed' ? 'bg-green-100 text-green-700' :
                      item.status === 'In Progress' ? 'bg-gold-100 text-gold-700' : 'bg-navy-50 text-navy-500'
                    }`}>{item.status}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-navy-50 rounded-2xl p-6 border border-navy-100">
                <h3 className="font-display text-lg font-bold text-navy-800 mb-4">Developer Information</h3>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-navy-800 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-gold-400" />
                  </div>
                  <div>
                    <div className="font-bold text-navy-800">{property.developer}</div>
                    <div className="text-xs text-gold-600 font-medium">Trusted Developer</div>
                  </div>
                </div>
                <p className="text-sm text-navy-500 leading-relaxed">
                  A reputed developer with a proven track record of delivering quality projects on time across prime locations.
                </p>
              </div>

              <div className="bg-navy-800 rounded-2xl p-6 text-white">
                <h3 className="font-display text-lg font-bold mb-4">Request Information</h3>
                <p className="text-white/70 text-sm mb-4">Get detailed project brochure, floor plans, and price list.</p>
                <div className="space-y-3">
                  <button
                    onClick={() => { setEnquiryProject(property.name); setEnquiryOpen(true); }}
                    className="w-full px-4 py-2.5 rounded-lg bg-gold-500 text-white text-sm font-semibold hover:bg-gold-600 transition-colors"
                  >
                    Request a Callback
                  </button>
                  <a
                    href={`https://wa.me/${contactInfo.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-green-500 text-white text-sm font-semibold hover:bg-green-600 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" /> WhatsApp Us
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-navy-100">
                <h3 className="font-display text-lg font-bold text-navy-800 mb-4">Virtual Tour</h3>
                <div className="relative h-32 rounded-xl overflow-hidden img-zoom">
                  <img src={property.gallery[1]} alt="Virtual Tour" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-navy-900/40 flex items-center justify-center">
                    <span className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center">
                      <Play className="w-5 h-5 text-white ml-0.5 fill-white" />
                    </span>
                  </div>
                </div>
                <button className="w-full mt-3 px-4 py-2 rounded-lg border-2 border-navy-200 text-navy-700 text-sm font-semibold hover:border-gold-300 transition-colors flex items-center justify-center gap-2">
                  <Camera className="w-4 h-4" /> View Virtual Tour
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'amenities' && (
          <div className="animate-fade-in">
            <h2 className="font-display text-2xl font-bold text-navy-800 mb-2">Project Amenities</h2>
            <p className="text-navy-500 mb-6">World-class facilities designed for premium living and investment value.</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {property.amenities.map((amenity) => {
                const Icon = amenityIcons[amenity] || Check;
                return (
                  <div key={amenity} className="flex flex-col items-center gap-3 p-6 rounded-xl bg-navy-50 border border-navy-100 hover:border-gold-300 hover:bg-white transition-all">
                    <div className="w-12 h-12 rounded-xl bg-navy-800 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-gold-400" />
                    </div>
                    <span className="text-sm font-semibold text-navy-700 text-center">{amenity}</span>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl border border-navy-100">
                <h3 className="font-display text-lg font-bold text-navy-800 mb-4 flex items-center gap-2">
                  <Compass className="w-5 h-5 text-gold-500" /> Master Plan
                </h3>
                <div className="relative h-48 rounded-xl overflow-hidden bg-navy-50 flex items-center justify-center">
                  <img src={property.gallery[0]} alt="Master Plan" className="w-full h-full object-cover opacity-60" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="px-4 py-2 rounded-lg bg-white/90 text-navy-700 text-sm font-semibold">View Master Plan</span>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-2xl border border-navy-100">
                <h3 className="font-display text-lg font-bold text-navy-800 mb-4 flex items-center gap-2">
                  <Maximize className="w-5 h-5 text-gold-500" /> Floor Plans
                </h3>
                <div className="relative h-48 rounded-xl overflow-hidden bg-navy-50 flex items-center justify-center">
                  <img src={property.gallery[2]} alt="Floor Plan" className="w-full h-full object-cover opacity-60" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="px-4 py-2 rounded-lg bg-white/90 text-navy-700 text-sm font-semibold">View Floor Plans</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'gallery' && (
          <div className="animate-fade-in">
            <h2 className="font-display text-2xl font-bold text-navy-800 mb-6">Project Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[...property.gallery, ...property.gallery.slice(0, 2)].map((img, i) => (
                <div key={i} className="relative h-64 rounded-2xl overflow-hidden img-zoom group cursor-pointer">
                  <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/20 transition-all flex items-center justify-center">
                    <Camera className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'location' && (
          <div className="animate-fade-in">
            <h2 className="font-display text-2xl font-bold text-navy-800 mb-2">Location Advantages</h2>
            <p className="text-navy-500 mb-6">Strategically located with excellent connectivity to key destinations.</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="relative h-64 rounded-2xl overflow-hidden bg-navy-50 flex items-center justify-center mb-6">
                  <img src={property.image} alt="Location" className="w-full h-full object-cover opacity-50" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <MapIcon className="w-12 h-12 text-navy-700 mb-2" />
                    <span className="px-4 py-2 rounded-lg bg-white/90 text-navy-700 text-sm font-semibold">{property.location}</span>
                    <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="mt-2 text-gold-600 text-sm font-medium hover:text-gold-700">View on Google Maps</a>
                  </div>
                </div>

                <h3 className="font-display text-lg font-bold text-navy-800 mb-4">Connectivity</h3>
                <ul className="space-y-2">
                  {connectivityPoints.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-navy-600">
                      <Check className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-display text-lg font-bold text-navy-800 mb-4">Nearby Landmarks</h3>
                <div className="space-y-3">
                  {nearbyLandmarks.map((landmark) => (
                    <div key={landmark.label} className="flex items-center gap-4 p-4 rounded-xl border border-navy-100 hover:border-gold-200 transition-colors">
                      <div className="w-10 h-10 rounded-lg bg-navy-50 flex items-center justify-center flex-shrink-0">
                        <landmark.icon className="w-5 h-5 text-gold-500" />
                      </div>
                      <span className="flex-1 text-sm font-medium text-navy-700">{landmark.label}</span>
                      <span className="text-sm text-navy-400 font-semibold">{landmark.distance}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className="animate-fade-in">
            <h2 className="font-display text-2xl font-bold text-navy-800 mb-2">Customer Reviews</h2>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < Math.floor(property.rating) ? 'text-gold-500 fill-gold-500' : 'text-navy-200'}`} />
                ))}
              </div>
              <span className="text-navy-700 font-semibold">{property.rating}</span>
              <span className="text-navy-400 text-sm">({property.reviews} reviews)</span>
            </div>

            <div className="space-y-4">
              {projectTestimonials.map((t) => (
                <div key={t.name} className="p-6 rounded-2xl border border-navy-100">
                  <div className="flex items-center gap-4 mb-4">
                    <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-gold-300" />
                    <div>
                      <div className="font-bold text-navy-800">{t.name}</div>
                      <div className="text-sm text-navy-400">{t.location}</div>
                    </div>
                    <div className="ml-auto flex items-center gap-1">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-gold-500 fill-gold-500" />
                      ))}
                    </div>
                  </div>
                  <p className="text-navy-600 leading-relaxed mb-3">"{t.review}"</p>
                  <span className="text-xs text-navy-400">Invested in: {t.project}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'faq' && (
          <div className="animate-fade-in max-w-3xl">
            <h2 className="font-display text-2xl font-bold text-navy-800 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="rounded-xl border border-navy-100 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-navy-50 transition-colors"
                  >
                    <span className="font-semibold text-navy-800 text-sm">{faq.q}</span>
                    <ChevronRight className={`w-5 h-5 text-navy-400 flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-90' : ''}`} />
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 text-sm text-navy-600 leading-relaxed animate-fade-in">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Back to projects */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <button
          onClick={() => navigate({ page: 'projects' })}
          className="inline-flex items-center gap-2 text-navy-600 font-semibold hover:text-gold-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to All Projects
        </button>
      </div>
    </div>
  );
}
