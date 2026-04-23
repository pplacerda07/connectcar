import { Users, Zap } from "lucide-react";
import LeadDistributionPanel from "./LeadDistributionPanel";

export default function PowerfulSolutions() {
  return (
    <section id="produto" className="bg-brand-tint py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: copy */}
          <div className="flex flex-col gap-6 reveal">
            <p className="text-[13px] font-semibold tracking-[2.5px] uppercase text-[#FF8000]">
              Gestão de Leads
            </p>
            <h2 className="text-[clamp(30px,4vw,50px)] font-bold leading-[1.15] tracking-[-1px] text-[#061D3D]">
              Receba, distribua e converta leads com total controle.
            </h2>
            <p className="text-[16px] text-[#3D4F64] leading-[1.65]">
              Leads chegam automaticamente pelo WhatsApp, são distribuídos entre os vendedores e você acompanha{" "}
              <span className="bg-[rgba(6,29,61,0.06)] px-2 py-0.5 rounded">
                cada etapa do funil em tempo real.
              </span>{" "}
              Nada cai no esquecimento.
            </p>

            {/* Metrics */}
            <div className="flex gap-10 mt-2">
              <div className="flex flex-col gap-1">
                <div className="flex items-end gap-1">
                  <span className="text-[clamp(32px,4vw,48px)] font-bold text-[#061D3D] leading-none">98</span>
                  <span className="text-[clamp(24px,3vw,38px)] font-bold text-[#FF8000] leading-none mb-1">%</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={14} className="text-[#FF8000]" />
                  <p className="text-[13px] text-[#3D4F64]">Satisfação dos clientes</p>
                </div>
              </div>

              <div className="w-px bg-[#BCC5D3]" />

              <div className="flex flex-col gap-1">
                <div className="flex items-end gap-1">
                  <span className="text-[clamp(32px,4vw,48px)] font-bold text-[#061D3D] leading-none">3</span>
                  <span className="text-[clamp(24px,3vw,38px)] font-bold text-[#FF8000] leading-none mb-1">x</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap size={14} className="text-[#FF8000]" />
                  <p className="text-[13px] text-[#3D4F64]">Aumento médio em conversão</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: system DOM element mockup — oculto no mobile */}
          <div className="hidden md:block reveal delay-2 relative lg:-mr-12 xl:-mr-20">
            <div className="relative w-full overflow-hidden sm:overflow-visible">
              <div className="transform-gpu pointer-events-none origin-top-left md:origin-center lg:origin-left xl:origin-center scale-[0.80] sm:scale-100 lg:scale-[0.90] xl:scale-[1.05] mt-10 lg:mt-0 max-w-[650px]">
                <LeadDistributionPanel />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
