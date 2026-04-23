"use client";

import { 
  User, 
  ChevronUp, 
  ChevronDown, 
  X, 
  Plus,
  PauseCircle,
  ToggleLeft,
  Users,
  Zap
} from "lucide-react";

export default function LeadDistributionPanel() {
  return (
    <div className="w-full max-w-[800px] mx-auto bg-[#F5F6F8] rounded-[16px] border border-[#BCC5D3] p-4 flex flex-col gap-4 shadow-xl pointer-events-none select-none overflow-hidden scale-[0.85] sm:scale-100 origin-top-left lg:origin-center">
      
      {/* Top Toggle */}
      <div className="flex justify-center">
        <div className="flex items-center bg-white border border-[#BCC5D3] rounded-full p-1 shadow-sm">
          <div className="flex items-center gap-2 px-4 py-2 text-[13px] font-medium text-[#3D4F64] rounded-full cursor-not-allowed">
            <User size={16} />
            Gestão Manual de Leads
          </div>
          <div className="flex items-center gap-2 px-4 py-2 text-[13px] font-semibold text-white bg-[#FF8000] rounded-full shadow-md">
            <User size={16} />
            Gestão Automática de Leads
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="bg-white rounded-[12px] shadow-sm border border-[#E8EBF0] overflow-hidden">
        
        {/* Next in Queue Header */}
        <div className="bg-[#FF8000] p-4 flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 bg-white/20 rounded-full">
              <Users size={20} />
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-wider uppercase text-white/80">
                PRÓXIMO DA FILA
              </p>
              <h3 className="text-[16px] font-bold">
                Lucas Oliveira dos Santos
              </h3>
            </div>
          </div>
          
          <div className="flex gap-8 text-center mr-4">
            <div className="flex flex-col items-center">
              <span className="text-[20px] font-bold leading-none">6</span>
              <span className="text-[9px] font-bold uppercase text-white/80 mt-1">Vendedores na fila</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[20px] font-bold leading-none">0</span>
              <span className="text-[9px] font-bold uppercase text-white/80 mt-1">Leads Pendentes</span>
            </div>
          </div>
        </div>

        {/* Two Columns */}
        <div className="grid md:grid-cols-2 gap-6 p-5">
          
          {/* Left Column: Fila de Vendedores */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between pb-2 border-b border-[#E8EBF0]">
              <div className="flex items-center gap-2">
                <Users size={16} className="text-[#7A8CA3]" />
                <h4 className="text-[14px] font-semibold text-[#061D3D]">Fila de Vendedores</h4>
              </div>
              <div className="flex items-center gap-1.5 bg-[#10B981] text-white px-3 py-1.5 rounded-md text-[12px] font-medium shadow-sm">
                Salvar Fila
              </div>
            </div>

            <div className="flex flex-col gap-2">
              {[
                { id: 1, name: "Lucas Oliveira dos Santos", active: true },
                { id: 2, name: "Rafael Pereira da Silva" },
                { id: 3, name: "Fernanda Costa Almeida" },
                { id: 4, name: "Mariana Souza Ribeiro" },
                { id: 5, name: "Bruno Ferreira Lima" },
              ].map((seller) => (
                <div 
                  key={seller.id} 
                  className={`flex items-center justify-between p-2 rounded-lg border ${
                    seller.active ? "border-[#FF8000] bg-[#FF8000]/5" : "border-[#E8EBF0]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`flex items-center justify-center w-6 h-6 rounded-full text-[11px] font-bold ${
                      seller.active ? "bg-[#FF8000]/10 text-[#FF8000]" : "bg-[#EDF0F4] text-[#3D4F64]"
                    }`}>
                      {seller.id}
                    </span>
                    <span className="text-[13px] font-medium text-[#3D4F64]">{seller.name}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="p-1 rounded text-[#7A8CA3] bg-[#F5F6F8] hover:bg-[#E8EBF0]">
                      <ChevronUp size={14} />
                    </div>
                    <div className="p-1 rounded text-[#7A8CA3] bg-[#F5F6F8] hover:bg-[#E8EBF0]">
                      <ChevronDown size={14} />
                    </div>
                    <div className="p-1 rounded text-red-500 bg-[#F5F6F8] hover:bg-[#E8EBF0] ml-1">
                      <X size={14} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Vendedores Disponíveis */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 pb-2 border-b border-[#E8EBF0]">
              <User size={16} className="text-[#7A8CA3]" />
              <h4 className="text-[14px] font-semibold text-[#061D3D]">Vendedores Disponíveis</h4>
            </div>

            <div className="flex flex-col gap-2">
              {[
                "Carlos Eduardo Martins",
                "Amanda Rodrigues Silva",
                "Pedro Henrique Campos",
                "Leads antigos"
              ].map((name, i) => (
                <div key={i} className="flex items-center justify-between p-2 rounded-lg border border-[#E8EBF0] bg-white">
                  <span className="text-[13px] font-medium text-[#3D4F64]">{name}</span>
                  <div className="flex items-center gap-1 px-2.5 py-1 rounded border border-[#FF8000] text-[#FF8000] text-[11px] font-semibold bg-white hover:bg-[#FF8000]/5 transition-colors">
                    <Plus size={12} strokeWidth={3} /> Adicionar
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Footer Toggle Block */}
      <div className="bg-white rounded-[12px] shadow-sm border border-[#E8EBF0] p-4 flex flex-col gap-3">
        <div className="flex items-center justify-between pb-3 border-b border-[#E8EBF0]">
          <div className="flex items-center gap-2">
            <Zap size={16} className="text-[#FF8000] fill-[#FF8000]/20" />
            <h4 className="text-[14px] font-semibold text-[#061D3D]">Distribuição em Tempo Real</h4>
          </div>
          <div className="flex items-center gap-2">
            <ToggleLeft size={30} className="text-[#BCC5D3]" strokeWidth={1.5} />
            <span className="text-[13px] font-medium text-[#7A8CA3]">Desativada</span>
          </div>
        </div>

        <div className="bg-[#F5F6F8] rounded-lg p-3 flex gap-3 items-start border border-[#E8EBF0]">
          <div className="mt-0.5">
            <PauseCircle size={18} className="text-[#7A8CA3] fill-white" />
          </div>
          <div>
            <h5 className="text-[13px] font-bold text-[#3D4F64]">Distribuição pausada</h5>
            <p className="text-[12px] text-[#7A8CA3]">Leads novos ficarão sem vendedor até a distribuição ser ativada.</p>
          </div>
        </div>
      </div>

    </div>
  );
}
