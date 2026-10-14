import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { LAWYER_INFO } from '../data/legalContent';

interface HeroProps {
  onOpenAppointment: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAppointment }) => {
  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 lg:py-32 overflow-hidden bg-[#070707]"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#c5a059]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#dfb76c]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Credibility */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* OAB micro kicker */}
            <div className="flex items-center gap-2 mb-4 text-xs tracking-[0.25em] uppercase text-[#c5a059] font-medium">
              <span className="w-6 h-px bg-[#c5a059]"></span>
              <span>{LAWYER_INFO.oab} · Direito Penal & Trabalhista · Montes Claros - MG</span>
            </div>

            {/* Giant Title matching image */}
            <h1 className="font-cinzel text-3xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold text-[#f5ecd9] leading-[1.08] tracking-wide mb-6">
              PROTEGENDO <br />
              SEUS DIREITOS <br />
              <span className="text-[#f5ecd9]">COM EXCELÊNCIA</span> <br />
              <span className="gold-gradient-text">E ÉTICA</span>
            </h1>

            {/* Diamond ornament divider matching mockup */}
            <div className="flex items-center gap-3 my-2 w-full max-w-md">
              <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#c5a059]/60"></span>
              <span className="text-[#dfb76c] text-xs">◆</span>
              <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#c5a059]/60"></span>
            </div>

            {/* Subtitle matching mockup & conversion focus */}
            <p className="text-base sm:text-lg text-[#b8ada0] leading-relaxed max-w-2xl mt-4 mb-8 font-light">
              Soluções jurídicas estratégicas e combativas exclusivamente em <strong className="text-[#f5ecd9] font-medium">Direito Penal / Criminal</strong> e <strong className="text-[#f5ecd9] font-medium">Direito do Trabalho</strong>, com compromisso, excelência e <strong className="text-[#dfb76c] font-medium">defesa incansável da sua liberdade e dos seus direitos trabalhistas</strong>.
            </p>

            {/* Direct WhatsApp Callout Banner */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-8">
              <a
                href={LAWYER_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-button px-8 py-4 rounded-sm text-xs sm:text-sm font-bold tracking-[0.16em] uppercase flex items-center justify-center gap-3 shadow-2xl w-full sm:w-auto cursor-pointer hover:scale-[1.02] transition-transform"
              >
                <MessageCircle className="w-5 h-5 text-[#070707] fill-[#070707]" />
                <span>Chamar no WhatsApp Agora</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#areas"
                className="px-6 py-4 rounded-sm text-xs font-semibold tracking-[0.16em] uppercase flex items-center justify-center gap-2 border border-[#c5a059]/40 bg-[#12100d] hover:bg-[#1f1b14] hover:border-[#dfb76c] text-[#f5ecd9] transition-all w-full sm:w-auto cursor-pointer shadow-md"
              >
                <span>Conhecer Especialidades</span>
              </a>
            </div>

            {/* Quick reassurance badge */}
            <div className="flex items-center gap-2 text-xs text-[#9d8e7c]">
              <span className="w-2 h-2 rounded-full bg-[#25D366]"></span>
              <span>Atendimento em Montes Claros - MG e online para todo o Brasil · Telefone: <strong className="text-white font-mono">{LAWYER_INFO.phoneDisplay}</strong></span>
            </div>
          </div>

          {/* Right Column: Golden Scales of Justice with Orbital Rings matching image */}
          <div className="lg:col-span-5 relative flex items-center justify-center mt-6 lg:mt-0">
            {/* Concentric orbital circles behind scales */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] rounded-full border border-[#c5a059]/15"></div>
              <div className="absolute w-[240px] sm:w-[320px] h-[240px] sm:h-[320px] rounded-full border border-[#c5a059]/20"></div>
              <div className="absolute w-[160px] sm:w-[220px] h-[160px] sm:h-[220px] rounded-full border border-[#c5a059]/10"></div>
              <div className="absolute w-48 h-48 bg-[#c5a059]/10 rounded-full blur-2xl"></div>
            </div>

            {/* Scales Image Container with Vignette Gradient */}
            <div className="relative w-full max-w-[460px] aspect-[4/3] sm:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-[#c5a059]/25 group">
              <img
                src="/src/assets/images/justice_scales_hero_1791989909746.jpg"
                alt="Balança da Justiça de bronze dourado - Dr. Reginaldo Teixeira Neto Advocacia"
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              {/* Radial dark vignette over image to blend seamlessly with dark canvas */}
              <div className="absolute inset-0 bg-radial from-transparent via-[#070707]/20 to-[#070707] pointer-events-none"></div>
              <div className="absolute inset-0 ring-1 ring-inset ring-[#c5a059]/20 rounded-2xl pointer-events-none"></div>

              {/* Subtle badge on bottom */}
              <div className="absolute bottom-3 left-3 right-3 py-2 px-3 bg-[#0a0907]/80 backdrop-blur-md rounded border border-[#c5a059]/20 text-[11px] text-[#c7bcac] flex items-center justify-between">
                <span className="font-serif italic text-[#dfb76c]">Iustitia & Lex</span>
                <span className="font-mono text-[10px] text-[#9c8e7b]">Montes Claros - MG</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
