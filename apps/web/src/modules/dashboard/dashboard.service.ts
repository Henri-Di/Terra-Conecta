import type {
  DashboardActivityItem,
  DashboardAlertItem,
  DashboardMetric,
  DashboardQueueItem,
  DashboardQuickAction,
} from './dashboard.types';

export function getDashboardMetrics(): DashboardMetric[] {
  return [
    {
      title: 'Atendimentos hoje',
      value: '18',
      helper: '+4 desde a manhã',
      tone: 'blue',
    },
    {
      title: 'Análises pendentes',
      value: '9',
      helper: '3 com prioridade',
      tone: 'amber',
    },
    {
      title: 'Casos prioritários',
      value: '5',
      helper: 'Exigem retorno rápido',
      tone: 'rose',
    },
    {
      title: 'Usuárias ativas',
      value: '128',
      helper: 'Últimas 24 horas',
      tone: 'green',
    },
  ];
}

export function getDashboardQueues(): DashboardQueueItem[] {
  return [
    {
      title: 'Aguardando triagem',
      value: '6',
      description: 'Solicitações novas ainda sem classificação inicial.',
    },
    {
      title: 'Em análise',
      value: '9',
      description: 'Casos com imagem, voz ou relato em avaliação.',
    },
    {
      title: 'Retorno pendente',
      value: '4',
      description: 'Usuárias aguardando orientação final da equipe.',
    },
    {
      title: 'Concluídos hoje',
      value: '14',
      description: 'Atendimentos encerrados com resposta registrada.',
    },
  ];
}

export function getDashboardAlerts(): DashboardAlertItem[] {
  return [
    {
      title: 'Folhas com manchas recorrentes',
      description: '2 casos novos com sinais visuais semelhantes no mesmo dia.',
      severity: 'high',
    },
    {
      title: 'Risco climático moderado',
      description: 'Condição que pode afetar manejo e irrigação em curto prazo.',
      severity: 'medium',
    },
    {
      title: 'Solicitações sem resposta há mais de 24h',
      description: '3 registros precisam de retorno para evitar acúmulo.',
      severity: 'high',
    },
    {
      title: 'Volume elevado de imagens recebidas',
      description: 'Fila visual acima do padrão esperado para o período.',
      severity: 'low',
    },
  ];
}

export function getDashboardActivities(): DashboardActivityItem[] {
  return [
    {
      id: '1',
      title: 'Nova imagem recebida para análise',
      description: 'Uma usuária enviou foto de folhas com possível alteração visual.',
      time: 'Hoje • 08:40',
    },
    {
      id: '2',
      title: 'Orientação por voz concluída',
      description: 'Oriá respondeu uma solicitação sobre irrigação e solo.',
      time: 'Hoje • 09:15',
    },
    {
      id: '3',
      title: 'Caso marcado como prioritário',
      description: 'Um atendimento foi escalado para acompanhamento mais rápido.',
      time: 'Hoje • 10:05',
    },
  ];
}

export function getDashboardQuickActions(): DashboardQuickAction[] {
  return [
    {
      title: 'Abrir pendências',
      description: 'Ver rapidamente o que ainda precisa de retorno.',
      actionLabel: 'Ver fila',
    },
    {
      title: 'Falar com Oriá',
      description: 'Usar a assistente para apoiar análise e orientação.',
      actionLabel: 'Abrir Oriá',
    },
    {
      title: 'Revisar alertas',
      description: 'Conferir itens que exigem atenção operacional.',
      actionLabel: 'Ver alertas',
    },
  ];
}