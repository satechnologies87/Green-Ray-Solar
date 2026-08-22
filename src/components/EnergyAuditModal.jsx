import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, Sun, Phone, Zap, Calendar, MapPin, Building, Home, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../config/images';

export default function EnergyAuditModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    propertyType: 'Residential',
    monthlyBill: '3500',
    district: 'Kottayam',
    fullName: '',
    phone: '',
    email: '',
    preferredDate: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const keralaDistricts = [
    'Kottayam', 'Ernakulam', 'Thiruvananthapuram', 'Thrissur', 'Kozhikode',
    'Alappuzha', 'Kollam', 'Pathanamthitta', 'Idukki', 'Palakkad',
    'Malappuram', 'Wayanad', 'Kannur', 'Kasaragod'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const calculateEstimate = () => {
    const bill = parseInt(formData.monthlyBill, 10) || 3000;
    const recommendedKW = Math.max(2, Math.round((bill / 1200) * 10) / 10);
    const estimatedSavings = Math.round(bill * 0.85);
    return { recommendedKW, estimatedSavings };
  };

  const { recommendedKW, estimatedSavings } = calculateEstimate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
  };

  const handleReset = () => {
    setStep(1);
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-forest-950/90 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="absolute inset-0" onClick={handleReset} />

      <div 
        className="relative z-10 max-w-2xl w-full bg-cream-50 rounded-3xl shadow-2xl border border-forest-900/20 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-forest-950 p-6 sm:p-8 text-cream-50 relative border-b border-forest-800">
          <button
            onClick={handleReset}
            className="absolute top-5 right-5 p-2 rounded-full bg-forest-900 text-cream-200 hover:text-cream-50 hover:bg-gold-500 hover:text-forest-950 transition-colors border border-cream-100/10 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-gold-500"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
              No-Obligation Consultation
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight text-cream-50">
            Book Your Free Energy Audit
          </h3>
          <p className="text-xs sm:text-sm text-cream-200/80 mt-1.5 max-w-lg">
            Our solar engineers will analyze your electricity bills and rooftop space to design the perfect high-efficiency system.
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          {isSuccess ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-forest-900 text-gold-400 flex items-center justify-center mx-auto mb-4 border border-gold-400/30">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-forest-950 font-display">
                Energy Audit Requested!
              </h4>
              <p className="text-sm text-charcoal-700 mt-2 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-bold text-forest-950">{formData.fullName || 'Customer'}</span>! A Green Ray solar engineer will call you at <span className="font-bold text-forest-950">{formData.phone}</span> shortly to coordinate your site assessment in {formData.district}.
              </p>

              <div className="my-6 p-4 rounded-2xl bg-forest-900/5 border border-forest-900/10 max-w-sm mx-auto text-left text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-charcoal-600">Recommended Capacity:</span>
                  <span className="font-bold text-forest-950">~{recommendedKW} kW System</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-600">Estimated Monthly Savings:</span>
                  <span className="font-bold text-forest-900">₹{estimatedSavings.toLocaleString()}/mo</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-600">Assistance:</span>
                  <span className="font-bold text-forest-950">End-to-End KSEB Support</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`tel:${COMPANY_INFO.phones[0]}`}
                  className="btn-primary w-full sm:w-auto text-sm font-bold flex items-center justify-center gap-2 no-underline"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Us Directly: {COMPANY_INFO.phones[0]}</span>
                </a>
                <button
                  onClick={handleReset}
                  className="btn-forest w-full sm:w-auto text-sm font-bold"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step 1: System Sizing */}
              {step === 1 && (
                <div className="space-y-5 animate-fadeIn">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-forest-950 mb-2">
                      1. Property Type
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {['Residential', 'Commercial'].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData((p) => ({ ...p, propertyType: type }))}
                          className={`p-3.5 rounded-xl border flex items-center justify-center gap-2 text-sm font-bold transition-all cursor-pointer ${
                            formData.propertyType === type
                              ? 'bg-forest-900 text-cream-50 border-forest-900 shadow-sm'
                              : 'bg-cream-100/60 text-charcoal-800 border-forest-900/10 hover:border-forest-900/30'
                          }`}
                        >
                          {type === 'Residential' ? <Home className="w-4 h-4" /> : <Building className="w-4 h-4" />}
                          <span>{type}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-forest-950">
                        2. Approximate Monthly Electricity Bill
                      </label>
                      <span className="text-sm font-bold text-forest-900 bg-forest-900/10 px-2.5 py-0.5 rounded-md">
                        ₹{parseInt(formData.monthlyBill, 10).toLocaleString()}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="1000"
                      max="30000"
                      step="500"
                      name="monthlyBill"
                      value={formData.monthlyBill}
                      onChange={handleInputChange}
                      className="w-full accent-forest-900 cursor-pointer h-2 bg-cream-300 rounded-lg"
                    />
                    <div className="flex justify-between text-[11px] text-charcoal-600 mt-1">
                      <span>₹1,000</span>
                      <span>₹15,000</span>
                      <span>₹30,000+</span>
                    </div>
                  </div>

                  {/* Dynamic estimate strip */}
                  <div className="p-4 rounded-2xl bg-forest-900/5 border border-forest-900/15 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-forest-800 block">
                        Estimated System Size
                      </span>
                      <span className="text-lg font-bold text-forest-950">
                        ~{recommendedKW} kW
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-forest-800 block">
                        Estimated Monthly Savings
                      </span>
                      <span className="text-lg font-bold text-forest-900">
                        ₹{estimatedSavings.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-forest-950 mb-2">
                      3. District in Kerala
                    </label>
                    <select
                      name="district"
                      value={formData.district}
                      onChange={handleInputChange}
                      className="w-full p-3 rounded-xl border border-forest-900/15 bg-white text-forest-950 text-sm font-medium focus:outline-none focus:border-forest-900"
                    >
                      {keralaDistricts.map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="btn-primary w-full py-3.5 font-bold justify-center"
                  >
                    <span>Next: Provide Contact Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* Step 2: Contact Info */}
              {step === 2 && (
                <div className="space-y-4 animate-fadeIn">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-forest-950 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="e.g. Rahul Nair"
                      value={formData.fullName}
                      onChange={handleInputChange}
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
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-3 rounded-xl border border-forest-900/15 bg-white text-forest-950 text-sm focus:outline-none focus:border-forest-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-forest-950 mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="e.g. rahul@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-3 rounded-xl border border-forest-900/15 bg-white text-forest-950 text-sm focus:outline-none focus:border-forest-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-forest-950 mb-1">
                      Additional Notes or Rooftop Details (Optional)
                    </label>
                    <textarea
                      name="message"
                      rows="2"
                      placeholder="e.g. Sloped tiled roof, 3-phase connection..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full p-3 rounded-xl border border-forest-900/15 bg-white text-forest-950 text-sm focus:outline-none focus:border-forest-900 resize-none"
                    ></textarea>
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-4 py-3 rounded-full text-xs font-bold text-forest-900 hover:bg-forest-900/10 transition-colors bg-transparent border border-forest-900/20 cursor-pointer"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting || !formData.fullName || !formData.phone}
                      className="btn-primary flex-grow py-3.5 font-bold justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Confirming...' : 'Submit Energy Audit Request →'}
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
