"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: "/imagens_do_sistema/depoimentos/depoimento principal.png", alt: "Depoimento principal" },
  { src: "/imagens_do_sistema/depoimentos/depoimento 02.png",        alt: "Depoimento 02" },
  { src: "/imagens_do_sistema/depoimentos/depoimento 03.png",        alt: "Depoimento 03" },
];

export default function TestimonialsCarousel() {
  const [active, setActive] = useState(0);

  const prev = () => setActive(i => (i - 1 + images.length) % images.length);
  const next = () => setActive(i => (i + 1) % images.length);

  /* índices dos dois cards laterais */
  const leftIdx  = (active - 1 + images.length) % images.length;
  const rightIdx = (active + 1) % images.length;

  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-[13px] font-semibold tracking-[2.5px] uppercase text-[#FF8000] mb-3">
            Depoimentos
          </p>
          <h2 className="text-[clamp(28px,3.5vw,46px)] font-bold leading-[1.15] tracking-[-1px] text-[#061D3D]">
            O que nossos clientes falam de nós
          </h2>
        </div>

        {/* Carrossel */}
        <div className="reveal delay-1">
          <div className="flex items-center justify-center gap-5 lg:gap-8">

            {/* Seta esquerda */}
            <button
              onClick={prev}
              aria-label="Anterior"
              className="flex-shrink-0 w-10 h-10 rounded-full border-[1.5px] border-[#BCC5D3] flex items-center justify-center text-[#061D3D] hover:border-[#061D3D] hover:bg-[#EDF0F4] transition-all cursor-pointer"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Cards */}
            <div className="flex items-center gap-4 lg:gap-6">

              {/* Card lateral esquerdo */}
              <div
                className="hidden sm:block flex-shrink-0 cursor-pointer transition-all duration-300 opacity-50 hover:opacity-70 scale-90"
                onClick={prev}
              >
                <div className="rounded-[16px] overflow-hidden shadow-md w-[200px] lg:w-[260px]">
                  <Image
                    src={images[leftIdx].src}
                    alt={images[leftIdx].alt}
                    width={520}
                    height={520}
                    className="w-full h-auto block"
                  />
                </div>
              </div>

              {/* Card central — destaque */}
              <div className="flex-shrink-0 transition-all duration-300 scale-100">
                <div className="rounded-[20px] overflow-hidden shadow-[0_16px_60px_rgba(6,29,61,0.15)] border-[2px] border-[#FF8000]/30 w-[280px] sm:w-[340px] lg:w-[420px]">
                  <Image
                    src={images[active].src}
                    alt={images[active].alt}
                    width={840}
                    height={840}
                    className="w-full h-auto block"
                    priority
                  />
                </div>
              </div>

              {/* Card lateral direito */}
              <div
                className="hidden sm:block flex-shrink-0 cursor-pointer transition-all duration-300 opacity-50 hover:opacity-70 scale-90"
                onClick={next}
              >
                <div className="rounded-[16px] overflow-hidden shadow-md w-[200px] lg:w-[260px]">
                  <Image
                    src={images[rightIdx].src}
                    alt={images[rightIdx].alt}
                    width={520}
                    height={520}
                    className="w-full h-auto block"
                  />
                </div>
              </div>

            </div>

            {/* Seta direita */}
            <button
              onClick={next}
              aria-label="Próximo"
              className="flex-shrink-0 w-10 h-10 rounded-full border-[1.5px] border-[#BCC5D3] flex items-center justify-center text-[#061D3D] hover:border-[#061D3D] hover:bg-[#EDF0F4] transition-all cursor-pointer"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Ir para depoimento ${i + 1}`}
                className={`rounded-full transition-all duration-200 cursor-pointer ${
                  i === active
                    ? "w-6 h-2 bg-[#FF8000]"
                    : "w-2 h-2 bg-[#BCC5D3]"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
