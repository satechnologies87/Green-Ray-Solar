import React, { useState } from 'react';
import { Sun, Phone, Mail, MapPin, CheckCircle2, ArrowRight, Clock, ShieldCheck, Send } from 'lucide-react';
import ImageSlot from '../components/ImageSlot';
import { COMPANY_INFO, IMAGE_SLOTS } from '../config/images';

export default function ContactPage({ onOpenAuditModal }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    location: '',
    propertyType: 'Residential Home',
    electricityBill: '₹3,000 - ₹6,000',
    service: 'On-Grid Rooftop Solar',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
  };

  return (
    <div className="flex flex-col min-h-screen bg-cream-100 pt-24 pb-20">
      
      {/* Header Banner */}
      <section className="bg-forest-950 text-cream-50 py-16 lg:py-20 border-b border-forest-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-900 border border-gold-500/30 text-gold-400 text-xs font-extrabold uppercase tracking-widest">
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span>Get In Touch</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-cream-50 leading-tight">
              Let's talk about your solar transition.
            </h1>
            <p className="text-base sm:text-lg text-cream-200/80 leading-relaxed">
              Reach out to Green Ray Solar Solutions for transparent advice, accurate capacity estimates, and free site audits across Kerala.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Form & Contact Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contacts & Real Installation Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Real Green Ray Installation Visual */}
            <div className="relative rounded-3xl overflow-hidden aspect-[16/10] bg-forest-950 shadow-md">
              <ImageSlot
                src={IMAGE_SLOTS.hero.src}
                alt={IMAGE_SLOTS.hero.alt}
                aspectRatio="aspect-[16/10]"
                className="w-full h-full"
                imageClassName="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/20 to-transparent flex flex-col justify-end p-5 text-cream-50">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-gold-400">
                  Headquarters & Central Kerala Hub
                </span>
                <h4 className="text-lg font-bold font-display">
                  Ettumanoor, Kottayam, Kerala
                </h4>
              </div>
            </div>

            {/* Contact Details Card */}
            <div className="bg-cream-50 rounded-3xl p-6 sm:p-8 border border-forest-900/10 space-y-6 shadow-sm">
              <h3 className="text-xl font-bold text-forest-950 font-display">
                Direct Contact Channels
              </h3>

              <div className="space-y-4 text-sm">
                <a
                  href={'tel:' + COMPANY_INFO.phones[0]}
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-cream-100 border border-forest-900/5 text-forest-950 font-bold hover:border-gold-500/50 transition-colors no-underline"
                >
                  <div className="w-10 h-10 rounded-xl bg-forest-900 text-gold-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-charcoal-600 block">Primary Helpline</span>
                    <span>{COMPANY_INFO.phones[0]}</span>
                  </div>
                </a>

                <a
                  href={'tel:' + COMPANY_INFO.phones[1]}
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-cream-100 border border-forest-900/5 text-forest-950 font-bold hover:border-gold-500/50 transition-colors no-underline"
                >
                  <div className="w-10 h-10 rounded-xl bg-forest-900 text-gold-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-charcoal-600 block">Technical Support</span>
                    <span>{COMPANY_INFO.phones[1]}</span>
                  </div>
                </a>

                <a
                  href={'mailto:' + COMPANY_INFO.email}
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-cream-100 border border-forest-900/5 text-forest-950 font-bold hover:border-gold-500/50 transition-colors no-underline"
                >
                  <div className="w-10 h-10 rounded-xl bg-forest-900 text-gold-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-charcoal-600 block">Email Inquiries</span>
                    <span className="text-xs break-all">{COMPANY_INFO.email}</span>
                  </div>
                </a>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-cream-100 border border-forest-900/5 text-forest-950">
                  <div className="w-10 h-10 rounded-xl bg-forest-900 text-gold-400 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-charcoal-600 block font-bold">Office Address</span>
                    <span className="text-xs text-charcoal-800 leading-relaxed font-medium">{COMPANY_INFO.address}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7 bg-cream-50 rounded-3xl p-6 sm:p-10 border border-forest-900/10 shadow-sm">
            {isSuccess ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-forest-900 text-gold-400 flex items-center justify-center mx-auto mb-4 border border-gold-400/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-forest-950 font-display">
                  Thank you for reaching out!
                </h3>
                <p className="text-sm text-charcoal-700 mt-2 max-w-md mx-auto leading-relaxed">
                  We have received your message, <strong className="text-forest-950">{formData.fullName}</strong>. A Green Ray solar engineer will connect with you via <strong className="text-forest-950">{formData.phone}</strong> shortly.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="btn-forest text-xs font-bold mt-6"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="text-2xl font-extrabold text-forest-950 font-display">
                    Request a Free Energy Audit or Quotation
                  </h3>
                  <p className="text-xs text-charcoal-600 mt-1">
                    Fill in your details below and our team will get back to you promptly.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-forest-950 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="e.g. Suresh Kumar"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full p-3 rounded-xl border border-forest-900/15 bg-white text-forest-950 text-sm focus:outline-none focus:border-forest-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-forest-950 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. 9495353533"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-3 rounded-xl border border-forest-900/15 bg-white text-forest-950 text-sm focus:outline-none focus:border-forest-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-forest-950 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="e.g. suresh@gmail.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 rounded-xl border border-forest-900/15 bg-white text-forest-950 text-sm focus:outline-none focus:border-forest-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-forest-950 mb-1">
                      Location / District in Kerala *
                    </label>
                    <input
                      type="text"
                      name="location"
                      required
                      placeholder="e.g. Ettumanoor, Kottayam"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full p-3 rounded-xl border border-forest-900/15 bg-white text-forest-950 text-sm focus:outline-none focus:border-forest-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-forest-950 mb-1">
                      Property Type
                    </label>
                    <select
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleChange}
                      className="w-full p-3 rounded-xl border border-forest-900/15 bg-white text-forest-950 text-sm font-medium focus:outline-none focus:border-forest-900"
                    >
                      <option>Residential Home</option>
                      <option>Commercial Building</option>
                      <option>Shop / Showroom</option>
                      <option>Institution / Hospital</option>
                      <option>Factory / Warehouse</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-forest-950 mb-1">
                      Bi-Monthly Bill
                    </label>
                    <select
                      name="electricityBill"
                      value={formData.electricityBill}
                      onChange={handleChange}
                      className="w-full p-3 rounded-xl border border-forest-900/15 bg-white text-forest-950 text-sm font-medium focus:outline-none focus:border-forest-900"
                    >
                      <option>Under ₹3,000</option>
                      <option>₹3,000 - ₹6,000</option>
                      <option>₹6,000 - ₹12,000</option>
                      <option>₹12,000 - ₹25,000</option>
                      <option>Above ₹25,000</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-forest-950 mb-1">
                      Service of Interest
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full p-3 rounded-xl border border-forest-900/15 bg-white text-forest-950 text-sm font-medium focus:outline-none focus:border-forest-900"
                    >
                      <option>On-Grid Rooftop Solar</option>
                      <option>Off-Grid Solar System</option>
                      <option>Hybrid Solar System</option>
                      <option>Free Energy Audit</option>
                      <option>Lifetime AMC / Maintenance</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-forest-950 mb-1">
                    Message / Rooftop Particulars (Optional)
                  </label>
                  <textarea
                    name="message"
                    rows="3"
                    placeholder="Provide any details such as roof type (concrete slab, sloped tiles, metal sheet) or existing 1-phase / 3-phase connection..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 rounded-xl border border-forest-900/15 bg-white text-forest-950 text-sm focus:outline-none focus:border-forest-900 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !formData.fullName || !formData.phone}
                  className="btn-primary w-full py-4 text-base font-bold justify-center disabled:opacity-50"
                >
                  <Send className="w-4 h-4 mr-2" />
                  <span>{isSubmitting ? 'Submitting Request...' : 'Request a Free Energy Audit →'}</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>

    </div>
  );
}
