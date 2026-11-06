import React, { useState } from 'react';
import { JOBS, SECTORS } from '../data/mockData';
import { Job } from '../types';
import { JobModal } from '../components/JobModal';
import { Search, MapPin, Briefcase, Filter, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const JobsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSector, setSelectedSector] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const filteredJobs = JOBS.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesSector = selectedSector === 'all' || job.sectorId === selectedSector;
    const matchesType = selectedType === 'all' || job.type === selectedType;

    return matchesSearch && matchesSector && matchesType;
  });

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedSector('all');
    setSelectedType('all');
  };

  return (
    <div className="bg-[#FAF8F5] text-slate-800">
      {/* Header */}
      <section className="bg-[#0B221E] text-white py-20 lg:py-24 border-b border-[#C2A268]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#C2A268] uppercase block mb-3">
              Careers Portal
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-medium tracking-tight text-white">
              Job Search & Current Mandates
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
              Explore specialized opportunities across aircraft leasing, private debt, wealth management, risk, and corporate finance.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Toolbar */}
      <section className="sticky top-[69px] z-30 bg-white border-b border-slate-200 shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            {/* Search Input */}
            <div className="md:col-span-5 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search job title, keyword, or reference..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs bg-[#FAF8F5] border border-slate-300 focus:border-[#0B221E] outline-none rounded-none"
              />
            </div>

            {/* Sector Dropdown */}
            <div className="md:col-span-4">
              <select
                value={selectedSector}
                onChange={(e) => setSelectedSector(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-[#FAF8F5] border border-slate-300 focus:border-[#0B221E] outline-none rounded-none text-slate-700"
              >
                <option value="all">All Sectors</option>
                {SECTORS.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Contract Type Dropdown */}
            <div className="md:col-span-3 flex items-center gap-2">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-[#FAF8F5] border border-slate-300 focus:border-[#0B221E] outline-none rounded-none text-slate-700"
              >
                <option value="all">All Contract Types</option>
                <option value="Permanent">Permanent</option>
                <option value="Contract">Temporary & Contract</option>
                <option value="Executive Search">Executive Search</option>
              </select>

              {(searchTerm || selectedSector !== 'all' || selectedType !== 'all') && (
                <button
                  onClick={clearFilters}
                  className="px-2.5 py-2 text-xs bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-none shrink-0"
                  title="Clear filters"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Results */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-200">
          <p className="text-xs font-semibold tracking-wider text-slate-600 uppercase">
            Showing <span className="text-[#0B221E] font-bold">{filteredJobs.length}</span> Open Positions
          </p>
          <p className="text-xs text-slate-500">
            Updated daily by our Dublin & London teams
          </p>
        </div>

        {filteredJobs.length > 0 ? (
          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white p-6 sm:p-8 border border-slate-200 hover:border-[#C2A268] transition-all shadow-sm hover:shadow-md flex flex-col md:flex-row md:items-center justify-between gap-6 group"
              >
                <div className="space-y-3 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-3 text-xs">
                    <span className="font-semibold text-[#C2A268] uppercase tracking-wider">
                      {job.sectorName}
                    </span>
                    <span className="text-slate-300">·</span>
                    <span className="text-slate-500 bg-[#FAF8F5] px-2.5 py-0.5 border border-slate-200">
                      {job.type}
                    </span>
                    <span className="text-slate-300">·</span>
                    <span className="text-slate-400">Ref: {job.id}</span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-heading font-medium text-[#0B221E] group-hover:text-[#C2A268] transition-colors">
                    {job.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-6 text-xs text-slate-500 pt-1">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#C2A268]" /> {job.location}
                    </span>
                    <span className="font-semibold text-slate-900">
                      {job.salary}
                    </span>
                    <span className="text-slate-400">
                      Posted {job.postedDate}
                    </span>
                  </div>
                </div>

                <div className="flex md:flex-col items-center md:items-end justify-between gap-3 shrink-0 pt-4 md:pt-0 border-t md:border-t-0 border-slate-100">
                  <button
                    onClick={() => setSelectedJob(job)}
                    className="w-full sm:w-auto px-6 py-3 bg-[#0B221E] hover:bg-[#153f36] text-[#C2A268] font-semibold text-xs tracking-wider uppercase transition-colors"
                  >
                    View & Apply
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white p-12 text-center border border-dashed border-slate-300 space-y-4">
            <h3 className="text-xl font-heading font-medium text-slate-900">
              No Open Roles Match Your Exact Filter
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
              Many of our senior executive and confidential mandates are not publicly advertised. Speak directly with a director or submit your CV speculatively.
            </p>
            <div className="pt-2 flex justify-center gap-4">
              <button
                onClick={clearFilters}
                className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-xs font-semibold uppercase tracking-wider"
              >
                Reset Filters
              </button>
              <Link
                to="/contact"
                className="px-5 py-2.5 bg-[#0B221E] text-white text-xs font-semibold uppercase tracking-wider"
              >
                Send Speculative CV
              </Link>
            </div>
          </div>
        )}
      </section>

      {/* Confidential Search Banner */}
      <section className="bg-[#F4EFEA] border-t border-[#E5DFD5] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-heading font-semibold text-[#0B221E]">
                Looking for an Off-Market Search or Career Guidance?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Our directors maintain discreet conversations with senior leaders contemplating their next move.
              </p>
            </div>
            <Link
              to="/contact"
              className="px-6 py-3 bg-[#0B221E] hover:bg-[#153f36] text-white font-semibold text-xs tracking-wider uppercase transition-colors shrink-0"
            >
              Request Confidential Discussion
            </Link>
          </div>
        </div>
      </section>

      {/* Modal */}
      <JobModal job={selectedJob} onClose={() => setSelectedJob(null)} />
    </div>
  );
};
