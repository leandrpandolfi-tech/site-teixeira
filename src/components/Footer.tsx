import React from 'react';
import { MapPin, Phone, ExternalLink, ShieldCheck } from 'lucide-react';
import { LAWYER_INFO } from '../data/legalContent';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] text-[#b0a594] border-t border-[#c5a059]/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#c5a059]/15">
          {/* Col 1: Brand & OAB */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#c5a059]/50 flex items-center justify-center p-1.5 bg-[#14110c]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="w-6 h-6 text-[#dfb76c]"
                >
                  <line x1="12" y1="3" x2="12" y2="21" />
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <circle cx="12" cy="3" r="1" fill="#dfb76c" />
                  <line x1="4" y1="7" x2="2" y2="13" />
                  <line x1="4" y1="7" x2="6" y2="13" />
                  <path d="M1.5 13 C2.5 15, 5.5 15, 6.5 13 Z" fill="rgba(223, 183, 108, 0.2)" />
                  <line x1="20" y1="7" x2="18" y2="13" />
                  <line x1="20" y1="7" x2="22" y2="13" />
                  <path d="M17.5 13 C18.5 15, 21.5 15, 22.5 13 Z" fill="rgba(223, 183, 108, 0.2)" />
                  <path d="M8 21 L16 21" />
                </svg>
              </div>
              <div>
                <span className="font-cinzel text-base tracking-widest font-bold text-[#f5ecd9] block">
                  REGINALDO TEIXEIRA NETO
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#c5a059] block">
                  ADVOCACIA · {LAWYER_INFO.oab}
                </span>
              </div>
            </div>

            <p className="text-xs text-[#8e8272] leading-relaxed max-w-sm">
              Assessoria jurídica estratégica pautada na ética, excelência técnica e no compromisso intransigente com a defesa dos direitos dos nossos constituintes em Montes Claros e em todo o Brasil.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={LAWYER_INFO.googleShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded bg-[#12100d] border border-[#c5a059]/25 hover:border-[#dfb76c] text-[11px] text-[#f5ecd9] transition-colors flex items-center gap-1.5"
              >
                <span>Avaliações no Google</span>
                <ExternalLink className="w-3 h-3 text-[#c5a059]" />
              </a>

              <a
                href={LAWYER_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded bg-[#12100d] border border-[#c5a059]/25 hover:border-[#dfb76c] text-[11px] text-[#f5ecd9] transition-colors flex items-center gap-1.5"
              >
                <span>Facebook Oficial</span>
                <ExternalLink className="w-3 h-3 text-[#c5a059]" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-cinzel text-xs uppercase tracking-widest text-[#f5ecd9] font-bold">
              Navegação Rápida
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#inicio" className="hover:text-[#dfb76c] transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#areas" className="hover:text-[#dfb76c] transition-colors">
                  Áreas de Especialidade
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-[#dfb76c] transition-colors">
                  Localização em Montes Claros
                </a>
              </li>
              <li>
                <a
                  href={LAWYER_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6ee7b7] hover:underline font-semibold"
                >
                  Falar no WhatsApp (+55 38 9906-0584)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Address & Direct Contact */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-cinzel text-xs uppercase tracking-widest text-[#f5ecd9] font-bold">
              Atendimento em Montes Claros
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                <span className="leading-snug">
                  {LAWYER_INFO.fullAddress}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#c5a059] shrink-0" />
                <a
                  href={`tel:${LAWYER_INFO.phoneRaw}`}
                  className="font-mono text-[#f5ecd9] hover:underline"
                >
                  {LAWYER_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#c5a059] shrink-0" />
                <span>Inscrição Regular: {LAWYER_INFO.oab}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Ethical Compliance Note & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#786c5e]">
          <p className="max-w-2xl text-left leading-relaxed">
            <strong>Aviso de Conformidade OAB:</strong> Este website possui finalidade exclusivamente informativa e institucional, em estrita conformidade com o Código de Ética e Disciplina da OAB (Lei nº 8.906/94 e Provimento nº 205/2021 do CFOAB). Não constitui captação indevida de causas ou mercantilização da advocacia.
          </p>
          <div className="text-right shrink-0">
            <p>© {new Date().getFullYear()} {LAWYER_INFO.firmName}. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
