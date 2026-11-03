export interface Property {
  id: string;
  name: string;
  location: string;
  locality: string;
  city: string;
  developer: string;
  type: 'Residential' | 'Commercial' | 'Plots' | 'Apartments' | 'Villas';
  status: 'New Launch' | 'Ready to Move' | 'Under Construction';
  priceFrom: string;
  priceValue: number;
  image: string;
  gallery: string[];
  description: string;
  investmentHighlights: string[];
  amenities: string[];
  roi: 'High ROI' | 'Medium ROI' | 'Stable';
  possession: string;
  units: string;
  area: string;
  rating: number;
  reviews: number;
}

export const properties: Property[] = [
  {
    id: 'aurum-heights',
    name: 'Aurum Heights',
    location: 'Sector 78, Noida',
    locality: 'Sector 78',
    city: 'Noida',
    developer: 'Pinnacle Developers',
    type: 'Apartments',
    status: 'New Launch',
    priceFrom: '₹ 85 Lakhs',
    priceValue: 85,
    image: 'https://images.pexels.com/photos/14998334/pexels-photo-14998334.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    gallery: [
      'https://images.pexels.com/photos/14998334/pexels-photo-14998334.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/8089172/pexels-photo-8089172.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/8142046/pexels-photo-8142046.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/27307398/pexels-photo-27307398.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    description: 'A premium residential tower offering luxury 2 & 3 BHK apartments with panoramic city views, world-class amenities, and unparalleled connectivity to major business hubs.',
    investmentHighlights: [
      'High-growth corridor with 12% annual appreciation',
      'Proximity to proposed metro extension',
      'Premium amenities including clubhouse & pool',
      'RERA-approved project with clear titles',
    ],
    amenities: ['Swimming Pool', 'Clubhouse', 'Gymnasium', 'Landscaped Gardens', '24/7 Security', 'Power Backup', 'Kids Play Area', 'Multi-purpose Court'],
    roi: 'High ROI',
    possession: 'Dec 2027',
    units: '2 & 3 BHK',
    area: '1,150 - 1,850 sq.ft',
    rating: 4.8,
    reviews: 124,
  },
  {
    id: 'the-presidential',
    name: 'The Presidential',
    location: 'Sector 150, Noida',
    locality: 'Sector 150',
    city: 'Noida',
    developer: 'Heritage Group',
    type: 'Apartments',
    status: 'Under Construction',
    priceFrom: '₹ 1.2 Crore',
    priceValue: 120,
    image: 'https://images.pexels.com/photos/33528643/pexels-photo-33528643.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    gallery: [
      'https://images.pexels.com/photos/33528643/pexels-photo-33528643.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/8082243/pexels-photo-8082243.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/7587864/pexels-photo-7587864.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/31656167/pexels-photo-31656167.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    description: 'Ultra-luxury residences designed for the discerning few. Featuring expansive 3 & 4 BHK homes with private decks, premium fittings, and a host of lifestyle amenities.',
    investmentHighlights: [
      'Located in Noida\'s premium sports city',
      '15% projected ROI over 3 years',
      'Adjacent to 18-hole golf course',
      'Italian marble flooring & modular kitchen',
    ],
    amenities: ['Swimming Pool', 'Clubhouse', 'Gymnasium', 'Spa', 'Tennis Court', 'Concierge', 'Business Center', 'Jogging Track'],
    roi: 'High ROI',
    possession: 'Mar 2028',
    units: '3 & 4 BHK',
    area: '1,800 - 3,200 sq.ft',
    rating: 4.9,
    reviews: 87,
  },
  {
    id: 'crest-commercial-tower',
    name: 'Crest Commercial Tower',
    location: 'Cyber City, Gurgaon',
    locality: 'Cyber City',
    city: 'Gurgaon',
    developer: 'Apex Realty',
    type: 'Commercial',
    status: 'Ready to Move',
    priceFrom: '₹ 65 Lakhs',
    priceValue: 65,
    image: 'https://images.pexels.com/photos/10889988/pexels-photo-10889988.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    gallery: [
      'https://images.pexels.com/photos/10889988/pexels-photo-10889988.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/16370914/pexels-photo-16370914.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/267501/pexels-photo-267501.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/2040476/pexels-photo-2040476.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    description: 'Grade-A office spaces in the heart of Gurgaon\'s premier business district. Designed for modern enterprises with smart building systems and premium retail spaces.',
    investmentHighlights: [
      'Assured rental yield of 8% per annum',
      'Located in Gurgaon\'s top commercial zone',
      'LEED Gold certified building',
      'Anchor tenants include Fortune 500 companies',
    ],
    amenities: ['High-Speed Elevators', 'Central AC', 'Food Court', 'Parking', '24/7 Security', 'Conference Rooms', 'Retail Plaza', 'Metro Connectivity'],
    roi: 'High ROI',
    possession: 'Ready',
    units: 'Office & Retail',
    area: '500 - 5,000 sq.ft',
    rating: 4.7,
    reviews: 56,
  },
  {
    id: 'verdant-villas',
    name: 'Verdant Villas',
    location: 'Techzone, Greater Noida',
    locality: 'Techzone',
    city: 'Greater Noida',
    developer: 'Green Horizon',
    type: 'Villas',
    status: 'New Launch',
    priceFrom: '₹ 2.5 Crore',
    priceValue: 250,
    image: 'https://images.pexels.com/photos/7031594/pexels-photo-7031594.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    gallery: [
      'https://images.pexels.com/photos/7031594/pexels-photo-7031594.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/7031600/pexels-photo-7031600.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/7031598/pexels-photo-7031598.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/8134847/pexels-photo-8134847.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    description: 'Exclusive gated villa community with private gardens, smart home automation, and resort-style amenities. Limited edition luxury living in Greater Noida\'s fastest-growing zone.',
    investmentHighlights: [
      'Limited to 48 luxury villas',
      '20% projected appreciation in 2 years',
      'Adjacent to proposed IT hub',
      'Private pool & garden for each villa',
    ],
    amenities: ['Private Pool', 'Garden', 'Clubhouse', 'Smart Home', 'Gymnasium', '24/7 Security', 'Power Backup', 'Kids Play Area'],
    roi: 'High ROI',
    possession: 'Jun 2028',
    units: '4 BHK Villas',
    area: '3,200 - 4,500 sq.ft',
    rating: 4.9,
    reviews: 42,
  },
  {
    id: 'metro-square-mall',
    name: 'Metro Square Mall',
    location: 'Raj Nagar, Ghaziabad',
    locality: 'Raj Nagar',
    city: 'Ghaziabad',
    developer: 'Metro Builders',
    type: 'Commercial',
    status: 'Under Construction',
    priceFrom: '₹ 45 Lakhs',
    priceValue: 45,
    image: 'https://images.pexels.com/photos/19279351/pexels-photo-19279351.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    gallery: [
      'https://images.pexels.com/photos/19279351/pexels-photo-19279351.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/15202224/pexels-photo-15202224.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/11861957/pexels-photo-11861957.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/4534504/pexels-photo-4534504.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    description: 'A modern retail and entertainment destination in Ghaziabad\'s prime commercial district. Featuring retail shops, food court, multiplex, and anchor store spaces.',
    investmentHighlights: [
      '9% assured return for 3 years',
      'High footfall location on main highway',
      'Multiplex & food court included',
      'Buyback guarantee available',
    ],
    amenities: ['Multiplex', 'Food Court', 'Parking', 'Escalators', 'Central AC', '24/7 Security', 'Anchor Store', 'High-Speed Elevators'],
    roi: 'High ROI',
    possession: 'Dec 2026',
    units: 'Retail Shops',
    area: '200 - 2,000 sq.ft',
    rating: 4.6,
    reviews: 73,
  },
  {
    id: 'imperial-residences',
    name: 'Imperial Residences',
    location: 'Sector 56, Gurgaon',
    locality: 'Sector 56',
    city: 'Gurgaon',
    developer: 'Heritage Group',
    type: 'Apartments',
    status: 'Ready to Move',
    priceFrom: '₹ 1.8 Crore',
    priceValue: 180,
    image: 'https://images.pexels.com/photos/27307400/pexels-photo-27307400.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    gallery: [
      'https://images.pexels.com/photos/27307400/pexels-photo-27307400.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/20418771/pexels-photo-20418771.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/8135492/pexels-photo-8135492.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/7174113/pexels-photo-7174113.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    description: 'Ready-to-move-in luxury apartments in one of Gurgaon\'s most established neighborhoods. Premium finishes, spacious layouts, and excellent rental demand.',
    investmentHighlights: [
      'Immediate rental income potential',
      '6% rental yield in established area',
      'Metro station within 500m',
      'Premium schools & hospitals nearby',
    ],
    amenities: ['Swimming Pool', 'Clubhouse', 'Gymnasium', 'Landscaped Gardens', '24/7 Security', 'Power Backup', 'Tennis Court', 'Basketball Court'],
    roi: 'Stable',
    possession: 'Ready',
    units: '3 & 4 BHK',
    area: '1,600 - 2,800 sq.ft',
    rating: 4.8,
    reviews: 156,
  },
  {
    id: 'green-acre-plots',
    name: 'Green Acre Plots',
    location: 'Yamuna Expressway, Greater Noida',
    locality: 'Yamuna Expressway',
    city: 'Greater Noida',
    developer: 'Green Horizon',
    type: 'Plots',
    status: 'New Launch',
    priceFrom: '₹ 35 Lakhs',
    priceValue: 35,
    image: 'https://images.pexels.com/photos/4525178/pexels-photo-4525178.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    gallery: [
      'https://images.pexels.com/photos/4525178/pexels-photo-4525178.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/8469934/pexels-photo-8469934.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/7937765/pexels-photo-7937765.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/7937733/pexels-photo-7937733.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    description: 'Residential plots in a gated township along the Yamuna Expressway. Ideal for long-term investors and custom home builders with clear titles and approved layout.',
    investmentHighlights: [
      '25% projected appreciation in 3 years',
      'Adjacent to Jewar International Airport',
      'Gated community with internal roads',
      'Clear title & RERA approved',
    ],
    amenities: ['Gated Community', 'Internal Roads', 'Street Lighting', 'Water Supply', 'Parks', 'Commercial Zone', 'Temple', 'Jogging Track'],
    roi: 'High ROI',
    possession: 'Immediate',
    units: 'Residential Plots',
    area: '1,000 - 5,000 sq.yd',
    rating: 4.5,
    reviews: 38,
  },
  {
    id: 'the-pinnacle-tower',
    name: 'The Pinnacle Tower',
    location: 'Connaught Place, Delhi NCR',
    locality: 'Connaught Place',
    city: 'Delhi NCR',
    developer: 'Pinnacle Developers',
    type: 'Commercial',
    status: 'Under Construction',
    priceFrom: '₹ 1.5 Crore',
    priceValue: 150,
    image: 'https://images.pexels.com/photos/19263207/pexels-photo-19263207.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    gallery: [
      'https://images.pexels.com/photos/19263207/pexels-photo-19263207.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/38247895/pexels-photo-38247895.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/33362520/pexels-photo-33362520.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/11861957/pexels-photo-11861957.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    description: 'An iconic commercial landmark in the heart of Delhi NCR. Featuring premium office spaces, retail boulevard, and a luxury hotel floor with panoramic city views.',
    investmentHighlights: [
      'Prime CBD location with metro access',
      '10% assured rental return',
      'Grade-A building with LEED Platinum target',
      'Limited inventory - only 120 units',
    ],
    amenities: ['High-Speed Elevators', 'Central AC', 'Food Court', 'Parking', 'Luxury Hotel', 'Helipad', 'Conference Center', 'Retail Boulevard'],
    roi: 'High ROI',
    possession: 'Dec 2027',
    units: 'Office & Retail',
    area: '800 - 10,000 sq.ft',
    rating: 4.9,
    reviews: 64,
  },
  {
    id: 'serene-living',
    name: 'Serene Living',
    location: 'Gomti Nagar, Lucknow',
    locality: 'Gomti Nagar',
    city: 'Lucknow',
    developer: 'Metro Builders',
    type: 'Residential',
    status: 'Ready to Move',
    priceFrom: '₹ 55 Lakhs',
    priceValue: 55,
    image: 'https://images.pexels.com/photos/31114878/pexels-photo-31114878.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    gallery: [
      'https://images.pexels.com/photos/31114878/pexels-photo-31114878.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/29012619/pexels-photo-29012619.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/7174386/pexels-photo-7174386.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/7045703/pexels-photo-7045703.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    description: 'Premium 2 & 3 BHK apartments in Lucknow\'s most sought-after neighborhood. Ready-to-move-in homes with excellent connectivity and lifestyle amenities.',
    investmentHighlights: [
      'Immediate possession available',
      '5% rental yield in prime area',
      'Near Gomti Riverfront & IT park',
      'Premium finishes & modular kitchen',
    ],
    amenities: ['Swimming Pool', 'Clubhouse', 'Gymnasium', 'Landscaped Gardens', '24/7 Security', 'Power Backup', 'Kids Play Area', 'Community Hall'],
    roi: 'Stable',
    possession: 'Ready',
    units: '2 & 3 BHK',
    area: '950 - 1,600 sq.ft',
    rating: 4.7,
    reviews: 91,
  },
  {
    id: 'skyline-business-park',
    name: 'Skyline Business Park',
    location: 'Sector 62, Noida',
    locality: 'Sector 62',
    city: 'Noida',
    developer: 'Apex Realty',
    type: 'Commercial',
    status: 'Ready to Move',
    priceFrom: '₹ 75 Lakhs',
    priceValue: 75,
    image: 'https://images.pexels.com/photos/2040476/pexels-photo-2040476.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    gallery: [
      'https://images.pexels.com/photos/2040476/pexels-photo-2040476.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/16370914/pexels-photo-16370914.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/267501/pexels-photo-267501.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/10889988/pexels-photo-10889988.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    description: 'A ready-to-operate IT/ITES business park in Noida\'s established tech corridor. Featuring flexible office spaces, IT infrastructure, and excellent metro connectivity.',
    investmentHighlights: [
      '7% rental yield with MNC tenants',
      'Metro-connected location',
      'IT/ITES SEZ benefits available',
      'Ready for immediate occupancy',
    ],
    amenities: ['High-Speed Elevators', 'Central AC', 'Food Court', 'Parking', '24/7 Security', 'Fiber Optic', 'Conference Rooms', 'Gymnasium'],
    roi: 'Medium ROI',
    possession: 'Ready',
    units: 'Office Spaces',
    area: '600 - 8,000 sq.ft',
    rating: 4.6,
    reviews: 48,
  },
];

