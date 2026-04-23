const tabs = [
  {
    label: "Venda Mais",
    barClass: "bg-[#FF8000]",
    description:
      "Funil visual completo do lead até a entrega. Cada vendedor acompanha seus negócios em tempo real e recebe alertas instantâneos quando um cliente entra em contato pelo WhatsApp, sem perder nenhuma oportunidade.",
    active: true,
  },
  {
    label: "Gerencie Melhor",
    barStyle: { background: "linear-gradient(90deg, #FF8000, #CC6600)" },
    description:
      "Controle de estoque com tabela FIPE em tempo real, publicação automática nos maiores portais do Brasil (iCarros, UsadosBr, Shopcar, Autoline) e avaliação de veículos com questionários dinâmicos.",
    active: false,
  },
  {
    label: "Cresça com Dados",
    barClass: "bg-[#BCC5D3]",
    description:
      "DRE integrado, comissionamento configurável por tipo de negociação, notas fiscais automáticas via PlugNotas e relatórios exportáveis. Para tomar decisões baseadas em dados reais, não em achismos.",
    active: false,
  },
];

export default function TabProgress() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {tabs.map((tab, i) => (
            <div
              key={tab.label}
              className={`flex flex-col gap-4 reveal delay-${i + 1} cursor-default`}
            >
              {/* Progress bar */}
              <div
                className={`h-[4px] rounded-full ${tab.barClass ?? ""}`}
                style={tab.barStyle}
              />

              <h3 className="text-[20px] font-bold text-[#061D3D] leading-[1.3]">
                {tab.label}
              </h3>
              <p className="text-[15px] text-[#3D4F64] leading-[1.65]">
                {tab.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
