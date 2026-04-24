import {
  Apple,
  BadgeHelp,
  CloudSun,
  Droplets,
  Flower2,
  Leaf,
  Sprout,
  Tractor,
  Trees,
  Waves,
  Wheat,
} from 'lucide-react';

export const BRAND = {
  name: 'Terra Conecta',
  description: 'Cuidado, orientação e apoio para a rotina no campo.',
  assistantName: 'Oriá',
  assistantTagline: 'Voz de apoio do Terra Conecta',
  copyright: '© 2026 Terra Conecta. Todos os direitos reservados.',
};

export const HOME_CONTENT = {
  badge: 'Início',
  title: 'Bom te ver por aqui',
  description:
    'Escolha uma opção para falar com Oriá, mostrar sua planta, ouvir orientações ou pedir ajuda.',
  highlight: 'Toque no botão que combina com o que você precisa agora.',
  quickSectionTitle: 'Ações rápidas',
  helpTitle: 'Tudo em um só lugar',
  helpDescription:
    'Aqui você pode falar com Oriá, mostrar sua planta, ouvir orientações e encontrar apoio quando precisar.',
  footer: 'Terra Conecta • apoio para mulheres do campo',
  loaderTitle: 'Preparando Oriá',
  loaderDescription:
    'Estamos organizando tudo para você começar com tranquilidade.',
  oriaBannerTitle: 'Oriá',
  oriaBannerSubtitle: 'Sua assistente do campo',
  oriaBannerDescription:
    'Oriá pode ouvir, responder, orientar por voz e ajudar você com sua planta.',
  oriaSectionTitle: 'Oriá pode ajudar assim',
  oriaSectionDescription:
    'Fale, escute e mostre sua planta para receber apoio com mais facilidade.',
  oriaPrimaryCta: 'Toque para falar com Oriá',
};

export const floatingItems = [
  {
    Icon: Wheat,
    className: 'left-[-8px] top-[86px] animate-float-slow',
    color: '#C9A14B',
    size: 'h-10 w-10',
  },
  {
    Icon: Tractor,
    className: 'right-[2px] top-[152px] animate-float-medium',
    color: '#B7724F',
    size: 'h-10 w-10',
  },
  {
    Icon: Droplets,
    className: 'left-[14px] bottom-[176px] animate-float-slow-delayed',
    color: '#5CA7E6',
    size: 'h-10 w-10',
  },
  {
    Icon: Flower2,
    className: 'right-[14px] bottom-[236px] animate-float-medium-delayed',
    color: '#86A54D',
    size: 'h-10 w-10',
  },
  {
    Icon: Leaf,
    className: 'right-[42px] top-[404px] animate-float-slow',
    color: '#6E8C2E',
    size: 'h-9 w-9',
  },
  {
    Icon: Trees,
    className: 'left-[8px] top-[312px] animate-float-medium-delayed',
    color: '#7A9440',
    size: 'h-11 w-11',
  },
  {
    Icon: CloudSun,
    className: 'right-[18px] top-[36px] animate-float-slow-delayed',
    color: '#D7A648',
    size: 'h-10 w-10',
  },
  {
    Icon: Apple,
    className: 'left-[18px] bottom-[84px] animate-float-medium',
    color: '#C67255',
    size: 'h-9 w-9',
  },
  {
    Icon: Sprout,
    className: 'right-[28px] bottom-[118px] animate-float-slow',
    color: '#7B9C35',
    size: 'h-10 w-10',
  },
  {
    Icon: BadgeHelp,
    className: 'left-[30px] top-[520px] animate-float-medium-delayed',
    color: '#AE7758',
    size: 'h-9 w-9',
  },
  {
    Icon: Waves,
    className: 'right-[10px] top-[260px] animate-float-slow',
    color: '#5FA7D9',
    size: 'h-9 w-9',
  },
] as const;