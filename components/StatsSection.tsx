import { ArrowRight } from "lucide-react";

const stats = [
  { number: "300", suffix: "+", label: "CONCESSIONÁRIAS ATIVAS" },
  { number: "98", suffix: "%", label: "SATISFAÇÃO DOS CLIENTES" },
  { number: "50", suffix: "K+", label: "LEADS PROCESSADOS/MÊS" },
  { number: "3", suffix: "x", label: "AUMENTO EM CONVERSÃO" },
];

export default function StatsSection() {
  return (
    <section className="bg-[#EDF0F4] py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: copy */}
          <div className="flex flex-col gap-6 reveal">
            <p className="text-[13px] font-semibold tracking-[2.5px] uppercase text-[#FF8000]">
              ConnectCar System em Números
            </p>
            <h2 className="text-[clamp(28px,3.5vw,48px)] font-bold leading-[1.15] tracking-[-1px] text-[#061D3D]">
              Resultados reais para<br className="hidden lg:block" /> concessionárias reais.
            </h2>
            <p className="text-[16px] text-[#3D4F64] leading-[1.65]">
              Mais de 300 concessionárias e revendas já transformaram sua operação com o ConnectCar System. Do caos de planilhas e WhatsApp manual para um processo 100% rastreado e integrado.
            </p>
            <button className="inline-flex items-center gap-2 bg-transparent text-[#061D3D] border-[1.5px] border-[#061D3D] rounded-full px-6 py-3 text-[15px] font-semibold cursor-pointer hover:bg-white transition-colors duration-200 self-start mt-2">
              Ver Planos
              <ArrowRight size={15} strokeWidth={2.5} />
            </button>
          </div>

          {/* Right: 2×2 stats grid */}
          <div className="grid grid-cols-2 gap-5 reveal delay-2">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`bg-white border-[1.5px] border-[#061D3D] rounded-[16px] p-8 flex flex-col items-center justify-center text-center min-h-[160px]
                  transition-all duration-250 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(6,29,61,0.10)]
                  reveal delay-${i + 1}`}
              >
                <div className="flex items-end gap-0.5 leading-none">
                  <span className="text-[clamp(32px,4vw,52px)] font-bold text-[#061D3D]">{s.number}</span>
                  <span className="text-[clamp(24px,3vw,40px)] font-bold text-[#FF8000] mb-1">{s.suffix}</span>
                </div>
                <p className="text-[11px] font-semibold tracking-[2px] uppercase text-[#3D4F64] mt-2">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
