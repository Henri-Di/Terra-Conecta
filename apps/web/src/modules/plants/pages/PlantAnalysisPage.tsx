import { Camera, Leaf, MessageCircleHeart, Sparkles } from 'lucide-react';
import { useState } from 'react';

import { PlantImageUploader } from '../components/PlantImageUploader';
import { PlantSymptomsForm } from '../components/PlantSymptomsForm';
import { usePlants } from '../usePlants';
import { OriaAssistantModal } from '../../oria/components/OriaAssistantModal';
import type { OriaTab } from '../../oria/oria.types';

export function PlantAnalysisPage() {
  const [selectedProblemId, setSelectedProblemId] = useState('nao-sei');
  const { stats, steps, problemOptions, results } = usePlants(selectedProblemId);

  const [selectedImageName, setSelectedImageName] = useState('');
  const [selectedImageUrl, setSelectedImageUrl] = useState('');
  const [oriaModalOpen, setOriaModalOpen] = useState(false);
  const [oriaTab, setOriaTab] = useState<OriaTab>('voz');

  const handleImageSelected = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (selectedImageUrl) {
      URL.revokeObjectURL(selectedImageUrl);
    }

    const objectUrl = URL.createObjectURL(file);
    setSelectedImageName(file.name);
    setSelectedImageUrl(objectUrl);
  };

  const handleOpenVoice = () => {
    setOriaTab('voz');
    setOriaModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#F6EFE3_0%,#EFE3D3_100%)] px-5 py-4 text-stone-800 sm:px-6">
      <OriaAssistantModal
        open={oriaModalOpen}
        activeTab={oriaTab}
        onChangeTab={setOriaTab}
        onClose={() => setOriaModalOpen(false)}
      />

      <div className="mx-auto w-full max-w-[27rem] space-y-4">
        <section className="rounded-[24px] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.90),rgba(255,249,241,0.78))] p-4 shadow-[0_12px_28px_rgba(91,64,37,0.05)]">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#F6E6DD] px-3 py-1 text-[0.68rem] font-black uppercase tracking-[0.14em] text-[#A56745]">
            <Leaf className="h-3.5 w-3.5" strokeWidth={2.5} />
            Planta
          </div>

          <div className="mt-3 flex items-start gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[16px] bg-[linear-gradient(135deg,#DCEEFF,#F4FAFF)] shadow-[0_8px_18px_rgba(79,143,212,0.08)]">
              <MessageCircleHeart className="h-6 w-6 text-[#4F8FD4]" strokeWidth={2.5} />
            </div>

            <div>
              <h1 className="text-[1.45rem] font-black leading-[1.02] tracking-tight text-[#1F1A17]">
                Mostre sua planta
              </h1>
              <p className="mt-2 text-[0.9rem] leading-6 text-[#655A53]">
                Tire foto, toque no problema ou fale com a Oriá.
              </p>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-[18px] border border-white/75 bg-[linear-gradient(180deg,#EAF5FF,#F8FBFF)] px-3.5 py-3 shadow-[0_6px_14px_rgba(79,143,212,0.06)]">
              <div className="flex items-center gap-2">
                <Camera className="h-4.5 w-4.5 text-[#4F8FD4]" strokeWidth={2.6} />
                <span className="text-[0.8rem] font-bold text-[#245E92]">
                  Foto
                </span>
              </div>
            </div>

            <div className="rounded-[18px] border border-white/75 bg-[linear-gradient(180deg,#EDF3E3,#F8FBF2)] px-3.5 py-3 shadow-[0_6px_14px_rgba(95,125,38,0.06)]">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4.5 w-4.5 text-[#5F7D26]" strokeWidth={2.6} />
                <span className="text-[0.8rem] font-bold text-[#5F7D26]">
                  Ajuda rápida
                </span>
              </div>
            </div>
          </div>
        </section>

        <PlantImageUploader
          selectedImageName={selectedImageName}
          selectedImageUrl={selectedImageUrl}
          onImageSelected={handleImageSelected}
        />

        <PlantSymptomsForm
          stats={stats}
          steps={steps}
          problemOptions={problemOptions}
          selectedProblemId={selectedProblemId}
          onSelectProblem={setSelectedProblemId}
          onOpenVoice={handleOpenVoice}
          results={results}
        />
      </div>
    </div>
  );
}