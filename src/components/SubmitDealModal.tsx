import React, { useState } from 'react';
import { X, Upload, CheckCircle2, ShieldCheck, ArrowRight, FileText, AlertCircle } from 'lucide-react';
import { DealSubmissionData } from '../types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

export const SubmitDealModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState<DealSubmissionData>({
    propertyAddress: '',
    city: 'Miami',
    zipCode: '',
    purchasePrice: '',
    executionDate: new Date().toISOString().split('T')[0],
    targetClosingDate: '',
    representation: 'buyer',
    agentName: '',
    agentEmail: '',
    agentPhone: '',
    brokerage: '',
    buyerName: '',
    sellerName: '',
    titleCompany: '',
    notes: '',
    hasExecutedContract: true
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

  const resetForm = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#EEEAEB] rounded-2xl shadow-2xl border border-[#D8D2D4] overflow-hidden my-8">
        
        {/* Header */}
        <div className="bg-[#3A2E29] text-white p-6 border-b border-[#0D9BA3]/30 flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-2 text-[#0D9BA3] text-xs font-semibold uppercase tracking-wider mb-1">
              <ShieldCheck className="w-4 h-4 text-[#FE7311]" />
              <span>Contract Intake Portal</span>
            </div>
            <h3 className="text-xl font-montserrat font-extrabold text-white">Submit a New Deal (Contract Intake)</h3>
            <p className="text-xs text-slate-300 mt-1 font-medium">
              Florida FAR/BAR Contract-to-Close Intake Form
            </p>
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
                Deal Submitted Successfully!
              </h4>
              <p className="text-sm text-[#3A2E29]/80 max-w-md mx-auto font-medium">
                Our Senior TC team is reviewing <span className="font-semibold text-[#3A2E29]">{formData.propertyAddress || 'your contract'}</span>. You will receive an initial file confirmation promptly.
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl text-left border border-[#D8D2D4] space-y-2 text-xs">
              <div className="font-bold text-[#3A2E29] uppercase tracking-wider border-b border-[#D8D2D4] pb-2">
                Intake Summary
              </div>
              <div className="grid grid-cols-2 gap-2 text-[#3A2E29] pt-1 font-medium">
                <div><span className="font-bold">Agent:</span> {formData.agentName || 'Realtor'}</div>
                <div><span className="font-bold">Representation:</span> {formData.representation.toUpperCase()}</div>
                <div><span className="font-bold">Target Close:</span> {formData.targetClosingDate || 'TBD'}</div>
                <div><span className="font-bold">Purchase Price:</span> {formData.purchasePrice ? `$${formData.purchasePrice}` : 'Confidential'}</div>
              </div>
            </div>

            <button
              onClick={resetForm}
              className="w-full bg-[#FE7311] hover:bg-[#e05f03] text-white font-bold py-3.5 px-6 rounded-xl shadow-lg transition cursor-pointer"
            >
              Done & Return to Homepage
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Step indicator */}
            <div className="flex items-center justify-between text-xs font-semibold text-[#3A2E29]/70 border-b border-[#D8D2D4] pb-4">
              <div className={`flex items-center space-x-2 ${step >= 1 ? 'text-[#FE7311] font-bold' : ''}`}>
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 1 ? 'bg-[#FE7311] text-white' : 'bg-slate-300'}`}>1</span>
                <span>Property & Price</span>
              </div>
              <div className="w-8 h-px bg-[#D8D2D4]" />
              <div className={`flex items-center space-x-2 ${step >= 2 ? 'text-[#FE7311] font-bold' : ''}`}>
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 2 ? 'bg-[#FE7311] text-white' : 'bg-slate-300'}`}>2</span>
                <span>Parties & Dates</span>
              </div>
              <div className="w-8 h-px bg-[#D8D2D4]" />
              <div className={`flex items-center space-x-2 ${step >= 3 ? 'text-[#FE7311] font-bold' : ''}`}>
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 3 ? 'bg-[#FE7311] text-white' : 'bg-slate-300'}`}>3</span>
                <span>Contract & Upload</span>
              </div>
            </div>

            {/* STEP 1 */}
            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#3A2E29] uppercase tracking-wider mb-1">
                    Property Address *
                  </label>
                  <input
                    type="text"
                    name="propertyAddress"
                    required
                    value={formData.propertyAddress}
                    onChange={handleChange}
                    placeholder="e.g. 1421 Brickell Ave, Unit 2804"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D8D2D4] focus:outline-none focus:ring-2 focus:ring-[#0D9BA3] bg-white text-sm"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#3A2E29] uppercase tracking-wider mb-1">
                      City / Area *
                    </label>
                    <select
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#D8D2D4] focus:outline-none focus:ring-2 focus:ring-[#0D9BA3] bg-white text-sm"
                    >
                      <option value="Miami">Miami / Brickell</option>
                      <option value="Miami Beach">Miami Beach</option>
                      <option value="Coral Gables">Coral Gables / Pinecrest</option>
                      <option value="Fort Lauderdale">Fort Lauderdale</option>
                      <option value="Boca Raton">Boca Raton</option>
                      <option value="Palm Beach">Palm Beach</option>
                      <option value="Other Florida">Other Florida Area</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#3A2E29] uppercase tracking-wider mb-1">
                      Purchase Price ($)
                    </label>
                    <input
                      type="text"
                      name="purchasePrice"
                      value={formData.purchasePrice}
                      onChange={handleChange}
                      placeholder="e.g. 850,000"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#D8D2D4] focus:outline-none focus:ring-2 focus:ring-[#0D9BA3] bg-white text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#3A2E29] uppercase tracking-wider mb-1">
                      Representation *
                    </label>
                    <select
                      name="representation"
                      value={formData.representation}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#D8D2D4] focus:outline-none focus:ring-2 focus:ring-[#0D9BA3] bg-white text-sm"
                    >
                      <option value="buyer">Buyer's Agent</option>
                      <option value="seller">Listing / Seller's Agent</option>
                      <option value="dual">Dual / Transaction Broker</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#3A2E29] uppercase tracking-wider mb-1">
                      Target Closing Date *
                    </label>
                    <input
                      type="date"
                      name="targetClosingDate"
                      required
                      value={formData.targetClosingDate}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#D8D2D4] focus:outline-none focus:ring-2 focus:ring-[#0D9BA3] bg-white text-sm"
                    />
                  </div>
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="bg-[#3A2E29] hover:bg-[#2A201C] text-white px-6 py-2.5 rounded-xl font-bold text-sm flex items-center space-x-2 transition cursor-pointer"
                  >
                    <span>Next: Parties & Agent Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#3A2E29] uppercase tracking-wider mb-1">
                      Realtor Name *
                    </label>
                    <input
                      type="text"
                      name="agentName"
                      required
                      value={formData.agentName}
                      onChange={handleChange}
                      placeholder="Your Full Name"
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
                      placeholder="e.g. Compass / ONE Sotheby's"
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
                      name="agentEmail"
                      required
                      value={formData.agentEmail}
                      onChange={handleChange}
                      placeholder="realtor@brokerage.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#D8D2D4] focus:outline-none focus:ring-2 focus:ring-[#0D9BA3] bg-white text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#3A2E29] uppercase tracking-wider mb-1">
                      Cell Phone *
                    </label>
                    <input
                      type="tel"
                      name="agentPhone"
                      required
                      value={formData.agentPhone}
                      onChange={handleChange}
                      placeholder="(305) 000-0000"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#D8D2D4] focus:outline-none focus:ring-2 focus:ring-[#0D9BA3] bg-white text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#3A2E29] uppercase tracking-wider mb-1">
                      Buyer Name(s)
                    </label>
                    <input
                      type="text"
                      name="buyerName"
                      value={formData.buyerName}
                      onChange={handleChange}
                      placeholder="Buyer Full Name"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#D8D2D4] focus:outline-none focus:ring-2 focus:ring-[#0D9BA3] bg-white text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#3A2E29] uppercase tracking-wider mb-1">
                      Seller Name(s)
                    </label>
                    <input
                      type="text"
                      name="sellerName"
                      value={formData.sellerName}
                      onChange={handleChange}
                      placeholder="Seller Full Name"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#D8D2D4] focus:outline-none focus:ring-2 focus:ring-[#0D9BA3] bg-white text-sm"
                    />
                  </div>
                </div>

                <div className="flex justify-between pt-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-4 py-2 text-sm text-[#3A2E29] hover:text-[#FE7311] font-bold cursor-pointer"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="bg-[#3A2E29] hover:bg-[#2A201C] text-white px-6 py-2.5 rounded-xl font-bold text-sm flex items-center space-x-2 transition cursor-pointer"
                  >
                    <span>Next: Upload Contract File</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#3A2E29] uppercase tracking-wider mb-2">
                    Attach Executed FAR/BAR Contract (PDF/Docs)
                  </label>
                  <div className="border-2 border-dashed border-[#D8D2D4] hover:border-[#0D9BA3] bg-white p-6 rounded-2xl text-center cursor-pointer transition">
                    <Upload className="w-8 h-8 text-[#FE7311] mx-auto mb-2" />
                    <p className="text-xs font-bold text-[#3A2E29]">
                      Drag & Drop FAR/BAR executed contract file here, or <span className="text-[#FE7311]">browse files</span>
                    </p>
                    <p className="text-[11px] text-slate-500 mt-1 font-medium">
                      Supports PDF, DOCX, ZIP up to 25MB (FAR/BAR As-Is, Standard, HOA Riders)
                    </p>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#3A2E29] uppercase tracking-wider mb-1">
                    Special Notes or Critical Contingencies
                  </label>
                  <textarea
                    name="notes"
                    rows={3}
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="e.g. 7-day inspection period, expedited earnest money deposit, lender is cross-country..."
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D8D2D4] focus:outline-none focus:ring-2 focus:ring-[#0D9BA3] bg-white text-sm"
                  />
                </div>

                <div className="bg-[#EEEAEB] p-3 rounded-xl border border-[#D8D2D4] flex items-start space-x-3 text-xs text-[#3A2E29] font-medium">
                  <AlertCircle className="w-4 h-4 text-[#FE7311] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-[#3A2E29]">Fee Structure Note:</p>
                    <p className="text-[11px] text-[#3A2E29]/80 mt-0.5">
                      Standard billing upon successful closing. Complete compliance file archive provided upon closing.
                    </p>
                  </div>
                </div>

                <div className="flex justify-between pt-4 border-t border-[#D8D2D4]">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-4 py-2 text-sm text-[#3A2E29] hover:text-[#FE7311] font-bold cursor-pointer"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="bg-[#FE7311] hover:bg-[#e05f03] text-white px-8 py-3 rounded-xl font-bold text-sm flex items-center space-x-2 shadow-lg hover:shadow-xl transition cursor-pointer"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Submit File for Review</span>
                  </button>
                </div>
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
};
