import { floatingItems } from '../home.constants';

export function FloatingAgroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_34%)]" />
      {floatingItems.map(({ Icon, className, color, size }, index) => (
        <div key={index} className={`absolute ${className} opacity-[0.22]`}>
          <Icon
            className={`${size} drop-shadow-[0_8px_14px_rgba(91,64,37,0.08)]`}
            strokeWidth={2.15}
            style={{ color }}
          />
        </div>
      ))}
    </div>
  );
}