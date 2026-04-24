import { useLocation, useNavigate } from 'react-router-dom';

import type { NavItem } from '../home.types';

export function TopNav({
  items,
  onUnavailablePress,
}: {
  items: NavItem[];
  onUnavailablePress: (label: string) => void;
}) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="mt-4 rounded-[24px] border border-white/85 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(255,249,241,0.76))] px-2 py-2.5 shadow-[0_14px_30px_rgba(91,64,37,0.06)] backdrop-blur-xl">
      <div className="grid grid-cols-5 gap-1.5">
        {items.map((item) => {
          const Icon = item.icon;
          const active = item.path ? location.pathname === item.path : false;

          const handleClick = () => {
            if (item.path) {
              navigate(item.path);
              return;
            }

            onUnavailablePress(item.label);
          };

          return (
            <button
              key={item.label}
              onClick={handleClick}
              className={`flex min-h-[64px] flex-col items-center justify-center gap-1 rounded-[18px] px-2 py-2 transition-all duration-200 ${
                active
                  ? 'bg-[#F6E7DE] text-[#A76443] shadow-[0_8px_18px_rgba(167,100,67,0.08)]'
                  : 'bg-transparent text-[#8A7C71] hover:bg-white/35'
              }`}
              aria-label={item.label}
            >
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full ${
                  active ? 'bg-white' : 'bg-transparent'
                }`}
              >
                <Icon className="h-4.5 w-4.5" strokeWidth={2.5} />
              </div>

              <span className="text-[0.68rem] font-bold leading-3">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}