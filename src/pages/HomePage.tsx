import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SECTORS, SERVICES, JOBS, ARTICLES, TESTIMONIALS, TEAM_MEMBERS } from '../data/mockData';
import { Job, Sector } from '../types';
import { JobModal } from '../components/JobModal';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Briefcase,
  MapPin,
  Clock,
  CheckCircle,
  Building2,
  ShieldCheck,
  Users,
  Globe2,
  FileText,
  Mail,
  Linkedin
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [activeSectorTab, setActiveSectorTab] = useState<string>('all');

  const heroSlides = [
    {
      id: 'slide-1',
      kicker: 'Elevate Partners',
      title: 'Reaching New\nHeights',
      subtitle: 'Elevate Partners is a boutique recruitment consultancy firm connecting exceptional talent with industry-leading opportunities across the financial services sector.',
      ctaText: 'Job Search',
      ctaLink: '/jobs',
      secondaryText: 'Explore Sectors',
      secondaryLink: '/sectors',
      bgImage: 'https://elevatepartners.ie/wp-content/uploads/2024/09/background1.jpg',
      hasOutlineButton: false,
    },
    {
      id: 'slide-2',
      kicker: 'Executive Search & Advisory',
      title: 'Your Future, Our\nFocus',
      subtitle: 'Connect with one of our industry experts.',
      ctaText: 'Get In Touch',
      ctaLink: '/contact',
      secondaryText: 'Register a Vacancy',
      secondaryLink: '/register-vacancy',
      bgImage: '/public/assets/aistudio/Screenshot__233__02bddd61.png',
      hasOutlineButton: true,
    },
    {
      id: 'slide-3',
      kicker: 'Dublin & London Presence',
      title: 'Specialist Expertise.\nProven Delivery.',
      subtitle: 'Partner-led talent solutions spanning aircraft leasing, private credit, asset management, and technical finance.',
      ctaText: 'View Open Roles',
      ctaLink: '/jobs',
      secondaryText: 'Our Services',
      secondaryLink: '/expertise',
      bgImage: '/src/assets/images/hero_dublin_financial_1793948664278.jpg',
      hasOutlineButton: false,
    }
  ];

  // Auto advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const filteredJobs = activeSectorTab === 'all'
    ? JOBS.slice(0, 4)
    : JOBS.filter(j => j.sectorId === activeSectorTab).slice(0, 4);

  return (
    <div className="bg-[#FAF8F5] text-slate-800">
      {/* 1. HERO SECTION WITH CAROUSEL */}
      <section className="relative -mt-[85px] pt-[85px] h-[calc(85vh+85px)] min-h-[665px] max-h-[905px] bg-[#071815] overflow-hidden flex items-center">
        {/* Single Background Image with Continuous Zoom-Out */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://elevatepartners.ie/wp-content/uploads/2024/09/background1.jpg"
            alt="Hero background"
            className="w-full h-full object-cover animate-hero-zoom"
          />

          {/* Dark/Emerald Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071815]/90 via-[#071815]/75 to-[#071815]/40 backdrop-brightness-[0.85]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071815] via-transparent to-transparent opacity-80" />

        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <div className="max-w-2xl w-full text-white pt-10 sm:pt-0">

            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-heading  tracking-tight text-white leading-[1.08]">
              Reaching New
            </h1>

            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-heading  tracking-tight text-white leading-[1.08]">
              Heights Everyday
            </h1>

            <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-200 font-light leading-relaxed max-w-xl">
              Elevate Partners is a boutique recruitment consultancy firm connecting exceptional talent with industry-leading opportunities across the financial services sector.
            </p>

          </div>
        </div>
      </section>

      {/* 2. CREDIBILITY & KEY NUMBERS STRIP */}
      {/* <section className="bg-[#0B221E] text-white border-y border-[#C2A268]/20 py-8 lg:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 divide-y md:divide-y-0 md:divide-x divide-[#C2A268]/20">
            <div className="pt-4 md:pt-0 md:px-4 text-center">
              <p className="text-2xl sm:text-3xl font-heading font-semibold text-[#C2A268] tabular-nums">2018</p>
              <p className="text-xs uppercase tracking-wider text-slate-300 mt-1">Founded in Dublin</p>
            </div>
            <div className="pt-4 md:pt-0 md:px-4 text-center">
              <p className="text-2xl sm:text-3xl font-heading font-semibold text-[#C2A268] tabular-nums">10+</p>
              <p className="text-xs uppercase tracking-wider text-slate-300 mt-1">Specialist Sectors</p>
            </div>
            <div className="pt-4 md:pt-0 md:px-4 text-center">
              <p className="text-2xl sm:text-3xl font-heading font-semibold text-[#C2A268] tabular-nums">98%</p>
              <p className="text-xs uppercase tracking-wider text-slate-300 mt-1">Retained Placement Success</p>
            </div>
            <div className="pt-4 md:pt-0 md:px-4 text-center">
              <p className="text-2xl sm:text-3xl font-heading font-semibold text-[#C2A268] tabular-nums">Dublin & London</p>
              <p className="text-xs uppercase tracking-wider text-slate-300 mt-1">Direct Market Presence</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* 3. INTRODUCTION / THE ELEVATE PARTNERS MODEL */}
      <section className=" lg:py-24 bg-[#FAF8F5] p-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2">

              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold text-[#C2A268] tracking-tight leading-tight">
                Trusted Partners in Specialized Human Capital.
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Elevate Partners was founded on a simple principle: high-stakes financial recruitment demands deep industry immersion, not transactional volume.                We work as strategic advisors to international aircraft lessors, private credit funds, banks, and corporate institutions. Every mandate is led directly by our directors, guaranteeing institutional credibility, total confidentiality, and candidate shortlists of rare calibre.

              </p>




              <div className="pt-4">
                <Link
                  to="/team"
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#0B221E] hover:text-[#C2A268] transition-colors border p-6"
                >
                  Our Expertise
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative">
                {/* Decorative border frame */}
                <div className="absolute -inset-4 border border-[#C2A268]/30 rounded-tl-[60px] pointer-events-none hidden sm:block"></div>
                <img
                  src="/src/assets/images/executive_business_meeting_1793948665733.jpg"
                  alt="Elevate Partners Executive Meeting"
                  className="w-full h-[420px] object-cover shadow-xl rounded-tl-[60px] rounded-br-[20px]"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-[#0B221E]/95 p-4 text-white backdrop-blur-sm border-l-2 border-[#C2A268]">
                  <p className="text-xs uppercase tracking-wider text-[#C2A268] font-semibold">
                    Fitzwilliam Square, Dublin 2
                  </p>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Advising Ireland and the UK's premier financial institutions since 2018.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTORS OVERVIEW */}
      <section className="py-20 bg-[#F4EFEA] border-y border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-semibold tracking-[0.25em] text-[#C2A268] uppercase block mb-2">
                Specialist Practice Areas
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-[#0B221E] tracking-tight">
                Our Sectors of Expertise
              </h2>
            </div>
            <Link
              to="/sectors"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-[#0B221E] hover:text-[#C2A268] transition-colors"
            >
              View All 10 Sectors
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SECTORS.slice(0, 6).map((sector) => (
              <Link
                key={sector.id}
                to={`/sectors/${sector.slug}`}
                className="group bg-white p-7 border border-slate-200/80 hover:border-[#C2A268] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 bg-[#FAF8F5] border border-[#C2A268]/30 flex items-center justify-center text-[#0B221E] mb-5 group-hover:bg-[#0B221E] group-hover:text-[#C2A268] transition-colors">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-heading font-medium text-[#0B221E] group-hover:text-[#C2A268] transition-colors mb-2">
                    {sector.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                    {sector.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold tracking-wider text-[#0B221E] group-hover:text-[#C2A268] uppercase">
                  <span>Explore Practice</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SIGNATURE SECTION: SUPPORTING CANDIDATES (EXACT MATCH TO SCREENSHOT 236) */}
      <section className="py-20 lg:py-28 bg-[#FAF8F5] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Heading and Authentic Copy */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-4xl sm:text-5xl font-heading font-medium text-[#C2A268] tracking-tight leading-[1.15]">
                Supporting<br />Candidates
              </h2>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                At Elevate Partners, we understand that flexibility, speed, and support are key to a successful temporary or contract assignment. Whether you're seeking short-term opportunities or looking to build a long-term contracting career, our dedicated team is here to guide you every step of the way.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                From matching you with the right roles to ensuring smooth onboarding and ongoing support throughout your placement, we’re committed to helping you thrive. With access to leading employers in the financial services industry and a wide range of assignments, we empower you to work on your terms while gaining valuable experience and exposure.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  to="/jobs"
                  className="px-6 py-3 bg-[#0B221E] hover:bg-[#153f36] text-white font-semibold text-xs tracking-wider uppercase transition-colors"
                >
                  Browse Contract Roles
                </Link>
                <Link
                  to="/expertise#contract-solutions"
                  className="px-6 py-3 border border-[#0B221E] hover:border-[#C2A268] text-[#0B221E] hover:text-[#C2A268] font-semibold text-xs tracking-wider uppercase transition-colors"
                >
                  Contracting Solutions
                </Link>
              </div>
            </div>

            {/* Right Column: Signature Curved Image (Curved top-left corner matching Screenshot 236) */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative max-w-md lg:max-w-none w-full">
                {/* Notice the curved corner styling matching Screenshot 236 */}
                <div className="relative overflow-hidden shadow-2xl rounded-tl-[85px] md:rounded-tl-[120px] rounded-br-[35px] border border-[#E5DFD5]">
                  <img
                    src="https://elevatepartners.ie/wp-content/uploads/2024/12/pexels-sora-shimazaki-5673488-1-scaled.jpg"
                    alt="Supporting candidates typing at laptop"
                    className="w-full h-[400px] sm:h-[460px] object-cover object-right"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TALENT SOLUTIONS / SERVICES STRIP */}
      <section className="py-20 bg-[#0B221E] text-white border-t border-[#C2A268]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#C2A268] uppercase block mb-2">
              Our Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-medium tracking-tight text-white">
              Comprehensive Talent Acquisition Solutions
            </h2>
            <p className="mt-3 text-sm text-slate-300">
              Tailored search methodologies designed to meet immediate resource requirements and strategic board appointments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service) => (
              <div
                key={service.id}
                className="bg-[#071815] border border-[#C2A268]/25 p-8 flex flex-col justify-between hover:border-[#C2A268] transition-colors"
              >
                <div>
                  <h3 className="text-xl font-heading font-medium text-[#C2A268] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {service.subtitle}
                  </p>
                  <ul className="space-y-2.5 text-xs text-slate-400">
                    {service.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C2A268] mt-1 shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-6 mt-6 border-t border-[#C2A268]/15">
                  <Link
                    to={`/expertise#${service.id}`}
                    className="text-xs font-semibold tracking-wider text-[#C2A268] hover:text-white uppercase flex items-center justify-between"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FEATURED VACANCIES / JOB SEARCH PREVIEW */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-semibold tracking-[0.25em] text-[#C2A268] uppercase block mb-1">
                Current Mandates
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-[#0B221E] tracking-tight">
                Featured Opportunities
              </h2>
            </div>
            <Link
              to="/jobs"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#0B221E] hover:text-[#C2A268] transition-colors"
            >
              Browse All Vacancies
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex flex-wrap items-center gap-2 mb-8 pb-3 border-b border-slate-200">
            <button
              onClick={() => setActiveSectorTab('all')}
              className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-colors ${activeSectorTab === 'all'
                ? 'bg-[#0B221E] text-[#C2A268]'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
                }`}
            >
              All Roles
            </button>
            <button
              onClick={() => setActiveSectorTab('aircraft-leasing')}
              className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-colors ${activeSectorTab === 'aircraft-leasing'
                ? 'bg-[#0B221E] text-[#C2A268]'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
                }`}
            >
              Aircraft Leasing
            </button>
            <button
              onClick={() => setActiveSectorTab('accounting-finance')}
              className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-colors ${activeSectorTab === 'accounting-finance'
                ? 'bg-[#0B221E] text-[#C2A268]'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
                }`}
            >
              Finance & Tax
            </button>
            <button
              onClick={() => setActiveSectorTab('private-equity-credit')}
              className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-colors ${activeSectorTab === 'private-equity-credit'
                ? 'bg-[#0B221E] text-[#C2A268]'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
                }`}
            >
              Private Credit & PE
            </button>
            <button
              onClick={() => setActiveSectorTab('risk-compliance')}
              className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-colors ${activeSectorTab === 'risk-compliance'
                ? 'bg-[#0B221E] text-[#C2A268]'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
                }`}
            >
              Risk & Compliance
            </button>
          </div>

          {/* Job List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white p-6 sm:p-7 border border-slate-200 hover:border-[#C2A268] transition-all shadow-sm hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                    <span className="font-semibold text-[#C2A268] uppercase tracking-wider">{job.sectorName}</span>
                    <span className="bg-[#FAF8F5] px-2 py-0.5 border border-slate-200">{job.type}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-heading font-medium text-[#0B221E] hover:text-[#C2A268] transition-colors mb-2">
                    {job.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-2 mb-4 leading-relaxed">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#C2A268]" /> {job.location}
                    </span>
                    <span className="font-medium text-slate-900">
                      {job.salary}
                    </span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Ref: {job.id}</span>
                  <button
                    onClick={() => setSelectedJob(job)}
                    className="px-4 py-2 bg-[#0B221E] hover:bg-[#153f36] text-white text-xs font-semibold tracking-wider uppercase transition-colors"
                  >
                    View Details & Apply
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS FROM INDUSTRY LEADERS */}
      <section className="py-20 bg-[#F4EFEA] border-y border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#C2A268] uppercase block mb-2">
              Endorsements
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-medium text-[#0B221E] tracking-tight">
              What Market Leaders Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.slice(0, 2).map((test) => (
              <div
                key={test.id}
                className="bg-white p-8 sm:p-10 border border-slate-200/90 shadow-sm relative flex flex-col justify-between"
              >
                <div className="text-[#C2A268] text-4xl font-serif leading-none mb-4">“</div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic mb-6">
                  {test.quote}
                </p>
                <div className="border-t border-slate-100 pt-4">
                  <p className="font-heading font-semibold text-slate-900 text-sm">{test.author}</p>
                  <p className="text-xs text-slate-500">{test.role}</p>
                  <p className="text-xs text-[#C2A268] font-medium mt-0.5">{test.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. MARKET INSIGHTS PREVIEW */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-semibold tracking-[0.25em] text-[#C2A268] uppercase block mb-2">
                Knowledge & Analysis
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-[#0B221E] tracking-tight">
                Latest News & Market Insights
              </h2>
            </div>
            <Link
              to="/insights"
              className="mt-4 sm:mt-0 inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#0B221E] hover:text-[#C2A268] transition-colors"
            >
              View All Articles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ARTICLES.map((article) => (
              <Link
                key={article.id}
                to={`/insights`}
                className="group bg-white border border-slate-200 hover:border-[#C2A268] p-7 transition-all duration-300 flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                    <span className="text-[#C2A268] font-semibold uppercase">{article.category}</span>
                    <span>·</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="text-lg font-heading font-medium text-[#0B221E] group-hover:text-[#C2A268] transition-colors leading-snug mb-3">
                    {article.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>By {article.author}</span>
                  <span className="font-semibold text-[#0B221E] group-hover:text-[#C2A268] uppercase">Read →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Job Details & Application */}
      <JobModal job={selectedJob} onClose={() => setSelectedJob(null)} />
    </div>
  );
};
