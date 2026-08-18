import React from 'react';
import { Star, Quote, ArrowRight, ShieldCheck, Phone } from 'lucide-react';
import { REAL_REVIEWS, Review } from '../data/reviews';

interface Props {
  onGoHome: () => void;
  onBookCall: () => void;
  onSubmitDeal: () => void;
}

export const ReviewsPage: React.FC<Props> = ({
  onGoHome,
  onBookCall,
  onSubmitDeal
}) => {
  // Find Heather's review to feature
  const featuredReview = REAL_REVIEWS.find(r => r.id === 'heather') || REAL_REVIEWS[0];
  
  // The rest of the reviews
  const gridReviews = REAL_REVIEWS.filter(r => r.id !== featuredReview.id);

  return (
    <div className="bg-[#EEEAEB] text-[#3A2E29] min-h-screen">
      {/* 1. SEO / AEO Header Section */}
      <section className="bg-[#3A2E29] text-white pt-28 pb-16 border-b border-[#0D9BA3]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
          <div className="inline-flex items-center space-x-1.5 bg-[#0D9BA3]/20 border border-[#0D9BA3]/40 px-3 py-1 rounded-full text-xs font-bold text-[#0D9BA3] uppercase tracking-wider mx-auto">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Hometown Transaction Coordinators Reviews</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-serif tracking-tight max-w-4xl mx-auto leading-tight">
            Real Stories from Florida Agents
          </h1>
          
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Agents remember how a process felt. These true stories from our clients demonstrate the relief, clarity, and professionalism HTC creates for their business.
          </p>

          <div className="pt-4">
            <button
              onClick={onBookCall}
              className="bg-[#FE7311] hover:bg-[#e05f03] text-white px-6 py-3 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition flex items-center space-x-2 mx-auto cursor-pointer"
            >
              <span>Book a Fit Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. Featured Story-Length Testimonial */}
      <section className="py-16 sm:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#D8D2D4] shadow-xl flex flex-col md:flex-row gap-8 items-center md:items-start">
          
          <div className="md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden shadow-md border border-[#D8D2D4]">
              <img
                src={featuredReview.image}
                alt={featuredReview.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 right-3 bg-[#3A2E29] text-[#0D9BA3] p-2 rounded-xl shadow-lg">
                <Quote className="w-5 h-5 text-[#FE7311]" />
              </div>
            </div>
            <div>
              <div className="text-xl font-montserrat font-extrabold text-[#3A2E29]">
                {featuredReview.name}
              </div>
              <div className="text-xs font-bold text-[#0D9BA3] uppercase tracking-wider mt-1">
                {featuredReview.brokerage || featuredReview.source}
              </div>
            </div>
          </div>

          <div className="md:w-2/3 space-y-6">
            <div className="flex items-center justify-center md:justify-start space-x-1 text-[#FE7311]">
              {[...Array(featuredReview.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#FE7311]" />
              ))}
            </div>

            {featuredReview.highlight && (
              <h3 className="text-2xl font-bold text-[#0D9BA3] font-serif italic">
                "{featuredReview.highlight}"
              </h3>
            )}

            <blockquote className="text-lg sm:text-xl font-medium text-[#3A2E29] leading-relaxed">
              {featuredReview.quote}
            </blockquote>
          </div>
          
        </div>
      </section>

      {/* 3. Short Testimonial Grid */}
      <section className="pb-24 bg-[#EEEAEB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3A2E29] font-serif">
              Trusted by Top Producers Statewide
            </h2>
            <p className="text-sm text-[#3A2E29]/70 font-medium">
              Verified feedback from active Florida Realtors. No stock faces, no invented quotes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gridReviews.map((rev) => (
              <div
                key={rev.id}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-[#D8D2D4] shadow-sm flex flex-col h-full hover:shadow-md transition duration-300"
              >
                <div className="flex text-[#FE7311] mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FE7311]" />
                  ))}
                </div>

                <blockquote className="flex-grow text-sm sm:text-base text-[#3A2E29]/90 italic font-medium leading-relaxed mb-6">
                  "{rev.quote}"
                </blockquote>

                <div className="flex items-center space-x-4 pt-4 border-t border-[#D8D2D4]/60">
                  <img
                    src={rev.image}
                    alt={rev.name}
                    className="w-12 h-12 rounded-full object-cover border border-[#D8D2D4]"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="text-sm font-bold text-[#3A2E29]">{rev.name}</div>
                    <div className="text-[11px] font-bold text-[#0D9BA3] uppercase tracking-wider mt-0.5">
                      {rev.brokerage || rev.source}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Final CTA */}
      <section className="py-20 bg-[#3A2E29] text-white border-t border-[#0D9BA3]/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-serif">
            Ready to experience this level of support?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Stop chasing signatures and start closing more deals. Book a quick fit call to see if Hometown TC is the right fit for your real estate business.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onBookCall}
              className="w-full sm:w-auto px-8 py-4 bg-[#FE7311] hover:bg-[#e05f03] text-white font-extrabold text-sm uppercase tracking-wider rounded-xl transition shadow-xl hover:shadow-[#FE7311]/25 flex items-center justify-center space-x-2 cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>Book a Fit Call</span>
            </button>
            <button
              onClick={onSubmitDeal}
              className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-[#0D9BA3] text-[#0D9BA3] hover:bg-[#0D9BA3] hover:text-white font-extrabold text-sm uppercase tracking-wider rounded-xl transition flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>Submit a Deal</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
