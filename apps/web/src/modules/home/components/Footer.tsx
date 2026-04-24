import { BRAND } from '../home.constants';

export function Footer() {
  return (
    <footer className="mt-4 flex flex-col items-center gap-1 pb-2 text-center">
      <div className="text-[0.84rem] font-medium text-[#7A6E66]">
        Terra Conecta • apoio para mulheres do campo
      </div>
      <div className="text-[0.72rem] font-medium text-[#9B8D82]">
        {BRAND.copyright}
      </div>
    </footer>
  );
}