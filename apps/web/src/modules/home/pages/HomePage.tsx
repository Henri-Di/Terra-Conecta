import { Bell, BookOpen, Camera, HandHelping, Home, Image, Mic, Phone, Volume2 } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FloatingAgroBackground } from '../components/FloatingAgroBackground';
import { Header } from '../components/Header';
import { WelcomeSection } from '../components/WelcomeSection';
import { OriaBanner } from '../components/OriaBanner';
import { MainActionsSection } from '../components/MainActionsSection';
import { OriaSection } from '../components/OriaSection';
import { QuickActionsSection } from '../components/QuickActionsSection';
import { HelpSection } from '../components/HelpSection';
import { Footer } from '../components/Footer';
import { PageLoader } from '../components/PageLoader';
import { CustomToast } from '../components/CustomToast';
import type { MainAction, NavItem, QuickAction, ToastState } from '../home.types';
import { TopNav } from '../components/TopNav';
import { FloatingOriaButton } from '../../oria/components/FloatingOriaButton';
import { OriaAssistantModal } from '../../oria/components/OriaAssistantModal';
import type { OriaTab } from '../../oria/oria.types';

export function HomePage() {
  const navigate = useNavigate();

  const [toast, setToast] = useState<ToastState>({
    visible: false,
    title: '',
    message: '',
    tone: 'info',
  });

  const [isLoading, setIsLoading] = useState(true);
  const [oriaModalOpen, setOriaModalOpen] = useState(false);
  const [oriaTab, setOriaTab] = useState<OriaTab>('texto');

  const showToast = useCallback((payload: Omit<ToastState, 'visible'>) => {
    setToast({ visible: true, ...payload });
  }, []);

  const hideToast = useCallback(() => {
    setToast((current) => ({ ...current, visible: false }));
  }, []);

  useEffect(() => {
    if (!toast.visible) return;

    const timeout = window.setTimeout(() => {
      hideToast();
    }, 3200);

    return () => window.clearTimeout(timeout);
  }, [toast.visible, hideToast]);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setIsLoading(false);
    }, 2200);

    return () => window.clearTimeout(timeout);
  }, []);

  const handleUnavailableNavigation = useCallback(
    (label: string) => {
      showToast({
        tone: 'info',
        title: `${label} em breve`,
        message: 'Essa área estará disponível nas próximas etapas.',
      });
    },
    [showToast],
  );

  const handleSpeakWithOria = useCallback(() => {
    setOriaTab('voz');
    setOriaModalOpen(true);
  }, []);

  const handleListenToOria = useCallback(() => {
    setOriaTab('voz');
    setOriaModalOpen(true);
  }, []);

  const handleShowPlant = useCallback(() => {
    setOriaTab('imagem');
    setOriaModalOpen(true);
  }, []);

  const mainActions: MainAction[] = [
    {
      icon: Mic,
      title: 'Falar com Oriá',
      subtitle: 'Conte o que está acontecendo e receba orientação.',
      helper: 'Começar agora',
      iconBg: 'linear-gradient(135deg, #4F8FD4 0%, #77B4EB 100%)',
      iconColor: '#FFFFFF',
      borderColor: 'rgba(79, 143, 212, 0.22)',
      shadowColor: '0 18px 36px rgba(79, 143, 212, 0.18)',
      onClick: handleSpeakWithOria,
    },
    {
      icon: Camera,
      title: 'Mostrar planta',
      subtitle: 'Mostre a folha, o fruto ou a parte que precisa de atenção.',
      helper: 'Tirar ou enviar foto',
      iconBg: 'linear-gradient(135deg, #6C8E2A 0%, #8EB843 100%)',
      iconColor: '#FFFFFF',
      borderColor: 'rgba(108, 142, 42, 0.24)',
      shadowColor: '0 18px 36px rgba(108, 142, 42, 0.18)',
      onClick: handleShowPlant,
    },
  ];

  const quickActions: QuickAction[] = [
    {
      icon: Bell,
      label: 'Lembretes',
      iconBg: 'rgba(223, 169, 74, 0.15)',
      iconColor: '#C88919',
      borderColor: 'rgba(223, 169, 74, 0.24)',
      hoverGlow: '0 16px 28px rgba(223, 169, 74, 0.14)',
      onClick: () => {
        showToast({
          tone: 'warning',
          title: 'Lembretes do dia',
          message: 'Seus avisos importantes estão prontos para ver.',
        });
      },
    },
    {
      icon: Volume2,
      label: 'Ouvir Oriá',
      iconBg: 'rgba(86, 151, 217, 0.15)',
      iconColor: '#2F7BC9',
      borderColor: 'rgba(86, 151, 217, 0.24)',
      hoverGlow: '0 16px 28px rgba(86, 151, 217, 0.14)',
      onClick: handleListenToOria,
    },
    {
      icon: BookOpen,
      label: 'Painel',
      iconBg: 'rgba(108, 142, 42, 0.15)',
      iconColor: '#5F7D26',
      borderColor: 'rgba(108, 142, 42, 0.24)',
      hoverGlow: '0 16px 28px rgba(108, 142, 42, 0.14)',
      onClick: () => {
        navigate('/dashboard');
      },
    },
    {
      icon: Phone,
      label: 'Ajuda',
      iconBg: 'rgba(201, 120, 84, 0.13)',
      iconColor: '#AF6545',
      borderColor: 'rgba(201, 120, 84, 0.24)',
      hoverGlow: '0 16px 28px rgba(201, 120, 84, 0.14)',
      onClick: () => {
        showToast({
          tone: 'info',
          title: 'Canal de ajuda',
          message: 'Vamos te mostrar o melhor caminho para receber apoio.',
        });
      },
    },
  ];

  const topNavItems: NavItem[] = [
    { icon: Home, label: 'Início', path: '/' },
    { icon: Image, label: 'Painel', path: '/dashboard' },
    { icon: Mic, label: 'Falar' },
    { icon: Camera, label: 'Foto' },
    { icon: HandHelping, label: 'Ajuda' },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,#F6EFE3_0%,#EFE3D3_100%)] text-stone-800">
      <FloatingAgroBackground />
      <PageLoader visible={isLoading} />
      <CustomToast toast={toast} onClose={hideToast} />
      <FloatingOriaButton onOpen={() => setOriaModalOpen(true)} />
      <OriaAssistantModal
        open={oriaModalOpen}
        activeTab={oriaTab}
        onChangeTab={setOriaTab}
        onClose={() => setOriaModalOpen(false)}
      />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[27rem] flex-col px-5 py-4 sm:px-6">
        <Header />
        <TopNav
          items={topNavItems}
          onUnavailablePress={handleUnavailableNavigation}
        />

        <main className="mt-4 flex flex-1 flex-col gap-[1.125rem]">
          <WelcomeSection />
          <OriaBanner onPrimaryAction={handleSpeakWithOria} />
          <MainActionsSection actions={mainActions} />
          <OriaSection
            onVoicePress={handleSpeakWithOria}
            onListenPress={handleListenToOria}
            onCameraPress={handleShowPlant}
          />
          <QuickActionsSection actions={quickActions} />
          <HelpSection />
        </main>

        <Footer />
      </div>
    </div>
  );
}