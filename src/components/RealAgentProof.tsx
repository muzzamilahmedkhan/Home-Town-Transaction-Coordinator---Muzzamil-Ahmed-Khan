import React, { useState } from 'react';
import { Star, Quote, ShieldCheck, ArrowRight, X } from 'lucide-react';
import { REAL_REVIEWS, Review } from '../data/reviews';

const featuredReview: Review = {
  id: '2',
  name: 'Zuzel Gonzalez',
  source: 'Google My Business',
  image: 'https://lh3.googleusercontent.com/a/ACg8ocK6Qs8mWgTN--8BMsdGhmLUzxCzkLFw3MGMsqU1dJE1HIV1gw=w72-h72-p-rp-mo-br100',
  quote: 'Michelle is my go to transaction coordinator for all of my real estate deals. She is always organized, professional, and on top of every detail from start to finish. I honestly couldn’t do my transactions without her support.',
  rating: 5,
  highlight: 'Essential Transaction Partner',
  brokerage: 'Florida Realtor'
};

const supportingReviews: Review[] = [
  {
    id: '1',
    name: 'Gaby Martinez',
    source: 'Google My Business',
    image: 'https://lh3.googleusercontent.com/a-/ALV-UjWH3xZRFT5Ko1A_GOJcQsqaRzSf3goifTAAdXYeW2reMs9O3B5bOg=w72-h72-p-rp-mo-br100',
    quote: 'Michelle and Mary are absolutely amazing Transaction Coordinators! Their attention to detail, organization, and communication are truly unmatched. They keep every file on track and make the entire process smooth and stress-free.',
    rating: 5,
    brokerage: 'Xtreme By LPT Realty'
  },
  {
    id: '6',
    name: 'Cindy Rios',
    source: 'Google My Business',
    image: 'https://lh3.googleusercontent.com/a-/ALV-UjWdguXoyY1fUwmN1Eu4zcLq6rU1-jhRRaBS_NyrEfPnsSovnx8R=w72-h72-p-rp-mo-br100',
    quote: 'Michelle takes so much weight off my shoulders and keeps everything running smoothly at all times. Her understanding of real estate laws gives me complete peace of mind because I know nothing is being overlooked.',
    rating: 5,
    highlight: 'Complete Peace of Mind',
    brokerage: 'Florida Realtor'
  },
  {
    id: '7',
    name: 'Jill Cox',
    source: 'Google My Business',
    image: 'https://lh3.googleusercontent.com/a-/ALV-UjXgtaHo5mlNfHSLiqw5fMSp_ZmhbFvb13yQvK5P7KhHpb9G514SZg=w72-h72-p-rp-mo-ba12-br100',
    quote: 'Michelle and her powerhouse team at Hometown TC are a game-changer for real estate agents. Ultra-organized, super proactive, and an above-and-beyond approach to supporting busy real estate professionals.',
    rating: 5,
    highlight: 'Game-Changer for Agents',
    brokerage: 'Florida Realtor'
  }
];

