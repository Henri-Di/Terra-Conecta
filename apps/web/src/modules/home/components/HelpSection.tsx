import { CheckCircle2 } from 'lucide-react';

import { HOME_CONTENT } from '../home.constants';

export function HelpSection() {
  return (
    <section className="rounded-[26px] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.84),rgba(255,249,241,0.72))] p-4 shadow-[0_12px_30px_rgba(91,64,37,0.05)]">
      <div className="flex items-start gap-3.5">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EDF3E3] shadow-[0_8px_18px_rgba(95,125,38,0.08)]">
          <CheckCircle2 className="h-5 w-5 text-[#5F7D26]" strokeWidth={2.7} />
        </div>
        <div>
          <div className="text-[1.02rem] font-extrabold leading-5 text-[#2C2622]">
            {HOME_CONTENT.helpTitle}
          </div>
          <p className="mt-2 text-sm leading-6 text-[#6B6058]">
            {HOME_CONTENT.helpDescription}
          </p>
        </div>
      </div>
    </section>
  );
}