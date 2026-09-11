import React, { useState } from 'react';
import { Mail, CheckCircle2, ArrowRight, ShieldCheck, Bell } from 'lucide-react';

export interface NewsletterSignupProps {
  variant?: 'full-section' | 'card' | 'compact';
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  sourceLocation?: string;
  source?: string;
  viewMode?: 'live' | 'blueprint';
  className?: string;
}

export const NewsletterSignup: React.FC<NewsletterSignupProps> = ({
  variant = 'full-section',
  title = 'New tools should come to you.',
  subtitle = 'Get new Briefs, tools, templates, and free resources as we release them.',
  eyebrow = 'STAY IN THE LOOP',
  sourceLocation = 'resource-library',
  source,
  viewMode = 'live',
  className = ''
}) => {
  const actualSource = source || sourceLocation;
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !firstName) return;
    setIsSubmitted(true);
  };

  // 1. COMPACT VARIANT (For sidebars, small callout boxes)
  if (variant === 'compact') {
    return (
      <div className={`bg-white rounded-2xl border border-[#D8D2D4] p-5 shadow-xs space-y-3.5 ${className}`}>
        <div className="flex items-center space-x-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-[#0D9BA3]">
          <Bell className="w-3.5 h-3.5 text-[#0D9BA3]" />
          <span>{eyebrow}</span>
        </div>

        <div>
          <h4 className="font-montserrat font-extrabold text-base text-[#3A2E29] leading-snug">
            {title}
          </h4>
          <p className="text-xs text-slate-600 font-medium mt-1 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {isSubmitted ? (
          <div className="bg-[#0D9BA3]/10 border border-[#0D9BA3]/30 rounded-xl p-3.5 text-center space-y-1.5 animate-in fade-in duration-200">
            <CheckCircle2 className="w-5 h-5 text-[#0D9BA3] mx-auto" />
            <p className="font-montserrat font-bold text-xs text-[#3A2E29]">
              You're in the dispatch loop, {firstName}!
            </p>
            <p className="text-[11px] text-slate-600">
              Dispatches will be sent to <strong className="text-[#3A2E29]">{email}</strong>.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-2 pt-1">
            <input
              type="text"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              className="w-full px-3 py-2 bg-[#FAF8F5] border border-[#D8D2D4] rounded-lg text-xs text-[#3A2E29] placeholder:text-slate-400 font-medium focus:outline-none focus:border-[#0D9BA3] focus:bg-white transition shadow-2xs"
            />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Agent Email Address"
              className="w-full px-3 py-2 bg-[#FAF8F5] border border-[#D8D2D4] rounded-lg text-xs text-[#3A2E29] placeholder:text-slate-400 font-medium focus:outline-none focus:border-[#0D9BA3] focus:bg-white transition shadow-2xs"
            />
            <button
              type="submit"
              className="w-full bg-[#0D9BA3] hover:bg-[#087177] text-white py-2.5 px-4 rounded-lg text-xs font-montserrat font-bold uppercase tracking-wider transition cursor-pointer shadow-xs flex items-center justify-center space-x-1.5"
            >
              <span>DISPATCH NEW TOOLS TO ME</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <p className="text-[10px] font-mono text-center text-slate-400">
              Florida real estate files only • No spam, ever
            </p>
          </form>
        )}
      </div>
    );
  }

  // 2. CARD VARIANT (For Resource Landing Pages & Blog Post footers)
  if (variant === 'card') {
    return (
      <section 
        aria-label="Newsletter Subscription"
        className={`bg-white rounded-2xl sm:rounded-3xl border border-[#D8D2D4] p-6 sm:p-8 lg:p-10 shadow-xs relative overflow-hidden ${className}`}
      >
        <div className="max-w-4xl mx-auto">
          {isSubmitted ? (
            <div className="bg-[#FAF8F5] border border-[#0D9BA3]/30 rounded-2xl p-6 sm:p-8 text-center space-y-3 shadow-2xs animate-in fade-in duration-200">
              <div className="w-12 h-12 rounded-full bg-[#0D9BA3]/10 text-[#0D9BA3] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-montserrat font-extrabold text-xl text-[#3A2E29]">
                You're in the dispatch loop, {firstName}!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-md mx-auto leading-relaxed">
                We'll deliver new Florida transaction checklists, legal briefs, and automation tools straight to <strong className="text-[#3A2E29]">{email}</strong> as soon as they're released.
              </p>
              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  setFirstName('');
                  setEmail('');
                }}
                className="text-xs font-mono font-bold text-[#0D9BA3] hover:underline cursor-pointer pt-2 inline-block"
              >
                Update subscription details
              </button>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-10">
              <div className="space-y-2 max-w-md">
                <div className="inline-flex items-center space-x-1.5 text-[11px] font-mono font-bold uppercase tracking-widest text-[#0D9BA3] bg-[#0D9BA3]/10 px-2.5 py-1 rounded-md border border-[#0D9BA3]/25">
                  <Bell className="w-3.5 h-3.5 text-[#0D9BA3]" />
                  <span>{eyebrow}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-montserrat font-extrabold text-[#3A2E29] tracking-tight leading-snug">
                  {title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                  {subtitle}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="w-full lg:max-w-md space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div>
                    <label htmlFor={`newsletter-card-name-${sourceLocation}`} className="sr-only">
                      First Name
                    </label>
                    <input
                      id={`newsletter-card-name-${sourceLocation}`}
                      type="text"
                      required
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="First Name"
                      className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#D8D2D4] rounded-xl text-xs text-[#3A2E29] placeholder:text-slate-400 font-medium focus:outline-none focus:border-[#0D9BA3] focus:bg-white transition shadow-2xs"
                    />
                  </div>
                  <div>
                    <label htmlFor={`newsletter-card-email-${sourceLocation}`} className="sr-only">
                      Agent Email
                    </label>
                    <input
                      id={`newsletter-card-email-${sourceLocation}`}
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Agent Email Address"
                      className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#D8D2D4] rounded-xl text-xs text-[#3A2E29] placeholder:text-slate-400 font-medium focus:outline-none focus:border-[#0D9BA3] focus:bg-white transition shadow-2xs"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0D9BA3] hover:bg-[#087177] text-white py-3 px-4 rounded-xl text-xs font-montserrat font-extrabold uppercase tracking-wider transition cursor-pointer shadow-xs flex items-center justify-center space-x-2 group"
                >
                  <Mail className="w-3.5 h-3.5 text-white" />
                  <span>SEND NEW RELEASES TO MY INBOX</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-0.5">
                  <span className="flex items-center space-x-1">
                    <ShieldCheck className="w-3 h-3 text-[#0D9BA3]" />
                    <span>Florida Realtors & Brokers Only</span>
                  </span>
                  <span>Unsubscribe with 1-click anytime</span>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>
    );
  }

  // 3. FULL-SECTION VARIANT (Main Free Guides + Downloads page Section 9)
  return (
    <section 
      id="section-newsletter" 
      aria-labelledby="newsletter-heading"
      className={`bg-white rounded-2xl sm:rounded-3xl border border-[#D8D2D4] p-6 sm:p-8 lg:p-10 shadow-xs transition-all ${className}`}
    >
      <div className="max-w-4xl mx-auto">
        {isSubmitted ? (
          <div className="bg-[#FAF8F5] border border-[#0D9BA3]/30 rounded-2xl p-6 sm:p-8 text-center space-y-3 shadow-2xs animate-in fade-in duration-200">
            <div className="w-12 h-12 rounded-full bg-[#0D9BA3]/10 text-[#0D9BA3] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="font-montserrat font-extrabold text-lg sm:text-xl text-[#3A2E29]">
              You're in the dispatch loop, {firstName}!
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-md mx-auto leading-relaxed">
              We'll deliver new Florida transaction checklists, legal briefs, and automation tools straight to <strong className="text-[#3A2E29]">{email}</strong> as soon as they're released.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  setFirstName('');
                  setEmail('');
                }}
                className="text-[11px] font-mono font-bold text-[#0D9BA3] hover:underline cursor-pointer"
              >
                Update subscription details
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-10">
            {/* Left Content Area: Compact & Direct */}
            <div className="space-y-2 max-w-md">
              {/* Requested Eyebrow: STAY IN THE LOOP */}
              <div className="flex items-center space-x-2">
                <span className="inline-flex items-center space-x-1.5 text-[11px] font-mono font-bold uppercase tracking-widest text-[#0D9BA3] bg-[#0D9BA3]/10 px-2.5 py-1 rounded-md border border-[#0D9BA3]/25">
                  <Bell className="w-3.5 h-3.5 text-[#0D9BA3]" />
                  <span>{eyebrow}</span>
                </span>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider hidden sm:inline">
                  • SECTION 9
                </span>
              </div>

              {/* Requested Headline: New tools should come to you. */}
              <h2 
                id="newsletter-heading"
                className="text-xl sm:text-2xl lg:text-3xl font-montserrat font-extrabold text-[#3A2E29] tracking-tight leading-snug"
              >
                {title}
              </h2>

              {/* Requested Subtext: Get new Briefs, tools, templates, and free resources as we release them. */}
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                {subtitle}
              </p>
            </div>

            {/* Right Form Area: Clean, Short, Non-bloated Inputs */}
            <form onSubmit={handleSubmit} className="w-full lg:max-w-md space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {/* Field 1: First Name */}
                <div>
                  <label htmlFor={`newsletter-first-name-${sourceLocation}`} className="sr-only">
                    First Name
                  </label>
                  <input
                    id={`newsletter-first-name-${sourceLocation}`}
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#D8D2D4] rounded-xl text-xs text-[#3A2E29] placeholder:text-slate-400 font-medium focus:outline-none focus:border-[#0D9BA3] focus:bg-white transition shadow-2xs"
                  />
                </div>

                {/* Field 2: Email */}
                <div>
                  <label htmlFor={`newsletter-email-${sourceLocation}`} className="sr-only">
                    Agent Email Address
                  </label>
                  <input
                    id={`newsletter-email-${sourceLocation}`}
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Agent Email Address"
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#D8D2D4] rounded-xl text-xs text-[#3A2E29] placeholder:text-slate-400 font-medium focus:outline-none focus:border-[#0D9BA3] focus:bg-white transition shadow-2xs"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full bg-[#0D9BA3] hover:bg-[#087177] text-white py-3 px-4 rounded-xl text-xs font-montserrat font-extrabold uppercase tracking-wider transition cursor-pointer shadow-xs flex items-center justify-center space-x-2 group"
              >
                <Mail className="w-3.5 h-3.5 text-white" />
                <span>SEND NEW RELEASES TO MY INBOX</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Trust Tagline */}
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-0.5">
                <span className="flex items-center space-x-1">
                  <ShieldCheck className="w-3 h-3 text-[#0D9BA3]" />
                  <span>Florida Realtors & Brokers Only</span>
                </span>
                <span>Unsubscribe with 1-click anytime</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};
