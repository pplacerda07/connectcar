"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "O ConnectCar System é, sem dúvida, o melhor investimento que fizemos nos últimos anos. Saímos de um caos de planilhas e WhatsApp manual para um processo 100% rastreado. Em 90 dias, nossa taxa de conversão de leads subiu 3x. Os gerentes têm visibilidade total da equipe e conseguimos abrir duas novas unidades sem contratar mais pessoas de suporte.",
    name: "Eduardo Costa",
    role: "Diretor Comercial",
    company: "Grupo Costa Automóveis",
    initial: "EC",
  },
  {
    quote:
      "Nunca imaginei que um CRM pudesse ser tão completo para o segmento automotivo. WhatsApp integrado, FIPE em tempo real, NF-e com um clique, publicação automática nos portais: cobre 100% do que precisamos. A migração foi tranquila e o suporte é excepcional.",
    name: "Juliana Rocha",
    role: "CEO",
    company: "Rocha Premium Veículos",
    initial: "JR",
  },
  {
    quote:
      "Gerenciar uma rede com 5 concessionárias era um pesadelo antes do ConnectCar System. Agora temos visão consolidada de todas as unidades, com dados em tempo real. A funcionalidade multi-tenant é exatamente o que grupos e redes precisam para operar de forma escalável.",
    name: "André Batista",
    role: "Sócio-Diretor",
    company: "Grupo Batista Motors",
    initial: "AB",
  },
];

export default function TestimonialFull() {
  const [idx, setIdx] = useState(0);
  const t = testimonials[idx];

  return (
    <section className="grid-pattern-warm py-24">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14 reveal">
          <p className="text-[13px] font-semibold tracking-[2.5px] uppercase text-[#FF8000] mb-4">
            Depoimentos
          </p>
          <h2 className="text-[clamp(28px,4vw,48px)] font-bold leading-[1.15] tracking-[-1px] text-[#061D3D]">
            O que nossos clientes dizem!
          </h2>
          <p className="text-[16px] text-[#3D4F64] mt-4 max-w-[480px] mx-auto leading-[1.65]">
            Concessionárias e revendas que transformaram sua operação com o ConnectCar System.
          </p>
        </div>

        {/* Featured card */}
        <div className="bg-white border-[1.5px] border-[#061D3D] rounded-[20px] p-10 md:p-14 max-w-[800px] mx-auto relative reveal delay-1">
          {/* Quote decoration */}
          <div className="absolute top-8 right-8 text-[80px] text-[#EDF0F4] font-serif leading-none select-none" aria-hidden="true">
            &rdquo;
          </div>

          <p className="text-[18px] text-[#0F2D52] leading-[1.7] relative z-10">
            &ldquo;{t.quote}&rdquo;
          </p>

          {/* Divider */}
          <hr className="border-[#BCC5D3] my-8" />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Avatar */}
              <div className="w-14 h-14 rounded-full border-2 border-[#061D3D] bg-[#EDF0F4] flex items-center justify-center">
                <span className="text-[18px] font-bold text-[#061D3D]" aria-hidden="true">{t.initial}</span>
              </div>
              <div>
                <div className="inline-block bg-[#061D3D] text-white text-[13px] font-semibold px-3 py-1 rounded-md mb-1">
                  {t.name}
                </div>
                <p className="text-[13px] text-[#FF8000] font-medium">{t.role} · {t.company}</p>
              </div>
            </div>

            {/* Nav arrows */}
            <div className="flex gap-2">
              <button
                onClick={() => setIdx((idx - 1 + testimonials.length) % testimonials.length)}
                aria-label="Depoimento anterior"
                className="w-10 h-10 rounded-full border-[1.5px] border-[#061D3D] flex items-center justify-center cursor-pointer hover:bg-[#EDF0F4] transition-colors duration-200"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => setIdx((idx + 1) % testimonials.length)}
                aria-label="Próximo depoimento"
                className="w-10 h-10 rounded-full border-[1.5px] border-[#061D3D] flex items-center justify-center cursor-pointer hover:bg-[#EDF0F4] transition-colors duration-200"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Dot indicator */}
          <div className="flex gap-2 mt-6 justify-center">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Ir para depoimento ${i + 1}`}
                className={`w-2 h-2 rounded-full cursor-pointer transition-colors duration-200 ${i === idx ? "bg-[#FF8000]" : "bg-[#BCC5D3]"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
