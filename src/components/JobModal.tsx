import React, { useState } from 'react';
import { Job } from '../types';
import { X, MapPin, Briefcase, Clock, CheckCircle2, Upload, Send, AlertCircle } from 'lucide-react';

interface JobModalProps {
  job: Job | null;
  onClose: () => void;
}

export const JobModal: React.FC<JobModalProps> = ({ job, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    linkedin: '',
    coverNote: '',
    fileName: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!job) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 md:p-6 animate-in fade-in duration-200">
      <div className="relative bg-white text-slate-800 w-full max-w-3xl rounded-none shadow-2xl border border-[#C2A268]/30 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#0B221E] text-white p-6 sm:p-8 flex items-start justify-between border-b border-[#C2A268]/30">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#C2A268] uppercase mb-2">
              <span>{job.sectorName}</span>
              <span>·</span>
              <span>Ref: {job.id}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-heading font-medium tracking-tight text-white">
              {job.title}
            </h2>
            <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-slate-300">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C2A268]" /> {job.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-[#C2A268]" /> {job.type}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#C2A268]" /> Posted {job.postedDate}
              </span>
              <span className="font-semibold text-[#C2A268] bg-[#071815] px-2.5 py-1">
                {job.salary}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-sm transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {isSubmitted ? (
            <div className="text-center py-10 space-y-4">
              <CheckCircle2 className="w-16 h-16 text-[#0B221E] mx-auto text-emerald-600" />
              <h3 className="text-2xl font-heading font-medium text-slate-900">
                Application Received
              </h3>
              <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                Thank you, <span className="font-semibold">{formData.fullName}</span>. Your application for <span className="font-semibold">{job.title}</span> has been securely submitted to our specialist consultants. We will review your profile with absolute discretion.
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2.5 bg-[#0B221E] text-white hover:bg-[#143d35] font-semibold text-xs tracking-wider uppercase transition-colors"
                >
                  Close & Continue Browsing
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Job Overview */}
              <div>
                <h3 className="text-xs font-semibold tracking-[0.2em] text-[#C2A268] uppercase mb-2">
                  Role Overview
                </h3>
                <p className="text-sm leading-relaxed text-slate-700">
                  {job.description}
                </p>
              </div>

              {/* Responsibilities */}
              <div>
                <h3 className="text-xs font-semibold tracking-[0.2em] text-[#C2A268] uppercase mb-2">
                  Key Responsibilities
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {job.keyResponsibilities.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C2A268] mt-1.5 shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div>
                <h3 className="text-xs font-semibold tracking-[0.2em] text-[#C2A268] uppercase mb-2">
                  Candidate Profile & Qualifications
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {job.requirements.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C2A268] mt-1.5 shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Application Form */}
              <div className="pt-6 border-t border-slate-200">
                <div className="bg-[#FAF8F5] p-6 border border-[#C2A268]/20">
                  <h3 className="text-base font-heading font-medium text-[#0B221E] mb-1">
                    Apply for this Position
                  </h3>
                  <p className="text-xs text-slate-500 mb-4">
                    All applications are handled in the strictest confidence by our partner-led search team.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-700 uppercase tracking-wider mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className={`w-full px-3 py-2 text-sm bg-white border ${
                            errors.fullName ? 'border-red-500' : 'border-slate-300 focus:border-[#0B221E]'
                          } rounded-none outline-none transition-colors`}
                          placeholder="e.g. Rachel Murphy"
                        />
                        {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-700 uppercase tracking-wider mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className={`w-full px-3 py-2 text-sm bg-white border ${
                            errors.email ? 'border-red-500' : 'border-slate-300 focus:border-[#0B221E]'
                          } rounded-none outline-none transition-colors`}
                          placeholder="rachel.murphy@example.com"
                        />
                        {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-700 uppercase tracking-wider mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className={`w-full px-3 py-2 text-sm bg-white border ${
                            errors.phone ? 'border-red-500' : 'border-slate-300 focus:border-[#0B221E]'
                          } rounded-none outline-none transition-colors`}
                          placeholder="+353 87 000 0000"
                        />
                        {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-700 uppercase tracking-wider mb-1">
                          LinkedIn Profile URL
                        </label>
                        <input
                          type="url"
                          value={formData.linkedin}
                          onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                          className="w-full px-3 py-2 text-sm bg-white border border-slate-300 focus:border-[#0B221E] rounded-none outline-none transition-colors"
                          placeholder="https://linkedin.com/in/username"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 uppercase tracking-wider mb-1">
                        Attach Curriculum Vitae (PDF / Word)
                      </label>
                      <label className="flex items-center gap-3 px-4 py-2.5 bg-white border border-dashed border-[#C2A268] cursor-pointer hover:bg-slate-50 transition-colors">
                        <Upload className="w-4 h-4 text-[#C2A268]" />
                        <span className="text-xs text-slate-600 truncate">
                          {formData.fileName || 'Select your CV file (max 10MB)'}
                        </span>
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                      </label>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 uppercase tracking-wider mb-1">
                        Brief Note / Notice Period (Optional)
                      </label>
                      <textarea
                        rows={3}
                        value={formData.coverNote}
                        onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                        className="w-full px-3 py-2 text-sm bg-white border border-slate-300 focus:border-[#0B221E] rounded-none outline-none transition-colors"
                        placeholder="Current notice period, salary expectations, or specific experience..."
                      ></textarea>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-3.5 px-6 bg-[#0B221E] hover:bg-[#153f36] text-[#C2A268] font-semibold text-xs tracking-[0.2em] uppercase transition-colors flex items-center justify-center gap-2"
                      >
                        <Send className="w-3.5 h-3.5" />
                        Submit Confidential Application
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
