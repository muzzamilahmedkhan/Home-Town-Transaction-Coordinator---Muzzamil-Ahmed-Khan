import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  CheckCircle2,
  PhoneCall,
  ShieldCheck,
  UserCheck,
  XCircle,
  Briefcase,
  HelpCircle,
  FileCheck2,
  Lock,
  Mail,
  Phone,
  Sparkles,
  ArrowRight,
  Shield,
  Layers,
  Building2,
  ChevronRight
} from 'lucide-react';
import { PHONE_NUMBER, EMAIL_ADDRESS, MEET_MICHELLE_IMAGE } from '../data/content';

interface Props {
  onGoHome: () => void;
  onSubmitDeal: () => void;
  onOpenPricing: () => void;
  onOpenFaq: () => void;
  onOpenHowItWorks?: () => void;
  onOpenWhyHtc?: () => void;
  onOpenWhoWeSupport?: () => void;
  onOpenRoi?: () => void;
}

export const BookDiscoveryCallPage: React.FC<Props> = ({
  onGoHome,
  onSubmitDeal,
  onOpenPricing,
  onOpenFaq,
  onOpenHowItWorks,
  onOpenWhyHtc,
  onOpenWhoWeSupport,
  onOpenRoi
}) => {
  // Booking Form State / Embedded Google Appointments Simulation
  const [selectedDate, setSelectedDate] = useState<string>(
    new Date(Date.now() + 86400000).toISOString().split('T')[0]
  );
  const [selectedTime, setSelectedTime] = useState<string>('10:30 AM EST');
  const [step, setStep] = useState<'select' | 'details' | 'confirmed'>('select');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    brokerage: '',
    monthlyVolume: '2-4 transactions / month',
    primaryGoal: 'Offload contract-to-close admin & focus on clients',
    brokerSoftware: 'Dotloop',
    notes: ''
  });

  const availableSlots = [
    '09:30 AM EST',
    '10:30 AM EST',
    '11:45 AM EST',
    '01:15 PM EST',
    '02:30 PM EST',
    '03:45 PM EST',
    '04:30 PM EST'
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleProceedToDetails = () => {
    if (selectedDate && selectedTime) {
      setStep('details');
    }
  };

  const handleFinalBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('confirmed');
  };

  // Structured Content for the mandated sections
  const whoTheCallIsFor = [
    {
      title: 'Active Florida Licensed Agents & Teams',
      desc: 'Realtors® currently closing 1–8+ deals per month who are spending 10–18 hours per transaction on back-office paperwork, escrow chasing, and compliance audits.'
    },
    {
      title: 'Top Producers & Team Leaders',
      desc: 'Producing agents looking to standardize contract-to-close workflows across their team with predictable pay-at-closing billing ($375 / $475) and zero payroll overhead.'
    },
    {
      title: 'Agents Ready to Scale Production',
      desc: 'Agents who want to free up 15+ hours per transaction to spend on lead generation, client showings, and negotiating contracts rather than tracking inspection dates.'
    }
  ];

  const whatMichelleWillAsk = [
    {
      num: '01',
      question: 'Your Average Monthly Volume & Pipeline',
      detail: 'How many buyer and seller transactions do you typically manage simultaneously, and what does your upcoming 60-day pipeline look like?'
    },
    {
      num: '02',
      question: 'Your Brokerage Compliance Platform',
      detail: 'What transaction management system does your broker mandate (e.g., Dotloop, SkySlope, Brokermint, Paperless Pipeline, Command)?'
    },
    {
      num: '03',
      question: 'Client Communication Preference (Base vs. Pro)',
      detail: 'Do you prefer HTC to work entirely behind the scenes (Base Plan - $375) or provide branded direct milestone updates to your buyers and sellers (Pro Plan - $475)?'
    },
    {
      num: '04',
      question: 'Key Operational Pain Points',
      detail: 'Where are deals currently feeling stressful (e.g., HOA estoppel delays, repair addenda distribution, lender underwriting check-ins, or post-closing CDA submissions)?'
    }
  ];

  const whatVisitorShouldBring = [
    {
      item: 'Broker Compliance System Name',
      desc: 'Knowledge of your brokerage software (Dotloop, SkySlope, etc.) so we can map immediate portal access.'
    },
    {
      item: 'Rough 30-Day Pipeline Count',
      desc: 'An estimate of active listings, pending contracts, or upcoming client offers ready to write.'
    },
    {
      item: 'Specific Workflow Questions',
      desc: 'Any unique team needs, dual-agency procedures, or local board customs (Miami-Dade, Broward, Palm Beach, or Statewide).'
    }
  ];

  const whoIsNotAFit = [
    {
      title: 'Agents Seeking Legal Advice or Representation',
      desc: 'HTC is an administrative coordination service and does NOT provide legal advice or draft custom legal clauses. Legal counsel must come from your closing attorney.'
    },
    {
      title: 'Agents Wanting a TC to Show Homes or Conduct Inspections',
      desc: 'We manage file logistics, compliance, and deadline tracking. Licensed fiduciary activities (showings, lockbox access, repair negotiations) remain strictly with you.'
    },
    {
      title: 'Transactions Outside the State of Florida',
      desc: 'Hometown TC specializes exclusively in Florida transactions governed by Florida Association of Realtors® / Florida Bar (FAR/BAR) contracts across all 67 counties.'
    }
  ];

  // Structured Data for SEO / AEO (Service & ContactPage)
  const bookingSchemaData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Book a Transaction Coordinator Discovery Call - Hometown TC",
    "description": "Schedule a focused 15-minute discovery consultation with Michelle Martinez, Founder of Hometown TC, to evaluate transaction coordinator support for your Florida real estate business.",
    "url": "https://hometowntc.com/book-discovery-call/",
    "mainEntity": {
      "@type": "Service",
      "name": "Real Estate Transaction Coordinator Discovery Call",
      "provider": {
        "@type": "ProfessionalService",
        "name": "Hometown Transaction Coordinators",
        "telephone": PHONE_NUMBER,
        "email": EMAIL_ADDRESS,
        "areaServed": {
          "@type": "State",
          "name": "Florida"
        },
        "priceRange": "$375 - $475"
      },
      "serviceType": "15-Minute Strategy Consultation"
    }
  };

  return (
    <div className="bg-[#EEEAEB] text-[#3A2E29] min-h-screen">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookingSchemaData) }}
      />
      
      {/* 1. HERO HEADER WITH IMMEDIATE BOOKING WIDGET */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#3A2E29] via-[#2A211D] to-[#3A2E29] text-white pt-32 pb-16 lg:pt-36 lg:pb-20 border-b border-[#D8D2D4]/20">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0D9BA3_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-xs font-semibold text-[#0D9BA3] tracking-widest uppercase mb-4">
            <button onClick={onGoHome} className="hover:text-white transition cursor-pointer">Home</button>
            <span>/</span>
            <span className="text-white">Book a Discovery Call</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Left Header Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-[#0D9BA3]/20 border border-[#0D9BA3]/40 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#0D9BA3] tracking-wide">
                <Clock className="w-3.5 h-3.5" />
                <span>15-MINUTE ONE-ON-ONE STRATEGY SESSION</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight font-serif">
                Book a 15-Minute <br />
                <span className="text-[#0D9BA3]">Discovery Call</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light">
                A focused, 15-minute call with Michelle Martinez to identify your brokerage needs, determine the ideal support tier (Base $375 vs. Pro $475), and get your next contract ready to onboard seamlessly.
              </p>

              {/* Founder Brief Card */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15 flex items-center space-x-4">
                <img
                  src={MEET_MICHELLE_IMAGE}
                  alt="Michelle Martinez"
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#0D9BA3] shadow-md flex-shrink-0"
                />
                <div>
                  <h4 className="text-sm font-bold text-white">Michelle Martinez</h4>
                  <p className="text-xs text-[#0D9BA3] font-semibold">Founder & Lead Transaction Coordinator</p>
                  <p className="text-xs text-slate-300 mt-1">Direct phone: {PHONE_NUMBER}</p>
                </div>
              </div>

              {/* Quick Trust Highlights */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-white/5 rounded-xl p-3.5 border border-white/10">
                  <div className="flex items-center space-x-2 text-xs font-bold text-white">
                    <CheckCircle2 className="w-4 h-4 text-[#0D9BA3]" />
                    <span>Pay-at-Closing</span>
                  </div>
                  <p className="text-[11px] text-slate-300 mt-1">$0 upfront, $0 if deal cancels</p>
                </div>
                <div className="bg-white/5 rounded-xl p-3.5 border border-white/10">
                  <div className="flex items-center space-x-2 text-xs font-bold text-white">
                    <CheckCircle2 className="w-4 h-4 text-[#0D9BA3]" />
                    <span>24-Hr File Setup</span>
                  </div>
                  <p className="text-[11px] text-slate-300 mt-1">Immediate timeline generation</p>
                </div>
              </div>

              {/* Alternative Action */}
              <div className="pt-2">
                <p className="text-xs text-slate-400">
                  Already have an executed contract under agreement today?{' '}
                  <button
                    onClick={onSubmitDeal}
                    className="text-[#0D9BA3] font-bold underline hover:text-white transition cursor-pointer"
                  >
                    Submit Deal Directly ($375) →
                  </button>
                </p>
              </div>
            </div>

            {/* Right Column: EMBEDDED GOOGLE APPOINTMENTS / BOOKING WIDGET */}
            <div id="booking-widget" className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 text-[#3A2E29] border border-[#D8D2D4] shadow-2xl relative scroll-mt-28">
              
              <div className="flex items-center justify-between border-b border-[#D8D2D4] pb-4 mb-6">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[11px] font-bold text-[#0D9BA3] uppercase tracking-wider">Live Calendar Integration</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#3A2E29] font-serif">15-Min Fit Consultation</h3>
                </div>
                <div className="text-right">
                  <span className="text-xs font-extrabold bg-[#EEEAEB] px-3 py-1 rounded-full text-slate-700">Free / No Obligation</span>
                </div>
              </div>

              {step === 'select' && (
                <div className="space-y-6">
                  {/* Step 1: Select Date & Time */}
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-[#3A2E29] mb-2 flex items-center space-x-1.5">
                      <Calendar className="w-4 h-4 text-[#0D9BA3]" />
                      <span>1. Select Date</span>
                    </label>
                    <input
                      type="date"
                      value={selectedDate}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full bg-[#EEEAEB] border border-[#D8D2D4] rounded-xl px-4 py-3 text-sm font-semibold text-[#3A2E29] focus:ring-2 focus:ring-[#0D9BA3] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-[#3A2E29] mb-2 flex items-center space-x-1.5">
                      <Clock className="w-4 h-4 text-[#0D9BA3]" />
                      <span>2. Select Time (15 Minutes)</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {availableSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedTime(slot)}
                          className={`py-2.5 px-3 rounded-xl text-xs font-bold transition border text-center cursor-pointer ${
                            selectedTime === slot
                              ? 'bg-[#3A2E29] text-white border-[#3A2E29] shadow-md ring-2 ring-[#0D9BA3]'
                              : 'bg-[#EEEAEB] text-[#3A2E29] border-[#D8D2D4] hover:border-[#0D9BA3]'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleProceedToDetails}
                      className="w-full py-4 bg-[#FE7311] hover:bg-[#e06209] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition shadow-lg hover:shadow-[#FE7311]/25 flex items-center justify-center space-x-2 cursor-pointer"
                    >
                      <span>Next: Enter Contact Info</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {step === 'details' && (
                <form onSubmit={handleFinalBooking} className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-bold text-[#0D9BA3] bg-[#EEEAEB] p-3 rounded-xl">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{selectedDate} at {selectedTime}</span>
                    </span>
                    <button
                      type="button"
                      onClick={() => setStep('select')}
                      className="text-xs text-slate-500 hover:text-[#3A2E29] underline"
                    >
                      Change
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g., Sarah Jenkins, PA"
                        className="w-full bg-[#EEEAEB] border border-[#D8D2D4] rounded-xl px-3.5 py-2.5 text-xs font-medium focus:ring-2 focus:ring-[#0D9BA3] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                        Brokerage Name *
                      </label>
                      <input
                        type="text"
                        name="brokerage"
                        required
                        value={formData.brokerage}
                        onChange={handleInputChange}
                        placeholder="e.g., COMPASS, eXp, Keller Williams"
                        className="w-full bg-[#EEEAEB] border border-[#D8D2D4] rounded-xl px-3.5 py-2.5 text-xs font-medium focus:ring-2 focus:ring-[#0D9BA3] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="sarah@yourrealty.com"
                        className="w-full bg-[#EEEAEB] border border-[#D8D2D4] rounded-xl px-3.5 py-2.5 text-xs font-medium focus:ring-2 focus:ring-[#0D9BA3] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                        Cell Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(305) 555-0199"
                        className="w-full bg-[#EEEAEB] border border-[#D8D2D4] rounded-xl px-3.5 py-2.5 text-xs font-medium focus:ring-2 focus:ring-[#0D9BA3] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                        Monthly Deal Volume
                      </label>
                      <select
                        name="monthlyVolume"
                        value={formData.monthlyVolume}
                        onChange={handleInputChange}
                        className="w-full bg-[#EEEAEB] border border-[#D8D2D4] rounded-xl px-3.5 py-2.5 text-xs font-medium focus:ring-2 focus:ring-[#0D9BA3] focus:outline-none"
                      >
                        <option value="1-2 deals / month">1–2 deals / month</option>
                        <option value="3-5 deals / month">3–5 deals / month</option>
                        <option value="6-10 deals / month">6–10 deals / month</option>
                        <option value="10+ deals / month (Team)">10+ deals / month (Team)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                        Broker Compliance System
                      </label>
                      <select
                        name="brokerSoftware"
                        value={formData.brokerSoftware}
                        onChange={handleInputChange}
                        className="w-full bg-[#EEEAEB] border border-[#D8D2D4] rounded-xl px-3.5 py-2.5 text-xs font-medium focus:ring-2 focus:ring-[#0D9BA3] focus:outline-none"
                      >
                        <option value="Dotloop">Dotloop</option>
                        <option value="SkySlope">SkySlope</option>
                        <option value="Brokermint">Brokermint</option>
                        <option value="Paperless Pipeline">Paperless Pipeline</option>
                        <option value="Command / KW">Command / KW</option>
                        <option value="Other / In-House">Other / In-House</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Anything specific you'd like Michelle to cover? (Optional)
                    </label>
                    <textarea
                      name="notes"
                      rows={2}
                      value={formData.notes}
                      onChange={handleInputChange}
                      placeholder="e.g., Looking for Spanish milestone communication for our Latin American buyers..."
                      className="w-full bg-[#EEEAEB] border border-[#D8D2D4] rounded-xl px-3.5 py-2 text-xs font-medium focus:ring-2 focus:ring-[#0D9BA3] focus:outline-none resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center space-x-3">
                    <button
                      type="button"
                      onClick={() => setStep('select')}
                      className="px-4 py-3 bg-[#EEEAEB] text-slate-700 font-bold text-xs rounded-xl hover:bg-[#D8D2D4]"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-3.5 bg-[#FE7311] hover:bg-[#e06209] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition shadow-md cursor-pointer"
                    >
                      Confirm 15-Minute Call
                    </button>
                  </div>
                </form>
              )}

              {step === 'confirmed' && (
                <div className="py-6 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-[#3A2E29] font-serif">Discovery Call Confirmed!</h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                    Thank you, <strong>{formData.fullName || 'Agent'}</strong>. A calendar invite and Google Meet link have been dispatched for <strong>{selectedDate} at {selectedTime}</strong>.
                  </p>
                  <div className="bg-[#EEEAEB] p-4 rounded-2xl text-left border border-[#D8D2D4] text-xs space-y-1.5">
                    <div className="font-bold text-[#3A2E29] flex items-center space-x-1.5">
                      <PhoneCall className="w-3.5 h-3.5 text-[#0D9BA3]" />
                      <span>Direct Contact Details:</span>
                    </div>
                    <p className="text-slate-600 text-[11px]">Michelle Martinez: {PHONE_NUMBER}</p>
                    <p className="text-slate-600 text-[11px]">Email: {EMAIL_ADDRESS}</p>
                  </div>
                  <button
                    onClick={() => setStep('select')}
                    className="text-xs text-[#0D9BA3] font-bold underline cursor-pointer"
                  >
                    Schedule Another Time or Edit
                  </button>
                </div>
              )}

              {/* Bottom Security Note */}
              <div className="mt-6 pt-4 border-t border-[#D8D2D4] flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center space-x-1">
                  <Lock className="w-3.5 h-3.5 text-slate-400" />
                  <span>100% Confidential • No Spam Guarantee</span>
                </span>
                <span>Google Calendar Sync</span>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 2. REQUIRED SECTION: WHO THE CALL IS FOR */}
      <section className="py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10 space-y-2">
          <div className="flex items-center space-x-2 text-xs font-bold text-[#0D9BA3] uppercase tracking-wider">
            <UserCheck className="w-4 h-4" />
            <span>Section 01</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3A2E29] font-serif">
            Who the Discovery Call Is For
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            This call is designed specifically for licensed Florida real estate professionals seeking scalable back-office support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {whoTheCallIsFor.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-[#D8D2D4] shadow-sm space-y-3 relative overflow-hidden flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-8 h-8 rounded-lg bg-[#3A2E29] text-[#0D9BA3] flex items-center justify-center font-bold text-xs">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-[#3A2E29] font-serif">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="pt-4 border-t border-[#D8D2D4]/60 flex items-center space-x-1.5 text-xs font-bold text-[#0D9BA3]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Immediate Fit</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. REQUIRED SECTION: WHAT MICHELLE WILL ASK */}
      <section className="py-16 bg-white border-y border-[#D8D2D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-2">
            <div className="flex items-center space-x-2 text-xs font-bold text-[#0D9BA3] uppercase tracking-wider">
              <HelpCircle className="w-4 h-4" />
              <span>Section 02</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3A2E29] font-serif">
              What Michelle Will Ask During the 15 Minutes
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We respect your time. The consultation is focused on understanding your operating rhythm and matching you with the right coordination workflow.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatMichelleWillAsk.map((q) => (
              <div
                key={q.num}
                className="bg-[#EEEAEB] rounded-2xl p-6 border border-[#D8D2D4] space-y-3"
              >
                <div className="text-xs font-black text-[#FE7311] tracking-wider uppercase">
                  QUESTION {q.num}
                </div>
                <h3 className="text-sm font-bold text-[#3A2E29] leading-snug font-serif">
                  {q.question}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {q.detail}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. REQUIRED SECTION: WHAT THE VISITOR SHOULD BRING */}
      <section className="py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10 space-y-2">
          <div className="flex items-center space-x-2 text-xs font-bold text-[#0D9BA3] uppercase tracking-wider">
            <FileCheck2 className="w-4 h-4" />
            <span>Section 03</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3A2E29] font-serif">
            What You Should Bring to the Call
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            No complex preparation is needed. Having these basic details handy ensures we can outline your custom onboarding in real-time.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {whatVisitorShouldBring.map((b, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-[#D8D2D4] shadow-sm space-y-3"
            >
              <div className="w-9 h-9 rounded-xl bg-[#0D9BA3]/10 text-[#0D9BA3] flex items-center justify-center font-bold">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-[#3A2E29]">
                {b.item}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. REQUIRED SECTION: WHO IS NOT A FIT */}
      <section className="py-16 bg-[#3A2E29] text-white border-y border-[#D8D2D4]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-2">
            <div className="flex items-center space-x-2 text-xs font-bold text-[#FE7311] uppercase tracking-wider">
              <XCircle className="w-4 h-4" />
              <span>Section 04</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-serif">
              Who Is Not a Fit for Hometown TC
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              To protect the operational quality for our partner agents, we maintain clear boundaries regarding what we do and do not do.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {whoIsNotAFit.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 space-y-3"
              >
                <div className="w-8 h-8 rounded-lg bg-[#FE7311]/20 text-[#FE7311] flex items-center justify-center font-bold">
                  <XCircle className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-white font-serif">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. REQUIRED SECTION: PRIVACY NOTE AND ALTERNATE CONTACT */}
      <section className="py-16 lg:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#D8D2D4] shadow-sm space-y-6">
          
          <div className="flex items-center space-x-3 border-b border-[#D8D2D4] pb-4">
            <div className="w-10 h-10 rounded-xl bg-[#0D9BA3]/10 text-[#0D9BA3] flex items-center justify-center flex-shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-[#0D9BA3] uppercase tracking-wider">Section 05</span>
              <h3 className="text-xl font-bold text-[#3A2E29] font-serif">Privacy Note & Alternate Contact Methods</h3>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <div className="space-y-3">
              <h4 className="font-bold text-[#3A2E29]">Strict Client Privacy & Non-Solicitation</h4>
              <p className="text-xs text-slate-600">
                Your client information, transaction files, and brokerage details are strictly confidential. Hometown TC will never share, sell, market, or solicit your client database under any circumstances.
              </p>
              <p className="text-xs text-slate-600">
                All communications and documents are handled with bank-grade encryption in full compliance with Florida DBPR and real estate privacy standards.
              </p>
            </div>

            <div className="space-y-3 bg-[#EEEAEB] p-5 rounded-2xl border border-[#D8D2D4]">
              <h4 className="font-bold text-[#3A2E29]">Prefer Not to Book a Call?</h4>
              <p className="text-xs text-slate-600">
                You can reach Michelle Martinez directly through any of these alternate channels:
              </p>
              <div className="space-y-2 pt-1 text-xs">
                <div className="flex items-center space-x-2 text-[#3A2E29]">
                  <Phone className="w-4 h-4 text-[#0D9BA3]" />
                  <span>Call or Text: <a href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`} className="font-bold text-[#0D9BA3] hover:underline">{PHONE_NUMBER}</a></span>
                </div>
                <div className="flex items-center space-x-2 text-[#3A2E29]">
                  <Mail className="w-4 h-4 text-[#0D9BA3]" />
                  <span>Direct Email: <a href={`mailto:${EMAIL_ADDRESS}`} className="font-bold text-[#0D9BA3] hover:underline">{EMAIL_ADDRESS}</a></span>
                </div>
                <div className="flex items-center space-x-2 text-[#3A2E29]">
                  <Clock className="w-4 h-4 text-[#FE7311]" />
                  <span>Office Hours: Mon–Fri, 8:00 AM – 6:00 PM EST</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick links to pricing or FAQs */}
          <div className="pt-4 border-t border-[#D8D2D4] flex flex-wrap items-center justify-between gap-4 text-xs">
            <span className="text-slate-500">Need immediate answers before booking?</span>
            <div className="flex items-center space-x-4">
              <button
                onClick={onOpenFaq}
                className="font-bold text-[#0D9BA3] hover:underline cursor-pointer"
              >
                View FAQ Knowledge Base →
              </button>
              <button
                onClick={onOpenPricing}
                className="font-bold text-[#3A2E29] hover:underline cursor-pointer"
              >
                Review Plans ($375 / $475) →
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