export const propertyFilters = [
  'All',
  'Residential',
  'Commercial',
  'Plots',
  'Apartments',
  'Villas',
  'New Launch',
  'Ready to Move',
  'High ROI',
];

export function filterProperties(filter: string): Property[] {
  if (filter === 'All') return properties;
  if (filter === 'High ROI') return properties.filter((p) => p.roi === 'High ROI');
  if (filter === 'New Launch' || filter === 'Ready to Move') return properties.filter((p) => p.status === filter);
  return properties.filter((p) => p.type === filter);
}

export function searchProperties(params: {
  location?: string;
  type?: string;
  budget?: string;
  purpose?: string;
}): Property[] {
  return properties.filter((p) => {
    if (params.location && params.location !== 'All Locations') {
      const loc = params.location.toLowerCase();
      if (!p.city.toLowerCase().includes(loc) && !p.locality.toLowerCase().includes(loc) && !p.location.toLowerCase().includes(loc)) {
        return false;
      }
    }
    if (params.type && params.type !== 'All Types') {
      if (p.type !== params.type && p.status !== params.type) return false;
    }
    if (params.budget && params.budget !== 'Any Budget') {
      const budgetMap: Record<string, number> = {
        'Under ₹50L': 50,
        '₹50L - ₹1Cr': 100,
        '₹1Cr - ₹2Cr': 200,
        'Above ₹2Cr': 201,
      };
      const max = budgetMap[params.budget];
      if (max === 50 && p.priceValue > 50) return false;
      if (max === 100 && (p.priceValue <= 50 || p.priceValue > 100)) return false;
      if (max === 200 && (p.priceValue <= 100 || p.priceValue > 200)) return false;
      if (max === 201 && p.priceValue <= 200) return false;
    }
    return true;
  });
}
