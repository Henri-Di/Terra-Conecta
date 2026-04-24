import { CheckCircle2, Mic, Sparkles } from 'lucide-react';

import type {
  PlantProblemOption,
  PlantQuickStat,
  PlantResultCard,
  PlantStepCard,
} from '../plants.types';

function resultToneClass(tone: PlantResultCard['tone']) {
  const tones = {
    blue: 'bg-[#EAF5FF] text-[#2F7BC9]',
    green: 'bg-[#EDF3E3] text-[#5F7D26]',
    amber: 'bg-[#FBF1DA] text-[#B88216]',
    rose: 'bg-[#F9E5E1] text-[#AF6545]',
  } as const;

  return tones[tone];
}

export function PlantSymptomsForm({
  stats,
  steps,
  problemOptions,
  selectedProblemId,
  onSelectProblem,
  onOpenVoice,
  results,
}: {
  stats: PlantQuickStat[];
  steps: PlantStepCard[];
  problemOptions: PlantProblemOption[];
  selectedProblemId: string;
  onSelectProblem: (problemId: string) => void;
  onOpenVoice: () => void;
  results: PlantResultCard[];
}) {
  return (
    <div className="space-y-4">
      <section className="grid grid-cols-3 gap-3">
        {stats.map((item) => (
          <article
            key={item.title}
            className="rounded-[18px] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(255,249,241,0.88))] p-3.5 text-center shadow-[0_8px_18px_rgba(91,64,37,0.04)]"
          >
            <p className="text-[0.62rem] font-black uppercase tracking-[0.1em] text-[#A56745]">
              {item.title}
            </p>
            <p className="mt-2 text-[1.35rem] font-black leading-none text-[#1F1A17]">
              {item.value}
            </p>
          </article>
        ))}
      </section>

      <section className="grid grid-cols-1 gap-3">
        {steps.map((item) => (
          <article
            key={item.title}
            className="rounded-[20px] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(255,249,241,0.88))] px-4 py-3.5 shadow-[0_8px_18px_rgba(91,64,37,0.04)]"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-[linear-gradient(135deg,#F7EFE8,#FFFDFC)] text-[1.1rem] shadow-[0_6px_14px_rgba(91,64,37,0.05)]">
                {item.icon}
              </div>

              <div>
                <p className="text-[0.96rem] font-extrabold text-[#231E1B]">
                  {item.title}
                </p>
                <p className="mt-0.5 text-[0.84rem] leading-5 text-[#6B6058]">
                  {item.description}
                </p>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="rounded-[24px] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.90),rgba(255,249,241,0.78))] p-4 shadow-[0_10px_24px_rgba(91,64,37,0.05)]">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="h-4.5 w-4.5 text-[#5F7D26]" strokeWidth={2.6} />
          <div className="text-[0.98rem] font-extrabold text-[#2C2622]">
            Toque no problema
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          {problemOptions.map((item) => {
            const active = item.id === selectedProblemId;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelectProblem(item.id)}
                className={`rounded-[20px] border px-3 py-4 text-center shadow-[0_6px_14px_rgba(91,64,37,0.04)] transition-all duration-200 ${
                  active
                    ? 'border-[#9CCAF2] bg-[linear-gradient(180deg,#EAF5FF,#F6FBFF)]'
                    : 'border-white/75 bg-white/82'
                }`}
              >
                <div className="text-[1.35rem]">{item.icon}</div>
                <div className="mt-2 text-[0.9rem] font-extrabold text-[#2A2420]">
                  {item.label}
                </div>
              </button>
            );
          })}
        </div>
      </section>

      <button
        type="button"
        onClick={onOpenVoice}
        className="flex w-full items-center justify-center gap-3 rounded-[22px] bg-[linear-gradient(90deg,#4F8FD4,#6AAAE7)] px-4 py-4 text-white shadow-[0_12px_24px_rgba(79,143,212,0.18)] transition-transform duration-200 hover:-translate-y-0.5 active:scale-[0.99]"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/18">
          <Mic className="h-5 w-5" strokeWidth={2.6} />
        </div>
        <span className="text-[1rem] font-black">Falar com a Oriá</span>
      </button>

      <section className="rounded-[24px] border border-white/80 bg-[linear-gradient(180deg,#EAF5FF,#F8FBFF)] p-4 shadow-[0_10px_24px_rgba(79,143,212,0.08)]">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4.5 w-4.5 text-[#4F8FD4]" strokeWidth={2.6} />
          <div className="text-[0.98rem] font-extrabold text-[#245E92]">
            O que vimos
          </div>
        </div>

        <div className="mt-4 space-y-3">
          {results.map((item) => (
            <article
              key={item.title}
              className="rounded-[18px] border border-white/75 bg-white/82 p-3.5 shadow-[0_6px_14px_rgba(79,143,212,0.05)]"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[0.96rem] font-extrabold text-[#231E1B]">
                    {item.title}
                  </p>
                  <p className="mt-1 text-[0.84rem] leading-5 text-[#6B6058]">
                    {item.description}
                  </p>
                </div>

                <span
                  className={`shrink-0 rounded-full px-2.5 py-1 text-[0.62rem] font-black uppercase tracking-[0.08em] ${resultToneClass(item.tone)}`}
                >
                  Ver
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}