import { Camera, ChevronRight, MessageCircleHeart, Mic, Volume2 } from 'lucide-react';

import { HOME_CONTENT } from '../home.constants';

export function OriaSection({
  onVoicePress,
  onListenPress,
  onCameraPress,
}: {
  onVoicePress: () => void;
  onListenPress: () => void;
  onCameraPress: () => void;
}) {
  const cards = [
    {
      icon: Mic,
      label: 'Falar',
      description: 'Conte o que está acontecendo',
      color: '#4F8FD4',
      bg: 'linear-gradient(135deg,#DCEEFF,#F2F9FF)',
      onClick: onVoicePress,
    },
    {
      icon: Volume2,
      label: 'Ouvir',
      description: 'Escute a resposta de Oriá',
      color: '#4F8FD4',
      bg: 'linear-gradient(135deg,#DCEEFF,#F2F9FF)',
      onClick: onListenPress,
    },
    {
      icon: Camera,
      label: 'Mostrar',
      description: 'Envie foto da planta',
      color: '#6C8E2A',
      bg: 'linear-gradient(135deg,#E8F6D9,#F6FCEB)',
      onClick: onCameraPress,
    },
  ] as const;

  return (
    <section className="rounded-[26px] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(247,251,255,0.82))] p-4 shadow-[0_12px_30px_rgba(79,143,212,0.06)]">
      <div className="flex items-start gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#DCEEFF,#F2F9FF)] shadow-[0_8px_18px_rgba(79,143,212,0.08)]">
          <MessageCircleHeart className="h-5 w-5 text-[#4F8FD4]" strokeWidth={2.6} />
        </div>
        <div>
          <div className="text-[1.02rem] font-extrabold leading-5 text-[#2C2622]">
            {HOME_CONTENT.oriaSectionTitle}
          </div>
          <p className="mt-1 text-sm leading-6 text-[#6B6058]">
            {HOME_CONTENT.oriaSectionDescription}
          </p>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-3">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <button
              key={card.label}
              onClick={card.onClick}
              className="flex items-center gap-3 rounded-[20px] border border-white/75 bg-white/82 px-4 py-3 text-left shadow-[0_8px_18px_rgba(79,143,212,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_22px_rgba(79,143,212,0.08)] focus:outline-none focus:ring-4 focus:ring-[#DCEEFF] active:scale-[0.99]"
              aria-label={card.label}
            >
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[16px]"
                style={{ background: card.bg }}
              >
                <Icon className="h-6 w-6" strokeWidth={2.5} style={{ color: card.color }} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[0.95rem] font-extrabold text-[#2A2420]">
                  {card.label}
                </div>
                <div className="mt-0.5 text-[0.85rem] leading-5 text-[#6B6058]">
                  {card.description}
                </div>
              </div>
              <ChevronRight className="h-4.5 w-4.5 shrink-0 text-[#9A8C80]" strokeWidth={2.6} />
            </button>
          );
        })}
      </div>
    </section>
  );
}