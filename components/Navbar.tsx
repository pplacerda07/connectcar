"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navItems = [
  { label: "Home",     href: "#"        },
  { label: "Produto",  href: "#produto" },
  { label: "Recursos", href: "#recursos"},
  { label: "Preços",   href: "#precos"  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
      <div className="max-w-[1200px] mx-auto px-6 h-[88px] flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center cursor-pointer" aria-label="ConnectCar System home">
          <Image
            src="/logoconnectcar/logo_horzontal_maior.svg"
            alt="ConnectCar System"
            width={360}
            height={84}
            className="h-[84px] w-auto"
            priority
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setActive(label)}
              className={`text-[15px] font-medium text-[#061D3D] transition-all duration-200 cursor-pointer px-5 py-2 rounded-full
                ${active === label
                  ? "border border-[#061D3D]"
                  : "hover:bg-[#EDF0F4]"
                }`}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <button className="bg-[#FF8000] text-white font-semibold text-[15px] px-7 py-3 rounded-full cursor-pointer transition-colors duration-200 hover:bg-[#CC6600]">
            Solicitar Demo
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-[#EDF0F4] transition-colors cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[#BCC5D3] bg-white px-6 py-4 flex flex-col gap-2">
          {navItems.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => { setActive(label); setMenuOpen(false); }}
              className={`text-left text-[15px] font-medium text-[#061D3D] px-4 py-2.5 rounded-xl transition-colors cursor-pointer
                ${active === label ? "bg-[#EDF0F4]" : "hover:bg-[#EDF0F4]"}`}
            >
              {label}
            </a>
          ))}
          <button className="mt-2 bg-[#FF8000] text-white font-semibold text-[15px] px-6 py-3 rounded-full cursor-pointer hover:bg-[#CC6600] transition-colors">
            Solicitar Demo
          </button>
        </div>
      )}
    </header>
  );
}
