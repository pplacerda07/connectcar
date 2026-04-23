"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

const WHATSAPP_NUMBER = "5511999999999";

const desafios = [
  "Perco leads por falta de acompanhamento",
  "Dificuldade em controlar minha equipe",
  "Processos financeiros desorganizados",
  "Não tenho visibilidade do funil de vendas",
  "Comunicação ruim com clientes",
];

const tamanhos = [
  "Só eu mesmo",
  "2 a 5 vendedores",
  "6 a 15 vendedores",
  "Mais de 15 vendedores",
];

export default function CTASection() {
  const [desafio, setDesafio] = useState("");
  const [tamanho, setTamanho] = useState("");
  const [telefone, setTelefone] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Olá! Quero testar o ConnectCar System gratuitamente por 15 dias.\n\n` +
      `Meu maior desafio: ${desafio || "não informado"}\n` +
      `Tamanho do time: ${tamanho || "não informado"}\n` +
      `Meu número: ${telefone}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  }

  const selectClass =
    "w-full px-4 py-3.5 text-[15px] text-[#061D3D] bg-white border-[1.5px] border-[#BCC5D3] rounded-xl outline-none appearance-none cursor-pointer hover:border-[#061D3D] focus:border-[#FF8000] transition-colors duration-150 placeholder:text-[#7A8CA3]";

  return (
    <section id="contato" className="bg-brand-tint py-24 relative overflow-hidden">

      <div className="relative z-10 max-w-[520px] mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-10 reveal">
          <p className="text-[13px] font-semibold tracking-[2.5px] uppercase text-[#FF8000] mb-3">
            Teste Gratuito
          </p>
          <h2 className="text-[clamp(28px,4vw,40px)] font-bold leading-[1.2] tracking-[-1px] text-[#061D3D] mb-3">
            Comece seu teste<br />gratuito de 15 dias
          </h2>
          <p className="text-[15px] text-[#3D4F64] leading-[1.65]">
            Sem cartão de crédito. Um especialista vai configurar tudo com você.
          </p>
        </div>

        {/* Form card */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-[24px] shadow-[0_16px_60px_rgba(6,29,61,0.1)] border border-[#E8EBF0] px-8 py-8 flex flex-col gap-6 reveal delay-1"
          aria-label="Formulário de contato"
        >
          {/* Pergunta 1 */}
          <div className="flex flex-col gap-2">
            <label className="text-[13px] font-semibold text-[#061D3D] tracking-wide">
              Qual é o maior desafio na sua operação?
            </label>
            <div className="relative">
              <select
                value={desafio}
                onChange={e => setDesafio(e.target.value)}
                required
                className={selectClass}
              >
                <option value="" disabled>Selecione uma opção…</option>
                {desafios.map(d => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#7A8CA3]">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Pergunta 2 */}
          <div className="flex flex-col gap-2">
            <label className="text-[13px] font-semibold text-[#061D3D] tracking-wide">
              Quantos vendedores tem no seu time?
            </label>
            <div className="grid grid-cols-2 gap-2">
              {tamanhos.map(t => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTamanho(t)}
                  className={`px-3 py-2.5 rounded-xl border-[1.5px] text-[14px] font-medium text-left transition-all duration-150 cursor-pointer ${
                    tamanho === t
                      ? "border-[#FF8000] bg-[#FF8000]/8 text-[#FF8000]"
                      : "border-[#BCC5D3] text-[#3D4F64] hover:border-[#061D3D]"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Pergunta 3 — Número */}
          <div className="flex flex-col gap-2">
            <label htmlFor="telefone" className="text-[13px] font-semibold text-[#061D3D] tracking-wide">
              Qual é o seu WhatsApp?
            </label>
            <input
              id="telefone"
              type="tel"
              value={telefone}
              onChange={e => setTelefone(e.target.value)}
              placeholder="(11) 99999-9999"
              required
              className={selectClass}
            />
          </div>

          {/* CTA */}
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 bg-[#FF8000] text-white font-bold text-[16px] rounded-full px-8 py-4 hover:bg-[#CC6600] transition-colors duration-200 cursor-pointer shadow-lg shadow-orange-500/20 mt-1"
          >
            Falar com Especialista
            <ArrowRight size={18} strokeWidth={2.5} />
          </button>

          <p className="text-[12px] text-[#7A8CA3] text-center -mt-2">
            15 dias grátis · Sem cartão · Onboarding incluso
          </p>
        </form>

      </div>
    </section>
  );
}
