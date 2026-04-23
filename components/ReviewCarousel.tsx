import { ArrowRight, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Antes perdíamos leads por falta de organização. Hoje todo contato do WhatsApp entra automaticamente no funil e vai direto para o vendedor certo. Nossa conversão triplicou em 3 meses.",
    name: "Carlos Mendonça",
    role: "Gerente Comercial, Grupo Mendonça Veículos",
  },
  {
    quote: "A integração com FIPE em tempo real nos economizou horas toda semana. O estoque está sempre precificado corretamente e publicado automaticamente no iCarros e UsadosBr.",
    name: "Fernanda Lima",
    role: "Diretora, Lima Motors",
  },
  {
    quote: "Emitir NF-e direto no CRM foi um divisor de águas. Antes usávamos três sistemas diferentes. Hoje é tudo no ConnectCar System e minha equipe financeira agradece.",
    name: "Roberto Alves",
    role: "Sócio-fundador, Alves Veículos",
  },
  {
    quote: "Os vendedores adoraram o WhatsApp integrado. Eles atendem pelo celular e tudo fica registrado automaticamente no histórico da negociação. Nada se perde.",
    name: "Patricia Santos",
    role: "Coordenadora de Vendas, AutoPrime",
  },
  {
    quote: "O dashboard de funil por vendedor nos deu visibilidade total da equipe. Sabemos exatamente quem está performando e onde precisamos atuar. Gestão de verdade.",
    name: "Marcos Ferreira",
    role: "CEO, Ferreira Automóveis",
  },
];

const portais = ["iCarros", "UsadosBr", "Shopcar", "Autoline", "PlugNotas", "Asaas"];

export default function ReviewCarousel() {
  return (
    <section className="grid-pattern-warm py-20">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Clutch row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-10 reveal">
          <div className="flex flex-col gap-2">
            <p className="text-[13px] text-[#3D4F64]">Avaliado no</p>
            <p className="text-[42px] font-bold text-[#061D3D] leading-none" style={{fontFamily: "Georgia, serif"}}>Clutch</p>
            <div className="flex items-center gap-1.5 mt-1">
              {[0,1,2,3,4].map(i => (
                <Star key={i} size={18} fill="#FF8000" stroke="none" />
              ))}
              <span className="text-[14px] text-[#3D4F64] ml-1">(48+ Avaliações)</span>
            </div>
          </div>
          <button className="inline-flex items-center gap-2 bg-transparent text-[#061D3D] border-[1.5px] border-[#061D3D] rounded-full px-6 py-3 text-[15px] font-semibold cursor-pointer hover:bg-white transition-colors duration-200 self-start sm:self-center">
            Ver Todas as Avaliações
            <ArrowRight size={15} strokeWidth={2.5} />
          </button>
        </div>

        {/* Partner logos row */}
        <div className="flex gap-3 flex-wrap mb-12 reveal delay-1">
          {portais.map(name => (
            <span key={name} className="text-[13px] font-semibold text-[#3D4F64] border border-[#BCC5D3] bg-white rounded-lg px-3 py-1.5">
              {name}
            </span>
          ))}
        </div>

        {/* Testimonial carousel */}
        <div
          className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
          style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
          role="list"
          aria-label="Depoimentos de clientes"
        >
          {testimonials.map((t, i) => (
            <article
              key={i}
              className="bg-white border-[1.5px] border-[#061D3D] rounded-[16px] p-7 min-w-[300px] max-w-[320px] flex flex-col gap-4 flex-shrink-0"
              style={{ scrollSnapAlign: "start" }}
              role="listitem"
            >
              <p className="text-[15px] text-[#0F2D52] leading-[1.65]">
                &ldquo;{t.quote}&rdquo;
              </p>
              <hr className="border-[#BCC5D3]" />
              <div>
                <p className="text-[14px] font-bold text-[#061D3D]">{t.name}</p>
                <p className="text-[13px] text-[#3D4F64] mt-0.5">{t.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
