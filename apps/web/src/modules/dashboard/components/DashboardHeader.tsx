import { BarChart3, ShieldCheck } from 'lucide-react';

export function DashboardHeader() {
  return (
    <section className="rounded-[24px] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.90),rgba(255,249,241,0.78))] p-4 shadow-[0_12px_28px_rgba(91,64,37,0.05)]">
      <div className="inline-flex items-center gap-2 rounded-full bg-[#F6E6DD] px-3 py-1 text-[0.68rem] font-black uppercase tracking-[0.14em] text-[#A56745]">
        <BarChart3 className="h-3.5 w-3.5" strokeWidth={2.5} />
        Dashboard operacional
      </div>

      <div className="mt-3 flex items-start justify-between gap-3">
        <div>
          <h1 className="text-[1.55rem] font-black leading-[1.02] tracking-tight text-[#1F1A17]">
            Visão geral do atendimento
          </h1>
          <p className="mt-2 text-[0.95rem] leading-6 text-[#655A53]">
            Acompanhe o volume de atendimento, pendências, alertas e atividade recente da operação.
          </p>
        </div>

        <div className="shrink-0 rounded-[18px] border border-white/80 bg-[linear-gradient(180deg,#EDF7EA,#F7FCF5)] px-3 py-2 shadow-[0_8px_18px_rgba(95,125,38,0.08)]">
          <div className="flex items-center gap-2 text-[#5F7D26]">
            <ShieldCheck className="h-4 w-4" strokeWidth={2.5} />
            <span className="text-[0.68rem] font-black uppercase tracking-[0.12em]">
              Operação estável
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}