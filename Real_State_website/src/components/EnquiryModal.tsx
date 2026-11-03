import { useState, useEffect } from 'react';
import { X, CheckCircle2, User, Phone, Mail, MapPin, Home, DollarSign, Send } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { popularLocations } from '@/data/site';

const propertyTypes = ['Residential', 'Commercial', 'Plots', 'Apartments', 'Villas'];
const budgets = ['Under ₹50L', '₹50L - ₹1Cr', '₹1Cr - ₹2Cr', 'Above ₹2Cr'];

export default function EnquiryModal() {
  const { enquiryOpen, setEnquiryOpen, enquiryProject } = useApp();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    propertyType: '',
    budget: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (enquiryOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setTimeout(() => setSubmitted(false), 300);
    }
    return () => { document.body.style.overflow = ''; };
  }, [enquiryOpen]);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.phone.trim()) e.phone = 'Phone is required';
    else if (!/^\+?[\d\s-]{10,}$/.test(form.phone)) e.phone = 'Enter a valid phone number';
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    setForm({ name: '', phone: '', email: '', location: '', propertyType: '', budget: '', message: '' });
  };

  if (!enquiryOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-navy-900/70 backdrop-blur-sm animate-fade-in"
        onClick={() => setEnquiryOpen(false)}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto animate-fade-in-up">
        {/* Header */}
        <div className="sticky top-0 bg-navy-800 px-6 py-5 flex items-center justify-between z-10">
          <div>
            <h3 className="font-display text-xl font-bold text-white">Get Expert Assistance</h3>
            {enquiryProject && (
              <p className="text-gold-300 text-sm mt-0.5">Regarding: {enquiryProject}</p>
            )}
          </div>
          <button
            onClick={() => setEnquiryOpen(false)}
            className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-10 text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-9 h-9 text-green-600" />
            </div>
            <h3 className="font-display text-2xl font-bold text-navy-800 mb-2">Thank You!</h3>
            <p className="text-navy-500 mb-6">
              Your enquiry has been received. Our property expert will contact you within 24 hours.
            </p>
            <button
              onClick={() => setEnquiryOpen(false)}
              className="px-6 py-3 rounded-lg bg-gold-500 text-white font-semibold hover:bg-gold-600 transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {/* Name */}
            <div>
              <label className="flex items-center gap-1.5 text-sm font-medium text-navy-700 mb-1.5">
                <User className="w-4 h-4 text-gold-500" />
                Name *
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Enter your name"
                className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 transition-all ${
                  errors.name
                    ? 'border-red-400 focus:ring-red-100'
                    : 'border-navy-200 focus:border-gold-400 focus:ring-gold-100'
                }`}
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            {/* Phone & Email */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="flex items-center gap-1.5 text-sm font-medium text-navy-700 mb-1.5">
                  <Phone className="w-4 h-4 text-gold-500" />
                  Phone *
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 transition-all ${
                    errors.phone
                      ? 'border-red-400 focus:ring-red-100'
                      : 'border-navy-200 focus:border-gold-400 focus:ring-gold-100'
                  }`}
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>
              <div>
                <label className="flex items-center gap-1.5 text-sm font-medium text-navy-700 mb-1.5">
                  <Mail className="w-4 h-4 text-gold-500" />
                  Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@email.com"
                  className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 transition-all ${
                    errors.email
                      ? 'border-red-400 focus:ring-red-100'
                      : 'border-navy-200 focus:border-gold-400 focus:ring-gold-100'
                  }`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
            </div>

            {/* Location & Property Type */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="flex items-center gap-1.5 text-sm font-medium text-navy-700 mb-1.5">
                  <MapPin className="w-4 h-4 text-gold-500" />
                  Preferred Location
                </label>
                <select
                  value={form.location}
                  onChange={(e) => setForm({ ...form, location: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-navy-200 text-sm focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-100 bg-white"
                >
                  <option value="">Select Location</option>
                  {popularLocations.map((loc) => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="flex items-center gap-1.5 text-sm font-medium text-navy-700 mb-1.5">
                  <Home className="w-4 h-4 text-gold-500" />
                  Property Type
                </label>
                <select
                  value={form.propertyType}
                  onChange={(e) => setForm({ ...form, propertyType: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-navy-200 text-sm focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-100 bg-white"
                >
                  <option value="">Select Type</option>
                  {propertyTypes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Budget */}
            <div>
              <label className="flex items-center gap-1.5 text-sm font-medium text-navy-700 mb-1.5">
                <DollarSign className="w-4 h-4 text-gold-500" />
                Budget
              </label>
              <div className="flex flex-wrap gap-2">
                {budgets.map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => setForm({ ...form, budget: b })}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      form.budget === b
                        ? 'bg-navy-800 text-white'
                        : 'bg-navy-50 text-navy-600 border border-navy-200 hover:border-gold-300'
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="text-sm font-medium text-navy-700 mb-1.5 block">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us about your investment goals..."
                rows={3}
                className="w-full px-4 py-2.5 rounded-lg border border-navy-200 text-sm focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-100 resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-gold-500 text-white font-semibold hover:bg-gold-600 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <Send className="w-4 h-4" />
              Get Expert Assistance
            </button>
            <p className="text-center text-xs text-navy-400">
              By submitting, you agree to our Privacy Policy and Terms & Conditions.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
