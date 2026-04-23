"use client";

import { useEffect, useState } from "react";
import { X, ArrowRight } from "lucide-react";

const WA_NUMBER = "5567933774370";

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

const selectClass =
  "w-full px-4 py-3 text-[14px] text-[#061D3D] bg-white border-[1.5px] border-[#BCC5D3] rounded-xl outline-none appearance-none cursor-pointer hover:border-[#061D3D] focus:border-[#FF8000] transition-colors duration-150 placeholder:text-[#7A8CA3]";

export default function PromoPopup() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [nome, setNome] = useState("");
  const [desafio, setDesafio] = useState("");
  const [tamanho, setTamanho] = useState("");

  useEffect(() => {
    setMounted(true);
    const t = setTimeout(() => setVisible(true), 5000);
    return () => clearTimeout(t);
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Olá! Quero testar o ConnectCar System gratuitamente por 15 dias.\n\n` +
      `Nome: ${nome}\n` +
      `Meu maior desafio: ${desafio || "não informado"}\n` +
      `Tamanho do time: ${tamanho || "não informado"}`
    );
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, "_blank");
  }

  if (!mounted) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[9998] bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          visible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setVisible(false)}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4 pointer-events-none">
        <div
          className={`pointer-events-auto bg-white rounded-[24px] shadow-[0_24px_80px_rgba(6,29,61,0.2)] w-full max-w-[480px] overflow-hidden transition-all duration-500 ease-out ${
            visible
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 translate-y-6"
          }`}
        >
          {/* Fechar */}
          <button
            onClick={() => setVisible(false)}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#F5F6F8] flex items-center justify-center text-[#7A8CA3] hover:text-[#061D3D] hover:bg-[#E8EBF0] transition-all cursor-pointer z-10"
            aria-label="Fechar"
          >
            <X size={16} />
          </button>

          <div className="px-8 pt-8 pb-8 flex flex-col gap-6">

            {/* Header */}
            <div className="text-center">
              <p className="text-[11px] font-semibold tracking-[2.5px] uppercase text-[#FF8000] mb-2">
                Teste Gratuito
              </p>
              <h2 className="text-[clamp(22px,3vw,28px)] font-bold leading-[1.2] tracking-[-0.5px] text-[#061D3D] mb-2">
                Comece seu teste<br />gratuito de 15 dias
              </h2>
              <p className="text-[13px] text-[#3D4F64] leading-[1.6]">
                Sem cartão de crédito. Um especialista configura tudo com você.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">

              {/* Pergunta 1 — Nome */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="popup-nome" className="text-[12px] font-semibold text-[#061D3D] tracking-wide">
                  Qual é o seu nome?
                </label>
                <input
                  id="popup-nome"
                  type="text"
                  value={nome}
                  onChange={e => setNome(e.target.value)}
                  placeholder="Seu nome"
                  required
                  className={selectClass}
                />
              </div>

              {/* Pergunta 2 — Desafio */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-semibold text-[#061D3D] tracking-wide">
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
                    <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                      <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Pergunta 3 — Tamanho do time */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-semibold text-[#061D3D] tracking-wide">
                  Quantos vendedores tem no seu time?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {tamanhos.map(t => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTamanho(t)}
                      className={`px-3 py-2.5 rounded-xl border-[1.5px] text-[13px] font-medium text-left transition-all duration-150 cursor-pointer ${
                        tamanho === t
                          ? "border-[#FF8000] bg-orange-50 text-[#FF8000]"
                          : "border-[#BCC5D3] text-[#3D4F64] hover:border-[#061D3D]"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#FF8000] text-white font-bold text-[15px] rounded-full px-8 py-4 hover:bg-[#CC6600] transition-colors duration-200 cursor-pointer shadow-lg shadow-orange-500/20"
              >
                Falar com Especialista
                <ArrowRight size={17} strokeWidth={2.5} />
              </button>

              <p className="text-[11px] text-[#7A8CA3] text-center -mt-2">
                15 dias grátis · Sem cartão · Onboarding incluso
              </p>
            </form>

            <button
              onClick={() => setVisible(false)}
              className="text-[12px] text-[#7A8CA3] hover:text-[#3D4F64] transition-colors cursor-pointer text-center -mt-2"
            >
              Agora não, obrigado
            </button>

          </div>
        </div>
      </div>
    </>
  );
}
