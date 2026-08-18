import React, { useEffect } from 'react';
import { ShieldCheck, Clock, Phone, Mail, FileText, Users, AlertCircle } from 'lucide-react';

interface Props {
  onGoHome: () => void;
  onOpenPricing: () => void;
  onOpenFaq: () => void;
  onBookCall?: () => void;
}

const PHONE_NUMBER = '(954) 377-8330';
const EMAIL_ADDRESS = 'support@hometowntc.com';

export const SubmitDealPage: React.FC<Props> = ({
  onGoHome,
  onOpenPricing,
  onOpenFaq,
  onBookCall
}) => {
  useEffect(() => {
    if (!document.querySelector('script[src="https://server.fillout.com/embed/v1/"]')) {
      const script = document.createElement('script');
      script.src = "https://server.fillout.com/embed/v1/";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const checklistItems = [
    {
      icon: <FileText className="w-5 h-5 text-[#0D9BA3]" />,
      title: "Signed Agreement",
      desc: "Have the signed agreement that apply to this order ready to upload in one single file."
    },
    {
      icon: <Users className="w-5 h-5 text-[#FE7311]" />,
      title: "Contact Information",
      desc: "Have the buyer and/or seller's full contact information ready."
    },
    {
      icon: <AlertCircle className="w-5 h-5 text-[#3A2E29]" />,
      title: "Anything We Should Know?",
      desc: "Tell us what is missing, pending, unusual, or time-sensitive in the form so we can navigate it from the start."
    }
  ];

  return (
    <div className="bg-[#EEEAEB] text-[#3A2E29] min-h-screen pb-24">

      {/* 1. HERO */}
      <section className="bg-[#3A2E29] text-white pt-28 pb-10 px-4 sm:px-6 lg:px-8 border-b border-[#0D9BA3]/30">
        <div className="max-w-4xl mx-auto space-y-3 text-center">
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white font-serif">
            Submit a New Deal
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Nice work — you've got business moving. Give us the details below and we'll take it from here.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">

        {/* 2. HAVE THIS READY CHECKLIST */}
        <div className="bg-white rounded-2xl shadow-sm border border-[#D8D2D4] px-6 py-6 sm:px-8 sm:py-7">
          <h3 className="text-xs font-extrabold text-[#3A2E29] uppercase tracking-widest mb-5">
            Have This Ready
          </h3>
          <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#E8E4E5]">
            {checklistItems.map((item, idx) => (
              <div key={idx} className="flex flex-col gap-2 sm:px-6 py-4 sm:py-0 first:pl-0 last:pr-0">
                <div>{item.icon}</div>
                <strong className="text-sm font-bold text-[#3A2E29]">{item.title}</strong>
                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. EMBEDDED FILLOUT FORM */}
        <div className="bg-white rounded-3xl border border-[#D8D2D4] shadow-xl overflow-hidden w-full">
          <div
            style={{ width: '100%', height: '800px' }}
            data-fillout-id="m2YU3nCffEus"
            data-fillout-embed-type="standard"
            data-fillout-inherit-parameters
            data-fillout-dynamic-resize
          ></div>
        </div>

        {/* 4. WHAT HAPPENS NEXT + NEED HELP — side by side on desktop */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* What Happens Next */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#D8D2D4] shadow-sm space-y-3">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-[#FE7311]" />
              <h4 className="font-bold text-[#3A2E29] text-sm uppercase tracking-wider">What Happens Next?</h4>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              A confirmation email will be in your inbox after you submit your order. Please review it to make sure everything is correct and reply directly to that email if anything needs to be changed.
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              Files are opened in the order received. Requests received before <strong className="text-[#3A2E29]">3:00 PM EST</strong> are expected to be opened the same business day.
            </p>
          </div>

          {/* Need Help Submitting */}
          <div className="bg-[#3A2E29] text-white rounded-2xl p-6 sm:p-8 border border-[#0D9BA3]/30 shadow-sm space-y-3">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-5 h-5 text-[#0D9BA3]" />
              <h4 className="font-bold text-white text-sm uppercase tracking-wider">Need Help Submitting?</h4>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              If the form will not load or Fillout is unavailable, call/text us or email{' '}
              <a href={`mailto:${EMAIL_ADDRESS}`} className="text-[#0D9BA3] font-bold hover:underline">{EMAIL_ADDRESS}</a>{' '}
              with the agreement and contact information. We'll take it from there.
            </p>
            <div className="flex flex-col space-y-2.5 pt-1">
              <a href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`} className="flex items-center space-x-2 text-xs font-bold hover:text-[#FE7311] transition">
                <Phone className="w-4 h-4" />
                <span>Call/Text: {PHONE_NUMBER}</span>
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
