export type PlantQuickStat = {
  title: string;
  value: string;
};

export type PlantProblemOption = {
  id: string;
  label: string;
  icon: string;
};

export type PlantResultCard = {
  title: string;
  description: string;
  tone: 'blue' | 'green' | 'amber' | 'rose';
};

export type PlantStepCard = {
  title: string;
  description: string;
  icon: string;
};