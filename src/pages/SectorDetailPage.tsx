import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SECTORS, JOBS, TEAM_MEMBERS } from '../data/mockData';
import { Job } from '../types';
import { JobModal } from '../components/JobModal';
import { ArrowLeft, CheckCircle2, MapPin, Briefcase, Mail, Phone, ArrowRight } from 'lucide-react';

export const SectorDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const sector = SECTORS.find((s) => s.slug === slug);

  if (!sector) {
    return <Navigate to="/sectors" replace />;
  }

  const relatedJobs = JOBS.filter((j) => j.sectorId === sector.id);
  const relatedConsultants = TEAM_MEMBERS.filter((m) =>
    m.sectors.some((s) => s.toLowerCase().includes(sector.title.toLowerCase().slice(0, 8)))
  );

  return (
    <div className="bg-[#FAF8F5] text-slate-800">
      {/* Header Banner */}
      <section className="bg-[#0B221E] text-white py-20 lg:py-24 border-b border-[#C2A268]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/sectors"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#C2A268] uppercase hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to All Sectors
          </Link>
          <div className="max-w-3xl">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#C2A268] uppercase block mb-3">
              Sector Practice
            </span>
            <h1 className="text-4xl sm:text-5xl font-heading font-medium tracking-tight text-white">
              {sector.title}
            </h1>
            <p className="mt-3 text-lg text-[#C2A268] font-light italic">
              {sector.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Split */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Deep Dive */}
          <div className="lg:col-span-8 space-y-12">
            <div>
              <h2 className="text-2xl font-heading font-semibold text-[#0B221E] mb-4">
                Overview & Industry Positioning
              </h2>
              <p className="text-base text-slate-700 leading-relaxed">
                {sector.description}
              </p>
            </div>

            <div className="bg-white p-8 border border-slate-200/90 shadow-sm">
              <h3 className="text-xs font-semibold tracking-[0.2em] text-[#C2A268] uppercase mb-3">
                Market Insights & Talent Dynamics
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                {sector.marketInsights}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-heading font-semibold text-[#0B221E] mb-6">
                Representative Mandates & Roles Placed
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {sector.keyRoles.map((role, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-3.5 bg-white border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#C2A268] shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-slate-800">{role}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Current Vacancies in Sector */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-heading font-semibold text-[#0B221E]">
                  Current Openings in {sector.title}
                </h3>
                <Link
                  to="/jobs"
                  className="text-xs font-semibold tracking-wider text-[#C2A268] hover:text-[#0B221E] uppercase"
                >
                  View All Openings →
                </Link>
              </div>

              {relatedJobs.length > 0 ? (
                <div className="space-y-4">
                  {relatedJobs.map((job) => (
                    <div
                      key={job.id}
                      className="bg-white p-6 border border-slate-200 hover:border-[#C2A268] transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    >
                      <div>
                        <div className="text-xs text-slate-500 mb-1 flex items-center gap-2">
                          <span className="font-semibold text-[#C2A268] uppercase">{job.type}</span>
                          <span>·</span>
                          <span>{job.location}</span>
                        </div>
                        <h4 className="text-lg font-heading font-medium text-[#0B221E]">{job.title}</h4>
                        <p className="text-xs text-slate-600 font-medium mt-1">{job.salary}</p>
                      </div>
                      <button
                        onClick={() => setSelectedJob(job)}
                        className="px-4 py-2 bg-[#0B221E] hover:bg-[#153f36] text-white text-xs font-semibold tracking-wider uppercase transition-colors shrink-0"
                      >
                        Details & Apply
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white p-8 text-center border border-dashed border-slate-300">
                  <p className="text-sm text-slate-600 mb-4">
                    Several confidential search mandates in {sector.title} are currently being conducted privately off-market.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#0B221E] text-white text-xs font-semibold tracking-wider uppercase"
                  >
                    Contact Practice Lead
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Practice Leaders & Mandate Registration */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-[#0B221E] text-white p-8 border border-[#C2A268]/30">
              <span className="text-xs font-semibold tracking-[0.2em] text-[#C2A268] uppercase block mb-2">
                Hiring in {sector.title}?
              </span>
              <h3 className="text-2xl font-heading font-medium text-white mb-3">
                Instruct a Search Mandate
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                Receive direct partner consultation, compensation benchmarking, and a tailored search methodology.
              </p>
              <Link
                to="/register-vacancy"
                className="w-full inline-flex items-center justify-center gap-2 py-3 bg-[#C2A268] hover:bg-[#e4cf9b] text-[#0B221E] font-semibold text-xs tracking-wider uppercase transition-colors"
              >
                Register a Mandate
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Specialist Contacts */}
            <div className="bg-white p-6 border border-slate-200">
              <h3 className="text-xs font-semibold tracking-[0.2em] text-slate-900 uppercase mb-4">
                Sector Advisors
              </h3>
              <div className="space-y-4">
                {(relatedConsultants.length > 0 ? relatedConsultants : TEAM_MEMBERS.slice(0, 2)).map((m) => (
                  <div key={m.id} className="border-b border-slate-100 pb-3 last:border-b-0 last:pb-0">
                    <p className="font-semibold text-slate-900 text-sm">{m.name}</p>
                    <p className="text-xs text-slate-500 mb-2">{m.role}</p>
                    <div className="flex items-center gap-3 text-xs text-slate-600">
                      <a href={`mailto:${m.email}`} className="hover:text-[#C2A268] flex items-center gap-1">
                        <Mail className="w-3 h-3 text-[#C2A268]" /> Email
                      </a>
                      <a href={`tel:${m.phone}`} className="hover:text-[#C2A268] flex items-center gap-1">
                        <Phone className="w-3 h-3 text-[#C2A268]" /> Call
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <JobModal job={selectedJob} onClose={() => setSelectedJob(null)} />
    </div>
  );
};
