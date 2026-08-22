import React, { useState } from 'react';
import { Calculator, Zap, TrendingDown, Leaf, ShieldCheck, ArrowRight } from 'lucide-react';

export default function SolarCalculator({ onOpenAuditModal }) {
  const [bimonthlyBill, setBimonthlyBill] = useState(6000);
  const [consumerType, setConsumerType] = useState('residential');

  // Calculation parameters calibrated for Kerala KSEB tariff slabs
  const monthlyBill = bimonthlyBill / 2;
  const estimatedUnitsPerMonth = Math.round(monthlyBill / 7.5);
  const recommendedKW = Math.max(2, Math.round((estimatedUnitsPerMonth / 120) * 10) / 10);
  const estimatedMonthlySavings = Math.round(monthlyBill * 0.88);
  const estimated25YearSavings = Math.round(estimatedMonthlySavings * 12 * 25);
  const co2OffsetTons = Math.round(recommendedKW * 1.3 * 10) / 10;

  return (
    <div className="bg-cream-50 rounded-3xl p-6 sm:p-10 border border-forest-900/10 shadow-lg">
      <div className="max-w-3xl mx-auto text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900/10 text-forest-900 text-xs font-bold uppercase tracking-wider mb-3">
          <Calculator className="w-3.5 h-3.5 text-gold-500" />
          <span>Interactive Kerala Solar Sizing Tool</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-forest-950 font-display tracking-tight">
          Calculate Your Solar Savings
        </h3>
        <p className="text-xs sm:text-sm text-charcoal-700 mt-2">
          Estimate your required solar system capacity, monthly KSEB bill reduction, and 25-year financial savings in Kerala.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Inputs */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-forest-950 mb-2">
              Property Type
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setConsumerType('residential')}
                className={`py-3 px-4 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                  consumerType === 'residential'
                    ? 'bg-forest-900 text-cream-50 border-forest-900 shadow-sm'
                    : 'bg-white text-charcoal-800 border-forest-900/15 hover:border-forest-900/40'
                }`}
              >
                Residential Home
              </button>
              <button
                type="button"
                onClick={() => setConsumerType('commercial')}
                className={`py-3 px-4 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                  consumerType === 'commercial'
                    ? 'bg-forest-900 text-cream-50 border-forest-900 shadow-sm'
                    : 'bg-white text-charcoal-800 border-forest-900/15 hover:border-forest-900/40'
                }`}
              >
                Commercial Enterprise
              </button>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-forest-950">
                Average Bi-Monthly KSEB Bill
              </label>
              <span className="text-lg font-extrabold text-forest-900 bg-forest-900/10 px-3 py-1 rounded-lg">
                ₹{bimonthlyBill.toLocaleString()}
              </span>
            </div>
            <input
              type="range"
              min="2000"
              max="40000"
              step="500"
              value={bimonthlyBill}
              onChange={(e) => setBimonthlyBill(Number(e.target.value))}
              className="w-full accent-forest-900 cursor-pointer h-2.5 bg-cream-300 rounded-lg"
            />
            <div className="flex justify-between text-[11px] text-charcoal-600 mt-1 font-medium">
              <span>₹2,000</span>
              <span>₹20,000</span>
              <span>₹40,000+</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-forest-900/5 border border-forest-900/10 flex items-center gap-3 text-xs text-charcoal-700">
            <Zap className="w-5 h-5 text-gold-500 shrink-0" />
            <span>
              Estimated monthly consumption: <strong className="text-forest-950">~{estimatedUnitsPerMonth} Units</strong> (kWh).
            </span>
          </div>
        </div>

        {/* Right Output Cards */}
        <div className="lg:col-span-6 bg-forest-950 rounded-2xl p-6 sm:p-8 text-cream-50 space-y-5 shadow-inner">
          <div className="grid grid-cols-2 gap-4 pb-4 border-b border-forest-800">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-gold-400 block">
                Recommended Capacity
              </span>
              <span className="text-2xl sm:text-3xl font-extrabold text-cream-50 font-display">
                {recommendedKW} kW
              </span>
              <span className="text-[10px] text-cream-300/60 block mt-0.5">Rooftop Solar Array</span>
            </div>

            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-gold-400 block">
                Monthly Savings
              </span>
              <span className="text-2xl sm:text-3xl font-extrabold text-gold-400 font-display">
                ₹{estimatedMonthlySavings.toLocaleString()}
              </span>
              <span className="text-[10px] text-cream-300/60 block mt-0.5">Approx 88% Bill Reduction</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-xs">
            <div className="flex items-center gap-2">
              <TrendingDown className="w-4 h-4 text-gold-400 shrink-0" />
              <div>
                <span className="text-cream-300/70 block text-[10px]">25-Year Cumulative</span>
                <strong className="text-cream-100 font-bold">₹{(estimated25YearSavings / 100000).toFixed(1)} Lakhs+</strong>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Leaf className="w-4 h-4 text-emerald-400 shrink-0" />
              <div>
                <span className="text-cream-300/70 block text-[10px]">CO2 Offset / Year</span>
                <strong className="text-cream-100 font-bold">{co2OffsetTons} Tons/yr</strong>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={onOpenAuditModal}
              className="btn-primary w-full py-3 text-xs sm:text-sm font-bold justify-center"
            >
              <span>Get Precise Quotation & Site Survey</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
