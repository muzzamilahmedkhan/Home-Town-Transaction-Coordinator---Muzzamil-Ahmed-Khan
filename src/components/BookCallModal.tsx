import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, PhoneCall, ShieldCheck } from 'lucide-react';
import { BookingCallData } from '../types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const BookCallModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState<BookingCallData>({
    fullName: '',
    email: '',
    phone: '',
    brokerage: '',
    monthlyDeals: '2-4 deals/month',
    preferredDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    preferredTime: '10:00 AM EST',
    mainChallenge: 'Chasing administrative paperwork & signatures'
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const reset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-lg bg-[#EEEAEB] rounded-2xl shadow-2xl border border-[#D8D2D4] overflow-hidden my-8">
        
        {/* Header */}
        <div className="bg-[#3A2E29] text-white p-6 border-b border-[#0D9BA3]/30 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-[#FE7311] flex items-center justify-center text-white font-bold font-montserrat shadow">
              MM
            </div>
            <div>
              <h3 className="text-lg font-montserrat font-extrabold text-white">Book a 15-Minute Fit Call</h3>
              <p className="text-xs text-slate-300 font-medium">Direct Call with Michelle Martinez, Founder</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-full hover:bg-white/10 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 bg-[#0D9BA3]/20 text-[#0D9BA3] rounded-full flex items-center justify-center mx-auto border border-[#0D9BA3]/30">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h4 className="text-2xl font-montserrat font-extrabold text-[#3A2E29]">
                Call Scheduled!
              </h4>
              <p className="text-sm text-[#3A2E29]/80 max-w-md mx-auto font-medium">
                Thank you, <span className="font-semibold text-[#3A2E29]">{formData.fullName}</span>. Michelle Martinez has reserved <span className="font-semibold text-[#3A2E29]">{formData.preferredDate} at {formData.preferredTime}</span> for your strategy session.
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl text-left border border-[#D8D2D4] text-xs text-[#3A2E29] space-y-1 font-medium">
              <div className="font-bold flex items-center space-x-1.5 text-[#0D9BA3]">
                <ShieldCheck className="w-4 h-4 text-[#FE7311]" />
                <span>What to Expect on the Call:</span>
              </div>
              <p className="text-[11px] text-[#3A2E29]/80 pt-1 leading-relaxed">
                1. Review of your current transaction volume and bottleneck assessment.<br />
                2. Live walk-through of the HTC H.O.M.E. Close Method™ integration.<br />
                3. Custom setup strategy tailored to your brokerage software (Dotloop, Skyslope, Glide, etc.).
              </p>
            </div>

            <button
              onClick={reset}
              className="w-full bg-[#FE7311] hover:bg-[#e05f03] text-white font-bold py-3 px-6 rounded-xl shadow transition cursor-pointer"
            >
              Done & Return to Site
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#3A2E29] uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#D8D2D4] focus:outline-none focus:ring-2 focus:ring-[#0D9BA3] bg-white text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#3A2E29] uppercase tracking-wider mb-1">
                  Brokerage *
                </label>
                <input
                  type="text"
                  name="brokerage"
                  required
                  value={formData.brokerage}
                  onChange={handleChange}
                  placeholder="e.g. ONE Sotheby's"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#D8D2D4] focus:outline-none focus:ring-2 focus:ring-[#0D9BA3] bg-white text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#3A2E29] uppercase tracking-wider mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="realtor@domain.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#D8D2D4] focus:outline-none focus:ring-2 focus:ring-[#0D9BA3] bg-white text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#3A2E29] uppercase tracking-wider mb-1">
                  Direct Phone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(305) 555-0199"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#D8D2D4] focus:outline-none focus:ring-2 focus:ring-[#0D9BA3] bg-white text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#3A2E29] uppercase tracking-wider mb-1 flex items-center space-x-1">
                  <Calendar className="w-3.5 h-3.5 text-[#FE7311]" />
                  <span>Preferred Date</span>
                </label>
                <input
                  type="date"
                  name="preferredDate"
                  required
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#D8D2D4] focus:outline-none focus:ring-2 focus:ring-[#0D9BA3] bg-white text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#3A2E29] uppercase tracking-wider mb-1 flex items-center space-x-1">
                  <Clock className="w-3.5 h-3.5 text-[#FE7311]" />
                  <span>Time Slot</span>
                </label>
                <select
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#D8D2D4] focus:outline-none focus:ring-2 focus:ring-[#0D9BA3] bg-white text-sm"
                >
                  <option value="9:00 AM EST">9:00 AM EST</option>
                  <option value="10:00 AM EST">10:00 AM EST</option>
                  <option value="11:30 AM EST">11:30 AM EST</option>
                  <option value="1:30 PM EST">1:30 PM EST</option>
                  <option value="3:00 PM EST">3:00 PM EST</option>
                  <option value="4:30 PM EST">4:30 PM EST</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#3A2E29] uppercase tracking-wider mb-1">
                Average Monthly Deal Volume
              </label>
              <select
                name="monthlyDeals"
                value={formData.monthlyDeals}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl border border-[#D8D2D4] focus:outline-none focus:ring-2 focus:ring-[#0D9BA3] bg-white text-sm"
              >
                <option value="1 deal/month">1 deal / month (Solo Agent)</option>
                <option value="2-4 deals/month">2 - 4 deals / month (Growing Agent)</option>
                <option value="5-9 deals/month">5 - 9 deals / month (High Producer)</option>
                <option value="10+ deals/month">10+ deals / month (Team / Brokerage)</option>
              </select>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-[#FE7311] hover:bg-[#e05f03] text-white font-bold py-3.5 px-6 rounded-xl shadow-lg hover:shadow-xl transition flex items-center justify-center space-x-2 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Confirm 15-Minute Fit Call</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
