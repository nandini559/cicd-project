import React, { useState } from 'react';
import { SECTORS } from '../data/mockData';
import { CheckCircle2, Upload, Send, ShieldCheck, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

export const RegisterVacancyPage: React.FC = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    roleTitle: '',
    sectorId: 'aircraft-leasing',
    contractType: 'Permanent',
    seniority: 'Executive / Director',
    targetStartDate: '',
    salaryBracket: '',
    jobDescription: '',
    fileName: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
    if (!formData.contactName.trim()) newErrors.contactName = 'Contact person name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid business email is required';
    if (!formData.roleTitle.trim()) newErrors.roleTitle = 'Role title is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, fileName: e.target.files[0].name });
    }
  };

  return (
    <div className="bg-[#FAF8F5] text-slate-800">
      {/* Header */}
      <section className="bg-[#0B221E] text-white py-20 lg:py-24 border-b border-[#C2A268]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#C2A268] uppercase block mb-3">
              Employer Mandate Portal
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-medium tracking-tight text-white">
              Register a Vacancy
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
              Instruct our partner-led search practice. We will conduct immediate talent mapping, benchmark current market remuneration, and present an elite shortlist of candidates.
            </p>
          </div>
        </div>
      </section>

      {/* Main Registration Form */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 sm:p-12 border border-slate-200/90 shadow-sm">
          {isSubmitted ? (
            <div className="text-center py-12 space-y-5">
              <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto" />
              <h2 className="text-3xl font-heading font-medium text-slate-900">
                Mandate Registered Successfully
              </h2>
              <p className="text-sm sm:text-base text-slate-600 max-w-lg mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-slate-900">{formData.contactName}</span> at <span className="font-semibold text-slate-900">{formData.companyName}</span>. Your mandate for <span className="font-semibold text-slate-900">{formData.roleTitle}</span> has been assigned directly to our practice directors.
              </p>
              <p className="text-xs text-slate-500">
                A senior partner will contact you directly within 4 hours to review candidate availability and terms.
              </p>
              <div className="pt-6">
                <Link
                  to="/"
                  className="px-8 py-3 bg-[#0B221E] text-[#C2A268] hover:bg-[#153f36] text-xs font-semibold tracking-wider uppercase transition-colors"
                >
                  Return to Home
                </Link>
              </div>
            </div>
          ) : (
            <div>
              <div className="mb-8 pb-6 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-heading font-semibold text-[#0B221E]">
                    Mandate Specifications
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Provide the key parameters of the vacancy to initiate your search.
                  </p>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-[#C2A268]" />
                  <span>Strict NDA Discretion</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Organization Details */}
                <div>
                  <h3 className="text-xs font-semibold tracking-[0.2em] text-[#C2A268] uppercase mb-4">
                    1. Employer Details
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 uppercase tracking-wider mb-1">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className={`w-full px-3 py-2 text-sm bg-[#FAF8F5] border ${
                          errors.companyName ? 'border-red-500' : 'border-slate-300 focus:border-[#0B221E]'
                        } rounded-none outline-none`}
                        placeholder="e.g. AerCap / Davy / Blackstone"
                      />
                      {errors.companyName && <p className="text-xs text-red-600 mt-1">{errors.companyName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 uppercase tracking-wider mb-1">
                        Contact Person Name *
                      </label>
                      <input
                        type="text"
                        value={formData.contactName}
                        onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                        className={`w-full px-3 py-2 text-sm bg-[#FAF8F5] border ${
                          errors.contactName ? 'border-red-500' : 'border-slate-300 focus:border-[#0B221E]'
                        } rounded-none outline-none`}
                        placeholder="Your full name"
                      />
                      {errors.contactName && <p className="text-xs text-red-600 mt-1">{errors.contactName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 uppercase tracking-wider mb-1">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-3 py-2 text-sm bg-[#FAF8F5] border ${
                          errors.email ? 'border-red-500' : 'border-slate-300 focus:border-[#0B221E]'
                        } rounded-none outline-none`}
                        placeholder="corporate@domain.com"
                      />
                      {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 uppercase tracking-wider mb-1">
                        Direct Telephone
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3 py-2 text-sm bg-[#FAF8F5] border border-slate-300 focus:border-[#0B221E] rounded-none outline-none"
                        placeholder="+353 1 000 0000"
                      />
                    </div>
                  </div>
                </div>

                {/* Role Details */}
                <div className="pt-4 border-t border-slate-100">
                  <h3 className="text-xs font-semibold tracking-[0.2em] text-[#C2A268] uppercase mb-4">
                    2. Role & Search Parameters
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 uppercase tracking-wider mb-1">
                        Position / Role Title *
                      </label>
                      <input
                        type="text"
                        value={formData.roleTitle}
                        onChange={(e) => setFormData({ ...formData, roleTitle: e.target.value })}
                        className={`w-full px-3 py-2 text-sm bg-[#FAF8F5] border ${
                          errors.roleTitle ? 'border-red-500' : 'border-slate-300 focus:border-[#0B221E]'
                        } rounded-none outline-none`}
                        placeholder="e.g. Chief Financial Officer / VP Trading"
                      />
                      {errors.roleTitle && <p className="text-xs text-red-600 mt-1">{errors.roleTitle}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 uppercase tracking-wider mb-1">
                        Practice Sector
                      </label>
                      <select
                        value={formData.sectorId}
                        onChange={(e) => setFormData({ ...formData, sectorId: e.target.value })}
                        className="w-full px-3 py-2 text-sm bg-[#FAF8F5] border border-slate-300 focus:border-[#0B221E] rounded-none outline-none text-slate-700"
                      >
                        {SECTORS.map((s) => (
                          <option key={s.id} value={s.id}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 uppercase tracking-wider mb-1">
                        Engagement Model
                      </label>
                      <select
                        value={formData.contractType}
                        onChange={(e) => setFormData({ ...formData, contractType: e.target.value })}
                        className="w-full px-3 py-2 text-sm bg-[#FAF8F5] border border-slate-300 focus:border-[#0B221E] rounded-none outline-none text-slate-700"
                      >
                        <option value="Permanent">Permanent Search</option>
                        <option value="Executive Search">Retained Executive Search</option>
                        <option value="Contract">Temporary & Contract Interim</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 uppercase tracking-wider mb-1">
                        Target Salary / Day Rate Range
                      </label>
                      <input
                        type="text"
                        value={formData.salaryBracket}
                        onChange={(e) => setFormData({ ...formData, salaryBracket: e.target.value })}
                        className="w-full px-3 py-2 text-sm bg-[#FAF8F5] border border-slate-300 focus:border-[#0B221E] rounded-none outline-none"
                        placeholder="e.g. €140,000 - €180,000 + Bonus"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="block text-xs font-medium text-slate-700 uppercase tracking-wider mb-1">
                      Upload Job Description / Specification File (Optional)
                    </label>
                    <label className="flex items-center gap-3 px-4 py-3 bg-[#FAF8F5] border border-dashed border-[#C2A268] cursor-pointer hover:bg-slate-100 transition-colors">
                      <Upload className="w-4 h-4 text-[#C2A268]" />
                      <span className="text-xs text-slate-600 truncate">
                        {formData.fileName || 'Select JD document (PDF, Word max 15MB)'}
                      </span>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </label>
                  </div>

                  <div className="mt-4">
                    <label className="block text-xs font-medium text-slate-700 uppercase tracking-wider mb-1">
                      Additional Brief / Key Competencies
                    </label>
                    <textarea
                      rows={4}
                      value={formData.jobDescription}
                      onChange={(e) => setFormData({ ...formData, jobDescription: e.target.value })}
                      className="w-full px-3 py-2 text-sm bg-[#FAF8F5] border border-slate-300 focus:border-[#0B221E] rounded-none outline-none"
                      placeholder="Outline any specific background requirements, target competitors, or timing constraints..."
                    ></textarea>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full py-4 px-8 bg-[#0B221E] hover:bg-[#153f36] text-[#C2A268] font-semibold text-xs tracking-[0.2em] uppercase transition-colors flex items-center justify-center gap-2 shadow-md"
                  >
                    <Send className="w-4 h-4" />
                    Submit Vacancy & Request Partner Consultation
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
