"use client";

import Image from "next/image";

const navLinks = [
  { label: "Home",      href: "#" },
  { label: "Produto",   href: "#produto" },
  { label: "Recursos",  href: "#recursos" },
  { label: "Preços",    href: "#precos"  },
  { label: "Contato",   href: "#contato" },
];

const legalLinks = [
  { label: "Política de Privacidade", href: "#" },
  { label: "Termos de Uso",           href: "#" },
];

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#BCC5D3] py-16">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Top row */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8 mb-10">

          {/* Logo + tagline */}
          <div className="flex flex-col gap-4 max-w-[400px]">
            <Image
              src="/logoconnectcar/logo_horzontal_maior.svg"
              alt="ConnectCar System"
              width={220}
              height={52}
              className="h-[52px] w-auto"
            />
            <p className="text-[15px] text-[#3D4F64] leading-[1.65]">
              A plataforma CRM completa para concessionárias e revendas de veículos. Do lead à entrega das chaves, tudo integrado, rastreado e em tempo real.
            </p>
          </div>

          {/* Nav + Social */}
          <div className="flex flex-col gap-6">
            {/* Nav links */}
            <nav className="flex flex-wrap gap-x-6 gap-y-2">
              {navLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="text-[15px] text-[#3D4F64] hover:text-[#FF8000] transition-colors duration-150 cursor-pointer"
                >
                  {label}
                </a>
              ))}
            </nav>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {[
                { icon: <InstagramIcon />, label: "Instagram" },
                { icon: <FacebookIcon />,  label: "Facebook"  },
                { icon: <LinkedInIcon />,  label: "LinkedIn"  },
              ].map(({ icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="w-11 h-11 border-[1.5px] border-[#061D3D] rounded-[10px] flex items-center justify-center text-[#061D3D] cursor-pointer hover:bg-[#FF8000] hover:border-[#FF8000] hover:text-white transition-all duration-200"
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-[#BCC5D3] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[13px] text-[#7A8CA3]">© {new Date().getFullYear()} ConnectCar System. Todos os direitos reservados.</p>
          <div className="flex gap-5">
            {legalLinks.map(({ label, href }) => (
              <a key={label} href={href} className="text-[13px] text-[#7A8CA3] hover:text-[#FF8000] transition-colors cursor-pointer">
                {label}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
