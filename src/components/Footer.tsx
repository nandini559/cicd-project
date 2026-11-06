import React from 'react';
import { Link } from 'react-router-dom';
import { ElevateLogo } from './ElevateLogo';
import { SECTORS } from '../data/mockData';
import { MapPin, Phone, Mail, ArrowUpRight, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#071815] text-slate-300 border-t border-[#C2A268]/20">
      {/* Top Pre-Footer Callout */}
      <div className="bg-[#0B221E] border-b border-[#C2A268]/20 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold tracking-[0.25em] text-[#C2A268] uppercase block mb-2">
                Partner With Elevate
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-medium text-white tracking-tight">
                Reaching New Heights in Financial Recruitment.
              </h2>
              <p className="mt-2 text-sm text-slate-400">
                Whether appointing C-suite leadership, sourcing contract specialists, or planning your next career milestone, our directors are ready to assist.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/register-vacancy"
                className="px-6 py-3.5 bg-[#C2A268] hover:bg-[#e4cf9b] text-[#0B221E] font-semibold text-xs tracking-wider uppercase transition-colors"
              >
                Register a Vacancy
              </Link>
              <Link
                to="/jobs"
                className="px-6 py-3.5 border border-[#C2A268]/60 hover:border-[#C2A268] text-white hover:text-[#C2A268] font-semibold text-xs tracking-wider uppercase transition-colors"
              >
                Search Openings
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-5">
            <ElevateLogo />
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Elevate Partners is a boutique recruitment consultancy firm connecting exceptional talent with industry-leading opportunities across the financial services sector.
            </p>
            <div className="pt-2 flex items-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#C2A268]/40 flex items-center justify-center text-[#C2A268] hover:bg-[#C2A268] hover:text-[#0B221E] transition-colors"
                aria-label="Follow Elevate Partners on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <span className="text-xs text-slate-400">Connect on LinkedIn</span>
            </div>
          </div>

          {/* Sectors Column */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold tracking-[0.2em] text-[#C2A268] uppercase">
              Sectors of Expertise
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {SECTORS.slice(0, 7).map((sector) => (
                <li key={sector.id}>
                  <Link
                    to={`/sectors/${sector.slug}`}
                    className="hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span>{sector.title}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#C2A268]" />
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/sectors" className="text-[#C2A268] hover:underline pt-1 inline-block">
                  View all sectors →
                </Link>
              </li>
            </ul>
          </div>

          {/* Talent Solutions Column */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-semibold tracking-[0.2em] text-[#C2A268] uppercase">
              Solutions
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link to="/expertise#permanent-recruitment" className="hover:text-white transition-colors">
                  Permanent Recruitment
                </Link>
              </li>
              <li>
                <Link to="/expertise#executive-search" className="hover:text-white transition-colors">
                  Executive Search
                </Link>
              </li>
              <li>
                <Link to="/expertise#contract-solutions" className="hover:text-white transition-colors">
                  Temporary & Contracting
                </Link>
              </li>
              <li>
                <Link to="/expertise#talent-mapping" className="hover:text-white transition-colors">
                  Talent Mapping
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-white transition-colors">
                  Our Directors & Team
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="hover:text-white transition-colors">
                  Client Testimonials
                </Link>
              </li>
              <li>
                <Link to="/insights" className="hover:text-white transition-colors">
                  News & Insights
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Offices Column */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold tracking-[0.2em] text-[#C2A268] uppercase">
              Offices & Contact
            </h3>
            <div className="space-y-4 text-xs text-slate-400">
              <div>
                <p className="font-semibold text-slate-200 flex items-center gap-1.5 mb-0.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C2A268]" /> Dublin Headquarters
                </p>
                <p className="text-slate-400 pl-5">
                  29/30 Fitzwilliam Square South<br />
                  Dublin 2, D02 RF20, Ireland
                </p>
              </div>

              <div>
                <p className="font-semibold text-slate-200 flex items-center gap-1.5 mb-0.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C2A268]" /> London Office
                </p>
                <p className="text-slate-400 pl-5">
                  12 Hay Hill, Mayfair<br />
                  London, W1J 8NR, United Kingdom
                </p>
              </div>

              <div className="pt-2 border-t border-[#C2A268]/15 space-y-1.5 pl-5">
                <p className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#C2A268]" />
                  <a href="tel:+35316916022" className="hover:text-white transition-colors">
                    +353 1 691 6022
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#C2A268]" />
                  <a href="mailto:info@elevatepartners.ie" className="hover:text-white transition-colors">
                    info@elevatepartners.ie
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="mt-12 pt-8 border-t border-[#C2A268]/20 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Elevate Partners Ltd. Registered in Ireland. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="hover:text-slate-300 transition-colors">Privacy Notice</Link>
            <Link to="/contact" className="hover:text-slate-300 transition-colors">Cookie Policy</Link>
            <Link to="/contact" className="hover:text-slate-300 transition-colors">Terms of Business</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
