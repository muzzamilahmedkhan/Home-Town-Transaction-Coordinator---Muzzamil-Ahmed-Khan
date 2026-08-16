import React, { useEffect } from 'react';
import { ShieldCheck, CheckCircle2, Clock, Phone, Mail, FileCheck2 } from 'lucide-react';
import { PHONE_NUMBER, EMAIL_ADDRESS } from '../data/content';

interface Props {
  onGoHome: () => void;
  onOpenPricing: () => void;
  onOpenFaq: () => void;
  onBookCall?: () => void;
}

export const SubmitDealPage: React.FC<Props> = ({
  onGoHome,
  onOpenPricing,
  onOpenFaq,
  onBookCall
}) => {
  // Dynamically load fillout script if not already present
  useEffect(() => {
    if (!document.querySelector('script[src="https://server.fillout.com/embed/v1/"]')) {
      const script = document.createElement('script');
      script.src = "https://server.fillout.com/embed/v1/";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const checklistItems = [
    { title: "Executed Contract", subtitle: "Fully signed by all parties." },
    { title: "Escrow Deposit Receipt", subtitle: "Or title company contact info." },
    { title: "Contact Info", subtitle: "Co-op agent, lender, and title details." }
  ];

  return (
    <div className="bg-[#EEEAEB] text-[#3A2E29] min-h-screen pb-24">
      {/* 1. UTILITY HEADER */}
      <section className="bg-[#3A2E29] text-white pt-32 pb-16 px-4 sm:px-6 lg:px-8 border-b border-[#0D9BA3]/30">
        <div className="max-w-4xl mx-auto space-y-4 text-center">
          <div className="inline-flex items-center space-x-2 bg-[#0D9BA3]/20 border border-[#0D9BA3]/40 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#0D9BA3] tracking-wide mx-auto">
            <FileCheck2 className="w-3.5 h-3.5" />
            <span>SECURE INTAKE PORTAL</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white font-serif">
            Submit a New Deal
          </h1>
          
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Please have your fully executed contract and party contact information ready. Your file will be processed within 4 business hours.
          </p>
        </div>
      </section>

      {/* 2. INSTRUCTIONS & CHECKLIST */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 space-y-8">
        
        <div className="bg-white rounded-2xl shadow-lg border border-[#D8D2D4] p-6 sm:p-8 flex flex-col md:flex-row gap-6 md:items-center justify-between">
          <div className="space-y-4 flex-1">
            <h3 className="font-extrabold text-[#3A2E29] uppercase tracking-wider text-sm flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0D9BA3]" />
              Required Information Checklist
            </h3>
            <div className="grid sm:grid-cols-3 gap-4 pt-1">
              {checklistItems.map((item, idx) => (
                <div key={idx} className="bg-[#EEEAEB] rounded-xl px-4 py-3.5 border border-[#D8D2D4]">
                  <strong className="block text-xs font-bold text-[#3A2E29] mb-1">{item.title}</strong>
                  <span className="text-[11px] text-slate-600 leading-snug block">{item.subtitle}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3. EMBEDDED FILLOUT FORM */}
        <div className="bg-white rounded-3xl border border-[#D8D2D4] shadow-xl overflow-hidden min-h-[800px] flex flex-col relative w-full">
           <div 
             style={{ width: '100%', height: '800px' }} 
             data-fillout-id="m2YU3nCffEus" 
             data-fillout-embed-type="standard" 
             data-fillout-inherit-parameters 
             data-fillout-dynamic-resize
           ></div>
        </div>

        {/* 4. POST-SUBMISSION EXPECTATIONS & SUPPORT */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#D8D2D4] shadow-sm space-y-4">
            <div className="flex items-center space-x-2 text-[#FE7311]">
              <Clock className="w-5 h-5" />
              <h4 className="font-bold text-[#3A2E29] text-sm uppercase tracking-wider">What Happens Next?</h4>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Once submitted, you will receive a confirmation email. We will review the executed contract, set up your compliance portal, and send the introductory email to all parties (Lender, Title, Co-op Agent, and Client) within <strong className="text-[#3A2E29]">4 business hours</strong>.
            </p>
          </div>

          <div className="bg-[#3A2E29] text-white rounded-2xl p-6 sm:p-8 border border-[#0D9BA3]/30 shadow-sm space-y-4">
            <div className="flex items-center space-x-2 text-[#0D9BA3]">
              <ShieldCheck className="w-5 h-5" />
              <h4 className="font-bold text-white text-sm uppercase tracking-wider">Need Immediate Support?</h4>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed pb-2 font-medium">
              If the form fails to load or you are submitting a time-sensitive file nearing a deadline, bypass this form and contact us directly.
            </p>
            <div className="flex flex-col space-y-3">
              <a href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`} className="flex items-center space-x-2 text-xs font-bold hover:text-[#FE7311] transition">
                <Phone className="w-4 h-4" />
                <span>Text/Call: {PHONE_NUMBER}</span>
              </a>
              <a href={`mailto:${EMAIL_ADDRESS}`} className="flex items-center space-x-2 text-xs font-bold hover:text-[#0D9BA3] transition">
                <Mail className="w-4 h-4" />
                <span>Email: {EMAIL_ADDRESS}</span>
              </a>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};
