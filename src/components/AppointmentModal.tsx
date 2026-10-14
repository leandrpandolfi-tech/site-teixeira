import React, { useState } from 'react';
import { X, Calendar, Clock, MessageCircle, ShieldCheck, Check } from 'lucide-react';
import { LAWYER_INFO, PRACTICE_AREAS } from '../data/legalContent';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultArea?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  defaultArea
}) => {
  if (!isOpen) return null;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [practiceArea, setPracticeArea] = useState(defaultArea || 'Direito Penal / Criminal');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('Manhã (09:00 - 11:30)');
  const [notes, setNotes] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formatted = `*Agendamento de Consulta Jurídica*%0A%0A*Cliente:* ${encodeURIComponent(
      name
    )}%0A*Contato:* ${encodeURIComponent(phone)}%0A*Área Jurídica:* ${encodeURIComponent(
      practiceArea
    )}%0A*Data Pretendida:* ${encodeURIComponent(
      date || 'A combinar'
    )}%0A*Período:* ${encodeURIComponent(time)}%0A*Observações:* ${encodeURIComponent(
      notes || 'Gostaria de agendar um horário para avaliação do caso.'
    )}`;

    window.open(`https://wa.me/${LAWYER_INFO.phoneRaw}?text=${formatted}`, '_blank');
    setSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl bg-[#0e0d0b] border border-[#c5a059]/40 rounded-xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-[#171410] to-[#12100d] border-b border-[#c5a059]/20 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#c5a059] uppercase">
              <ShieldCheck className="w-4 h-4 text-[#dfb76c]" />
              <span>{LAWYER_INFO.oab}</span>
            </div>
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#f5ecd9] mt-1">
              Agendar Consulta Jurídica
            </h3>
            <p className="text-xs text-[#9d8e7c] mt-0.5">
              Dr. Reginaldo Teixeira Neto · Montes Claros - MG
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#8e8170] hover:text-white rounded-lg transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-7">
          {success ? (
            <div className="p-8 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <Check className="w-7 h-7" />
              </div>
              <h4 className="font-cinzel text-xl font-bold text-white">
                Agendamento Encaminhado!
              </h4>
              <p className="text-xs sm:text-sm text-[#b9ac9a] leading-relaxed">
                As informações foram direcionadas para o WhatsApp profissional do Dr. Reginaldo Teixeira Neto ({LAWYER_INFO.phoneDisplay}). Você receberá a confirmação de horário em instantes.
              </p>
              <button
                onClick={onClose}
                className="gold-button px-6 py-2.5 rounded-sm text-xs uppercase tracking-wider font-semibold"
              >
                Concluir
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#b8aca0] font-medium mb-1">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded bg-[#161410] border border-[#c5a059]/25 text-white text-xs sm:text-sm focus:outline-none focus:border-[#dfb76c]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#b8aca0] font-medium mb-1">
                    WhatsApp / Telefone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(38) 99999-9999"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded bg-[#161410] border border-[#c5a059]/25 text-white text-xs sm:text-sm focus:outline-none focus:border-[#dfb76c]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#b8aca0] font-medium mb-1">
                    Área de Interesse
                  </label>
                  <select
                    value={practiceArea}
                    onChange={(e) => setPracticeArea(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded bg-[#161410] border border-[#c5a059]/25 text-[#f5ecd9] text-xs sm:text-sm focus:outline-none focus:border-[#dfb76c]"
                  >
                    {PRACTICE_AREAS.map((a) => (
                      <option key={a.id} value={a.title} className="bg-[#161410]">
                        {a.title}
                      </option>
                    ))}
                    <option value="Outro Assunto Jurídico" className="bg-[#161410]">
                      Outro Assunto Jurídico
                    </option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#b8aca0] font-medium mb-1">
                    Data de Preferência
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded bg-[#161410] border border-[#c5a059]/25 text-white text-xs sm:text-sm focus:outline-none focus:border-[#dfb76c]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#b8aca0] font-medium mb-1">
                    Horário Preferencial
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded bg-[#161410] border border-[#c5a059]/25 text-[#f5ecd9] text-xs sm:text-sm focus:outline-none focus:border-[#dfb76c]"
                  >
                    <option value="Manhã (08:30 - 11:30)" className="bg-[#161410]">
                      Manhã (08:30 - 11:30)
                    </option>
                    <option value="Tarde (13:30 - 17:30)" className="bg-[#161410]">
                      Tarde (13:30 - 17:30)
                    </option>
                    <option value="Horário Flexível" className="bg-[#161410]">
                      Horário Flexível
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#b8aca0] font-medium mb-1">
                  Detalhes Relevantes do Caso (Opcional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Ex.: Gostaria de orientações sobre inventário ou revisão contratual..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2 rounded bg-[#161410] border border-[#c5a059]/25 text-white text-xs sm:text-sm focus:outline-none focus:border-[#dfb76c] resize-none"
                ></textarea>
              </div>

              <p className="text-[11px] text-[#8e8170] leading-relaxed">
                * Seus dados são protegidos por sigilo profissional em conformidade com o Código de Ética e Disciplina da OAB.
              </p>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full gold-button py-3 px-4 rounded-sm text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <MessageCircle className="w-4 h-4 text-[#070707]" />
                  <span>Confirmar e Abrir no WhatsApp</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