export const RealAgentProof: React.FC = () => {
  const [showAllReviewsModal, setShowAllReviewsModal] = useState(false);

  return (
    <section id="agent-proof" className="py-16 sm:py-20 bg-[#EEEAEB] border-b border-[#D8D2D4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0D9BA3] bg-white px-3.5 py-1.5 rounded-full border border-[#D8D2D4] shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-[#FE7311]" />
            <span>FROM FLORIDA REALTORS</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-montserrat font-extrabold text-[#3A2E29]">
            What Realtors Say About Working With HTC
          </h2>
          
          <p className="text-sm sm:text-base text-[#3A2E29]/80 leading-relaxed font-medium">
            Real experiences from agents who trust HTC behind their listings, contracts, and closings.
          </p>
        </div>

        {/* 1. Featured Testimonial Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#D8D2D4] shadow-md max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Agent Photo & Identity */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left space-y-3">
            <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-2xl overflow-hidden shadow border border-[#D8D2D4]">
              <img
                src={featuredReview.image}
                alt={featuredReview.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-2.5 right-2.5 bg-[#3A2E29] text-[#0D9BA3] p-1.5 rounded-lg">
                <Quote className="w-4 h-4 text-[#FE7311]" />
              </div>
            </div>
            <div>
              <div className="text-lg font-montserrat font-extrabold text-[#3A2E29]">
                {featuredReview.name}
              </div>
              <div className="text-xs font-bold text-[#0D9BA3] uppercase tracking-wider">
                {featuredReview.brokerage || featuredReview.source}
              </div>
            </div>
          </div>

          {/* Quote & Details */}
          <div className="md:col-span-8 space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-1 text-[#FE7311]">
              {[...Array(featuredReview.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#FE7311]" />
              ))}
              <span className="text-xs font-bold text-[#3A2E29]/70 ml-2">
                {featuredReview.source}
              </span>
            </div>

            <blockquote className="text-lg sm:text-xl font-montserrat font-bold text-[#3A2E29] leading-relaxed italic">
              “{featuredReview.quote}”
            </blockquote>
          </div>

        </div>

        {/* 2. Three Smaller Supporting Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {supportingReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl p-6 border border-[#D8D2D4] shadow-sm flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <img
                    src={rev.image}
                    alt={rev.name}
                    className="w-10 h-10 rounded-full object-cover border border-[#D8D2D4]"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="text-sm font-bold text-[#3A2E29]">{rev.name}</div>
                    <div className="text-xs font-medium text-[#0D9BA3]">{rev.brokerage || rev.source}</div>
                  </div>
                </div>

                <div className="flex text-[#FE7311]">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#FE7311]" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-[#3A2E29]/80 italic font-medium leading-relaxed">
                  “{rev.quote}”
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 3. Simple Read More Reviews Link */}
        <div className="text-center pt-2">
          <button
            onClick={() => setShowAllReviewsModal(true)}
            className="text-[#0D9BA3] hover:text-[#0b8288] font-bold text-sm sm:text-base underline underline-offset-4 transition inline-flex items-center space-x-1.5 cursor-pointer"
          >
            <span>Read More Agent Reviews</span>
            <ArrowRight className="w-4 h-4 text-[#FE7311]" />
          </button>
        </div>

      </div>

      {/* Light Modal for All Reviews */}
      {showAllReviewsModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 space-y-6 relative max-h-[85vh] overflow-y-auto shadow-2xl border border-[#D8D2D4]">
            
            <div className="flex items-center justify-between border-b border-[#D8D2D4] pb-4">
              <div>
                <h3 className="text-xl font-montserrat font-extrabold text-[#3A2E29]">
                  Client Reviews & Recommendations
                </h3>
                <p className="text-xs text-[#3A2E29]/70 font-medium">
                  Feedback from Florida Realtors, brokers, and partners.
                </p>
              </div>
              <button
                onClick={() => setShowAllReviewsModal(false)}
                className="p-2 rounded-full hover:bg-[#EEEAEB] text-[#3A2E29] transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              {REAL_REVIEWS.map((rev) => (
                <div key={rev.id} className="bg-[#EEEAEB] p-5 rounded-2xl border border-[#D8D2D4] space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <img
                        src={rev.image}
                        alt={rev.name}
                        className="w-8 h-8 rounded-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <div className="text-sm font-bold text-[#3A2E29]">{rev.name}</div>
                        <div className="text-xs text-[#0D9BA3] font-semibold">{rev.brokerage || rev.source}</div>
                      </div>
                    </div>
                    <div className="flex text-[#FE7311]">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-[#FE7311]" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-[#3A2E29]/85 italic font-medium leading-relaxed">
                    “{rev.quote}”
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2 text-center">
              <button
                onClick={() => setShowAllReviewsModal(false)}
                className="bg-[#3A2E29] text-white px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-black transition cursor-pointer"
              >
                Close Reviews
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};




