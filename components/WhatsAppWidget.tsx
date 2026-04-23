"use client";

import { useState, useEffect } from "react";
import { X, ArrowRight } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5567933774370?text=Olá%21+Tenho+interesse+no+ConnectCar+System.";

function WhatsAppIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(false);

  /* mostra o balão de notificação 3s após carregar */
  useEffect(() => {
    const t = setTimeout(() => setShowBubble(true), 3000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3">

      {/* Popup de chat */}
      <div
        className={`transition-all duration-300 ease-out origin-bottom-right ${
          open
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-95 translate-y-4 pointer-events-none"
        }`}
      >
        <div className="bg-white rounded-[16px] shadow-[0_8px_48px_rgba(0,0,0,0.18)] w-[300px] overflow-hidden">

          {/* Header verde */}
          <div className="bg-[#25D366] px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#25D366]">
                <WhatsAppIcon size={22} />
              </div>
              <div>
                <p className="text-white font-bold text-[15px] leading-tight">ConnectCar System</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-white/70 animate-pulse" />
                  <p className="text-white/80 text-[12px]">Online agora</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/70 hover:text-white cursor-pointer transition-colors"
              aria-label="Fechar chat"
            >
              <X size={18} />
            </button>
          </div>

          {/* Área de chat */}
          <div className="bg-[#ECE5DD] px-4 py-5 flex flex-col gap-4">

            {/* Balão de mensagem */}
            <div className="flex flex-col gap-1">
              <div className="bg-white rounded-[12px] rounded-tl-none px-4 py-3 shadow-sm self-start max-w-[240px]">
                <p className="text-[14px] text-[#1A1A1A] leading-[1.55]">
                  Olá! Precisa de ajuda com o{" "}
                  <strong>ConnectCar System</strong>?{" "}
                  Fale com nossa equipe agora.
                </p>
                <p className="text-[10px] text-[#999] mt-1.5 text-right">agora</p>
              </div>
            </div>

            {/* Botão de ação */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white font-semibold text-[14px] rounded-full px-5 py-3 inline-flex items-center gap-2 self-start shadow-sm hover:bg-[#1ebe5d] transition-colors duration-200 cursor-pointer"
            >
              Iniciar conversa
              <ArrowRight size={15} strokeWidth={2.5} />
            </a>

            <p className="text-[10px] text-[#888] text-center">
              Ao clicar você será redirecionado ao WhatsApp
            </p>
          </div>
        </div>
      </div>

      {/* Balão flutuante antes de abrir */}
      {!open && showBubble && (
        <div className="bg-white rounded-[12px] rounded-br-none shadow-[0_4px_20px_rgba(0,0,0,0.12)] px-4 py-3 max-w-[220px] text-[13px] text-[#1A1A1A] leading-[1.5] animate-bounce-once">
          Precisa de ajuda com o <strong>ConnectCar</strong>?
        </div>
      )}

      {/* Botão flutuante */}
      <button
        onClick={() => { setOpen(!open); setShowBubble(false); }}
        className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_4px_24px_rgba(37,211,102,0.45)] hover:bg-[#1ebe5d] hover:scale-110 transition-all duration-200 cursor-pointer text-white"
        aria-label="Abrir chat WhatsApp"
      >
        {open ? <X size={24} /> : <WhatsAppIcon size={26} />}
      </button>

    </div>
  );
}
