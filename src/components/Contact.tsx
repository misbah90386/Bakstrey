import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Send, CheckCircle, Sparkles, Instagram, Facebook, Youtube, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [isSent, setIsSent] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please provide a valid email';
    }
    if (!formData.message.trim()) errs.message = 'Please write a message';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Simulate sending email
    setIsSent(true);
    setTimeout(() => {
      // Clear form
      setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
    }, 500);
  };

  return (
    <section id="contact" className="py-24 bg-cream-100/50 relative overflow-hidden">
      {/* Visual background lights */}
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-pastelp-200/10 filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Contact info & Custom Google Maps */}
          <div className="lg:col-span-5 space-y-10" id="contact-details-container">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-8 h-px bg-gold-500" />
                <span className="text-xs font-bold uppercase tracking-widest text-gold-600 font-sans">Reach Out</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-choco-900 tracking-tight mb-4">
                We'd Love to Hear From You
              </h2>
              <p className="text-sm text-choco-700 leading-relaxed max-w-sm">
                Have a specialized request for custom multi-tier wedding cakes, corporate catering, or dietary adjustments? Our concierge is ready to assist.
              </p>
            </div>

            {/* Quick Contacts */}
            <div className="space-y-6" id="quick-contacts-list">
              {/* Phone */}
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-gold-600 border border-cream-200 flex-shrink-0">
                  <Phone className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-choco-500 tracking-wider block">Call Concierge</span>
                  <a href="tel:+13105550182" className="text-base font-bold text-choco-900 hover:text-gold-600 transition-colors">
                    +1 (310) 555-0182
                  </a>
                </div>
              </div>

              {/* WhatsApp click-to-chat */}
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 shadow-sm flex items-center justify-center border border-emerald-100 flex-shrink-0">
                  <MessageCircle className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-emerald-700 tracking-wider block">Chat on WhatsApp</span>
                  <a
                    href="https://wa.me/13105550182?text=Hello%20Bakstrey!%20I%20would%20like%20to%20order%20a%20custom%20cake."
                    target="_blank"
                    rel="noreferrer"
                    className="text-base font-bold text-choco-900 hover:text-emerald-600 transition-colors flex items-center gap-1.5"
                  >
                    Send Instant Message
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 animate-pulse">Online</span>
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-gold-600 border border-cream-200 flex-shrink-0">
                  <Mail className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-choco-500 tracking-wider block">Email Atelier</span>
                  <a href="mailto:orders@bakstrey.com" className="text-base font-bold text-choco-900 hover:text-gold-600 transition-colors">
                    orders@bakstrey.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-gold-600 border border-cream-200 flex-shrink-0">
                  <MapPin className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-choco-500 tracking-wider block">Visit Boutique</span>
                  <p className="text-sm font-semibold text-choco-900">
                    1048 Patisserie Way, Beverly Hills, CA 90210
                  </p>
                </div>
              </div>
            </div>

            {/* Premium Interactive Mock Google Map */}
            <div className="rounded-3xl overflow-hidden border border-cream-200 shadow-sm bg-white p-4" id="maps-integration">
              <div className="flex items-center justify-between mb-3 text-xs">
                <span className="font-bold text-choco-900">Boutique Location</span>
                <span className="text-gold-700 font-semibold">Beverly Hills, CA</span>
              </div>
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-cream-50 flex flex-col justify-between p-4 border border-cream-100">
                {/* Visual Map Representation */}
                <div className="absolute inset-0 opacity-40 pointer-events-none bg-radial-gradient from-cream-100 to-cream-50" />
                <div className="absolute top-1/4 left-1/3 w-32 h-0.5 bg-gold-300 transform rotate-12 pointer-events-none" />
                <div className="absolute top-1/3 left-1/4 w-0.5 h-24 bg-gold-300 transform -rotate-45 pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-gold-600 text-white flex items-center justify-center shadow-md animate-bounce border-2 border-white">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-black text-choco-900 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded shadow mt-1">Bakstrey</span>
                </div>

                <div className="mt-auto relative z-10 w-full flex items-center justify-between bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-sm border border-cream-100">
                  <div className="text-left">
                    <p className="text-[9px] font-bold text-choco-500 uppercase">Interactive Map</p>
                    <p className="text-xs font-bold text-choco-900 leading-none mt-0.5">1048 Patisserie Way</p>
                  </div>
                  <a
                    href="https://maps.google.com/?q=1048+Patisserie+Way+Beverly+Hills+CA"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-choco-900 hover:bg-gold-600 text-[10px] font-bold text-white uppercase tracking-wider transition-colors"
                  >
                    Open Map
                  </a>
                </div>
              </div>
            </div>

            {/* Social media connections */}
            <div className="pt-2">
              <span className="text-[10px] uppercase font-bold text-choco-500 tracking-wider block mb-3">Follow our sweet creations</span>
              <div className="flex gap-3">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white hover:bg-gold-500 hover:text-white text-choco-700 shadow-sm flex items-center justify-center border border-cream-200 transition-all">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white hover:bg-gold-500 hover:text-white text-choco-700 shadow-sm flex items-center justify-center border border-cream-200 transition-all">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white hover:bg-gold-500 hover:text-white text-choco-700 shadow-sm flex items-center justify-center border border-cream-200 transition-all">
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 shadow-sm border border-cream-200" id="contact-form-frame">
            <AnimatePresence mode="wait">
              {!isSent ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <span className="text-[10px] uppercase text-gold-700 font-bold tracking-widest block mb-2">Write us a message</span>
                    <h3 className="font-display font-extrabold text-choco-900 text-xl">Submit Digital Inquiry</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-choco-800 mb-1.5">Your Name</label>
                      <input
                        id="contact-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Elena Rostova"
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-choco-900 ${errors.name ? 'border-rose-400' : 'border-cream-200'}`}
                      />
                      {errors.name && <p className="text-[10px] text-rose-500 mt-1">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-choco-800 mb-1.5">Email Address</label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="elena@example.com"
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-choco-900 ${errors.email ? 'border-rose-400' : 'border-cream-200'}`}
                      />
                      {errors.email && <p className="text-[10px] text-rose-500 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Subject selector */}
                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-semibold text-choco-800 mb-1.5">Inquiry Subject</label>
                    <select
                      id="contact-subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-cream-200 bg-white text-sm text-choco-900 focus:outline-none focus:border-gold-400"
                    >
                      <option>General Inquiry</option>
                      <option>Wedding Cake Consultation</option>
                      <option>Special Event / Corporate Order</option>
                      <option>Allergen & Recipe Request</option>
                      <option>Delivery Logistics Query</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-choco-800 mb-1.5">Message / Requirements</label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please tell us about your upcoming celebration: estimated guests, preferred flavor themes, and event timing..."
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-choco-900 focus:outline-none focus:border-gold-400 ${errors.message ? 'border-rose-400' : 'border-cream-200'}`}
                    />
                    {errors.message && <p className="text-[10px] text-rose-500 mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full text-xs font-bold uppercase tracking-wider bg-choco-900 text-white hover:bg-gold-600 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                /* Success screen */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center flex flex-col items-center justify-center h-full"
                  id="contact-success"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8 stroke-[1.5]" />
                  </div>
                  <h3 className="font-display font-extrabold text-choco-900 text-xl mb-3">Inquiry Sent Successfully!</h3>
                  <p className="text-sm text-choco-700 max-w-sm leading-relaxed mb-8">
                    Your message regarding <span className="font-semibold text-choco-900">{formData.subject}</span> has been received. Our hospitality concierge will respond via email within 12 business hours.
                  </p>
                  <button
                    onClick={() => setIsSent(false)}
                    className="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider border border-cream-300 text-choco-800 hover:bg-cream-100 transition-all cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
