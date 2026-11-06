import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  isLight?: boolean;
}

export const ElevateMonogram: React.FC<{ className?: string }> = ({ className = "h-8 w-8 text-[#C2A268]" }) => {
  return (
    <svg viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Elevate Partners Logo">
      {/* Top horizontal arm */}
      <rect x="10" y="14" width="76" height="7.5" fill="currentColor" rx="1" />
      {/* Middle horizontal arm connecting E and P loop */}
      <rect x="10" y="38" width="76" height="7.5" fill="currentColor" rx="1" />
      {/* Main vertical stem for E and P */}
      <rect x="10" y="14" width="7.5" height="31.5" fill="currentColor" />
      {/* Right curve for P */}
      <path d="M76 14C87 14 92 21 92 29.75C92 38.5 87 45.5 76 45.5" stroke="currentColor" strokeWidth="7.5" strokeLinecap="square" />
      {/* Bottom hook/shelf for E */}
      <path d="M42 45.5V66H10" stroke="currentColor" strokeWidth="7.5" strokeLinejoin="miter" strokeLinecap="square" />
    </svg>
  );
};

export const ElevateLogo: React.FC<LogoProps> = ({ className = "", isLight = false }) => {
  return (
    <Link to="/" className={`inline-flex items-center gap-3.5 group ${className}`} aria-label="Elevate Partners Home">
      <ElevateMonogram className="h-8 md:h-9 w-auto text-[#C2A268] group-hover:brightness-110 transition-all shrink-0" />
      <span className={`text-base md:text-lg lg:text-xl font-bold tracking-[0.2em] font-heading uppercase ${isLight ? 'text-slate-900' : 'text-white'} group-hover:text-[#C2A268] transition-colors`}>
        Elevate Partners
      </span>
    </Link>
  );
};
