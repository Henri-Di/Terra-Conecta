import { ChevronRight } from 'lucide-react';

import type { MainAction } from '../home.types';

function MainActionCard({ action }: { action: MainAction }) {
  const Icon = action.icon;

  return (
    <button
      onClick={action.onClick}
      className="group relative w-full overflow-hidden rounded-[26px] border bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(255,255,255,0.88))] p-4 text-left shadow-[0_12px_28px_rgba(91,64,37,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(91,64,37,0.08)] focus:outline-none focus:ring-4 focus:ring-[#DCEEFF] active:scale-[0.99]"
      style={{ borderColor: action.borderColor }}
      aria-label={action.title}
    >
      <div className="absolute inset-x-0 top-0 h-1.5 rounded-t-[26px] bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.55),rgba(255,255,255,0))] opacity-70" />
      <div className="absolute -right-6 top-0 h-24 w-24 rounded-full bg-white/35 blur-2xl transition-transform duration-300 group-hover:scale-110" />

      <div className="relative flex items-center gap-4">
        <div
          className="flex h-[4.35rem] w-[4.35rem] shrink-0 items-center justify-center rounded-[22px] shadow-[inset_0_1px_0_rgba(255,255,255,0.28)] transition-transform duration-300 group-hover:scale-[1.04]"
          style={{ background: action.iconBg, boxShadow: action.shadowColor }}
        >
          <Icon className="h-8 w-8" strokeWidth={2.5} style={{ color: action.iconColor }} />
        </div>

        <div className="min-w-0 flex-1">
          <div className="text-[1.26rem] font-black leading-5 tracking-tight text-[#231E1B]">
            {action.title}
          </div>
          <div className="mt-2 text-sm leading-5 text-[#6E625B]">
            {action.subtitle}
          </div>
          <div className="mt-3 inline-flex rounded-full bg-[#F5EEE8] px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[#A16C4E] shadow-[0_6px_12px_rgba(161,108,78,0.06)]">
            {action.helper}
          </div>
        </div>

        <ChevronRight
          className="h-5 w-5 shrink-0 text-[#B19887] transition-transform duration-300 group-hover:translate-x-0.5"
          strokeWidth={2.6}
        />
      </div>
    </button>
  );
}

export function MainActionsSection({ actions }: { actions: MainAction[] }) {
  return (
    <section className="flex flex-col gap-4">
      {actions.map((action) => (
        <MainActionCard key={action.title} action={action} />
      ))}
    </section>
  );
}