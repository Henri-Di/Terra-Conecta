import { Mic, Sparkles, Sprout } from 'lucide-react';

import { HOME_CONTENT } from '../home.constants';

export function WelcomeSection() {
  return (
    <section className="relative overflow-hidden rounded-[28px] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.84),rgba(255,249,241,0.72))] p-5 shadow-[0_14px_34px_rgba(91,64,37,0.06)]">
      <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-[#F2DBCE]/58 blur-3xl" />
      <div className="absolute left-0 top-10 h-20 w-20 rounded-full bg-[#DCEEFF]/38 blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-16 bg-[linear-gradient(180deg,rgba(255,255,255,0.28),transparent)]" />

      <div className="relative inline-flex items-center gap-2 rounded-full bg-[#F6E6DD] px-3 py-1.5 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-[#A56745] shadow-[0_6px_16px_rgba(165,103,69,0.08)]">
        <Sprout className="h-3.5 w-3.5" strokeWidth={2.5} />
        {HOME_CONTENT.badge}
      </div>

      <h1 className="relative mt-4 text-[2rem] font-black leading-[1.02] tracking-tight text-[#1F1A17]">
        {HOME_CONTENT.title}
      </h1>
      <p className="relative mt-3 text-[1rem] leading-6 text-[#655A53]">
        {HOME_CONTENT.description}
      </p>

      <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-[linear-gradient(180deg,#EAF5FF,#F7FBFF)] px-3 py-1.5 text-[0.72rem] font-bold text-[#4F8FD4] shadow-[0_6px_12px_rgba(79,143,212,0.08)]">
        <Mic className="h-3.5 w-3.5" strokeWidth={2.5} />
        Oriá pode ajudar por voz, texto e foto
      </div>

      <div className="relative mt-4 flex items-center gap-3 rounded-[22px] border border-white/75 bg-white/70 px-4 py-3 shadow-[0_10px_22px_rgba(91,64,37,0.04)] transition-transform duration-200 hover:-translate-y-0.5">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EDF3E3] shadow-[0_8px_16px_rgba(95,125,38,0.08)]">
          <Sparkles className="h-4.5 w-4.5 text-[#648029]" strokeWidth={2.7} />
        </div>
        <p className="text-sm font-medium leading-5 text-[#665A53]">
          {HOME_CONTENT.highlight}
        </p>
      </div>
    </section>
  );
}