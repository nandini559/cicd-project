import React, { useState } from 'react';
import { TEAM_MEMBERS } from '../data/mockData';
import { Mail, Phone, Linkedin, MapPin, CheckCircle, Search } from 'lucide-react';

export const TeamPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const filteredTeam = TEAM_MEMBERS.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.sectors.some((s) => s.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesLocation =
      selectedLocation === 'all' || member.location.toLowerCase().includes(selectedLocation.toLowerCase());

    return matchesSearch && matchesLocation;
  });

  return (
    <div className="bg-[#FAF8F5] text-slate-800">
      {/* Header */}
      <section className="bg-[#0B221E] text-white py-20 lg:py-24 border-b border-[#C2A268]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#C2A268] uppercase block mb-3">
              Leadership & Consultants
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-medium tracking-tight text-white">
              Meet Our Team
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
              Partner-led search execution. Our directors and specialized consultants bring deep market immersion, trusted industry reputations, and unwavering client advocacy.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by consultant or sector..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs bg-[#FAF8F5] border border-slate-200 focus:border-[#0B221E] outline-none rounded-none"
              />
            </div>

            {/* Location Filter */}
            <div className="flex items-center gap-2 self-start sm:self-auto">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Office:</span>
              <button
                onClick={() => setSelectedLocation('all')}
                className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
                  selectedLocation === 'all'
                    ? 'bg-[#0B221E] text-[#C2A268]'
                    : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setSelectedLocation('dublin')}
                className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
                  selectedLocation === 'dublin'
                    ? 'bg-[#0B221E] text-[#C2A268]'
                    : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900'
                }`}
              >
                Dublin
              </button>
              <button
                onClick={() => setSelectedLocation('london')}
                className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
                  selectedLocation === 'london'
                    ? 'bg-[#0B221E] text-[#C2A268]'
                    : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900'
                }`}
              >
                London
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTeam.map((member) => (
            <div
              key={member.id}
              className="bg-white border border-slate-200/90 hover:border-[#C2A268] shadow-sm hover:shadow-md transition-all duration-300 p-8 flex flex-col justify-between"
            >
              <div>
                {/* Avatar with Initials & Monogram Style */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-[#0B221E] text-[#C2A268] border border-[#C2A268]/40 flex items-center justify-center font-heading font-semibold text-lg tracking-wider">
                    {member.initials}
                  </div>
                  <span className="flex items-center gap-1 text-xs text-slate-500 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#C2A268]" /> {member.location}
                  </span>
                </div>

                <h2 className="text-2xl font-heading font-medium text-[#0B221E]">
                  {member.name}
                </h2>
                <p className="text-xs font-semibold text-[#C2A268] uppercase tracking-wider mt-1 mb-4">
                  {member.role}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {member.bio}
                </p>

                <div className="pt-4 border-t border-slate-100 mb-6">
                  <p className="text-xs font-semibold tracking-wider text-slate-900 uppercase mb-2">
                    Sectors Covered:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {member.sectors.map((s, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-[#FAF8F5] text-slate-700 px-2.5 py-1 border border-slate-200"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Actions */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                <a
                  href={`mailto:${member.email}`}
                  className="hover:text-[#0B221E] flex items-center gap-1.5 font-medium transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#C2A268]" /> {member.email}
                </a>
                <a
                  href={`tel:${member.phone}`}
                  className="hover:text-[#0B221E] flex items-center gap-1 font-medium transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C2A268]" /> Call
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
