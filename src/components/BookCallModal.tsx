import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, PhoneCall, Phone, Mail } from 'lucide-react';
import { PHONE_NUMBER, EMAIL_ADDRESS } from '../data/content';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const BookCallModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    brokerage: '',
    preferredDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    preferredTime: '10:00 AM EST',
    notes: ''
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
          <div>
            <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0D9BA3]">
              BOOK A FIT CALL
            </div>
            <h3 className="text-xl font-montserrat font-extrabold text-white mt-0.5">
              Let’s See If We’re a Fit.
            </h3>
            <p className="text-xs text-slate-300 font-normal mt-1">
              A focused 15-minute conversation to learn what you need and determine whether HTC is the right fit for your business.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-full hover:bg-white/10 transition cursor-pointer self-start"
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
                Fit Call Scheduled!
              </h4>
              <p className="text-sm text-[#3A2E29]/80 max-w-md mx-auto font-medium">
                Thank you, <span className="font-semibold text-[#3A2E29]">{formData.fullName}</span>. We have scheduled your 15-minute conversation for <span className="font-semibold text-[#3A2E29]">{formData.preferredDate} at {formData.preferredTime}</span>.
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl text-left border border-[#D8D2D4] text-xs text-[#3A2E29] space-y-2 font-medium">
              <div className="font-bold text-[#3A2E29]">Hometown Transaction Coordinators</div>
              <div className="flex items-center space-x-2 text-slate-600">
                <Phone className="w-3.5 h-3.5 text-[#0D9BA3]" />
                <span>Direct: {PHONE_NUMBER}</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-600">
                <Mail className="w-3.5 h-3.5 text-[#0D9BA3]" />
                <span>Email: {EMAIL_ADDRESS}</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-600">
                <Clock className="w-3.5 h-3.5 text-[#FE7311]" />
                <span>Office Hours: Monday-Friday · 8:00 AM-6:00 PM EST</span>
              </div>
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
                  Brokerage / Team
                </label>
                <input
                  type="text"
                  name="brokerage"
                  value={formData.brokerage}
                  onChange={handleChange}
                  placeholder="e.g. Compass, eXp"
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
                  placeholder="(954) 377-8330"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#D8D2D4] focus:outline-none focus:ring-2 focus:ring-[#0D9BA3] bg-white text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#3A2E29] uppercase tracking-wider mb-1 flex items-center space-x-1">
                  <Calendar className="w-3.5 h-3.5 text-[#FE7311]" />
                  <span>Select Date</span>
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
                  <span>Time Slot (15 Min)</span>
                </label>
                <select
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#D8D2D4] focus:outline-none focus:ring-2 focus:ring-[#0D9BA3] bg-white text-sm"
                >
                  <option value="8:30 AM EST">8:30 AM EST</option>
                  <option value="9:30 AM EST">9:30 AM EST</option>
                  <option value="10:30 AM EST">10:30 AM EST</option>
                  <option value="11:30 AM EST">11:30 AM EST</option>
                  <option value="1:00 PM EST">1:00 PM EST</option>
                  <option value="2:30 PM EST">2:30 PM EST</option>
                  <option value="3:30 PM EST">3:30 PM EST</option>
                  <option value="4:30 PM EST">4:30 PM EST</option>
                  <option value="5:15 PM EST">5:15 PM EST</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#3A2E29] uppercase tracking-wider mb-1">
                What can we help you with? (Optional)
              </label>
              <textarea
                name="notes"
                rows={2}
                value={formData.notes}
                onChange={handleChange}
                placeholder="Tell us briefly about what you're looking for or any questions..."
                className="w-full px-4 py-2.5 rounded-xl border border-[#D8D2D4] focus:outline-none focus:ring-2 focus:ring-[#0D9BA3] bg-white text-sm resize-none"
              />
            </div>

            <div className="text-xs text-slate-500 font-mono text-center">
              Office Hours: Monday–Friday · 8:00 AM–6:00 PM EST
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-[#FE7311] hover:bg-[#e05f03] text-white font-bold py-3.5 px-6 rounded-xl shadow-lg hover:shadow-xl transition flex items-center justify-center space-x-2 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Book 15-Minute Fit Call</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
