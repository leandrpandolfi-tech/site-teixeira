import { PracticeArea } from '../types';

export const LAWYER_INFO = {
  name: 'Dr. Reginaldo Teixeira Neto',
  firmName: 'Reginaldo Teixeira Neto Advocacia',
  oab: 'OAB/MG 174.580',
  address: 'Rua General Carneiro, 10 - Sl 102 - Centro',
  city: 'Montes Claros',
  state: 'MG',
  cep: '39400-095',
  fullAddress: 'Rua General Carneiro, 10 - Sl 102 - Centro, Montes Claros - MG, 39400-095',
  phoneDisplay: '+55 (38) 9906-0584',
  phoneRaw: '553899060584',
  whatsappUrl: 'https://wa.me/553899060584?text=Ol%C3%A1%20Dr.%20Reginaldo%20Teixeira%20Neto%2C%20preciso%20de%20orienta%C3%A7%C3%A3o%20jur%C3%ADdica.',
  googleShareUrl: 'https://share.google/M4BXXoozGfoGEgZXW',
  facebookUrl: 'https://www.facebook.com/share/18cNyR6CQN/',
  email: 'contato@reginaldotexeira.adv.br',
  hours: 'Segunda a Sexta: 08:00 às 18:00 (Urgências e Flagrantes via WhatsApp)',
  mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.427743285741!2d-43.86877962402123!3d-16.72658828405466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7520e54d8583489%3A0xe5a363db8fc8f244!2sR.%20Gen.%20Carneiro%2C%2010%20-%20Centro%2C%20Montes%20Claros%20-%20MG%2C%2039400-095!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr',
  googleMapsDirectionsUrl: 'https://www.google.com/maps/search/?api=1&query=Rua+General+Carneiro,+10+-+Centro,+Montes+Claros+-+MG,+39400-095'
};

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'direito-penal',
    title: 'Direito Penal / Criminal',
    shortDescription: 'Defesa combativa da liberdade em flagrantes, inquéritos policiais, audiências de custódia, Tribunal do Júri e processos criminais.',
    fullDescription: 'Atuação técnica e imediata em todas as etapas da persecução penal: acompanhamento em delegacias, pedidos de liberdade provisória, relaxamento de prisão, revogação de preventiva, defesas preliminares, atuação no Tribunal do Júri e recursos nos tribunais superiores (TJMG, STJ e STF).',
    topics: [
      'Flagrantes e Audiências de Custódia (Atendimento Urgente)',
      'Defesa em Inquéritos Policiais e Ações Penais',
      'Tribunal do Júri e Sustentação Oral',
      'Execução Penal, Progressão de Regime e Livramento Condicional',
      'Habeas Corpus de urgência'
    ],
    iconName: 'ShieldAlert',
    popular: true
  },
  {
    id: 'direito-trabalho',
    title: 'Direito do Trabalho',
    shortDescription: 'Defesa incansável dos direitos do trabalhador: cobrança de verbas rescisórias, horas extras, rescisão indireta e indenizações.',
    fullDescription: 'Atuação estratégica na Justiça do Trabalho para garantir o recebimento integral de direitos sonegados pelo empregador, correção de carteira de trabalho, rescisão indireta por falta grave da empresa e indenizações por acidentes ou doenças ocupacionais.',
    topics: [
      'Cobrança de Verbas Rescisórias e Multa do FGTS',
      'Horas Extras, Adicional Noturno e Intervalos',
      'Rescisão Indireta ("Justa Causa no Empregador")',
      'Reconhecimento de Vínculo de Emprego (CTPS retroativa)',
      'Indenização por Acidente de Trabalho e Doenças Ocupacionais'
    ],
    iconName: 'Briefcase',
    popular: true
  }
];
