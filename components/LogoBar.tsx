import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function LogoBar() {
  return (
    <section className="bg-[#E8EBF0] pt-10 pb-6">
      <div className="max-w-[1200px] mx-auto px-6 mb-4">
        {/* Headline row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 reveal">
          <h2 className="text-[clamp(22px,3vw,32px)] font-bold text-[#061D3D] leading-tight">
            Mais de{" "}
            <span className="text-[#FF8000]">300</span>
            {" "}concessionárias usam o ConnectCar System
          </h2>
          <button className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#061D3D] hover:text-[#FF8000] transition-colors cursor-pointer whitespace-nowrap">
            Saiba Mais <ArrowRight size={15} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* Logos estáticas — sem esteira */}
      <div className="w-full overflow-hidden" style={{ height: 78 }}>
        <Image
          src="/imagens_do_sistema/fileira_de_logos.svg"
          alt="Logos dos clientes ConnectCar System"
          width={1400}
          height={120}
          className="w-full h-auto"
          style={{ marginTop: -12 }}
        />
      </div>
    </section>
  );
}
