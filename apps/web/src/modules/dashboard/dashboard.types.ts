export type DashboardMetric = {
  title: string;
  value: string;
  helper: string;
  tone: 'blue' | 'green' | 'amber' | 'rose';
};

export type DashboardQueueItem = {
  title: string;
  value: string;
  description: string;
};

export type DashboardAlertItem = {
  title: string;
  description: string;
  severity: 'high' | 'medium' | 'low';
};

export type DashboardActivityItem = {
  id: string;
  title: string;
  description: string;
  time: string;
};

export type DashboardQuickAction = {
  title: string;
  description: string;
  actionLabel: string;
};