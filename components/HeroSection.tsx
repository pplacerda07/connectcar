"use client";

import { ArrowRight, MessageCircle, Info, BarChart2, Users, FileText, Bell, Car } from "lucide-react";

const floatingIcons = [
  { icon: BarChart2, top: "28%", left: "12%",  rotate: "-12deg", size: 18 },
  { icon: Users,     top: "55%", left: "10%",  rotate: "8deg",   size: 16 },
  { icon: FileText,  top: "28%", right: "12%", rotate: "10deg",  size: 17 },
  { icon: Bell,      top: "55%", right: "10%", rotate: "-8deg",  size: 16 },
];

export default function HeroSection() {
  return (
    <section id="home" className="pt-[160px] lg:pt-[200px] pb-16 lg:pb-24 bg-white relative overflow-hidden">

      {/* Floating CRM icons */}
      {floatingIcons.map(({ icon: Icon, top, left, right, rotate, size }, i) => (
        <div
          key={i}
          aria-hidden="true"
          className="absolute hidden lg:flex w-11 h-11 border border-[#BCC5D3] rounded-[12px] bg-white shadow-sm items-center justify-center pointer-events-none"
          style={{ top, left, right, transform: `rotate(${rotate})`, opacity: 0.7 }}
        >
          <Icon size={size} className="text-[#3D4F64]" strokeWidth={1.5} />
        </div>
      ))}

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-[800px] mx-auto gap-6 reveal">

          {/* Car icon + Label */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-11 h-11 border border-[#BCC5D3] rounded-[12px] bg-white shadow-sm flex items-center justify-center">
              <Car size={18} className="text-[#3D4F64]" strokeWidth={1.5} />
            </div>
            <p className="text-[13px] font-semibold tracking-[2.5px] uppercase text-[#FF8000]">
              CRM Automotivo ConnectCar
            </p>
          </div>

          {/* Heading */}
          <h1 className="text-[clamp(40px,5vw,72px)] font-bold leading-[1.05] tracking-[-1.5px] text-[#061D3D]">
            Nasceu no chão de loja.<br />
            Evoluiu para a palma<br className="hidden sm:block" /> da sua mão.
          </h1>

          {/* Body */}
          <p className="text-[17px] md:text-[18px] text-[#3D4F64] leading-[1.6] max-w-[600px] mx-auto">
            Processos claros são o que separam lojas que sobrevivem de lojas que crescem. CRM com controle financeiro e nota fiscal integrados, sua operação finalmente funciona como deveria.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
            <a
              href="https://wa.me/5567933774370?text=Olá!+Gostaria+de+solicitar+uma+demo+do+ConnectCar+System."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#FF8000] text-white rounded-full px-8 py-4 text-[16px] font-semibold cursor-pointer hover:bg-[#CC6600] transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-orange-500/20 w-full sm:w-auto"
            >
              Solicitar Demo
              <ArrowRight size={18} strokeWidth={2.5} />
            </a>

            <a
              href="https://wa.me/5567933774370?text=Olá!+Gostaria+de+falar+com+um+especialista+do+ConnectCar+System."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white text-[#061D3D] border-[1.5px] border-[#BCC5D3] rounded-full px-8 py-4 text-[16px] font-semibold cursor-pointer hover:border-[#061D3D] hover:bg-[#EDF0F4] transition-all duration-200 w-full sm:w-auto"
            >
              <MessageCircle size={18} strokeWidth={2} />
              Falar com Especialista
            </a>
          </div>

          {/* Helper */}
          <div className="flex items-center gap-2 mt-2 text-[#7A8CA3]">
            <Info size={15} />
            <p className="text-[13px] font-medium">Role para baixo e conheça todos os recursos</p>
          </div>
        </div>
      </div>
    </section>
  );
}
