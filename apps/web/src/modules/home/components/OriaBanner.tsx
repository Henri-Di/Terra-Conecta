import { Camera, CloudSun, Droplets, Heart, Leaf, MessageCircleHeart, Mic, Volume2, Waves } from 'lucide-react';
import { useMemo } from 'react';

import { HOME_CONTENT } from '../home.constants';
import { OriaLogo } from '../../oria/components/OriaLogo';

export function OriaBanner({ onPrimaryAction }: { onPrimaryAction: () => void }) {
  const items = useMemo(
    () => [
      { icon: Mic, label: 'Fala com você', color: '#4F8FD4' },
      { icon: Camera, label: 'Vê sua planta', color: '#7AAE3C' },
      { icon: Volume2, label: 'Orienta por voz', color: '#4F8FD4' },
      { icon: Heart, label: 'Cuida e apoia', color: '#E28A57' },
    ],
    [],
  );

  return (
    <section className="relative overflow-hidden rounded-[30px] border border-white/80 bg-[linear-gradient(180deg,#EAF5FF_0%,#F8FBFF_38%,#F3F7EC_100%)] p-5 shadow-[0_18px_40px_rgba(79,143,212,0.12)]">
      <div className="absolute -right-8 -top-10 h-36 w-36 rounded-full bg-[#CFE7FB]/85 blur-3xl" />
      <div className="absolute -left-10 bottom-0 h-36 w-36 rounded-full bg-[#E4F2DC]/70 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-40 w-40 bg-[radial-gradient(circle_at_bottom_right,rgba(125,171,77,0.14),transparent_62%)]" />
      <div className="absolute left-4 top-8 opacity-60">
        <Leaf className="h-12 w-12 text-[#7AAE3C]" strokeWidth={1.9} />
      </div>
      <div className="absolute right-4 top-5 opacity-70">
        <CloudSun className="h-12 w-12 text-[#D8A145]" strokeWidth={1.8} />
      </div>
      <div className="absolute right-6 bottom-8 opacity-70">
        <Droplets className="h-10 w-10 text-[#5C9FD9]" strokeWidth={1.9} />
      </div>
      <div className="absolute left-8 bottom-10 opacity-65">
        <Waves className="h-9 w-9 text-[#5FA7D9]" strokeWidth={2} />
      </div>

      <div className="relative">
        <div className="flex items-start gap-4">
          <div className="shrink-0">
            <OriaLogo large />
          </div>

          <div className="min-w-0 flex-1">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[#4F8FD4] shadow-[0_6px_12px_rgba(79,143,212,0.08)]">
              <MessageCircleHeart className="h-3.5 w-3.5" strokeWidth={2.4} />
              Oriá
            </div>

            <h2 className="mt-3 text-[2rem] font-black leading-[0.98] tracking-tight text-[#2374BE]">
              {HOME_CONTENT.oriaBannerTitle}
            </h2>

            <p className="mt-1 text-[1rem] font-semibold leading-6 text-[#245E92]">
              {HOME_CONTENT.oriaBannerSubtitle}
            </p>

            <p className="mt-2 text-[0.95rem] leading-6 text-[#5D5B59]">
              {HOME_CONTENT.oriaBannerDescription}
            </p>
          </div>
        </div>

        <div className="mt-5 rounded-[24px] border border-white/80 bg-white/74 p-3 shadow-[0_10px_24px_rgba(79,143,212,0.08)]">
          <div className="grid grid-cols-2 gap-2">
            {items.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="rounded-[18px] border border-white/75 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(255,255,255,0.88))] px-3 py-3 text-center shadow-[0_8px_18px_rgba(79,143,212,0.05)]"
                >
                  <div
                    className="mx-auto flex h-11 w-11 items-center justify-center rounded-full"
                    style={{
                      background:
                        item.color === '#7AAE3C'
                          ? 'linear-gradient(135deg,#E8F6D9,#F6FCEB)'
                          : item.color === '#E28A57'
                            ? 'linear-gradient(135deg,#FCE2D3,#FFF2EA)'
                            : 'linear-gradient(135deg,#DCEEFF,#F2F9FF)',
                    }}
                  >
                    <Icon
                      className="h-5 w-5"
                      strokeWidth={2.5}
                      style={{ color: item.color }}
                    />
                  </div>
                  <div className="mt-2 text-[0.78rem] font-bold leading-4 text-[#2E2A27]">
                    {item.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <button
          onClick={onPrimaryAction}
          className="group relative mt-4 flex w-full items-center justify-center gap-3 overflow-hidden rounded-[24px] bg-[linear-gradient(90deg,#3C87D7,#62A9EA,#4F8FD4)] px-5 py-4 text-white shadow-[0_16px_30px_rgba(79,143,212,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_36px_rgba(79,143,212,0.28)] focus:outline-none focus:ring-4 focus:ring-[#DCEEFF] active:scale-[0.99]"
          aria-label={HOME_CONTENT.oriaPrimaryCta}
        >
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.02),rgba(255,255,255,0.18),rgba(255,255,255,0.02))] opacity-80" />
          <div className="relative flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/18">
              <Mic className="h-5 w-5" strokeWidth={2.7} />
            </div>
            <span className="text-[1rem] font-black tracking-tight">
              {HOME_CONTENT.oriaPrimaryCta}
            </span>
          </div>
        </button>
      </div>
    </section>
  );
}