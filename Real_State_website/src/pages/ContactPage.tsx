import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock, Send, CheckCircle2, Building2 } from 'lucide-react';
import { contactInfo, popularLocations } from '@/data/site';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const propertyTypes = ['Residential', 'Commercial', 'Plots', 'Apartments', 'Villas'];
const budgets = ['Under ₹50L', '₹50L - ₹1Cr', '₹1Cr - ₹2Cr', 'Above ₹2Cr'];

export default function ContactPage() {
  const sectionRef = useScrollReveal<HTMLDivElement>();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '', phone: '', email: '', location: '', propertyType: '', budget: '', message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

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

  return (
    <div className="pt-24 pb-20 bg-navy-50 min-h-screen" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-100 border border-gold-200 mb-4">
            <Phone className="w-4 h-4 text-gold-700" />
            <span className="text-gold-800 text-sm font-medium">Get in Touch</span>
          </div>
          <h1 className="reveal reveal-delay-1 font-display text-4xl sm:text-5xl font-bold text-navy-800 mb-4">
            Contact Us
          </h1>
          <p className="reveal reveal-delay-2 text-navy-500 text-lg">
            Have a question about a project or investment opportunity? Our experts are ready to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="reveal space-y-4">
            {[
              { icon: Phone, title: 'Call Us', value: contactInfo.phone, href: `tel:${contactInfo.phone}` },
              { icon: Mail, title: 'Email Us', value: contactInfo.email, href: `mailto:${contactInfo.email}` },
              { icon: MapPin, title: 'Visit Us', value: contactInfo.address },
              { icon: MessageCircle, title: 'WhatsApp', value: 'Chat with us', href: `https://wa.me/${contactInfo.whatsapp}` },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 border border-navy-100 hover-lift transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-navy-800 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-gold-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-800 mb-1">{item.title}</h3>
                    {item.href ? (
                      <a href={item.href} className="text-navy-500 text-sm hover:text-gold-600 transition-colors">{item.value}</a>
                    ) : (
                      <p className="text-navy-500 text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Office hours */}
            <div className="bg-navy-800 rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-5 h-5 text-gold-400" />
                <h3 className="font-display font-bold text-lg">Office Hours</h3>
              </div>
              <div className="space-y-1.5 text-sm text-white/70">
                <div className="flex justify-between"><span>Monday - Friday</span><span className="text-white">9:00 AM - 7:00 PM</span></div>
                <div className="flex justify-between"><span>Saturday</span><span className="text-white">10:00 AM - 5:00 PM</span></div>
                <div className="flex justify-between"><span>Sunday</span><span className="text-gold-300">By Appointment</span></div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl p-6 border border-navy-100">
              <h3 className="font-display font-bold text-lg text-navy-800 mb-3 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-gold-500" /> Our Location
              </h3>
              <div className="h-48 rounded-xl bg-navy-50 flex items-center justify-center border border-navy-100">
                <div className="text-center">
                  <Building2 className="w-10 h-10 text-navy-300 mx-auto mb-2" />
                  <p className="text-sm text-navy-500">{contactInfo.address}</p>
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-gold-600 text-sm font-medium hover:text-gold-700 mt-1 inline-block">
                    View on Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="reveal reveal-delay-1 bg-white rounded-2xl shadow-lg p-8 border border-navy-100">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-9 h-9 text-green-600" />
                </div>
                <h3 className="font-display text-2xl font-bold text-navy-800 mb-2">Thank You!</h3>
                <p className="text-navy-500 mb-6">
                  Your message has been received. Our property expert will contact you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 rounded-lg bg-gold-500 text-white font-semibold hover:bg-gold-600 transition-colors"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="font-display text-2xl font-bold text-navy-800 mb-2">Get Expert Assistance</h2>
                <p className="text-navy-500 text-sm mb-4">Fill out the form below and our team will get back to you shortly.</p>

                <div>
                  <label className="text-sm font-medium text-navy-700 mb-1.5 block">Name *</label>
                  <input
                    type="text" value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Enter your name"
                    className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 transition-all ${
                      errors.name ? 'border-red-400 focus:ring-red-100' : 'border-navy-200 focus:border-gold-400 focus:ring-gold-100'
                    }`}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-navy-700 mb-1.5 block">Phone *</label>
                    <input
                      type="tel" value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 transition-all ${
                        errors.phone ? 'border-red-400 focus:ring-red-100' : 'border-navy-200 focus:border-gold-400 focus:ring-gold-100'
                      }`}
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <label className="text-sm font-medium text-navy-700 mb-1.5 block">Email</label>
                    <input
                      type="email" value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@email.com"
                      className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 transition-all ${
                        errors.email ? 'border-red-400 focus:ring-red-100' : 'border-navy-200 focus:border-gold-400 focus:ring-gold-100'
                      }`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-navy-700 mb-1.5 block">Preferred Location</label>
                    <select
                      value={form.location}
                      onChange={(e) => setForm({ ...form, location: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-navy-200 text-sm focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-100 bg-white"
                    >
                      <option value="">Select Location</option>
                      {popularLocations.map((loc) => <option key={loc} value={loc}>{loc}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-navy-700 mb-1.5 block">Property Type</label>
                    <select
                      value={form.propertyType}
                      onChange={(e) => setForm({ ...form, propertyType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-navy-200 text-sm focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-100 bg-white"
                    >
                      <option value="">Select Type</option>
                      {propertyTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-navy-700 mb-1.5 block">Budget</label>
                  <div className="flex flex-wrap gap-2">
                    {budgets.map((b) => (
                      <button
                        key={b} type="button"
                        onClick={() => setForm({ ...form, budget: b })}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                          form.budget === b ? 'bg-navy-800 text-white' : 'bg-navy-50 text-navy-600 border border-navy-200 hover:border-gold-300'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

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

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-gold-500 text-white font-semibold hover:bg-gold-600 transition-all shadow-md hover:shadow-lg"
                >
                  <Send className="w-4 h-4" /> Get Expert Assistance
                </button>
                <p className="text-center text-xs text-navy-400">
                  By submitting, you agree to our Privacy Policy and Terms & Conditions.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
