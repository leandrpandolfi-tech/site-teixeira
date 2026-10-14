import React from 'react';
import { Award, MapPin, Star, ShieldCheck } from 'lucide-react';
import { LAWYER_INFO } from '../data/legalContent';
import { FadeIn } from './FadeIn';

export const StatsBar: React.FC = () => {
  const credentials = [
    {
      icon: Award,
      title: LAWYER_INFO.oab,
      subtitle: 'Inscrição Regular na OAB Minas Gerais',
      linkText: 'Registro Verificado',
      href: 'https://cna.oab.org.br/'
    },
    {
      icon: ShieldCheck,
      title: 'Penal & Trabalhista',
      subtitle: 'Atuação combativa na defesa criminal e do trabalhador',
      linkText: 'Chamar no WhatsApp',
      href: LAWYER_INFO.whatsappUrl
    },
    {
      icon: MapPin,
      title: 'Montes Claros - MG',
      subtitle: 'Rua General Carneiro, 10 - Sl 102 - Centro',
      linkText: 'Ver Endereço',
      href: '#contato'
    },
    {
      icon: Star,
      title: 'Plantão & Resposta Ágil',
      subtitle: 'Flagrantes, prisões e prazos trabalhistas no WhatsApp',
      linkText: 'Plantão no WhatsApp',
      href: LAWYER_INFO.whatsappUrl
    }
  ];

  return (
    <section className="relative z-20 border-y border-[#c5a059]/20 bg-[#0d0c0a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <FadeIn direction="up">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#c5a059]/15">
          {credentials.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`flex flex-col justify-between pt-4 sm:pt-0 ${
                  idx > 0 ? 'sm:pl-6 lg:pl-8' : ''
                }`}
              >
                <div className="flex items-start gap-3.5 mb-2">
                  <div className="p-2 rounded bg-[#181510] border border-[#c5a059]/30 text-[#dfb76c] shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-cinzel text-sm sm:text-base font-semibold text-[#f5ecd9] tracking-wider">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#a39785] mt-1 leading-snug">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : '_self'}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-[11px] tracking-wider uppercase text-[#c5a059] hover:text-[#f3d99d] transition-colors inline-flex items-center gap-1 mt-2 font-medium"
                >
                  <span>{item.linkText}</span>
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            );
          })}
        </div>
        </FadeIn>
      </div>
    </section>
  );
};
