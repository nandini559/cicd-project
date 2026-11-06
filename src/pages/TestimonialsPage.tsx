import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/mockData';
import { Link } from 'react-router-dom';
import { Quote, ArrowRight, CheckCircle2 } from 'lucide-react';

export const TestimonialsPage: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'client' | 'candidate'>('all');

  const filteredTestimonials = filter === 'all'
    ? TESTIMONIALS
    : TESTIMONIALS.filter(t => t.type === filter);

  return (
    <div className="bg-[#FAF8F5] text-slate-800">
      {/* Header */}
      <section className="bg-[#0B221E] text-white py-20 lg:py-24 border-b border-[#C2A268]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#C2A268] uppercase block mb-3">
              Reputation & Trust
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-medium tracking-tight text-white">
              Client & Candidate Testimonials
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
              We measure our success by the endurance of our relationships. Hear what managing directors, HR leaders, and placed executives say about partnering with Elevate Partners.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-6 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-colors ${
                filter === 'all'
                  ? 'bg-[#0B221E] text-[#C2A268]'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              All Endorsements
            </button>
            <button
              onClick={() => setFilter('client')}
              className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-colors ${
                filter === 'client'
                  ? 'bg-[#0B221E] text-[#C2A268]'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              Client Feedback
            </button>
            <button
              onClick={() => setFilter('candidate')}
              className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-colors ${
                filter === 'candidate'
                  ? 'bg-[#0B221E] text-[#C2A268]'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              Candidate Experiences
            </button>
          </div>

          <span className="hidden sm:inline text-xs text-slate-500 font-medium">
            Verified Partner Reviews
          </span>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredTestimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white p-8 sm:p-10 border border-slate-200 hover:border-[#C2A268] transition-all shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-6">
                  <span className="font-semibold text-[#C2A268] uppercase tracking-wider">{item.sector}</span>
                  <span className="bg-[#FAF8F5] px-2 py-0.5 border border-slate-200 capitalize">{item.type}</span>
                </div>

                <div className="text-4xl text-[#C2A268] font-serif leading-none mb-4">“</div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic mb-8">
                  {item.quote}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <p className="font-heading font-semibold text-slate-900 text-base">{item.author}</p>
                <p className="text-xs text-slate-500">{item.role}</p>
                <p className="text-xs text-[#C2A268] font-medium mt-0.5">{item.company}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 bg-[#0B221E] text-white p-10 sm:p-12 text-center border border-[#C2A268]/30 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-heading font-medium text-white mb-3">
            Experience the Elevate Partners Standard
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto mb-8">
            Connect directly with one of our directors to discuss how our partner-led approach can accelerate your hiring or career progression.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-3.5 bg-[#C2A268] hover:bg-[#e4cf9b] text-[#0B221E] font-semibold text-xs tracking-wider uppercase transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              to="/register-vacancy"
              className="px-8 py-3.5 border border-white hover:border-[#C2A268] text-white hover:text-[#C2A268] font-semibold text-xs tracking-wider uppercase transition-colors"
            >
              Register a Vacancy
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
