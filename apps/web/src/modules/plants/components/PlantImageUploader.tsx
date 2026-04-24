import { Camera, ImagePlus } from 'lucide-react';

export function PlantImageUploader({
  selectedImageName,
  selectedImageUrl,
  onImageSelected,
}: {
  selectedImageName: string;
  selectedImageUrl: string;
  onImageSelected: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <section className="rounded-[24px] border border-white/80 bg-[linear-gradient(180deg,rgba(234,245,255,0.96),rgba(248,251,255,0.90))] p-4 shadow-[0_10px_24px_rgba(79,143,212,0.08)]">
      <div className="flex items-start gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[16px] bg-[linear-gradient(135deg,#DCEEFF,#F4FAFF)] shadow-[0_8px_18px_rgba(79,143,212,0.08)]">
          <Camera className="h-6 w-6 text-[#4F8FD4]" strokeWidth={2.5} />
        </div>

        <div>
          <div className="text-[1rem] font-extrabold leading-5 text-[#2C2622]">
            Mostre a planta
          </div>
          <p className="mt-1 text-[0.88rem] leading-5 text-[#6B6058]">
            Tire ou envie a foto.
          </p>
        </div>
      </div>

      <label className="mt-4 flex min-h-[156px] cursor-pointer flex-col items-center justify-center rounded-[22px] border border-dashed border-[#BDD9F2] bg-[linear-gradient(180deg,#F2F9FF,#FFFDFC)] px-4 py-5 text-center transition-colors duration-200 hover:bg-[linear-gradient(180deg,#EDF7FF,#FFF9F4)]">
        <ImagePlus className="h-8 w-8 text-[#4F8FD4]" strokeWidth={2.2} />
        <div className="mt-3 text-[1rem] font-bold text-[#2D2723]">
          Escolher foto
        </div>
        <div className="mt-1 text-[0.8rem] leading-5 text-[#746962]">
          Toque aqui
        </div>

        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={onImageSelected}
        />
      </label>

      {selectedImageName ? (
        <div className="mt-4 space-y-3">
          <div className="rounded-[16px] bg-[linear-gradient(180deg,#EAF5FF,#F7FBFF)] px-3 py-2 text-[0.84rem] font-medium text-[#356DA4]">
            Foto: {selectedImageName}
          </div>

          {selectedImageUrl ? (
            <img
              src={selectedImageUrl}
              alt="Pré-visualização da planta selecionada"
              className="h-48 w-full rounded-[20px] object-cover shadow-[0_8px_18px_rgba(91,64,37,0.08)]"
            />
          ) : null}
        </div>
      ) : null}
    </section>
  );
}