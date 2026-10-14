import React from 'react';
import { X, CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react';
import { PracticeArea } from '../types';
import { LAWYER_INFO } from '../data/legalContent';

interface SpecialtyDetailModalProps {
  area: PracticeArea | null;
  onClose: () => void;
  onOpenAppointment: (areaTitle: string) => void;
}

export const SpecialtyDetailModal: React.FC<SpecialtyDetailModalProps> = ({
  area,
  onClose,
  onOpenAppointment
}) => {
  if (!area) return null;

  const whatsappMessage = encodeURIComponent(
    `Olá Dr. Reginaldo Teixeira Neto! Gostaria de consultar um caso específico na área de *${area.title}*. Poderia me orientar?`
  );
  const directWhatsappUrl = `https://wa.me/${LAWYER_INFO.phoneRaw}?text=${whatsappMessage}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-[#0f0e0c] border border-[#c5a059]/40 rounded-xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header banner */}
        <div className="p-6 sm:p-8 bg-gradient-to-r from-[#17140f] to-[#110f0c] border-b border-[#c5a059]/20 flex items-start justify-between">
          <div>
            <span className="text-[11px] font-mono tracking-widest uppercase text-[#c5a059]">
              Área de Atuação Especializada
            </span>
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#f5ecd9] mt-1">
              {area.title}
            </h3>
            <p className="text-xs text-[#a89b88] mt-1">
              {LAWYER_INFO.firmName} · {LAWYER_INFO.oab}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-[#9e907e] hover:text-white hover:bg-[#201c15] transition-colors"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-[#cdc2b1] leading-relaxed">
          <div>
            <h4 className="text-xs uppercase tracking-wider text-[#dfb76c] font-semibold mb-2">
              Visão Geral & Atuação Estratégica
            </h4>
            <p>{area.fullDescription}</p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider text-[#dfb76c] font-semibold mb-3">
              Serviços & Procedimentos Contemplados
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {area.topics.map((topic, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-lg bg-[#14120f] border border-[#c5a059]/15"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                  <span className="text-xs text-[#e4dacb]">{topic}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Guarantee / ethical note */}
          <div className="p-4 rounded-lg bg-[#1a1712]/60 border border-[#c5a059]/25 text-xs text-[#a99c89]">
            <p className="leading-relaxed">
              <strong className="text-[#dfb76c]">Compromisso ético e confidencialidade:</strong> Toda
              consulta inicial é tratada sob rigoroso sigilo profissional, com diagnóstico objetivo da
              viabilidade jurídica antes de qualquer contratação.
            </p>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-6 bg-[#12100d] border-t border-[#c5a059]/20 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={() => {
              onClose();
              onOpenAppointment(area.title);
            }}
            className="w-full sm:w-auto px-5 py-2.5 rounded-sm border border-[#c5a059]/40 hover:bg-[#221c13] text-[#dfb76c] text-xs uppercase tracking-wider font-semibold transition-colors flex items-center justify-center gap-2"
          >
            <span>Agendar Reunião</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <a
            href={directWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto gold-button px-6 py-2.5 rounded-sm text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 shadow-lg"
          >
            <MessageCircle className="w-4 h-4 text-[#070707]" />
            <span>Consultar Dr. Reginaldo no WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
