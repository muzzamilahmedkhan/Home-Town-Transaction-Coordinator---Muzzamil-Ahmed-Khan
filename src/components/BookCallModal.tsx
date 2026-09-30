import React from 'react';
import { X, ExternalLink } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const BookCallModal: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/70 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#EEEAEB] rounded-2xl shadow-2xl border border-[#D8D2D4] overflow-hidden my-4 sm:my-8 flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="bg-[#3A2E29] text-white p-4 sm:p-5 border-b border-[#0D9BA3]/30 flex items-center justify-between shrink-0">
          <div>
            <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0D9BA3]">
              BOOK A FIT CALL
            </div>
            <h3 className="text-lg sm:text-xl font-montserrat font-extrabold text-white mt-0.5">
              Let’s See If We’re a Fit.
            </h3>
            <p className="text-xs text-slate-300 font-normal mt-0.5">
              15-minute conversation with Michelle Martinez · Live HTC availability
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-full hover:bg-white/10 transition cursor-pointer self-start"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Embedded Google Calendar Appointment Schedule */}
        <div className="flex-1 bg-white overflow-hidden p-2 sm:p-4">
          <div className="w-full h-[540px] sm:h-[600px] overflow-hidden rounded-xl border border-[#D8D2D4] bg-[#FAF8F5]">
            <iframe
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0Aq8b6n9TW5mnsVd09MomMdJtodNKkv8cMjFkbt9npg4fWJpD9VWafHkmAKYENmIHvYOLcd_-O?gv=true"
              style={{ width: '100%', height: '100%', border: 0 }}
              frameBorder="0"
              title="Schedule a 15-Minute Fit Call with Hometown TC"
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-[#FAF8F5] px-4 py-3 border-t border-[#D8D2D4] flex items-center justify-between text-xs text-[#3A2E29] shrink-0">
          <span className="text-slate-500 hidden sm:inline">
            Directly synced to Michelle’s Google Calendar.
          </span>
          <a
            href="https://calendar.app.google/BZAmWb4fz4UhKcJ88"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 font-bold text-[#0D9BA3] hover:text-[#0b7c82] transition underline"
          >
            <span>Open in Google Calendar</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};

