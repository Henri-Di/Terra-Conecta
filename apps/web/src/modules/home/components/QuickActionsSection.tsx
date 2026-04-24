import type { QuickAction } from '../home.types';
import { HOME_CONTENT } from '../home.constants';

function QuickActionCard({ action }: { action: QuickAction }) {
  const Icon = action.icon;

  return (
    <button
      onClick={action.onClick}
      className="group rounded-[22px] border bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(255,255,255,0.86))] p-4 text-center shadow-[0_10px_22px_rgba(91,64,37,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_28px_rgba(91,64,37,0.06)] focus:outline-none focus:ring-4 focus:ring-[#DCEEFF] active:scale-[0.99]"
      style={{ borderColor: action.borderColor }}
      aria-label={action.label}
    >
      <div className="flex flex-col items-center gap-3">
        <div
          className="flex h-12 w-12 items-center justify-center rounded-[16px] transition-transform duration-300 group-hover:scale-[1.06]"
          style={{ background: action.iconBg, boxShadow: action.hoverGlow }}
        >
          <Icon className="h-6 w-6" strokeWidth={2.5} style={{ color: action.iconColor }} />
        </div>
        <div className="text-[0.98rem] font-extrabold leading-5 tracking-tight text-[#2A2420]">
          {action.label}
        </div>
      </div>
    </button>
  );
}

export function QuickActionsSection({ actions }: { actions: QuickAction[] }) {
  return (
    <section className="rounded-[26px] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.84),rgba(255,249,241,0.72))] p-4 shadow-[0_12px_30px_rgba(91,64,37,0.05)]">
      <div className="text-sm font-black uppercase tracking-[0.16em] text-[#7C716A]">
        {HOME_CONTENT.quickSectionTitle}
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3.5">
        {actions.map((action) => (
          <QuickActionCard key={action.label} action={action} />
        ))}
      </div>
    </section>
  );
}