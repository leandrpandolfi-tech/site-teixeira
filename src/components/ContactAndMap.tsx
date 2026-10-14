import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Clock,
  Send,
  MessageCircle,
  ExternalLink,
  Copy,
  Check,
  Navigation,
  Share2
} from 'lucide-react';
import { LAWYER_INFO, PRACTICE_AREAS } from '../data/legalContent';
import { FadeIn } from './FadeIn';

export const ContactAndMap: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    practiceArea: 'Direito Penal / Criminal',
    urgency: 'Normal',
    message: ''
  });

  const [copiedAddress, setCopiedAddress] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(LAWYER_INFO.fullAddress);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendViaWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedText = `*Solicitação de Consulta Jurídica*%0A%0A*Nome:* ${encodeURIComponent(
      formData.name || 'Não informado'
    )}%0A*Telefone:* ${encodeURIComponent(formData.phone || 'Não informado')}%0A*Área Jurídica:* ${encodeURIComponent(
      formData.practiceArea
    )}%0A*Urgência:* ${encodeURIComponent(formData.urgency)}%0A*Resumo do Caso:* ${encodeURIComponent(
      formData.message || 'Gostaria de uma consulta.'
    )}`;

    window.open(`https://wa.me/${LAWYER_INFO.phoneRaw}?text=${formattedText}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contato" className="py-24 bg-[#070707] relative border-t border-[#c5a059]/15 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with FadeIn */}
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 mb-3 text-xs tracking-[0.25em] uppercase text-[#c5a059] font-medium">
              <span className="w-5 h-px bg-[#c5a059]"></span>
              <span>Atendimento & Localização</span>
              <span className="w-5 h-px bg-[#c5a059]"></span>
            </div>
            <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-[#f5ecd9] tracking-wide">
              Entre em Contato com o Escritório
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-[#a39785] leading-relaxed">
              Agende uma consulta presencial em nosso escritório em Montes Claros ou solicite atendimento jurídico virtual para qualquer localidade do país.
            </p>
          </div>
        </FadeIn>

        {/* 2-Column: Contact Info & Form on Left, Map & Route tools on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Cards & Consultation Form with FadeIn */}
          <div className="lg:col-span-6 space-y-6">
            <FadeIn delayMs={80} direction="up">
              <div className="space-y-6">
            {/* Quick Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* WhatsApp Card */}
              <div className="p-5 rounded-xl bg-[#100e0b] border border-[#c5a059]/25 hover:border-[#dfb76c]/50 transition-colors">
                <div className="flex items-center gap-3 mb-2 text-[#25D366]">
                  <MessageCircle className="w-5 h-5" />
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#f5ecd9]">
                    WhatsApp Direto
                  </span>
                </div>
                <p className="text-base font-semibold text-white tracking-wide font-mono mb-2">
                  {LAWYER_INFO.phoneDisplay}
                </p>
                <a
                  href={LAWYER_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#dfb76c] hover:underline inline-flex items-center gap-1 font-medium"
                >
                  <span>Iniciar conversa imediata</span>
                  <span>→</span>
                </a>
              </div>

              {/* Office Hours */}
              <div className="p-5 rounded-xl bg-[#100e0b] border border-[#c5a059]/25">
                <div className="flex items-center gap-3 mb-2 text-[#dfb76c]">
                  <Clock className="w-5 h-5" />
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#f5ecd9]">
                    Horário de Atendimento
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#d4cabf] leading-snug">
                  {LAWYER_INFO.hours}
                </p>
                <span className="text-[11px] text-[#8e8170] block mt-2">
                  Atendimento presencial com agendamento
                </span>
              </div>
            </div>

            {/* Address Card */}
            <div className="p-5 rounded-xl bg-[#100e0b] border border-[#c5a059]/25 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-[#1a1712] border border-[#c5a059]/30 text-[#dfb76c] shrink-0 mt-1 sm:mt-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#f5ecd9]">Endereço do Escritório</h4>
                  <p className="text-xs text-[#bfb3a2] mt-0.5 leading-relaxed">
                    {LAWYER_INFO.address}
                  </p>
                  <p className="text-xs text-[#8e8170]">
                    {LAWYER_INFO.city} - {LAWYER_INFO.state}, CEP {LAWYER_INFO.cep}
                  </p>
                </div>
              </div>

              <button
                onClick={handleCopyAddress}
                className="px-3.5 py-2 rounded text-xs border border-[#c5a059]/30 hover:bg-[#1a1711] text-[#dfb76c] transition-colors flex items-center gap-1.5 shrink-0 self-end sm:self-center cursor-pointer"
              >
                {copiedAddress ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar Endereço</span>
                  </>
                )}
              </button>
            </div>

            {/* Consultation Intake Form */}
            <div className="p-6 sm:p-7 rounded-xl bg-[#100e0b] border border-[#c5a059]/30 shadow-xl">
              <div className="mb-5">
                <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#f5ecd9]">
                  Mensagem para o Dr. Reginaldo Teixeira Neto
                </h3>
                <p className="text-xs text-[#9d8e7c] mt-1">
                  Preencha os campos para receber uma resposta personalizada com sigilo ético.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-lg bg-[#151c14] border border-emerald-500/40 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-cinzel text-base font-bold text-white">
                    Solicitação Recebida com Sucesso
                  </h4>
                  <p className="text-xs text-[#c2d6be] leading-relaxed">
                    O Dr. Reginaldo Teixeira Neto entrará em contato em breve pelo número informado para dar prosseguimento ao seu atendimento.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        practiceArea: 'Direito Civil & Contratos',
                        urgency: 'Normal',
                        message: ''
                      });
                    }}
                    className="text-xs text-[#c5a059] underline hover:text-white pt-2 cursor-pointer"
                  >
                    Enviar nova solicitação
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSendViaWhatsApp} className="space-y-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#bfb4a4] font-medium mb-1.5">
                      Seu Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex.: Carlos Mendes"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded bg-[#171410] border border-[#c5a059]/25 text-white text-xs sm:text-sm focus:outline-none focus:border-[#dfb76c] transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#bfb4a4] font-medium mb-1.5">
                        WhatsApp / Telefone *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(38) 99999-9999"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded bg-[#171410] border border-[#c5a059]/25 text-white text-xs sm:text-sm focus:outline-none focus:border-[#dfb76c] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#bfb4a4] font-medium mb-1.5">
                        Área Jurídica
                      </label>
                      <select
                        value={formData.practiceArea}
                        onChange={(e) => setFormData({ ...formData, practiceArea: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded bg-[#171410] border border-[#c5a059]/25 text-[#f5ecd9] text-xs sm:text-sm focus:outline-none focus:border-[#dfb76c] transition-colors"
                      >
                        {PRACTICE_AREAS.map((area) => (
                          <option key={area.id} value={area.title} className="bg-[#171410]">
                            {area.title}
                          </option>
                        ))}
                        <option value="Outro Assunto Jurídico" className="bg-[#171410]">
                          Outro Assunto Jurídico
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#bfb4a4] font-medium mb-1.5">
                      Breve Resumo da Sua Situação
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Descreva brevemente a sua dúvida jurídica ou o problema a ser resolvido..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded bg-[#171410] border border-[#c5a059]/25 text-white text-xs sm:text-sm focus:outline-none focus:border-[#dfb76c] transition-colors resize-none"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full gold-button py-3.5 px-4 rounded-sm text-xs sm:text-sm font-bold tracking-wider uppercase flex items-center justify-center gap-2.5 cursor-pointer shadow-lg hover:scale-[1.01] transition-transform"
                    >
                      <MessageCircle className="w-5 h-5 text-[#070707] fill-[#070707]" />
                      <span>Enviar Mensagem Direto no WhatsApp</span>
                    </button>
                    <p className="text-[11px] text-center text-[#8e8170] mt-2">
                      Você será redirecionado para o WhatsApp oficial com a mensagem já pré-preenchida.
                    </p>
                  </div>
                </form>
              )}
            </div>
            </div>
            </FadeIn>
          </div>

          {/* Right Column: Integrated Google Map & Direct Links with FadeIn */}
          <div className="lg:col-span-6">
            <FadeIn delayMs={180} direction="up">
              <div className="flex flex-col gap-6">
            {/* Integrated Map Container */}
            <div className="rounded-xl overflow-hidden border border-[#c5a059]/30 bg-[#12100d] shadow-2xl relative flex flex-col">
              {/* Map Bar */}
              <div className="p-4 bg-[#171410] border-b border-[#c5a059]/20 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#dfb76c]"></div>
                  <span className="text-xs uppercase font-medium tracking-wider text-[#f5ecd9]">
                    Localização no Google Maps · Montes Claros
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={LAWYER_INFO.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#dfb76c] hover:underline flex items-center gap-1 font-medium"
                  >
                    <span>Abrir Rota</span>
                    <Navigation className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Map Iframe */}
              <div className="w-full h-[420px] sm:h-[480px] relative bg-[#1a1712]">
                <iframe
                  title="Mapa de localização Dr. Reginaldo Teixeira Neto Montes Claros"
                  src={LAWYER_INFO.mapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'contrast(1.05) saturate(1.1)' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>

              {/* Map Bottom Bar / Directions & Reference */}
              <div className="p-4 bg-[#100e0b] border-t border-[#c5a059]/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <div className="text-left text-[#b5a796]">
                  <span className="font-semibold text-white block">Ponto de Referência:</span>
                  <span>Centro de Montes Claros, próximo à Praça da Matriz e comércios centrais.</span>
                </div>
                <a
                  href={LAWYER_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded bg-[#1c1811] hover:bg-[#282117] text-[#dfb76c] border border-[#c5a059]/30 transition-colors shrink-0 flex items-center gap-2 font-medium"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Traçar Rota no Waze / Maps</span>
                </a>
              </div>
            </div>

            {/* Official Social Links & Share Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Google Profile Link from user prompt */}
              <a
                href={LAWYER_INFO.googleShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#100e0b] border border-[#c5a059]/20 hover:border-[#dfb76c] transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center p-1.5 shadow-sm shrink-0">
                    <svg viewBox="0 0 24 24" className="w-full h-full">
                      <path
                        fill="#4285F4"
                        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.05h3.9c2.28-2.1 3.6-5.2 3.6-9.14z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.9-3.05c-1.08.72-2.45 1.16-4.03 1.16-3.1 0-5.74-2.1-6.68-4.94H1.21v3.15C3.2 21.35 7.3 24 12 24z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.32 14.26a7.2 7.2 0 0 1 0-4.52V6.59H1.21a11.96 11.96 0 0 0 0 10.82l4.11-3.15z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 4.77c1.76 0 3.34.61 4.58 1.8l3.43-3.43C17.95 1.19 15.24 0 12 0 7.3 0 3.2 2.65 1.21 6.59l4.11 3.15c.94-2.84 3.58-4.97 6.68-4.97z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-xs font-semibold text-[#f5ecd9] group-hover:text-[#dfb76c] transition-colors">
                      Perfil Google
                    </h5>
                    <span className="text-[11px] text-[#8e8170]">Avaliações e Informações</span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-[#8e8170] group-hover:text-[#dfb76c] transition-colors" />
              </a>

              {/* Facebook Profile Link from user prompt */}
              <a
                href={LAWYER_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#100e0b] border border-[#c5a059]/20 hover:border-[#dfb76c] transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#1877F2] text-white flex items-center justify-center font-bold text-lg shrink-0">
                    f
                  </div>
                  <div>
                    <h5 className="text-xs font-semibold text-[#f5ecd9] group-hover:text-[#dfb76c] transition-colors">
                      Página no Facebook
                    </h5>
                    <span className="text-[11px] text-[#8e8170]">Novidades e Artigos</span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-[#8e8170] group-hover:text-[#dfb76c] transition-colors" />
              </a>
            </div>
            </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
