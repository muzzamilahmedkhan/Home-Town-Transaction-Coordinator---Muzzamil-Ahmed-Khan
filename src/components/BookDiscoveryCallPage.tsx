import React from 'react';
import {
  Clock
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
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight font-montserrat">
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

      {/* 2. SCHEDULING WIDGET — LIVE GOOGLE APPOINTMENT SCHEDULE */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#D8D2D4] shadow-xl relative">
          
          {/* Widget Header */}
          <div className="border-b border-[#D8D2D4] pb-5 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-[#0D9BA3]" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0D9BA3]">
                  15-Minute Conversation · Google Meet
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#3A2E29] font-montserrat">
                Select a Time with Michelle Martinez
              </h2>
            </div>

            <div className="text-left sm:text-right">
              <div className="text-xs font-mono text-slate-500">Live Availability</div>
              <div className="text-xs font-bold text-[#3A2E29]">Synced with HTC Google Calendar</div>
            </div>
          </div>

          {/* Embedded Google Calendar Appointment Schedule */}
          <div className="w-full overflow-hidden rounded-2xl border border-[#D8D2D4] bg-[#FAF8F5] shadow-inner">
            <iframe
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0Aq8b6n9TW5mnsVd09MomMdJtodNKkv8cMjFkbt9npg4fWJpD9VWafHkmAKYENmIHvYOLcd_-O?gv=true"
              style={{ width: '100%', height: '760px', border: 0 }}
              frameBorder="0"
              title="Schedule a 15-Minute Fit Call with Hometown TC"
              className="w-full h-[760px]"
            />
          </div>

          {/* Fallback / Direct Link */}
          <div className="mt-6 pt-4 border-t border-[#D8D2D4] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#3A2E29]">
            <span className="text-slate-600">
              Direct connection powered by Google Workspace Appointment Scheduling.
            </span>
            <a
              href="https://calendar.app.google/BZAmWb4fz4UhKcJ88"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 font-bold text-[#0D9BA3] hover:text-[#0b7c82] transition underline"
            >
              <span>Open in Google Calendar</span>
              <span>↗</span>
            </a>
          </div>
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
