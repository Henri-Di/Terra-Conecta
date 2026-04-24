import { Droplets, Leaf, MessageCircleHeart, Sprout } from 'lucide-react';

type Props = {
  large?: boolean;
  brand?: boolean;
};

export function OriaLogo({ large = false, brand = false }: Props) {
  if (brand) {
    return (
      <div className="relative flex h-16 w-16 items-center justify-center rounded-[22px] border border-white/85 bg-[linear-gradient(180deg,rgba(255,255,255,0.99),rgba(250,243,235,0.95))] shadow-[0_14px_30px_rgba(102,68,42,0.10)] transition-transform duration-300">
        <div className="absolute inset-0 rounded-[22px] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.96),rgba(255,255,255,0.56))]" />
        <div className="absolute -left-1 top-1 h-8 w-8 rounded-full bg-[#F1D7C7]/75 blur-lg" />
        <div className="absolute bottom-1 right-1 h-8 w-8 rounded-full bg-[#DCEEFF]/70 blur-lg" />

        <div className="relative flex items-center gap-0.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,#F4D6C6,#FAE9DF)] ring-1 ring-white/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
            <Leaf className="h-5 w-5 text-[#5F7B27]" strokeWidth={2.6} />
          </div>
          <div className="-ml-2 mt-4 flex h-5 w-5 items-center justify-center rounded-full bg-[linear-gradient(135deg,#D8EEFF,#F2F8FF)] ring-1 ring-white/70">
            <Droplets className="h-3 w-3 text-[#4F8FD4]" strokeWidth={2.5} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative flex items-center justify-center rounded-[26px] border border-white/85 bg-[linear-gradient(180deg,rgba(236,247,255,0.98),rgba(249,252,255,0.92))] shadow-[0_16px_32px_rgba(79,143,212,0.12)] ${
        large ? 'h-24 w-24' : 'h-16 w-16'
      }`}
    >
      <div className="absolute inset-0 rounded-[26px] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.98),rgba(255,255,255,0.52))]" />
      <div className="absolute -left-1 bottom-1 h-10 w-10 rounded-full bg-[#DCEEFF]/70 blur-lg" />
      <div className="absolute right-0 top-0 h-10 w-10 rounded-full bg-[#E6F4E1]/65 blur-lg" />

      <div className="relative flex items-center">
        <div
          className={`flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#DCEEFF,#F2F9FF)] ring-1 ring-white/80 ${
            large ? 'h-14 w-14' : 'h-10 w-10'
          }`}
        >
          <MessageCircleHeart
            className={large ? 'h-7 w-7 text-[#4F8FD4]' : 'h-5 w-5 text-[#4F8FD4]'}
            strokeWidth={2.5}
          />
        </div>
        <div
          className={`-ml-2 mt-4 flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#E6F4E1,#F5FBF2)] ring-1 ring-white/80 ${
            large ? 'h-7 w-7' : 'h-5 w-5'
          }`}
        >
          <Sprout
            className={large ? 'h-4 w-4 text-[#6C8E2A]' : 'h-3 w-3 text-[#6C8E2A]'}
            strokeWidth={2.5}
          />
        </div>
      </div>
    </div>
  );
}