import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, CheckCircle2, Send, Building } from 'lucide-react';
import { SECTORS } from '../data/mockData';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    enquiryType: 'hiring',
    sector: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid corporate email is required';
    if (!formData.message.trim()) newErrors.message = 'Please provide details on your enquiry';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="bg-[#FAF8F5] text-slate-800">
      {/* Header */}
      <section className="bg-[#0B221E] text-white py-20 lg:py-24 border-b border-[#C2A268]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#C2A268] uppercase block mb-3">
              Direct Contact
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-medium tracking-tight text-white">
              Get In Touch
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
              Contact our Dublin headquarters or London Mayfair office for a confidential discussion regarding your hiring mandates or career advancement.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Form + Office Locations */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 border border-slate-200/90 shadow-sm">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto" />
                <h3 className="text-2xl font-heading font-semibold text-slate-900">
                  Enquiry Dispatched Successfully
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>. Your enquiry has been routed directly to the relevant sector director. We will be in touch within one business day.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        company: '',
                        enquiryType: 'hiring',
                        sector: '',
                        message: ''
                      });
                    }}
                    className="px-6 py-2.5 bg-[#0B221E] text-[#C2A268] text-xs font-semibold tracking-wider uppercase"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <h2 className="text-2xl font-heading font-semibold text-[#0B221E] mb-1">
                    Send Us a Message
                  </h2>
                  <p className="text-xs text-slate-500">
                    All communications are treated with strict confidentiality.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 uppercase tracking-wider mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-3 py-2 text-sm bg-[#FAF8F5] border ${
                          errors.name ? 'border-red-500' : 'border-slate-300 focus:border-[#0B221E]'
                        } rounded-none outline-none`}
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 uppercase tracking-wider mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-3 py-2 text-sm bg-[#FAF8F5] border ${
                          errors.email ? 'border-red-500' : 'border-slate-300 focus:border-[#0B221E]'
                        } rounded-none outline-none`}
                        placeholder="john.doe@firm.ie"
                      />
                      {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 uppercase tracking-wider mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3 py-2 text-sm bg-[#FAF8F5] border border-slate-300 focus:border-[#0B221E] rounded-none outline-none"
                        placeholder="+353 1 000 0000"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 uppercase tracking-wider mb-1">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3 py-2 text-sm bg-[#FAF8F5] border border-slate-300 focus:border-[#0B221E] rounded-none outline-none"
                        placeholder="Company name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 uppercase tracking-wider mb-1">
                        Enquiry Type
                      </label>
                      <select
                        value={formData.enquiryType}
                        onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                        className="w-full px-3 py-2 text-sm bg-[#FAF8F5] border border-slate-300 focus:border-[#0B221E] rounded-none outline-none text-slate-700"
                      >
                        <option value="hiring">Hiring / Registering Mandate</option>
                        <option value="candidate">Executive / Candidate Career Query</option>
                        <option value="contract">Contracting Solutions</option>
                        <option value="general">General Advisory</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 uppercase tracking-wider mb-1">
                        Sector of Interest
                      </label>
                      <select
                        value={formData.sector}
                        onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                        className="w-full px-3 py-2 text-sm bg-[#FAF8F5] border border-slate-300 focus:border-[#0B221E] rounded-none outline-none text-slate-700"
                      >
                        <option value="">Select a sector...</option>
                        {SECTORS.map((s) => (
                          <option key={s.id} value={s.id}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 uppercase tracking-wider mb-1">
                      Message / Requirements *
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-3 py-2 text-sm bg-[#FAF8F5] border ${
                        errors.message ? 'border-red-500' : 'border-slate-300 focus:border-[#0B221E]'
                      } rounded-none outline-none`}
                      placeholder="Please outline the nature of your recruitment mandate or confidential career inquiry..."
                    ></textarea>
                    {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message}</p>}
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 bg-[#0B221E] hover:bg-[#153f36] text-[#C2A268] font-semibold text-xs tracking-[0.2em] uppercase transition-colors flex items-center justify-center gap-2"
                    >
                      <Send className="w-3.5 h-3.5" />
                      Send Confidential Message
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>

          {/* Office Details */}
          <div className="lg:col-span-5 space-y-8">
            {/* Dublin Headquarters */}
            <div className="bg-white p-8 border border-slate-200/90 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#C2A268] uppercase">
                <Building className="w-4 h-4 text-[#C2A268]" />
                Headquarters
              </div>
              <h3 className="text-2xl font-heading font-semibold text-[#0B221E]">
                Dublin Office
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                29/30 Fitzwilliam Square South<br />
                Dublin 2, D02 RF20<br />
                Ireland
              </p>

              <div className="pt-3 border-t border-slate-100 space-y-2 text-xs sm:text-sm text-slate-700">
                <p className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#C2A268]" />
                  <a href="tel:+35316916022" className="hover:text-[#C2A268] font-medium transition-colors">
                    +353 1 691 6022
                  </a>
                </p>
                <p className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#C2A268]" />
                  <a href="mailto:info@elevatepartners.ie" className="hover:text-[#C2A268] font-medium transition-colors">
                    info@elevatepartners.ie
                  </a>
                </p>
                <p className="flex items-center gap-2.5 text-slate-500">
                  <Clock className="w-4 h-4 text-[#C2A268]" />
                  Monday - Friday: 08:30 - 18:00 GMT
                </p>
              </div>
            </div>

            {/* London Office */}
            <div className="bg-white p-8 border border-slate-200/90 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#C2A268] uppercase">
                <Building className="w-4 h-4 text-[#C2A268]" />
                UK Presence
              </div>
              <h3 className="text-2xl font-heading font-semibold text-[#0B221E]">
                London Office
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                12 Hay Hill, Mayfair<br />
                London, W1J 8NR<br />
                United Kingdom
              </p>

              <div className="pt-3 border-t border-slate-100 space-y-2 text-xs sm:text-sm text-slate-700">
                <p className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#C2A268]" />
                  <a href="tel:+35316916022" className="hover:text-[#C2A268] font-medium transition-colors">
                    +44 20 7000 0000
                  </a>
                </p>
                <p className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#C2A268]" />
                  <a href="mailto:london@elevatepartners.ie" className="hover:text-[#C2A268] font-medium transition-colors">
                    london@elevatepartners.ie
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
