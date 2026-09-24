# ConnectCar System | Landing Page

Landing page de conversão para o ConnectCar System, um CRM para concessionárias e revendas de veículos, com todos os CTAs levando o visitante direto para o WhatsApp.

Landing page desenvolvida por Pedro Paulo Lacerda para o ConnectCar System. O produto (o CRM) pertence ao cliente; este repositório contém apenas o site de divulgação.

A apresentação comercial interativa do mesmo produto fica no repositório [apresentacao_connect](https://github.com/pplacerda07/apresentacao_connect), publicada em [apresentacao-connect.vercel.app](https://apresentacao-connect.vercel.app).

## Destaques

- **Hero com CTA duplo**: "Solicitar Demo" e "Falar com Especialista" abrem o WhatsApp com mensagem já preenchida.
- **Mockup do painel de leads em código**: a tela de distribuição automática de leads é montada em JSX (`LeadDistributionPanel`), não em imagem, e fica nítida em qualquer resolução.
- **Seção de recursos com diagrama orbital em SVG**: gerado por código, ao lado de cards de WhatsApp, funil de vendas e gestão de estoque.
- **Carrossel de depoimentos** com setas, cards laterais clicáveis e indicadores de posição.
- **Seção de planos** (mensal e anual) com selos de destaque e botão "Assinar Agora" que envia o nome do plano na mensagem do WhatsApp.
- **Widget flutuante de WhatsApp e pop-up de teste grátis**: o pop-up abre após alguns segundos, faz três perguntas de qualificação (nome, maior desafio, tamanho do time) e monta a mensagem com as respostas.
- **Animações de entrada no scroll** e menu mobile responsivo.

## Stack

- [Next.js](https://nextjs.org) 16 (App Router)
- React 19
- TypeScript 5
- Tailwind CSS 4 (via `@tailwindcss/postcss`)
- lucide-react (ícones)
- `next/font` com as fontes Barlow e Barlow Condensed
- ESLint 9 com `eslint-config-next`

## Estrutura

```
connectcar/
├── app/                      # layout raiz (metadados, fontes) e página única
│   └── globals.css           # tokens da marca no @theme e classes de animação
├── components/               # seções da landing, widgets e mockups
├── hooks/                    # useScrollReveal (animação de entrada no scroll)
└── public/
    ├── imagens_do_sistema/   # capturas do sistema e imagens de depoimentos
    └── logoconnectcar/       # logos da marca
```

## Como rodar localmente

Pré-requisito: Node.js 20.9 ou superior (exigência do Next.js 16).

```bash
git clone https://github.com/pplacerda07/connectcar.git
cd connectcar
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000). Não há variáveis de ambiente obrigatórias.

Outros scripts:

```bash
npm run build   # build de produção
npm run start   # serve o build
npm run lint    # ESLint
```

## Decisões técnicas

- **Scroll reveal sem biblioteca de animação**: o hook `useScrollReveal` usa `IntersectionObserver` para adicionar a classe `visible` aos elementos `.reveal`; a transição é CSS puro, com atrasos escalonados (`delay-1` a `delay-4`) e desativação automática em `prefers-reduced-motion`.
- **Conversão sem backend**: todos os CTAs geram links `wa.me` com texto codificado via `encodeURIComponent`. O formulário do pop-up não grava dados; ele apenas compõe a mensagem e abre o WhatsApp em nova aba.
- **Interface do produto recriada em componentes**: o painel de distribuição de leads e o diagrama de recursos são JSX e SVG, o que permite editar textos e cores sem refazer imagens.
- **Identidade visual centralizada**: cores da marca declaradas como tokens no `@theme` do Tailwind 4 e fontes carregadas por `next/font` com `display: swap`.

## Autor

Pedro Paulo Lacerda · [github.com/pplacerda07](https://github.com/pplacerda07)
