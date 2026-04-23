import { ArrowRight, Check } from "lucide-react";

const WA = "5567933774370";

const plans = [
  {
    name: "Plano Mensal",
    badge: { label: "Mais Flexível", color: "bg-[#D1FAE5] text-[#065F46]" },
    highlight: null,
    price: "570,00",
    period: "/mês",
    note: "Após o período de teste",
    perks: [
      "15 dias grátis para testar",
      "Sem cartão de crédito",
      "Cancele quando quiser",
    ],
    featured: false,
  },
  {
    name: "Plano Anual",
    badge: { label: "Mais Popular", color: "bg-[#D1FAE5] text-[#065F46]" },
    highlight: { label: "Economize 33,3%", color: "bg-[#FEF3C7] text-[#92400E]" },
    price: "4.560,00",
    period: "/ano",
    note: "Equivale a R$ 380/mês",
    perks: [
      "1 mês grátis incluso",
      "3 meses de desconto",
      "Onboarding dedicado",
    ],
    featured: true,
  },
];

export default function PricingSection() {
  return (
    <section id="precos" className="bg-brand-tint py-24 relative overflow-hidden">

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14 reveal">
          <p className="text-[13px] font-semibold tracking-[2.5px] uppercase text-[#FF8000] mb-3">
            Planos
          </p>
          <h2 className="text-[clamp(28px,3.5vw,44px)] font-bold leading-[1.15] tracking-[-1px] text-[#061D3D] mb-4">
            Planos disponíveis do sistema
          </h2>
          <p className="text-[16px] text-[#3D4F64] leading-[1.65] max-w-[480px] mx-auto">
            Escolha o plano ideal para a sua operação e comece com 15 dias gratuitos.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-row items-stretch justify-center gap-3 sm:gap-6 max-w-[760px] mx-auto reveal delay-1">
          {plans.map(plan => (
            <div
              key={plan.name}
              className={`flex-1 rounded-[20px] sm:rounded-[24px] px-4 py-6 sm:px-8 sm:py-10 flex flex-col gap-4 sm:gap-6 transition-all duration-300 ${
                plan.featured
                  ? "bg-[#061D3D] shadow-[0_24px_80px_rgba(6,29,61,0.22)] scale-[1.03]"
                  : "bg-white border border-[#E8EBF0] shadow-[0_8px_32px_rgba(6,29,61,0.07)]"
              }`}
            >
              {/* Top badges */}
              <div className="flex flex-wrap gap-2">
                <span className={`text-[11px] font-bold px-3 py-1 rounded-full ${plan.badge.color}`}>
                  {plan.badge.label}
                </span>
                {plan.highlight && (
                  <span className={`text-[11px] font-bold px-3 py-1 rounded-full ${plan.highlight.color}`}>
                    {plan.highlight.label}
                  </span>
                )}
              </div>

              {/* Plan name */}
              <div>
                <p className={`text-[13px] font-semibold tracking-wide mb-1 ${plan.featured ? "text-white/60" : "text-[#7A8CA3]"}`}>
                  {plan.name}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className={`text-[15px] font-semibold ${plan.featured ? "text-white/70" : "text-[#3D4F64]"}`}>R$</span>
                  <span className={`text-[clamp(22px,5vw,46px)] font-bold leading-none tracking-[-1px] sm:tracking-[-2px] ${plan.featured ? "text-white" : "text-[#061D3D]"}`}>
                    {plan.price}
                  </span>
                  <span className={`text-[15px] font-medium ${plan.featured ? "text-white/60" : "text-[#7A8CA3]"}`}>
                    {plan.period}
                  </span>
                </div>
                <p className={`text-[13px] mt-1.5 ${plan.featured ? "text-[#FF8000] font-semibold" : "text-[#7A8CA3]"}`}>
                  {plan.note}
                </p>
              </div>

              {/* Divider */}
              <hr className={plan.featured ? "border-white/10" : "border-[#E8EBF0]"} />

              {/* Perks */}
              <ul className="flex flex-col gap-3">
                {plan.perks.map(perk => (
                  <li key={perk} className="flex items-center gap-3">
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                      plan.featured ? "bg-[#FF8000]" : "bg-[#061D3D]"
                    }`}>
                      <Check size={11} strokeWidth={2.8} className="text-white" />
                    </span>
                    <span className={`text-[14px] ${plan.featured ? "text-white/80" : "text-[#3D4F64]"}`}>
                      {perk}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={`https://wa.me/${WA}?text=${encodeURIComponent(`Olá! Tenho interesse em assinar o ${plan.name} do ConnectCar System.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-auto w-full inline-flex items-center justify-center gap-2 font-bold text-[15px] rounded-full px-8 py-4 transition-all duration-200 cursor-pointer ${
                  plan.featured
                    ? "bg-[#FF8000] text-white hover:bg-[#CC6600] shadow-lg shadow-orange-500/30"
                    : "bg-[#061D3D] text-white hover:bg-[#0F2D52]"
                }`}
              >
                Assinar Agora
                <ArrowRight size={17} strokeWidth={2.5} />
              </a>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-[13px] text-[#7A8CA3] mt-10 reveal delay-2">
          Todos os planos incluem suporte, onboarding e acesso completo à plataforma.
        </p>

      </div>
    </section>
  );
}
