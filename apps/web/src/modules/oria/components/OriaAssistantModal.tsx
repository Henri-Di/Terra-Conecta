import { Camera, ImagePlus, Loader2, MessageCircleHeart, Mic, Send, Sparkles, StopCircle, X } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

import { ORIA_INITIAL_MESSAGE } from '../oria.constants';
import type { ChatMessage, OriaTab, PermissionStateType } from '../oria.types';
import { buildId, simulateOriaReply } from '../oria.utils';

type Props = {
  open: boolean;
  activeTab: OriaTab;
  onChangeTab: (tab: OriaTab) => void;
  onClose: () => void;
};

export function OriaAssistantModal({
  open,
  activeTab,
  onChangeTab,
  onClose,
}: Props) {
  const [textMessage, setTextMessage] = useState('');
  const [selectedImageName, setSelectedImageName] = useState('');
  const [selectedImageUrl, setSelectedImageUrl] = useState('');
  const [voiceRecording, setVoiceRecording] = useState(false);
  const [voicePermission, setVoicePermission] =
    useState<PermissionStateType>('idle');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: buildId(),
      role: 'assistant',
      content: ORIA_INITIAL_MESSAGE,
    },
  ]);

  const mediaStreamRef = useRef<MediaStream | null>(null);

  useEffect(() => {
    if (!open) {
      setVoiceRecording(false);

      if (mediaStreamRef.current) {
        mediaStreamRef.current.getTracks().forEach((track) => track.stop());
        mediaStreamRef.current = null;
      }
    }
  }, [open]);

  useEffect(() => {
    return () => {
      if (selectedImageUrl) {
        URL.revokeObjectURL(selectedImageUrl);
      }
    };
  }, [selectedImageUrl]);

  if (!open) return null;

  const addAssistantReply = async (payload: {
    tab: OriaTab;
    text?: string;
    imageName?: string;
    voiceUsed?: boolean;
  }) => {
    setIsSubmitting(true);

    await new Promise((resolve) => window.setTimeout(resolve, 900));

    const reply = simulateOriaReply(payload);

    setMessages((current) => [
      ...current,
      {
        id: buildId(),
        role: 'assistant',
        content: reply,
      },
    ]);

    setIsSubmitting(false);
  };

  const handleSubmitText = async () => {
    const value = textMessage.trim();
    if (!value) return;

    setMessages((current) => [
      ...current,
      {
        id: buildId(),
        role: 'user',
        content: value,
      },
    ]);

    setTextMessage('');
    await addAssistantReply({ tab: 'texto', text: value });
  };

  const handleAskMicrophonePermission = async () => {
    if (!navigator.mediaDevices?.getUserMedia) {
      setVoicePermission('unsupported');
      setMessages((current) => [
        ...current,
        {
          id: buildId(),
          role: 'assistant',
          content:
            'Este navegador não permite simular uso de microfone nessa página.',
        },
      ]);
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaStreamRef.current = stream;
      setVoicePermission('granted');
      setVoiceRecording(true);

      setMessages((current) => [
        ...current,
        {
          id: buildId(),
          role: 'assistant',
          content: 'Microfone liberado. Pode começar a gravação simulada.',
        },
      ]);
    } catch {
      setVoicePermission('denied');
      setVoiceRecording(false);

      setMessages((current) => [
        ...current,
        {
          id: buildId(),
          role: 'assistant',
          content:
            'O acesso ao microfone foi negado. Você ainda pode usar texto ou imagem.',
        },
      ]);
    }
  };

  const handleStopVoiceSimulation = async () => {
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach((track) => track.stop());
      mediaStreamRef.current = null;
    }

    setVoiceRecording(false);

    setMessages((current) => [
      ...current,
      {
        id: buildId(),
        role: 'user',
        content: 'Mensagem de voz enviada.',
      },
    ]);

    await addAssistantReply({ tab: 'voz', voiceUsed: true });
  };

  const handleImageSelected = async (
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

    setMessages((current) => [
      ...current,
      {
        id: buildId(),
        role: 'user',
        content: `Imagem selecionada: ${file.name}`,
      },
    ]);

    await addAssistantReply({ tab: 'imagem', imageName: file.name });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-[rgba(35,30,27,0.30)] p-3 backdrop-blur-[3px] sm:items-center sm:p-5">
      <div className="relative flex w-full max-w-md flex-col overflow-hidden rounded-[30px] border border-white/85 bg-[linear-gradient(180deg,rgba(250,252,255,0.98),rgba(255,250,244,0.96))] shadow-[0_24px_60px_rgba(50,40,32,0.24)] max-h-[92vh]">
        <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#CFE7FB]/70 blur-3xl" />
        <div className="absolute -left-8 bottom-0 h-28 w-28 rounded-full bg-[#E5F3DF]/70 blur-3xl" />

        <div className="relative border-b border-white/80 px-4 pb-4 pt-4">
          <div className="flex items-start gap-3">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[18px] border border-white/85 bg-[linear-gradient(135deg,#DCEEFF,#F4FAFF)] shadow-[0_10px_22px_rgba(79,143,212,0.10)]">
              <MessageCircleHeart className="h-7 w-7 text-[#4F8FD4]" strokeWidth={2.4} />
            </div>

            <div className="min-w-0 flex-1">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/85 px-3 py-1 text-[0.66rem] font-bold uppercase tracking-[0.12em] text-[#4F8FD4] shadow-[0_6px_12px_rgba(79,143,212,0.08)]">
                <Sparkles className="h-3.5 w-3.5" strokeWidth={2.4} />
                Oriá
              </div>

              <h3 className="mt-3 text-[1.3rem] font-black leading-[1.02] tracking-tight text-[#1F1A17]">
                Painel da Oriá
              </h3>

              <p className="mt-2 text-[0.9rem] leading-6 text-[#625D59]">
                Fale, escreva ou envie uma imagem para simular como a Oriá pode
                ajudar no app.
              </p>
            </div>

            <button
              onClick={onClose}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/80 text-[#8F7F73] shadow-[0_8px_16px_rgba(91,64,37,0.06)] transition-colors duration-200 hover:bg-white"
              aria-label="Fechar painel da Oriá"
            >
              <X className="h-4.5 w-4.5" strokeWidth={2.6} />
            </button>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2">
            {[
              { key: 'texto', label: 'Texto', icon: MessageCircleHeart },
              { key: 'voz', label: 'Voz', icon: Mic },
              { key: 'imagem', label: 'Imagem', icon: Camera },
            ].map((item) => {
              const Icon = item.icon;
              const active = activeTab === item.key;

              return (
                <button
                  key={item.key}
                  onClick={() => onChangeTab(item.key as OriaTab)}
                  className={`rounded-[18px] border px-3 py-3 text-center transition-all duration-200 ${
                    active
                      ? 'border-[#9CCAF2] bg-[linear-gradient(180deg,#EAF5FF,#F6FBFF)] shadow-[0_10px_18px_rgba(79,143,212,0.10)]'
                      : 'border-white/70 bg-white/75'
                  }`}
                  aria-label={item.label}
                >
                  <div
                    className={`mx-auto flex h-10 w-10 items-center justify-center rounded-full ${
                      active
                        ? 'bg-[linear-gradient(135deg,#DCEEFF,#F4FAFF)]'
                        : 'bg-[#F6F1EB]'
                    }`}
                  >
                    <Icon
                      className={`h-5 w-5 ${
                        active ? 'text-[#4F8FD4]' : 'text-[#8A7D73]'
                      }`}
                      strokeWidth={2.5}
                    />
                  </div>
                  <div
                    className={`mt-2 text-[0.76rem] font-bold ${
                      active ? 'text-[#2B5F94]' : 'text-[#645C56]'
                    }`}
                  >
                    {item.label}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="relative flex-1 overflow-y-auto px-4 pb-3 pt-3">
          <div className="space-y-2.5">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.role === 'assistant' ? 'justify-start' : 'justify-end'
                }`}
              >
                <div
                  className={`max-w-[88%] rounded-[18px] px-4 py-3 text-[0.9rem] leading-6 shadow-[0_8px_18px_rgba(91,64,37,0.04)] ${
                    message.role === 'assistant'
                      ? 'bg-[linear-gradient(180deg,#FFFFFF,#F7FBFF)] text-[#4B4A48]'
                      : 'bg-[linear-gradient(180deg,#4F8FD4,#5EA2E4)] text-white'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}

            {isSubmitting ? (
              <div className="flex justify-start">
                <div className="flex items-center gap-2 rounded-[18px] bg-[linear-gradient(180deg,#FFFFFF,#F7FBFF)] px-4 py-3 text-[0.88rem] text-[#5F5C59] shadow-[0_8px_18px_rgba(91,64,37,0.04)]">
                  <Loader2 className="h-4 w-4 animate-spin text-[#4F8FD4]" strokeWidth={2.5} />
                  Oriá está pensando...
                </div>
              </div>
            ) : null}
          </div>

          {activeTab === 'texto' && (
            <div className="mt-4 rounded-[22px] border border-white/80 bg-white/78 p-3 shadow-[0_8px_18px_rgba(79,143,212,0.05)]">
              <div className="text-[0.72rem] font-black uppercase tracking-[0.12em] text-[#4F8FD4]">
                Pergunta por texto
              </div>
              <p className="mt-1.5 text-[0.88rem] leading-5 text-[#6A625C]">
                Escreva o que está acontecendo para simular a conversa com a
                Oriá.
              </p>

              <textarea
                value={textMessage}
                onChange={(event) => setTextMessage(event.target.value)}
                placeholder="Ex.: Minha planta está com manchas na folha..."
                className="mt-3 min-h-[112px] w-full resize-none rounded-[18px] border border-[#E7DDD4] bg-[linear-gradient(180deg,#FFFDFC,#FFF9F4)] px-4 py-3 text-[0.95rem] text-[#2A2420] outline-none placeholder:text-[#A1968E] focus:border-[#A5CDF0]"
              />

              <button
                type="button"
                onClick={handleSubmitText}
                disabled={isSubmitting || !textMessage.trim()}
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-[18px] bg-[linear-gradient(90deg,#4F8FD4,#6AAAE7)] px-4 py-3 text-[0.95rem] font-black text-white shadow-[0_12px_24px_rgba(79,143,212,0.18)] transition-transform duration-200 hover:-translate-y-0.5 active:scale-[0.99] disabled:opacity-60"
              >
                <Send className="h-4.5 w-4.5" strokeWidth={2.6} />
                Enviar para Oriá
              </button>
            </div>
          )}

          {activeTab === 'voz' && (
            <div className="mt-4 rounded-[22px] border border-white/80 bg-white/78 p-4 text-center shadow-[0_8px_18px_rgba(79,143,212,0.05)]">
              <div className="text-[0.72rem] font-black uppercase tracking-[0.12em] text-[#4F8FD4]">
                Conversa por voz
              </div>
              <p className="mt-1.5 text-[0.88rem] leading-5 text-[#6A625C]">
                Toque para pedir permissão do microfone e simular uma gravação.
              </p>

              <div className="mt-5 flex justify-center">
                <button
                  type="button"
                  onClick={
                    voiceRecording
                      ? handleStopVoiceSimulation
                      : handleAskMicrophonePermission
                  }
                  className={`relative flex h-24 w-24 items-center justify-center rounded-full border transition-all duration-300 ${
                    voiceRecording
                      ? 'border-[#F0B3AF] bg-[linear-gradient(180deg,#FDE5E3,#FDF5F4)] shadow-[0_18px_34px_rgba(207,99,89,0.16)]'
                      : 'border-white/85 bg-[linear-gradient(180deg,#EAF5FF,#F7FBFF)] shadow-[0_18px_34px_rgba(79,143,212,0.14)]'
                  }`}
                >
                  <div
                    className={`absolute inset-2 rounded-full ${
                      voiceRecording
                        ? 'bg-[linear-gradient(180deg,#FFF6F5,#FFFFFF)]'
                        : 'bg-[linear-gradient(180deg,#FFFFFF,#F6FBFF)]'
                    }`}
                  />
                  {voiceRecording ? (
                    <StopCircle
                      className="relative z-10 h-9 w-9 text-[#D1695F]"
                      strokeWidth={2.6}
                    />
                  ) : (
                    <Mic
                      className="relative z-10 h-9 w-9 text-[#4F8FD4]"
                      strokeWidth={2.6}
                    />
                  )}
                </button>
              </div>

              <div className="mt-4 text-[0.95rem] font-bold text-[#2D2723]">
                {voiceRecording ? 'Gravando agora...' : 'Toque para começar'}
              </div>

              <div className="mt-2 text-[0.84rem] leading-5 text-[#72675F]">
                {voicePermission === 'denied'
                  ? 'O acesso ao microfone foi negado.'
                  : voicePermission === 'unsupported'
                    ? 'O microfone não é suportado neste navegador.'
                    : voiceRecording
                      ? 'Oriá está ouvindo sua mensagem.'
                      : 'Simulação pronta para conversa por voz.'}
              </div>
            </div>
          )}

          {activeTab === 'imagem' && (
            <div className="mt-4 rounded-[22px] border border-white/80 bg-white/78 p-3 shadow-[0_8px_18px_rgba(79,143,212,0.05)]">
              <div className="text-[0.72rem] font-black uppercase tracking-[0.12em] text-[#4F8FD4]">
                Envio de imagem
              </div>
              <p className="mt-1.5 text-[0.88rem] leading-5 text-[#6A625C]">
                Simule o envio de uma foto da planta para análise da Oriá.
              </p>

              <label className="mt-3 flex min-h-[136px] cursor-pointer flex-col items-center justify-center rounded-[20px] border border-dashed border-[#BDD9F2] bg-[linear-gradient(180deg,#F2F9FF,#FFFDFC)] px-4 py-5 text-center transition-colors duration-200 hover:bg-[linear-gradient(180deg,#EDF7FF,#FFF9F4)]">
                <ImagePlus className="h-8 w-8 text-[#4F8FD4]" strokeWidth={2.2} />
                <div className="mt-3 text-[0.92rem] font-bold text-[#2D2723]">
                  Escolher imagem
                </div>
                <div className="mt-1 text-[0.82rem] leading-5 text-[#746962]">
                  Toque para simular o envio de uma foto
                </div>

                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageSelected}
                />
              </label>

              {selectedImageName ? (
                <div className="mt-3 space-y-3">
                  <div className="rounded-[16px] bg-[linear-gradient(180deg,#EAF5FF,#F7FBFF)] px-3 py-2 text-[0.84rem] font-medium text-[#356DA4]">
                    Imagem selecionada: {selectedImageName}
                  </div>

                  {selectedImageUrl ? (
                    <img
                      src={selectedImageUrl}
                      alt="Pré-visualização da imagem selecionada"
                      className="h-44 w-full rounded-[18px] object-cover shadow-[0_8px_18px_rgba(91,64,37,0.08)]"
                    />
                  ) : null}
                </div>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}