import { ArrowRight, LayoutDashboard } from "lucide-react";

function PhoneMockup() {
  return (
    <div className="relative w-[180px] h-[360px] bg-[#061D3D] rounded-[32px] border-[3px] border-[#3D4F64] shadow-[0_20px_60px_rgba(6,29,61,0.3)] flex flex-col items-center overflow-hidden">
      {/* Notch */}
      <div className="w-[80px] h-[22px] bg-[#0F2D52] rounded-b-2xl mt-0 z-10" />

      {/* Screen */}
      <div className="flex-1 w-full bg-white m-[3px] rounded-[26px] flex flex-col items-center justify-center gap-4 px-4 relative overflow-hidden">
        {/* Subtle gradient bg */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFF7F0] to-white pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-3 text-center">
          {/* Logo icon */}
          <div className="w-14 h-14 rounded-2xl bg-[#FF8000]/10 border border-[#FF8000]/20 flex items-center justify-center">
            <LayoutDashboard size={28} className="text-[#FF8000]" />
          </div>

          <div className="flex flex-col gap-0.5">
            <span className="text-[18px] font-bold text-[#FF8000] leading-tight tracking-tight">
              ConnectCar
            </span>
            <span className="text-[13px] font-semibold text-[#061D3D] tracking-wide uppercase">
              System
            </span>
          </div>

          {/* Fake UI lines */}
          <div className="flex flex-col gap-2 w-full mt-3">
            <div className="h-2 bg-[#FF8000]/15 rounded-full w-full" />
            <div className="h-2 bg-[#FF8000]/10 rounded-full w-[75%]" />
            <div className="h-2 bg-[#EDF0F4] rounded-full w-[90%]" />
            <div className="h-2 bg-[#EDF0F4] rounded-full w-[60%]" />
          </div>

          {/* Fake CTA */}
          <div className="mt-3 w-full bg-[#FF8000] rounded-full py-2 text-white text-[10px] font-bold tracking-wider uppercase text-center">
            Acessar
          </div>
        </div>
      </div>

      {/* Home bar */}
      <div className="w-[48px] h-[4px] bg-white/30 rounded-full my-2" />
    </div>
  );
}

function AnalyticsCard() {
  return (
    <div className="bg-[#EDF0F4] border-[1.5px] border-[#061D3D] rounded-[20px] p-8 relative overflow-hidden">
      {/* Diamond decorations */}
      <div className="absolute -top-4 -right-4 w-14 h-14 bg-[rgba(6,29,61,0.08)] rotate-45 rounded-sm" aria-hidden="true" />
      <div className="absolute bottom-8 right-12 w-8 h-8 bg-[rgba(6,29,61,0.06)] rotate-45 rounded-sm" aria-hidden="true" />

      <div className="relative z-10 grid md:grid-cols-[1fr_auto] gap-8 items-center">
        {/* Left content */}
        <div className="flex flex-col gap-5">
          {/* Icon */}
          <div className="w-12 h-12 border-[1.5px] border-[#061D3D] rounded-full bg-white flex items-center justify-center">
            <LayoutDashboard size={22} className="text-[#FF8000]" />
          </div>

          <h3 className="text-[clamp(22px,2.5vw,32px)] font-bold text-[#061D3D] leading-[1.25]">
            Acompanhe tudo pelo celular, onde estiver.
          </h3>
          <p className="text-[15px] text-[#3D4F64] leading-[1.65] max-w-[440px]">
            Sua equipe acessa leads, negociações e relatórios em tempo real, direto do celular. Receba notificações instantâneas e nunca perca uma oportunidade de venda.
          </p>

          {/* Feature badges */}
          <div className="flex flex-wrap gap-3 mt-1">
            {["App Mobile Incluso", "Notificações em Tempo Real"].map(badge => (
              <div key={badge} className="flex items-center gap-2 bg-white border border-[#BCC5D3] rounded-full px-4 py-2">
                <span className="w-4 h-4 bg-[#FF8000] rounded-full flex items-center justify-center">
                  <svg width="8" height="6" viewBox="0 0 8 6" fill="none" aria-hidden="true">
                    <path d="M1 3L3 5L7 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="text-[13px] font-medium text-[#061D3D]">{badge}</span>
              </div>
            ))}
          </div>

          <button className="inline-flex items-center gap-2 bg-transparent text-[#061D3D] border-[1.5px] border-[#061D3D] rounded-full px-6 py-3 text-[15px] font-semibold cursor-pointer hover:bg-white transition-colors duration-200 self-start mt-2">
            Falar com Vendas
            <ArrowRight size={15} strokeWidth={2.5} />
          </button>
        </div>

        {/* Right: Phone mockup */}
        <div className="hidden md:flex items-center justify-center min-w-[220px]">
          <PhoneMockup />
        </div>
      </div>
    </div>
  );
}

export default function AnalyticsSection() {
  return (
    <section
      className="py-24 relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/imagens_do_sistema/fotodecompradecarro.svg')" }}
    >
      {/* Overlay para legibilidade */}
      <div className="absolute inset-0 bg-black/45" aria-hidden="true" />

      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-14 reveal">
          <p className="text-[13px] font-semibold tracking-[2.5px] uppercase text-[#FF8000] mb-4">
            ConnectCar Mobile
          </p>
          <h2 className="text-[clamp(28px,4vw,52px)] font-bold leading-[1.15] tracking-[-1px] text-white max-w-[720px] mx-auto">
            O único CRM automotivo que<br />sua concessionária vai precisar.
          </h2>
        </div>

        <div className="reveal delay-1">
          <AnalyticsCard />
        </div>
      </div>
    </section>
  );
}

