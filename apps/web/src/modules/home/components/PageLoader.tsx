import { MessageCircleHeart, Waves } from 'lucide-react';

import { HOME_CONTENT } from '../home.constants';

export function PageLoader({ visible }: { visible: boolean }) {
  if (!visible) return null;

  return (
    <div className="absolute inset-0 z-40 flex items-start justify-center bg-[linear-gradient(180deg,rgba(246,239,227,0.88),rgba(239,227,211,0.92))] px-5 pt-24 backdrop-blur-md">
      <div className="relative w-full max-w-sm rounded-[32px] border border-white/85 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(255,249,241,0.90))] p-6 text-center shadow-[0_24px_60px_rgba(91,64,37,0.14)]">
        <div className="absolute -left-3 top-6 h-14 w-14 rounded-full bg-[#F1D7C7]/70 blur-2xl" />
        <div className="absolute -right-2 bottom-4 h-16 w-16 rounded-full bg-[#DCEEFF]/70 blur-2xl" />

        <div className="relative mx-auto flex h-24 w-24 items-center justify-center">
          <div className="absolute h-24 w-24 rounded-full border-4 border-[#DCE6F3]" />
          <div className="absolute h-24 w-24 rounded-full border-4 border-transparent border-t-[#5C9FD9] border-r-[#6C8E2A] animate-loader-spin" />
          <div className="absolute h-16 w-16 rounded-full bg-[linear-gradient(135deg,#EAF5FF,#F5F0E2)] shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]" />
          <div className="absolute flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-[0_8px_18px_rgba(91,64,37,0.08)] animate-loader-pulse">
            <MessageCircleHeart className="h-6 w-6 text-[#4F8FD4]" strokeWidth={2.7} />
          </div>
          <div className="absolute -top-1 right-1 animate-float-slow opacity-90">
            <Waves className="h-5 w-5 text-[#5FA7D9]" strokeWidth={2.5} />
          </div>
        </div>

        <h2 className="relative mt-5 text-[1.2rem] font-black leading-6 text-[#251F1B]">
          {HOME_CONTENT.loaderTitle}
        </h2>
        <p className="relative mt-2 text-sm leading-6 text-[#6C6058]">
          {HOME_CONTENT.loaderDescription}
        </p>

        <div className="relative mt-5 h-2 overflow-hidden rounded-full bg-[#E8EEF4]">
          <div className="h-full w-1/2 rounded-full bg-[linear-gradient(90deg,#5C9FD9,#6C8E2A,#D7A648)] animate-loader-bar" />
        </div>
      </div>
    </div>
  );
}