import { DashboardHeader } from '../components/DashboardHeader';
import { DashboardSummary } from '../components/DashboardSummary';
import { useDashboard } from '../useDashboard';
import { FloatingAgroBackground } from '../../home/components/FloatingAgroBackground';

export function DashboardPage() {
  const { metrics, queues, alerts, activities, quickActions } = useDashboard();

  return (
    <div className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,#F6EFE3_0%,#EFE3D3_100%)] px-5 py-4 text-stone-800 sm:px-6">
      <FloatingAgroBackground />

      <div className="relative z-10 mx-auto w-full max-w-[27rem] space-y-3">
        <DashboardHeader />
        <DashboardSummary
          metrics={metrics}
          queues={queues}
          alerts={alerts}
          activities={activities}
          quickActions={quickActions}
        />
      </div>
    </div>
  );
}