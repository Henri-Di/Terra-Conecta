import { AlertTriangle, ArrowRight, Camera, Clock3, MessageCircleHeart, Sprout } from 'lucide-react';

import type {
  DashboardActivityItem,
  DashboardAlertItem,
  DashboardMetric,
  DashboardQueueItem,
  DashboardQuickAction,
} from '../dashboard.types';

function metricToneClass(tone: DashboardMetric['tone']) {
  const tones = {
    blue: 'bg-[#EAF5FF] text-[#2F7BC9]',
    green: 'bg-[#EDF3E3] text-[#5F7D26]',
    amber: 'bg-[#FBF1DA] text-[#B88216]',
    rose: 'bg-[#F9E5E1] text-[#AF6545]',
  } as const;

  return tones[tone];
}

function severityClass(severity: DashboardAlertItem['severity']) {
  const tones = {
    high: 'bg-[#F9E5E1] text-[#AF6545]',
    medium: 'bg-[#FBF1DA] text-[#B88216]',
    low: 'bg-[#EDF3E3] text-[#5F7D26]',
  } as const;

  return tones[severity];
}

function MetricsGrid({ items }: { items: DashboardMetric[] }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {items.map((item) => (
        <article
          key={item.title}
          className="rounded-[20px] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(255,249,241,0.88))] p-4 shadow-[0_8px_18px_rgba(91,64,37,0.04)]"
        >
          <p className="text-[0.66rem] font-black uppercase tracking-[0.12em] text-[#7C716A]">
            {item.title}
          </p>

          <p className="mt-3 text-[1.7rem] font-black leading-none tracking-tight text-[#1F1A17]">
            {item.value}
          </p>

          <p
            className={`mt-3 inline-flex rounded-full px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.08em] ${metricToneClass(item.tone)}`}
          >
            {item.helper}
          </p>
        </article>
      ))}
    </div>
  );
}

