import {
  getDashboardActivities,
  getDashboardAlerts,
  getDashboardMetrics,
  getDashboardQuickActions,
  getDashboardQueues,
} from './dashboard.service';

export function useDashboard() {
  return {
    metrics: getDashboardMetrics(),
    queues: getDashboardQueues(),
    alerts: getDashboardAlerts(),
    activities: getDashboardActivities(),
    quickActions: getDashboardQuickActions(),
  };
}