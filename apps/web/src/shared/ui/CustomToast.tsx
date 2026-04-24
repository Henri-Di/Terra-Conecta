import { Bell, CheckCircle2, Sparkles, X } from 'lucide-react';

type ToastTone = 'success' | 'info' | 'warning';

type ToastState = {
  visible: boolean;
  title: string;
  message: string;
  tone: ToastTone;
};

function toastToneStyles(tone: ToastTone) {
  const config = {
    success: {
      border: 'rgba(108, 142, 42, 0.22)',
      background:
        'linear-gradient(180deg, rgba(255,255,255,0.96), rgba(244,250,238,0.92))',
      iconBg: 'linear-gradient(135deg, #6C8E2A 0%, #8EB843 100%)',
      icon: CheckCircle2,
    },
    info: {
      border: 'rgba(86, 151, 217, 0.22)',
      background:
        'linear-gradient(180deg, rgba(255,255,255,0.96), rgba(239,247,255,0.92))',
      iconBg: 'linear-gradient(135deg, #4F8FD4 0%, #74B2F1 100%)',
      icon: Sparkles,
    },
    warning: {
      border: 'rgba(223, 169, 74, 0.24)',
      background:
        'linear-gradient(180deg, rgba(255,255,255,0.96), rgba(255,248,236,0.92))',
      iconBg: 'linear-gradient(135deg, #D5A03B 0%, #E8BD61 100%)',
      icon: Bell,
    },
  } as const;

  return config[tone];
}

type Props = {
  toast: ToastState;
  onClose: () => void;
};

export function CustomToast({ toast, onClose }: Props) {
  if (!toast.visible) return null;

  const tone = toastToneStyles(toast.tone);
  const ToneIcon = tone.icon;

  return (
    <div className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <div
        className="pointer-events-auto w-full max-w-sm rounded-[24px] border p-3.5 shadow-[0_18px_38px_rgba(91,64,37,0.14)] backdrop-blur-xl animate-[toastIn_.28s_ease-out]"
        style={{
          borderColor: tone.border,
          background: tone.background,
        }}
        role="status"
        aria-live="polite"
      >
        <div className="flex items-start gap-3">
          <div
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[16px] shadow-[0_10px_20px_rgba(91,64,37,0.10)]"
            style={{ background: tone.iconBg }}
          >
            <ToneIcon className="h-6 w-6 text-white" strokeWidth={2.6} />
          </div>

          <div className="min-w-0 flex-1 pr-1">
            <div className="text-[1rem] font-black leading-5 text-[#231E1B]">
              {toast.title}
            </div>
            <p className="mt-1 text-sm leading-5 text-[#6B6058]">
              {toast.message}
            </p>
          </div>

          <button
            onClick={onClose}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/70 text-[#8F7F73] transition-colors duration-200 hover:bg-white"
            aria-label="Fechar notificação"
          >
            <X className="h-4 w-4" strokeWidth={2.6} />
          </button>
        </div>
      </div>
    </div>
  );
}


