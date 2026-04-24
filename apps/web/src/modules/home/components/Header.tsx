import { MessageCircleHeart } from 'lucide-react';

import { BRAND } from '../home.constants';
import { OriaLogo } from '../../oria/components/OriaLogo';

export function Header() {
  return (
    <header className="rounded-[26px] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.84),rgba(255,249,241,0.72))] p-4 shadow-[0_12px_30px_rgba(91,64,37,0.05)] backdrop-blur-xl">
      <div className="flex items-center gap-3.5">
        <OriaLogo brand />
        <div className="min-w-0 flex-1">
          <div className="truncate text-[0.92rem] font-black uppercase tracking-[0.18em] text-[#A26242]">
            {BRAND.name}
          </div>
          <div className="mt-1 text-[0.95rem] font-medium leading-5 text-[#6A5D55]">
            {BRAND.description}
          </div>
          <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-[linear-gradient(180deg,#EAF5FF,#F7FBFF)] px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[#4F8FD4] shadow-[0_6px_12px_rgba(79,143,212,0.08)]">
            <MessageCircleHeart className="h-3.5 w-3.5" strokeWidth={2.4} />
            {BRAND.assistantName} • {BRAND.assistantTagline}
          </div>
        </div>
      </div>
    </header>
  );
}