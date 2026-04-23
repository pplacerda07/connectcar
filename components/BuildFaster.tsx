import { ArrowRight, Share2 } from "lucide-react";
import PortalIntegrationPanel from "./PortalIntegrationPanel";

export default function BuildFaster() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Portal Integration DOM mockup */}
          <div className="reveal relative lg:-ml-8 xl:-ml-12">
            <div className="relative w-full overflow-hidden sm:overflow-visible">
              <div className="transform-gpu pointer-events-none origin-top-left md:origin-center lg:origin-left scale-[0.75] sm:scale-[0.85] lg:scale-[0.78] xl:scale-[0.88] max-w-[720px]">
                <PortalIntegrationPanel />
              </div>
            </div>
          </div>

          {/* Right: copy */}
          <div className="flex flex-col gap-6 reveal delay-2">
            <p className="text-[13px] font-semibold tracking-[2.5px] uppercase text-[#FF8000]">
              Integração com Portais
            </p>
            <h2 className="text-[clamp(28px,3.5vw,48px)] font-bold leading-[1.15] tracking-[-1px] text-[#061D3D]">
              Anuncie nos principais portais<br className="hidden lg:block" /> direto do sistema
            </h2>
            <p className="text-[16px] text-[#3D4F64] leading-[1.65]">
              Cadastrou o veículo no estoque? Em poucos cliques ele já está publicado nos maiores portais automotivos do Brasil. Gerencie preço, destaques, opcionais e descrição sem sair do CRM.
            </p>

            {/* Icon highlight */}
            <div className="flex items-center gap-3 py-4 border-t border-b border-[#BCC5D3]">
              <div className="w-10 h-10 bg-[#EDF0F4] border border-[#BCC5D3] rounded-lg flex items-center justify-center">
                <Share2 size={20} className="text-[#FF8000]" />
              </div>
              <p className="text-[15px] font-semibold text-[#061D3D]">
                Um estoque, múltiplos portais. Tudo sincronizado em tempo real.
              </p>
            </div>

            <p className="text-[15px] text-[#3D4F64] leading-[1.65]">
              ShopCar, iCarros, UsadosBR, NaPista e outros — selecione onde quer anunciar e acompanhe o status de cada publicação. Sua equipe de vendas economiza horas por semana eliminando o retrabalho.
            </p>

            <button className="inline-flex items-center gap-2 bg-transparent text-[#061D3D] border-[1.5px] border-[#061D3D] rounded-full px-6 py-3 text-[15px] font-semibold cursor-pointer hover:bg-[#EDF0F4] transition-colors duration-200 self-start mt-2">
              Saiba Mais
              <ArrowRight size={15} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
