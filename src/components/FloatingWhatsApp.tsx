import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { LAWYER_INFO } from '../data/legalContent';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <aside
      aria-label="Atendimento via WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end"
    >
      {/* Expandable popup teaser on hover or click */}
      {showTooltip && (
        <div className="mb-3 w-72 p-4 rounded-xl bg-[#14120e] border border-[#c5a059]/40 shadow-2xl animate-in fade-in slide-in-from-bottom-2 duration-200 text-left">
          <div className="flex items-start justify-between pb-2 border-b border-[#c5a059]/20 mb-2.5">
            <div>
              <h4 className="font-cinzel text-xs font-bold text-[#f5ecd9]">
                {LAWYER_INFO.firmName}
              </h4>
              <p className="text-[10px] text-[#c5a059] font-mono">{LAWYER_INFO.oab}</p>
            </div>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-[#8e8170] hover:text-white p-0.5"
              aria-label="Fechar mensagem"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-xs text-[#d1c7b8] leading-relaxed mb-3">
            Olá! Precisa de assistência jurídica rápida com o Dr. Reginaldo Teixeira Neto?
          </p>
          <a
            href={LAWYER_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2 px-3 rounded bg-[#25D366] hover:bg-[#20ba59] text-black font-semibold text-xs tracking-wide flex items-center justify-center gap-1.5 transition-colors shadow"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-black" />
            <span>Falar Agora no WhatsApp</span>
          </a>
        </div>
      )}

      {/* Main floating circle button with text pill */}
      <div className="flex items-center gap-2.5">
        <a
          href={LAWYER_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#14120e] border border-[#25D366]/40 text-[#f5ecd9] hover:text-white text-xs font-medium shadow-xl hover:border-[#25D366] transition-all"
        >
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
          <span>Falar com Dr. Reginaldo</span>
        </a>

        <div className="relative group">
          {/* Pulsing aura ring */}
          <span className="absolute -inset-1.5 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none"></span>

          <a
            href={LAWYER_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setShowTooltip(true)}
            className="animate-whatsapp-pulse relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 cursor-pointer"
            aria-label="Atendimento direto pelo WhatsApp com Dr. Reginaldo Teixeira Neto"
            title="Fale diretamente com o Dr. Reginaldo pelo WhatsApp"
          >
            {/* Authentic WhatsApp Icon SVG */}
            <svg
              viewBox="0 0 24 24"
              className="w-8 h-8 fill-current"
            >
              <path d="M17.472 14.382c-.301-.15-1.777-.877-2.052-.977-.275-.101-.476-.15-.676.15-.201.3-.777.978-.952 1.178-.175.201-.351.226-.652.075-.3-.15-1.267-.467-2.414-1.488-.893-.797-1.496-1.782-1.672-2.083-.175-.3-.019-.462.132-.612.136-.135.3-.351.451-.527.15-.175.201-.3.301-.501.101-.201.05-.376-.025-.526-.076-.15-.676-1.63-.927-2.233-.244-.588-.492-.508-.676-.517l-.577-.01c-.2 0-.526.076-.802.376-.275.3-1.052 1.028-1.052 2.507 0 1.479 1.077 2.908 1.228 3.109.15.201 2.12 3.238 5.136 4.542.717.31 1.277.495 1.713.633.72.228 1.376.196 1.895.118.579-.088 1.777-.727 2.028-1.429.25-.702.25-1.304.175-1.43-.075-.125-.276-.2-.577-.35zM12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.98-1.306A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.25c-1.636 0-3.15-.494-4.425-1.341l-.317-.212-3.284.861.877-3.2-.232-.37A8.218 8.218 0 0 1 3.75 12c0-4.549 3.701-8.25 8.25-8.25s8.25 3.701 8.25 8.25-3.701 8.25-8.25 8.25z" />
            </svg>
          </a>
        </div>
      </div>
    </aside>
  );
};
