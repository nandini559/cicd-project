import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../data/mockData';
import { CheckCircle2, ArrowRight, Users, Briefcase, FileSearch, ShieldCheck } from 'lucide-react';

export const ExpertisePage: React.FC = () => {
  return (
    <div className="bg-[#FAF8F5] text-slate-800">
      {/* Hero Header */}
      <section className="bg-[#0B221E] text-white py-20 lg:py-24 border-b border-[#C2A268]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#C2A268] uppercase block mb-3">
              Talent Solutions
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-medium tracking-tight text-white">
              Our Expertise & Services
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
              From mission-critical executive appointments to rapid-response interim consulting, Elevate Partners provides bespoke human capital solutions tailored to the financial services sector.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Breakdown */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Service 1: Permanent Recruitment */}
        <div id="permanent-recruitment" className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#C2A268]"></span>
              <span className="text-xs font-semibold tracking-[0.25em] text-[#C2A268] uppercase">
                Service 01
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-medium text-[#0B221E] tracking-tight">
              Permanent Recruitment
            </h2>
            <p className="text-base text-slate-700 leading-relaxed">
              Our permanent recruitment practice delivers comprehensive candidate identification, rigorous competence assessment, and cultural alignment for long-term strategic hires.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="bg-white p-5 border border-slate-200">
                <h3 className="text-xs font-semibold tracking-wider text-[#0B221E] uppercase mb-2">
                  For Organizations
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We build customized talent pipelines, benchmark competitive compensation packages, and discreetly engage passive tier-one candidates.
                </p>
              </div>
              <div className="bg-white p-5 border border-slate-200">
                <h3 className="text-xs font-semibold tracking-wider text-[#0B221E] uppercase mb-2">
                  For Candidates
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We take the time to understand your long-term ambitions, matching you with institutions whose vision and values elevate your trajectory.
                </p>
              </div>
            </div>
            <ul className="space-y-2 pt-2 text-xs sm:text-sm text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C2A268] shrink-0" />
                <span>Deep passive candidate networks across Dublin, London, and European financial hubs</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C2A268] shrink-0" />
                <span>Structured competency and behavioural assessments</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C2A268] shrink-0" />
                <span>Offer negotiation and transition support</span>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-5">
            <div className="bg-[#0B221E] text-white p-8 border border-[#C2A268]/30">
              <h3 className="text-xl font-heading font-medium text-[#C2A268] mb-4">
                Partner-Led Delivery
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                Unlike volume recruitment agencies, every permanent mandate is personally managed by an experienced director who understands the nuances of your business.
              </p>
              <Link
                to="/register-vacancy"
                className="w-full inline-flex items-center justify-center gap-2 py-3 bg-[#C2A268] text-[#0B221E] font-semibold text-xs tracking-wider uppercase hover:bg-[#e4cf9b] transition-colors"
              >
                Initiate a Permanent Mandate
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Service 2: Retained & Executive Search */}
        <div id="executive-search" className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-12 border-t border-slate-200">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-tl-[80px] rounded-br-[30px] shadow-xl border border-[#E5DFD5]">
              <img
                src="/src/assets/images/executive_business_meeting_1793948665733.jpg"
                alt="Executive Search Boardroom"
                className="w-full h-[380px] object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#C2A268]"></span>
              <span className="text-xs font-semibold tracking-[0.25em] text-[#C2A268] uppercase">
                Service 02
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-medium text-[#0B221E] tracking-tight">
              Retained & Executive Search
            </h2>
            <p className="text-base text-slate-700 leading-relaxed">
              For board appointments, C-suite succession, and managing director placements, our retained search practice provides rigorous research, absolute discretion, and global market access.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              We operate on an exclusive, retained basis to ensure uncompromised diligence. Every candidate undergoes exhaustive background verification, reference evaluation, and strategic alignment testing.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-white border border-slate-200 text-xs text-slate-700">C-Suite Placements</span>
              <span className="px-3 py-1 bg-white border border-slate-200 text-xs text-slate-700">Non-Executive Directors (NED)</span>
              <span className="px-3 py-1 bg-white border border-slate-200 text-xs text-slate-700">Managing Directors & Partners</span>
              <span className="px-3 py-1 bg-white border border-slate-200 text-xs text-slate-700">Designated Persons (CP86)</span>
            </div>
          </div>
        </div>

        {/* Service 3: Temporary & Contract Solutions (Screenshot 236 Recreation) */}
        <div id="contract-solutions" className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-12 border-t border-slate-200">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#C2A268]"></span>
              <span className="text-xs font-semibold tracking-[0.25em] text-[#C2A268] uppercase">
                Service 03
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-medium text-[#C2A268] tracking-tight">
              Supporting Candidates
            </h2>
            <p className="text-base text-slate-700 leading-relaxed">
              At Elevate Partners, we understand that flexibility, speed, and support are key to a successful temporary or contract assignment. Whether you're seeking short-term opportunities or looking to build a long-term contracting career, our dedicated team is here to guide you every step of the way.
            </p>
            <p className="text-base text-slate-700 leading-relaxed">
              From matching you with the right roles to ensuring smooth onboarding and ongoing support throughout your placement, we’re committed to helping you thrive. With access to leading employers in the financial services industry and a wide range of assignments, we empower you to work on your terms while gaining valuable experience and exposure.
            </p>
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/jobs"
                className="px-6 py-3 bg-[#0B221E] hover:bg-[#153f36] text-white font-semibold text-xs tracking-wider uppercase transition-colors"
              >
                Browse Contract Assignments
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 border border-[#0B221E] hover:border-[#C2A268] text-[#0B221E] hover:text-[#C2A268] font-semibold text-xs tracking-wider uppercase transition-colors"
              >
                Speak with Contracting Consultant
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-tl-[85px] md:rounded-tl-[120px] rounded-br-[35px] shadow-2xl border border-[#E5DFD5]">
              <img
                src="/public/assets/aistudio/Screenshot__236__c852f41c.png"
                alt="Supporting Candidates at Elevate Partners"
                className="w-full h-[420px] object-cover object-right"
              />
            </div>
          </div>
        </div>

        {/* Service 4: Talent Mapping & Market Intelligence */}
        <div id="talent-mapping" className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-12 border-t border-slate-200">
          <div className="lg:col-span-5">
            <div className="bg-white p-8 border border-slate-200 shadow-sm space-y-4">
              <FileSearch className="w-10 h-10 text-[#C2A268]" />
              <h3 className="text-xl font-heading font-medium text-[#0B221E]">
                Data-Driven Talent Insights
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Strategic market reports that empower boards to forecast hiring needs, benchmark executive retention packages, and evaluate organizational structures.
              </p>
              <div className="pt-2 border-t border-slate-100 text-xs font-semibold text-[#0B221E]">
                Includes Diversity Metrics & Compensation Quartiles
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#C2A268]"></span>
              <span className="text-xs font-semibold tracking-[0.25em] text-[#C2A268] uppercase">
                Service 04
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-medium text-[#0B221E] tracking-tight">
              Talent Mapping & Intelligence
            </h2>
            <p className="text-base text-slate-700 leading-relaxed">
              Before committing to new team structures or office expansions, boards require granular clarity on market availability. Elevate Partners conducts comprehensive competitor talent mapping.
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C2A268] shrink-0" />
                <span>Organizational structure benchmarking of European peers</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C2A268] shrink-0" />
                <span>Real-time compensation and incentive scheme data</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C2A268] shrink-0" />
                <span>Feasibility and talent pool availability analyses</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="bg-[#0B221E] text-white py-16 border-t border-[#C2A268]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-heading font-medium mb-4">
            Discuss Your Talent Requirements with a Director
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto mb-8">
            Whether you require an immediate interim solution or are planning an executive search mandate, our senior partners are available for a confidential consultation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/register-vacancy"
              className="px-8 py-3.5 bg-[#C2A268] hover:bg-[#e4cf9b] text-[#0B221E] font-semibold text-xs tracking-wider uppercase transition-colors"
            >
              Register a Vacancy
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3.5 border border-white hover:border-[#C2A268] text-white hover:text-[#C2A268] font-semibold text-xs tracking-wider uppercase transition-colors"
            >
              Contact Our Directors
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
