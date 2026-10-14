import React, { useState } from 'react';
import {
  ShieldAlert,
  Briefcase,
  ArrowRight,
  MessageCircle,
  HelpCircle,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { PRACTICE_AREAS, LAWYER_INFO } from '../data/legalContent';
import { PracticeArea } from '../types';
import { SpecialtyDetailModal } from './SpecialtyDetailModal';
import { FadeIn } from './FadeIn';

export const Specialties: React.FC<{ onOpenAppointment: (areaTitle?: string) => void }> = ({
  onOpenAppointment
}) => {
  const [selectedArea, setSelectedArea] = useState<PracticeArea | null>(null);

  return (
    <section id="areas" className="py-24 bg-[#0a0907] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with FadeIn */}
        <FadeIn direction="up">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 mb-3 text-xs tracking-[0.25em] uppercase text-[#c5a059] font-medium">
              <span className="w-5 h-px bg-[#c5a059]"></span>
              <span>Áreas de Atuação Exclusiva</span>
              <span className="w-5 h-px bg-[#c5a059]"></span>
            </div>
            <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-[#f5ecd9] tracking-wide leading-tight">
              Áreas de Atuação
            </h2>
            <p className="mt-4 text-[#a89c8a] text-sm sm:text-base leading-relaxed">
              Atuação especializada, ética e combativa focada exclusivamente em defender a sua liberdade e os seus direitos no trabalho.
            </p>
          </div>
        </FadeIn>

        {/* 2 Clean & Prominent Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {PRACTICE_AREAS.map((area, index) => {
            const isPenal = area.id === 'direito-penal';
            const Icon = isPenal ? ShieldAlert : Briefcase;
            const whatsappDirectUrl = `https://wa.me/${LAWYER_INFO.phoneRaw}?text=${encodeURIComponent(
              `Olá Dr. Reginaldo Teixeira Neto, gostaria de orientação jurídica em *${area.title}*.`
            )}`;

            return (
              <FadeIn key={area.id} delayMs={index * 120} direction="up" className="h-full">
                <div
                  className={`group relative flex flex-col justify-between p-8 rounded-2xl bg-[#0f0e0c] border transition-all duration-300 h-full shadow-2xl ${
                    isPenal
                      ? 'border-[#c5a059]/30 hover:border-rose-400/60 hover:shadow-rose-950/20'
                      : 'border-[#c5a059]/30 hover:border-[#dfb76c] hover:shadow-[#c5a059]/10'
                  }`}
                >
                  <div>
                    {/* Badge & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-xl bg-[#161410] border border-[#c5a059]/30 flex items-center justify-center text-[#dfb76c] group-hover:scale-110 group-hover:bg-[#c5a059] group-hover:text-black transition-all duration-300">
                        <Icon className="w-7 h-7" />
                      </div>

                      <span className="text-[11px] font-mono tracking-widest uppercase text-[#c5a059] bg-[#1a1711] px-3 py-1 rounded-full border border-[#c5a059]/20 font-medium">
                        {isPenal ? 'Defesa Criminal' : 'Direito Laboral'}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-cinzel text-2xl font-bold text-[#f5ecd9] group-hover:text-[#edd08e] transition-colors mb-3">
                      {area.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-[#b5a796] leading-relaxed mb-6 font-light">
                      {area.shortDescription}
                    </p>

                    {/* 4 Clean Topics */}
                    <div className="space-y-2.5 mb-8 border-t border-[#c5a059]/15 pt-5">
                      {area.topics.map((topic, tIdx) => (
                        <div key={tIdx} className="flex items-center gap-2.5 text-xs text-[#ded5c8]">
                          <CheckCircle2 className="w-4 h-4 text-[#c5a059] shrink-0" />
                          <span>{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="space-y-3 pt-4 border-t border-[#c5a059]/15">
                    <a
                      href={whatsappDirectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 px-4 rounded bg-[#25D366] hover:bg-[#20ba59] text-black text-xs sm:text-sm font-bold tracking-wider uppercase flex items-center justify-center gap-2.5 shadow-xl hover:scale-[1.02] active:scale-95 transition-all"
                    >
                      <MessageCircle className="w-4 h-4 fill-black" />
                      <span>{isPenal ? 'Chamar no WhatsApp (Penal)' : 'Chamar no WhatsApp (Trabalhista)'}</span>
                    </a>

                    <button
                      onClick={() => setSelectedArea(area)}
                      className="w-full py-2 text-xs uppercase tracking-wider text-[#9e907d] hover:text-[#f5ecd9] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Ver detalhes da atuação</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Clean Emergency Reassurance Strip */}
        <FadeIn delayMs={150} direction="up">
          <div className="mt-14 max-w-4xl mx-auto p-6 rounded-xl bg-[#12100d] border border-[#c5a059]/25 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1e1912] border border-[#c5a059]/40 flex items-center justify-center text-[#dfb76c] shrink-0">
                <Clock className="w-5 h-5 text-[#dfb76c]" />
              </div>
              <div>
                <h4 className="font-cinzel text-sm sm:text-base font-bold text-white">
                  Casos de Urgência, Prisão ou Prazos Judiciais?
                </h4>
                <p className="text-xs text-[#9c8e7c]">
                  Atendimento direto pelo WhatsApp com o Dr. Reginaldo Teixeira Neto.
                </p>
              </div>
            </div>

            <a
              href={LAWYER_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="gold-button px-6 py-2.5 rounded-sm text-xs font-semibold tracking-wider uppercase shrink-0"
            >
              Falar Agora
            </a>
          </div>
        </FadeIn>
      </div>

      {/* Specialty Detail Modal */}
      <SpecialtyDetailModal
        area={selectedArea}
        onClose={() => setSelectedArea(null)}
        onOpenAppointment={(title) => {
          setSelectedArea(null);
          onOpenAppointment(title);
        }}
      />
    </section>
  );
};
