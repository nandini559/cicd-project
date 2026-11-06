import React from 'react';
import { Link } from 'react-router-dom';
import { SECTORS } from '../data/mockData';
import { Building2, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';

export const SectorsPage: React.FC = () => {
  return (
    <div className="bg-[#FAF8F5] text-slate-800">
      {/* Header */}
      <section className="bg-[#0B221E] text-white py-20 lg:py-24 border-b border-[#C2A268]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#C2A268] uppercase block mb-3">
              Practice Areas
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-medium tracking-tight text-white">
              Sectors of Expertise
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
              We operate exclusively across financial services and corporate sectors where deep domain literacy, established networks, and regulatory knowledge are paramount.
            </p>
          </div>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SECTORS.map((sector) => (
            <div
              key={sector.id}
              className="bg-white border border-slate-200/90 hover:border-[#C2A268] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Sector Image Banner */}
                <div className="h-48 overflow-hidden relative border-b border-slate-100">
                  <img
                    src={sector.image}
                    alt={sector.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B221E]/80 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-4 text-xs font-semibold uppercase tracking-wider text-[#C2A268]">
                    Specialist Practice
                  </span>
                </div>

                <div className="p-6 sm:p-7">
                  <h2 className="text-2xl font-heading font-medium text-[#0B221E] group-hover:text-[#C2A268] transition-colors mb-2">
                    {sector.title}
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 italic mb-4">
                    {sector.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {sector.description}
                  </p>

                  <div className="space-y-1.5 border-t border-slate-100 pt-4">
                    <p className="text-xs font-semibold tracking-wider text-slate-900 uppercase mb-2">
                      Key Mandates:
                    </p>
                    {sector.keyRoles.slice(0, 3).map((role, idx) => (
                      <p key={idx} className="text-xs text-slate-600 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C2A268] shrink-0"></span>
                        <span className="truncate">{role}</span>
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  to={`/sectors/${sector.slug}`}
                  className="w-full py-2.5 px-4 bg-[#FAF8F5] group-hover:bg-[#0B221E] border border-[#C2A268]/40 text-[#0B221E] group-hover:text-[#C2A268] font-semibold text-xs tracking-wider uppercase transition-colors flex items-center justify-between"
                >
                  <span>Explore Sector Insights</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
