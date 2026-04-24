import type { OriaTab } from './oria.types';

export function buildId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

export function simulateOriaReply(input: {
  tab: OriaTab;
  text?: string;
  imageName?: string;
  voiceUsed?: boolean;
}) {
  if (input.tab === 'texto' && input.text) {
    const normalized = input.text.toLowerCase();

    if (normalized.includes('mancha') || normalized.includes('folha')) {
      return 'Entendi. Pode ser importante observar a cor da mancha, o tamanho e se ela está aumentando. Se quiser, envie também uma foto.';
    }

    if (
      normalized.includes('água') ||
      normalized.includes('regar') ||
      normalized.includes('irrig')
    ) {
      return 'Certo. Vamos observar se a terra está muito seca ou muito encharcada. Posso te orientar passo a passo.';
    }

    if (
      normalized.includes('praga') ||
      normalized.includes('inseto') ||
      normalized.includes('bicho')
    ) {
      return 'Entendi. Uma imagem pode ajudar bastante. Você também pode me contar onde o problema aparece na planta.';
    }

    return 'Recebi sua mensagem. Posso ajudar melhor se você me contar o que está vendo na planta, no solo ou na produção.';
  }

  if (input.tab === 'imagem' && input.imageName) {
    return `Recebi a imagem "${input.imageName}". Agora eu poderia analisar sinais visuais da planta, como manchas, cor, aspecto da folha e possíveis danos.`;
  }

  if (input.tab === 'voz' && input.voiceUsed) {
    return 'Recebi sua fala. Agora eu poderia transcrever sua mensagem e responder com orientação por voz e texto.';
  }

  return 'Recebi sua solicitação. Vamos seguir juntas.';
}