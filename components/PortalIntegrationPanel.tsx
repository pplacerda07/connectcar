"use client";

import {
  Globe,
  Car,
  DollarSign,
  Star,
  Tag,
  FileText,
  CheckCircle2,
  XCircle,
} from "lucide-react";

const portals = [
  { name: "ShopCar", status: "Anunciado", active: true },
  { name: "iCarros", status: "Não Anunciado", active: false },
  { name: "UsadosBR", status: "Não Anunciado", active: false },
  { name: "NaPista", status: "Anunciado", active: true },
];

const optionals = [
  "Controle de Estabilidade", "Freios ABS", "Câmera de Ré", "Sensor de Estacionamento",
  "Direção Elétrica", "Ar Condicionado", "Vidros Elétricos", "Travas Elétricas",
  "Airbag", "Bancos em Couro", "Multimídia", "Rodas de Liga", "Start/Stop",
  "Teto Solar", "Piloto Automático", "Faróis de LED", "Retrovisor Elétrico",
];

export default function PortalIntegrationPanel() {
  return (
    <div className="w-full max-w-[720px] mx-auto bg-[#F5F6F8] rounded-[16px] border border-[#BCC5D3] p-4 flex flex-col gap-4 shadow-xl pointer-events-none select-none overflow-hidden">

      {/* Header */}
      <div className="bg-white rounded-[12px] border border-[#E8EBF0] overflow-hidden">
        <div className="bg-[#FF8000] px-5 py-4 text-white">
          <h3 className="text-[16px] font-bold">Integrador de Anúncios</h3>
          <p className="text-[12px] text-white/80">Gerencie e publique seus anúncios nos principais portais automotivos</p>
        </div>

        <div className="p-5 flex flex-col gap-5">

          {/* Portal Selection */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Globe size={15} className="text-[#7A8CA3]" />
              <h4 className="text-[13px] font-semibold text-[#061D3D]">Seleção de Portais</h4>
            </div>
            <div className="flex flex-wrap gap-3">
              {portals.map((p) => (
                <div key={p.name} className="flex flex-col items-center gap-1.5 bg-white border border-[#E8EBF0] rounded-lg px-5 py-3 min-w-[100px]">
                  <span className="text-[14px] font-bold text-[#061D3D] tracking-tight">{p.name}</span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                    p.active 
                      ? "bg-[#FF8000] text-white" 
                      : "bg-red-100 text-red-600"
                  }`}>
                    {p.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Vehicle Data */}
          <div className="border-t border-[#E8EBF0] pt-4">
            <div className="flex items-center gap-2 mb-3">
              <Car size={15} className="text-[#7A8CA3]" />
              <h4 className="text-[13px] font-semibold text-[#061D3D]">Dados do Veículo</h4>
            </div>
            <div className="grid grid-cols-5 gap-3">
              {[
                { label: "Placa", value: "BCK-2E04" },
                { label: "Marca", value: "BMW" },
                { label: "Modelo", value: "320i 2.0 16v" },
                { label: "Ano/Modelo", value: "2015/2015" },
                { label: "Cor", value: "Cinza" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col">
                  <span className="text-[10px] font-bold text-[#7A8CA3] uppercase">{item.label}</span>
                  <span className="text-[13px] font-semibold text-[#061D3D]">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Price + Highlight Options */}
          <div className="grid grid-cols-2 gap-4 border-t border-[#E8EBF0] pt-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <DollarSign size={15} className="text-[#7A8CA3]" />
                <h4 className="text-[13px] font-semibold text-[#061D3D]">Valor do Anúncio</h4>
              </div>
              <div className="bg-white border border-[#E8EBF0] rounded-lg px-4 py-3">
                <span className="text-[18px] font-bold text-[#061D3D]">R$ 97.900</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Star size={15} className="text-[#7A8CA3]" />
                <h4 className="text-[13px] font-semibold text-[#061D3D]">Opções de Destaque</h4>
              </div>
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2 text-[12px] text-[#3D4F64]">
                  <CheckCircle2 size={16} className="text-[#FF8000]" />
                  Destaque na capa do site
                </label>
                <label className="flex items-center gap-2 text-[12px] text-[#3D4F64]">
                  <XCircle size={16} className="text-[#BCC5D3]" />
                  Destaque na listagem do site
                </label>
              </div>
            </div>
          </div>

          {/* Optionals */}
          <div className="border-t border-[#E8EBF0] pt-4">
            <div className="flex items-center gap-2 mb-3">
              <Tag size={15} className="text-[#7A8CA3]" />
              <h4 className="text-[13px] font-semibold text-[#061D3D]">Opcionais do Veículo</h4>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {optionals.map((opt) => (
                <span key={opt} className="bg-[#FF8000] text-white text-[10px] font-semibold px-2.5 py-1 rounded-full whitespace-nowrap">
                  {opt}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="border-t border-[#E8EBF0] pt-4">
            <div className="flex items-center gap-2 mb-2">
              <FileText size={15} className="text-[#7A8CA3]" />
              <h4 className="text-[13px] font-semibold text-[#061D3D]">Descrição e Observação</h4>
            </div>
            <div className="bg-white border border-[#E8EBF0] rounded-lg px-4 py-3 mb-3">
              <p className="text-[11px] font-medium text-[#7A8CA3] mb-1">Descrição do veículo</p>
              <p className="text-[12px] text-[#3D4F64] leading-relaxed">
                POSSUI MANUAL E CHAVE RESERVA<br />
                VEÍCULO TODO REVISADO, VENHAM CONFERIR!<br />
                VÁ VEÍCULOS A SUA MELHOR ESCOLHA!
              </p>
            </div>
            <div className="bg-white border border-[#E8EBF0] rounded-lg px-4 py-3">
              <p className="text-[11px] font-medium text-[#7A8CA3] mb-1">Observação do veículo</p>
              <p className="text-[12px] text-[#7A8CA3] italic">Sem observações.</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
