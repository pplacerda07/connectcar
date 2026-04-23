import { Zap, Building2, Smartphone } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Notificações em Tempo Real",
    description:
      "Powered by SignalR, o ConnectCar System dispara alertas instantâneos: nova mensagem no WhatsApp, novo lead distribuído, aprovação de fechamento e status de NF-e. Sem recarregar a tela. Sua equipe age na hora certa.",
  },
  {
    icon: Building2,
    title: "Multi-tenant para Redes",
    description:
      "Uma instalação, múltiplas concessionárias. Cada empresa enxerga apenas seus próprios dados, com permissões granulares por tela e operação. Troque de unidade em um clique, ideal para grupos com dezenas de lojas.",
  },
  {
    icon: Smartphone,
    title: "App Mobile para Vendedores",
    description:
      "Seus vendedores acessam leads, negociações, agenda e checklists pelo celular. Recebem notificações do WhatsApp em tempo real e atualizam o funil de onde estiverem: na loja, no test drive ou em casa.",
  },
];

export default function IconFeatures() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={f.title} className={`flex flex-col gap-4 reveal delay-${i + 1}`}>
                <Icon size={40} className="text-[#0F2D52]" strokeWidth={1.5} />
                <h3 className="text-[18px] font-bold text-[#061D3D]">{f.title}</h3>
                <p className="text-[15px] text-[#3D4F64] leading-[1.65]">{f.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
