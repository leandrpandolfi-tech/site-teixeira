import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { LAWYER_INFO } from '../data/legalContent';

interface NavbarProps {
  onOpenAppointment: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAppointment }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#090807]/95 backdrop-blur-md border-b border-[#c5a059]/20 py-3 shadow-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand wordmark & circular logo */}
          <a
            href="#inicio"
            className="flex items-center gap-3.5 group cursor-pointer text-left whitespace-nowrap shrink-0"
          >
            {/* Circular golden scales crest */}
            <div className="relative w-12 h-12 rounded-full border border-[#c5a059]/60 flex items-center justify-center p-2 bg-gradient-to-br from-[#1b1710] to-[#0c0a07] shadow-inner group-hover:border-[#edd08e] transition-colors">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-7 h-7 text-[#dfb76c]"
              >
                {/* Central Pillar */}
                <line x1="12" y1="3" x2="12" y2="21" />
                {/* Horizontal Beam */}
                <line x1="4" y1="7" x2="20" y2="7" />
                {/* Center finial */}
                <circle cx="12" cy="3" r="1" fill="#dfb76c" />
                {/* Left Pan Strings & Pan */}
                <line x1="4" y1="7" x2="2" y2="13" />
                <line x1="4" y1="7" x2="6" y2="13" />
                <path d="M1.5 13 C2.5 15, 5.5 15, 6.5 13 Z" fill="rgba(223, 183, 108, 0.25)" />
                {/* Right Pan Strings & Pan */}
                <line x1="20" y1="7" x2="18" y2="13" />
                <line x1="20" y1="7" x2="22" y2="13" />
                <path d="M17.5 13 C18.5 15, 21.5 15, 22.5 13 Z" fill="rgba(223, 183, 108, 0.25)" />
                {/* Base */}
                <path d="M8 21 L16 21" />
                <path d="M10 19 L14 19" />
              </svg>
            </div>

            {/* Typography Lockup matching the mockup */}
            <div className="flex flex-col">
              <span className="font-cinzel text-sm sm:text-base tracking-[0.14em] font-semibold text-[#f5ebd9] group-hover:text-[#ecd4a2] transition-colors">
                REGINALDO TEIXEIRA NETO
              </span>
              <div className="flex items-center gap-1.5 text-[10px] tracking-[0.28em] uppercase text-[#c5a059] font-medium">
                <span className="w-3 h-px bg-[#c5a059]/60"></span>
                <span>ADVOCACIA</span>
                <span className="w-3 h-px bg-[#c5a059]/60"></span>
              </div>
              <span className="text-[10px] tracking-wider text-[#9d9282] font-mono font-medium">
                {LAWYER_INFO.oab}
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (single-line, clean serif/sans uppercase) */}
          <nav className="hidden lg:flex items-center gap-8 text-xs tracking-[0.2em] uppercase font-medium text-[#c4b9a8]">
            <a
              href="#inicio"
              className="hover:text-[#edd08e] transition-colors py-1 relative group"
            >
              Início
            </a>
            <a
              href="#areas"
              className="hover:text-[#edd08e] transition-colors py-1 relative group"
            >
              Áreas de Atuação
            </a>
            <a
              href="#contato"
              className="hover:text-[#edd08e] transition-colors py-1 relative group"
            >
              Contato & Localização
            </a>
          </nav>

          {/* Zone 3: Primary Action CTA Button -> WhatsApp */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={LAWYER_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="gold-button px-5 py-2.5 rounded-sm text-xs tracking-wider uppercase flex items-center gap-2 cursor-pointer shadow-md hover:shadow-[#c5a059]/20 font-semibold"
            >
              <span>Falar no WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#dfb76c] hover:text-white rounded-md border border-[#c5a059]/30"
              aria-label="Menu principal"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 px-6 bg-[#0f0e0c] border border-[#c5a059]/30 rounded-lg shadow-2xl flex flex-col gap-4">
            <a
              href="#inicio"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs uppercase tracking-widest text-[#f5ebd9] hover:text-[#c5a059] py-2 border-b border-[#26221c]"
            >
              Início
            </a>
            <a
              href="#areas"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs uppercase tracking-widest text-[#f5ebd9] hover:text-[#c5a059] py-2 border-b border-[#26221c]"
            >
              Áreas de Atuação
            </a>
            <a
              href="#contato"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs uppercase tracking-widest text-[#f5ebd9] hover:text-[#c5a059] py-2 border-b border-[#26221c]"
            >
              Contato & Localização
            </a>
            <a
              href={LAWYER_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="gold-button w-full py-3 rounded-sm text-xs tracking-wider uppercase flex items-center justify-center gap-2 mt-2 font-semibold"
            >
              <span>Falar no WhatsApp Agora</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>
    </header>
  );
};
