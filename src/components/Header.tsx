import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ElevateLogo } from './ElevateLogo';
import { SECTORS } from '../data/mockData';
import { X, Search, User, MapPin, Phone, Mail, ArrowRight, Briefcase } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* <header
        className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#081c18]/95 backdrop-blur-md shadow-lg shadow-black/20 py-3.5' : 'bg-[#0B221E] py-4 md:py-5'
          } border-b border-[#C2A268]/20`}
      > */}

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${isHomePage && !isScrolled
          ? "bg-transparent py-4 md:py-5"
          : "bg-[#081c18]/95 backdrop-blur-md shadow-lg shadow-black/20 py-3.5"
          }  `}
      >


        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: MENU Button */}
            <div className="flex items-center">
              <button
                type="button"
                onClick={() => setIsMenuOpen(true)}
                className="group flex items-center gap-2.5 text-[#C2A268] hover:text-[#e4cf9b] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C2A268]/50 rounded-sm py-1"
                aria-label="Open Navigation Menu"
              >
                <div className="flex flex-col gap-1.5 w-6">
                  <span className="w-6 h-[2px] bg-[#C2A268] group-hover:bg-[#e4cf9b] transition-all duration-200"></span>
                  <span className="w-4 group-hover:w-6 h-[2px] bg-[#C2A268] group-hover:bg-[#e4cf9b] transition-all duration-200"></span>
                </div>
                <span className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase">
                  Menu
                </span>
              </button>
            </div>

            {/* Center: Elevate Partners Logo */}
            <div className="flex-1 flex justify-center">
              <ElevateLogo />
            </div>

            {/* Right: JOB SEARCH */}
            <div className="flex items-center gap-4">
              <Link
                to="/jobs"
                className="group flex items-center gap-2 text-[#C2A268] hover:text-[#e4cf9b] transition-colors py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C2A268]/50 rounded-sm"
                aria-label="Job Search"
              >
                <span className="hidden sm:inline text-xs md:text-sm font-semibold tracking-[0.18em] uppercase">
                  Job Search
                </span>
                <div className="relative flex items-center justify-center w-8 h-8 rounded-full border border-[#C2A268]/40 group-hover:border-[#C2A268] transition-colors">
                  <Search className="w-3.5 h-3.5 text-[#C2A268]" />
                  <User className="w-2.5 h-2.5 text-[#C2A268] absolute -top-0.5 -right-0.5 opacity-90" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Navigation Overlay / Drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#081c18]/98 backdrop-blur-xl text-white overflow-y-auto animate-in fade-in duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 min-h-screen flex flex-col justify-between">
            {/* Drawer Header */}
            <div className="flex items-center justify-between border-b border-[#C2A268]/20 pb-5">
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="group flex items-center gap-2 text-[#C2A268] hover:text-white transition-colors"
                aria-label="Close Navigation Menu"
              >
                <X className="w-5 h-5 text-[#C2A268] group-hover:rotate-90 transition-transform duration-200" />
                <span className="text-xs font-semibold tracking-[0.2em] uppercase">Close</span>
              </button>

              <ElevateLogo />

              <Link
                to="/register-vacancy"
                onClick={() => setIsMenuOpen(false)}
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 border border-[#C2A268] text-[#C2A268] hover:bg-[#C2A268] hover:text-[#0B221E] transition-all text-xs font-semibold tracking-wider uppercase rounded-none"
              >
                Register Vacancy
              </Link>
            </div>

            {/* Drawer Body: Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 py-10 my-auto">
              {/* Primary Links */}
              <div className="lg:col-span-5 flex flex-col space-y-4 md:space-y-6">

                <Link
                  to="/"
                  className={`text-2xl font-heading font-medium tracking-wide transition-colors ${location.pathname === '/' ? 'text-[#C2A268]' : 'text-slate-100 hover:text-[#C2A268]'
                    }`}
                >
                  Home
                </Link>
                <Link
                  to="/expertise"
                  className={`text-2xl font-heading font-medium tracking-wide transition-colors ${location.pathname === '/expertise' ? 'text-[#C2A268]' : 'text-slate-100 hover:text-[#C2A268]'
                    }`}
                >
                  Expertise & Services
                </Link>
                <Link
                  to="/sectors"
                  className={`text-2xl font-heading font-medium tracking-wide transition-colors ${location.pathname === '/sectors' ? 'text-[#C2A268]' : 'text-slate-100 hover:text-[#C2A268]'
                    }`}
                >
                  Sectors
                </Link>
                <Link
                  to="/team"
                  className={`text-2xl font-heading font-medium tracking-wide transition-colors ${location.pathname === '/team' ? 'text-[#C2A268]' : 'text-slate-100 hover:text-[#C2A268]'
                    }`}
                >
                  Our Team
                </Link>
                <Link
                  to="/jobs"
                  className={`text-2xl font-heading font-medium tracking-wide transition-colors ${location.pathname === '/jobs' ? 'text-[#C2A268]' : 'text-slate-100 hover:text-[#C2A268]'
                    }`}
                >
                  Job Openings
                </Link>
                <Link
                  to="/insights"
                  className={`text-2xl font-heading font-medium tracking-wide transition-colors ${location.pathname === '/insights' ? 'text-[#C2A268]' : 'text-slate-100 hover:text-[#C2A268]'
                    }`}
                >
                  News & Insights
                </Link>
                <Link
                  to="/testimonials"
                  className={`text-2xl font-heading font-medium tracking-wide transition-colors ${location.pathname === '/testimonials' ? 'text-[#C2A268]' : 'text-slate-100 hover:text-[#C2A268]'
                    }`}
                >
                  Testimonials
                </Link>
                <Link
                  to="/register-vacancy"
                  className={`text-2xl font-heading font-medium tracking-wide transition-colors ${location.pathname === '/register-vacancy' ? 'text-[#C2A268]' : 'text-slate-100 hover:text-[#C2A268]'
                    }`}
                >
                  Register a Vacancy
                </Link>
                <Link
                  to="/contact"
                  className={`text-2xl font-heading font-medium tracking-wide transition-colors ${location.pathname === '/contact' ? 'text-[#C2A268]' : 'text-slate-100 hover:text-[#C2A268]'
                    }`}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
