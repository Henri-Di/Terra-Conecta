import type {
  PlantProblemOption,
  PlantQuickStat,
  PlantResultCard,
  PlantStepCard,
} from './plants.types';

export function getPlantQuickStats(): PlantQuickStat[] {
  return [
    { title: 'Fotos hoje', value: '12' },
    { title: 'Em análise', value: '4' },
    { title: 'Prioridade', value: '2' },
  ];
}

export function getPlantProblemOptions(): PlantProblemOption[] {
  return [
    { id: 'mancha', label: 'Mancha', icon: '🍂' },
    { id: 'amarela', label: 'Amarela', icon: '🟡' },
    { id: 'seca', label: 'Seca', icon: '☀️' },
    { id: 'bicho', label: 'Bicho', icon: '🐛' },
    { id: 'fruto', label: 'Fruto ruim', icon: '🍎' },
    { id: 'nao-sei', label: 'Não sei', icon: '❓' },
  ];
}

export function getPlantSteps(): PlantStepCard[] {
  return [
    {
      title: '1. Mostre',
      description: 'Tire ou envie a foto da planta.',
      icon: '📷',
    },
    {
      title: '2. Fale',
      description: 'Se quiser, fale com a Oriá.',
      icon: '🎤',
    },
    {
      title: '3. Receba ajuda',
      description: 'Veja o próximo passo.',
      icon: '💬',
    },
  ];
}

export function getPlantResults(problemId?: string): PlantResultCard[] {
  const base: Record<string, PlantResultCard[]> = {
    mancha: [
      {
        title: 'Precisa olhar de perto',
        description: 'Mostre outra foto mais perto.',
        tone: 'amber',
      },
      {
        title: 'Veja se está aumentando',
        description: 'Observe a mancha amanhã também.',
        tone: 'blue',
      },
    ],
    amarela: [
      {
        title: 'Pode ser água ou calor',
        description: 'Veja se a terra está muito seca.',
        tone: 'amber',
      },
      {
        title: 'Mostre outra folha',
        description: 'Envie uma foto de outra parte.',
        tone: 'blue',
      },
    ],
    seca: [
      {
        title: 'Planta com estresse',
        description: 'Vale olhar água e sol forte.',
        tone: 'rose',
      },
      {
        title: 'Tire outra foto',
        description: 'Mostre a folha toda.',
        tone: 'blue',
      },
    ],
    bicho: [
      {
        title: 'Pode precisar atenção rápida',
        description: 'Mostre onde o bicho aparece.',
        tone: 'rose',
      },
      {
        title: 'Foto perto ajuda',
        description: 'Chegue mais perto na imagem.',
        tone: 'blue',
      },
    ],
    fruto: [
      {
        title: 'Veja cor e formato',
        description: 'Mostre o fruto inteiro.',
        tone: 'amber',
      },
      {
        title: 'Compare com outro',
        description: 'Se puder, envie mais uma foto.',
        tone: 'blue',
      },
    ],
    'nao-sei': [
      {
        title: 'Tudo bem não saber',
        description: 'Envie a foto e fale com a Oriá.',
        tone: 'green',
      },
      {
        title: 'Vamos por imagem',
        description: 'A foto ajuda a começar.',
        tone: 'blue',
      },
    ],
  };

  return (
    base[problemId ?? 'nao-sei'] ?? [
      {
        title: 'Mostre sua planta',
        description: 'Envie foto ou toque no problema.',
        tone: 'blue',
      },
    ]
  );
}