import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  CheckCircle2,
  Phone,
  Mail,
  ArrowRight,
  Sparkles,
  MessageSquare
} from 'lucide-react';
import { PHONE_NUMBER, EMAIL_ADDRESS } from '../data/content';
import { usePageSeo } from '../hooks/usePageSeo';

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
  onOpenPricing,
  onOpenFaq
}) => {
  usePageSeo({
    title: 'Book a Fit Call | Hometown Transaction Coordinators',
    description:
      'A focused 15-minute conversation to learn what you need and determine whether HTC is the right fit for your business.',
    canonicalUrl: 'https://hometowntc.com/book/',
    breadcrumbs: [
      { name: 'Home', url: 'https://hometowntc.com/' },
      { name: 'Book a Fit Call', url: 'https://hometowntc.com/book/' }
    ]
  });

  // Calculate default next business day
  const getDefaultDate = () => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    // If Saturday, move to Monday
    if (d.getDay() === 6) d.setDate(d.getDate() + 2);
    // If Sunday, move to Monday
    if (d.getDay() === 0) d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  };

  const [selectedDate, setSelectedDate] = useState<string>(getDefaultDate());
  const [selectedTime, setSelectedTime] = useState<string>('10:00 AM EST');
  const [step, setStep] = useState<'select' | 'details' | 'confirmed'>('select');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    brokerage: '',
    notes: ''
  });

  // Approved office hours slots: Mon–Fri · 8:00 AM–6:00 PM EST
  const availableSlots = [
    '08:30 AM EST',
    '09:30 AM EST',
    '10:30 AM EST',
    '11:30 AM EST',
    '01:00 PM EST',
    '02:00 PM EST',
    '03:30 PM EST',
    '04:30 PM EST',
    '05:15 PM EST'
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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

  return (
    <div className="bg-[#EEEAEB] text-[#3A2E29] min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-[#3A2E29] text-white pt-28 pb-12 sm:pt-32 sm:pb-16 px-4 sm:px-6 lg:px-8 border-b border-[#D8D2D4]/20">
        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10">
          
          {/* Breadcrumb */}
          <div className="flex items-center justify-center space-x-2 text-xs font-semibold text-[#0D9BA3] tracking-widest uppercase mb-2">
            <button onClick={onGoHome} className="hover:text-white transition cursor-pointer">
              Home
            </button>
            <span>/</span>
            <span className="text-white">Book a Fit Call</span>
          </div>

          {/* Eyebrow */}
          <div className="inline-flex items-center space-x-2 bg-[#0D9BA3]/20 border border-[#0D9BA3]/40 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#0D9BA3] tracking-wider uppercase">
            <span>BOOK A FIT CALL</span>
          </div>

          {/* H1 */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight font-serif">
            Let’s See If We’re a Fit.
          </h1>

          {/* Copy */}
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl mx-auto">
            A focused 15-minute conversation to learn what you need and determine whether HTC is the right fit for your business.
          </p>

          {/* Simple Process Tracker */}
          <div className="pt-4 flex items-center justify-center space-x-2 sm:space-x-4 text-xs text-slate-300 font-medium">
            <span className="flex items-center space-x-1.5">
              <span className="w-5 h-5 rounded-full bg-[#0D9BA3] text-white font-bold text-[10px] flex items-center justify-center">1</span>
              <span>Understand what you need</span>
            </span>
            <span className="text-slate-500">→</span>
            <span className="flex items-center space-x-1.5">
              <span className="w-5 h-5 rounded-full bg-[#0D9BA3] text-white font-bold text-[10px] flex items-center justify-center">2</span>
              <span>See if HTC fits</span>
            </span>
            <span className="text-slate-500">→</span>
            <span className="flex items-center space-x-1.5">
              <span className="w-5 h-5 rounded-full bg-[#FE7311] text-white font-bold text-[10px] flex items-center justify-center">3</span>
              <span className="text-white font-bold">Book the call</span>
            </span>
          </div>
        </div>
      </section>

      {/* 2. SCHEDULING WIDGET — MAIN JOB OF THIS PAGE */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#D8D2D4] shadow-xl relative">
          
          {/* Widget Header */}
          <div className="border-b border-[#D8D2D4] pb-5 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-[#0D9BA3]" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0D9BA3]">
                  15-Minute Conversation
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#3A2E29] font-serif">
                Select a Convenient Time
              </h2>
            </div>

            <div className="text-left sm:text-right">
              <div className="text-xs font-mono text-slate-500">Office Hours</div>
              <div className="text-xs font-bold text-[#3A2E29]">Mon–Fri · 8:00 AM–6:00 PM EST</div>
            </div>
          </div>

          {/* STEP 1: SELECT DATE & TIME */}
          {step === 'select' && (
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#3A2E29] mb-2 flex items-center space-x-1.5">
                  <Calendar className="w-4 h-4 text-[#0D9BA3]" />
                  <span>Select Date</span>
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full bg-[#FAF8F5] border border-[#D8D2D4] rounded-xl px-4 py-3 text-sm font-semibold text-[#3A2E29] focus:ring-2 focus:ring-[#0D9BA3] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#3A2E29] mb-2 flex items-center space-x-1.5">
                  <Clock className="w-4 h-4 text-[#0D9BA3]" />
                  <span>Select Time (15 Minutes)</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {availableSlots.map((slot) => {
                    const isSelected = selectedTime === slot;
                    return (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedTime(slot)}
                        className={`py-3 px-3 rounded-xl text-xs font-bold transition border text-center cursor-pointer ${
                          isSelected
                            ? 'bg-[#3A2E29] text-white border-[#3A2E29] shadow-md ring-2 ring-[#0D9BA3]'
                            : 'bg-[#FAF8F5] text-[#3A2E29] border-[#D8D2D4] hover:border-[#0D9BA3] hover:bg-white'
                        }`}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleProceedToDetails}
                  className="w-full py-4 bg-[#FE7311] hover:bg-[#e06209] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition shadow-lg hover:shadow-[#FE7311]/25 flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>Next: Your Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: CONTACT DETAILS */}
          {step === 'details' && (
            <form onSubmit={handleFinalBooking} className="space-y-4">
              <div className="flex items-center justify-between text-xs font-bold text-[#0D9BA3] bg-[#FAF8F5] p-3 rounded-xl border border-[#D8D2D4]">
                <span className="flex items-center space-x-2">
                  <Calendar className="w-3.5 h-3.5 text-[#0D9BA3]" />
                  <span>{selectedDate} at {selectedTime}</span>
                </span>
                <button
                  type="button"
                  onClick={() => setStep('select')}
                  className="text-xs text-slate-600 hover:text-[#3A2E29] underline cursor-pointer"
                >
                  Change Time
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="e.g., Sarah Jenkins"
                    className="w-full bg-[#FAF8F5] border border-[#D8D2D4] rounded-xl px-3.5 py-2.5 text-xs font-medium focus:ring-2 focus:ring-[#0D9BA3] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Brokerage / Team (Optional)
                  </label>
                  <input
                    type="text"
                    name="brokerage"
                    value={formData.brokerage}
                    onChange={handleInputChange}
                    placeholder="e.g., Compass, eXp, Keller Williams"
                    className="w-full bg-[#FAF8F5] border border-[#D8D2D4] rounded-xl px-3.5 py-2.5 text-xs font-medium focus:ring-2 focus:ring-[#0D9BA3] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="sarah@yourrealty.com"
                    className="w-full bg-[#FAF8F5] border border-[#D8D2D4] rounded-xl px-3.5 py-2.5 text-xs font-medium focus:ring-2 focus:ring-[#0D9BA3] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(954) 377-8330"
                    className="w-full bg-[#FAF8F5] border border-[#D8D2D4] rounded-xl px-3.5 py-2.5 text-xs font-medium focus:ring-2 focus:ring-[#0D9BA3] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  What can we help you with? (Optional)
                </label>
                <textarea
                  name="notes"
                  rows={3}
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Tell us briefly about what you're looking for or any specific questions you have..."
                  className="w-full bg-[#FAF8F5] border border-[#D8D2D4] rounded-xl px-3.5 py-2.5 text-xs font-medium focus:ring-2 focus:ring-[#0D9BA3] focus:outline-none resize-none"
                />
              </div>

              <div className="pt-2 flex items-center space-x-3">
                <button
                  type="button"
                  onClick={() => setStep('select')}
                  className="px-5 py-3.5 bg-[#FAF8F5] border border-[#D8D2D4] text-slate-700 font-bold text-xs rounded-xl hover:bg-[#EEEAEB] cursor-pointer"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3.5 bg-[#FE7311] hover:bg-[#e06209] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition shadow-md cursor-pointer"
                >
                  Confirm Fit Call
                </button>
              </div>
            </form>
          )}

          {/* STEP 3: CONFIRMED */}
          {step === 'confirmed' && (
            <div className="py-8 text-center space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div className="space-y-1">
                <h3 className="text-2xl font-bold text-[#3A2E29] font-serif">
                  Fit Call Scheduled!
                </h3>
                <p className="text-sm text-slate-700 max-w-md mx-auto">
                  Thank you, <strong>{formData.fullName || 'Agent'}</strong>. We have scheduled your 15-minute conversation for:
                </p>
                <div className="inline-block mt-2 bg-[#FAF8F5] border border-[#D8D2D4] px-4 py-2 rounded-xl text-sm font-bold text-[#0D9BA3]">
                  {selectedDate} at {selectedTime}
                </div>
              </div>

              <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                A calendar confirmation has been sent to <strong>{formData.email}</strong>. We look forward to speaking with you.
              </p>

              <div className="bg-[#FAF8F5] p-5 rounded-2xl text-left border border-[#D8D2D4] text-xs space-y-2 max-w-md mx-auto">
                <div className="font-bold text-[#3A2E29]">Hometown Transaction Coordinators</div>
                <div className="flex items-center space-x-2 text-slate-700">
                  <Phone className="w-3.5 h-3.5 text-[#0D9BA3]" />
                  <span>Direct: {PHONE_NUMBER}</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-700">
                  <Mail className="w-3.5 h-3.5 text-[#0D9BA3]" />
                  <span>Email: {EMAIL_ADDRESS}</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-700">
                  <Clock className="w-3.5 h-3.5 text-[#FE7311]" />
                  <span>Office Hours: Mon–Fri · 8:00 AM–6:00 PM EST</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setStep('select');
                    setFormData({ fullName: '', email: '', phone: '', brokerage: '', notes: '' });
                  }}
                  className="text-xs text-[#0D9BA3] font-bold hover:underline cursor-pointer"
                >
                  Schedule Another Time or Edit
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Support & Contact Footer Info */}
        <div className="mt-8 text-center space-y-3">
          <p className="text-xs text-slate-600">
            Have questions before scheduling? Call or text us directly at{' '}
            <a href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`} className="font-bold text-[#0D9BA3] hover:underline">
              {PHONE_NUMBER}
            </a>{' '}
            or email{' '}
            <a href={`mailto:${EMAIL_ADDRESS}`} className="font-bold text-[#0D9BA3] hover:underline">
              {EMAIL_ADDRESS}
            </a>
          </p>
          <div className="flex items-center justify-center space-x-4 text-xs font-bold text-slate-500">
            <button onClick={onOpenPricing} className="hover:text-[#0D9BA3] transition cursor-pointer">
              View Services & Pricing →
            </button>
            <span>•</span>
            <button onClick={onOpenFaq} className="hover:text-[#0D9BA3] transition cursor-pointer">
              Frequently Asked Questions →
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
