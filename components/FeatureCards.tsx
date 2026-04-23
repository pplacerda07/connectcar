import { MessageCircle, GitBranch, Package } from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    accentColor: "#25D366",
    title: "WhatsApp Nativo no CRM",
    description: "Atenda leads no CRM via WhatsApp. Cada vendedor com seu número, criação automática de lead por palavra-chave.",
    items: ["Lead criado automaticamente", "Histórico completo por negociação"],
  },
  {
    icon: GitBranch,
    accentColor: "#FF8000",
    title: "Funil de Vendas Completo",
    description: "Do lead à entrega, rastreado em cada etapa. Test drive, aprovações e fechamento num só lugar.",
    items: ["Aprovação por tipo de negócio", "Test drive na movimentação"],
  },
  {
    icon: Package,
    accentColor: "#061D3D",
    title: "Gestão de Estoque Completa",
    description: "Cadastro completo com publicação automática nos principais portais. Transferências entre unidades e importação em massa.",
    items: ["Transferência entre unidades", "Importação em massa via planilha"],
  },
];

function OrbitalDiagram() {
  const cx = 210, cy = 210;
  const R1 = 108; // main features ring
  const R2 = 160; // detail ring

  const pos = (r: number, angleDeg: number) => {
    const rad = (angleDeg * Math.PI) / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  };

  const mainPills = [
    { a: 270, bg: "#25D366", text: "white", label: "WhatsApp", w: 76 },
    { a: 30,  bg: "#FF8000", text: "white", label: "Funil Vendas", w: 88 },
    { a: 150, bg: "#061D3D", text: "white", label: "Estoque", w: 66 },
  ];

  const detailPills = [
    { a: 300, label: "Lead auto" },
    { a: 0,   label: "Test drive" },
    { a: 60,  label: "Aprovação" },
    { a: 120, label: "Multi-portal" },
    { a: 180, label: "Transferência" },
    { a: 240, label: "Histórico" },
  ];

  return (
    <svg viewBox="0 0 420 420" className="w-full mx-auto" aria-hidden="true">
      {/* Dashed rings */}
      {[62, R1, R2].map((r, i) => (
        <circle key={i} cx={cx} cy={cy} r={r}
          fill="none" stroke="#BCC5D3" strokeWidth="1.2" strokeDasharray="5 5" />
      ))}

      {/* Center glow ring */}
      <circle cx={cx} cy={cy} r="52" fill="#EDF0F4" />
      <circle cx={cx} cy={cy} r="44" fill="#061D3D" />
      <text x={cx} y={cy - 5} textAnchor="middle" fill="#FF8000"
        fontSize="11" fontWeight="800" fontFamily="Barlow, sans-serif">Connect</text>
      <text x={cx} y={cy + 10} textAnchor="middle" fill="white"
        fontSize="10" fontWeight="700" fontFamily="Barlow, sans-serif">Car</text>

      {/* Main feature pills — inner ring */}
      {mainPills.map((p, i) => {
        const { x, y } = pos(R1, p.a);
        return (
          <g key={i}>
            <rect x={x - p.w / 2} y={y - 12} width={p.w} height={24} rx={12}
              fill={p.bg} />
            <text x={x} y={y + 4} textAnchor="middle" fill={p.text}
              fontSize="10" fontWeight="700" fontFamily="Barlow, sans-serif">
              {p.label}
            </text>
          </g>
        );
      })}

      {/* Detail pills — outer ring */}
      {detailPills.map((d, i) => {
        const { x, y } = pos(R2, d.a);
        const w = 80;
        return (
          <g key={i}>
            <rect x={x - w / 2} y={y - 10} width={w} height={20} rx={10}
              fill="white" stroke="#BCC5D3" strokeWidth="1" />
            <text x={x} y={y + 4} textAnchor="middle" fill="#3D4F64"
              fontSize="8.5" fontWeight="600" fontFamily="Barlow, sans-serif">
              {d.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const Icon = feature.icon;
  return (
    <div
      className="bg-[#F5F6F8] rounded-[14px] p-5 border-l-[3px]"
      style={{ borderLeftColor: feature.accentColor }}
    >
      <div className="flex items-center gap-2 mb-2">
        <Icon size={16} className="text-[#FF8000]" strokeWidth={2} />
        <h3 className="text-[16px] font-bold text-[#061D3D]">{feature.title}</h3>
      </div>
      <p className="text-[13px] text-[#3D4F64] leading-[1.65] mb-3">{feature.description}</p>
      <div className="flex flex-col gap-1.5">
        {feature.items.map(item => (
          <span key={item} className="flex items-center gap-2 text-[12px] text-[#3D4F64]">
            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: feature.accentColor }} />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function FeatureCards() {
  return (
    <section id="recursos" className="bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div className="mb-14 reveal text-center">
          <p className="text-[13px] font-semibold tracking-[2.5px] uppercase text-[#FF8000] mb-3">
            Recursos
          </p>
          <h2 className="text-[clamp(28px,3.5vw,46px)] font-bold leading-[1.15] tracking-[-1px] text-[#061D3D] max-w-[640px] mx-auto">
            Tudo que sua operação precisa,<br />integrado em um sistema.
          </h2>
        </div>

        {/* Two-column layout: orbital left, cards right */}
        <div className="grid lg:grid-cols-[3fr_2fr] gap-10 lg:gap-16 items-center">

          {/* LEFT: Orbital diagram */}
          <div className="reveal order-2 lg:order-1">
            <OrbitalDiagram />
          </div>

          {/* RIGHT: Feature cards */}
          <div className="flex flex-col gap-4 reveal delay-2 order-1 lg:order-2">
            {features.map((f, i) => (
              <FeatureCard key={f.title} feature={f} index={i} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