function QueueBoard({ items }: { items: DashboardQueueItem[] }) {
  return (
    <section className="rounded-[22px] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.86),rgba(255,249,241,0.74))] p-4 shadow-[0_8px_20px_rgba(91,64,37,0.05)]">
      <div className="mb-4 flex items-center gap-2">
        <Clock3 className="h-4.5 w-4.5 text-[#A56745]" strokeWidth={2.5} />
        <div>
          <p className="text-[0.66rem] font-black uppercase tracking-[0.12em] text-[#A56745]">
            Filas operacionais
          </p>
          <h3 className="mt-1 text-[1.05rem] font-black tracking-tight text-[#1F1A17]">
            Estado atual do fluxo
          </h3>
        </div>
      </div>

      <div className="space-y-3">
        {items.map((item) => (
          <div
            key={item.title}
            className="rounded-[18px] border border-white/75 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(255,255,255,0.86))] px-3.5 py-3 shadow-[0_6px_16px_rgba(91,64,37,0.04)]"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[0.92rem] font-extrabold text-[#231E1B]">
                  {item.title}
                </p>
                <p className="mt-1 text-[0.86rem] leading-5 text-[#6B6058]">
                  {item.description}
                </p>
              </div>

              <div className="rounded-full bg-[#F5EEE8] px-3 py-1 text-[0.84rem] font-black text-[#A16C4E]">
                {item.value}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function AlertsPanel({ items }: { items: DashboardAlertItem[] }) {
  return (
    <section className="rounded-[22px] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.86),rgba(255,249,241,0.74))] p-4 shadow-[0_8px_20px_rgba(91,64,37,0.05)]">
      <div className="mb-4 flex items-center gap-2">
        <AlertTriangle className="h-4.5 w-4.5 text-[#AF6545]" strokeWidth={2.5} />
        <div>
          <p className="text-[0.66rem] font-black uppercase tracking-[0.12em] text-[#A56745]">
            Pontos de atenção
          </p>
          <h3 className="mt-1 text-[1.05rem] font-black tracking-tight text-[#1F1A17]">
            Alertas do dia
          </h3>
        </div>
      </div>

      <div className="space-y-3">
        {items.map((item) => (
          <div
            key={item.title}
            className="rounded-[18px] border border-white/75 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(255,255,255,0.86))] p-3.5 shadow-[0_6px_16px_rgba(91,64,37,0.04)]"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[0.95rem] font-extrabold text-[#231E1B]">
                  {item.title}
                </p>
                <p className="mt-1 text-[0.86rem] leading-5 text-[#6B6058]">
                  {item.description}
                </p>
              </div>

              <span
                className={`shrink-0 rounded-full px-2.5 py-1 text-[0.62rem] font-black uppercase tracking-[0.08em] ${severityClass(item.severity)}`}
              >
                {item.severity === 'high'
                  ? 'Alta'
                  : item.severity === 'medium'
                    ? 'Média'
                    : 'Baixa'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function RecentActivity({ items }: { items: DashboardActivityItem[] }) {
  return (
    <section className="rounded-[22px] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.86),rgba(255,249,241,0.74))] p-4 shadow-[0_8px_20px_rgba(91,64,37,0.05)]">
      <div className="mb-4 flex items-center gap-2">
        <Sprout className="h-4.5 w-4.5 text-[#5F7D26]" strokeWidth={2.5} />
        <div>
          <p className="text-[0.66rem] font-black uppercase tracking-[0.12em] text-[#A56745]">
            Atividade recente
          </p>
          <h3 className="mt-1 text-[1.05rem] font-black tracking-tight text-[#1F1A17]">
            Últimos eventos
          </h3>
        </div>
      </div>

      <div className="space-y-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="rounded-[18px] border border-white/75 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(255,255,255,0.86))] p-3.5 shadow-[0_6px_16px_rgba(91,64,37,0.04)]"
          >
            <p className="text-[0.96rem] font-extrabold leading-6 text-[#231E1B]">
              {item.title}
            </p>
            <p className="mt-1 text-[0.88rem] leading-6 text-[#6B6058]">
              {item.description}
            </p>
            <p className="mt-3 inline-flex rounded-full bg-[#F5EEE8] px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.08em] text-[#A16C4E]">
              {item.time}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function QuickActions({ items }: { items: DashboardQuickAction[] }) {
  return (
    <section className="rounded-[22px] border border-white/80 bg-[linear-gradient(180deg,#EAF5FF,#F8FBFF)] p-4 shadow-[0_10px_24px_rgba(79,143,212,0.08)]">
      <div className="mb-4 flex items-center gap-2">
        <MessageCircleHeart className="h-4.5 w-4.5 text-[#4F8FD4]" strokeWidth={2.5} />
        <div>
          <p className="text-[0.66rem] font-black uppercase tracking-[0.12em] text-[#4F8FD4]">
            Apoio rápido
          </p>
          <h3 className="mt-1 text-[1.05rem] font-black tracking-tight text-[#1F1A17]">
            Ações imediatas
          </h3>
        </div>
      </div>

      <div className="space-y-3">
        {items.map((item) => (
          <div
            key={item.title}
            className="rounded-[18px] border border-white/75 bg-white/82 p-3.5 shadow-[0_6px_16px_rgba(79,143,212,0.05)]"
          >
            <p className="text-[0.96rem] font-extrabold text-[#231E1B]">
              {item.title}
            </p>
            <p className="mt-1 text-[0.86rem] leading-5 text-[#6B6058]">
              {item.description}
            </p>

            <button className="mt-3 inline-flex items-center gap-2 rounded-full bg-[linear-gradient(90deg,#4F8FD4,#67A9E8)] px-3 py-1.5 text-[0.68rem] font-black uppercase tracking-[0.08em] text-white shadow-[0_8px_18px_rgba(79,143,212,0.18)]">
              {item.actionLabel}
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.6} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export function DashboardSummary({
  metrics,
  queues,
  alerts,
  activities,
  quickActions,
}: {
  metrics: DashboardMetric[];
  queues: DashboardQueueItem[];
  alerts: DashboardAlertItem[];
  activities: DashboardActivityItem[];
  quickActions: DashboardQuickAction[];
}) {
  return (
    <div className="space-y-3">
      <MetricsGrid items={metrics} />
      <QueueBoard items={queues} />
      <AlertsPanel items={alerts} />
      <RecentActivity items={activities} />
      <QuickActions items={quickActions} />
    </div>
  );
}