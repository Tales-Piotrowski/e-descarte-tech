"use client";

import { useState } from "react";

type ImpactTopic = {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  iconUrl: string;
  source: string;
  sections: {
    heading: string;
    text: string;
  }[];
};

const IMPACT_TOPICS: ImpactTopic[] = [
  {
    id: "acumulo",
    title: "1. O Ciclo do Consumo e o Acúmulo de Resíduos",
    subtitle: "A Problemática da Obsolescência",
    badge: "Panorama Geral",
    iconUrl: "https://img.icons8.com/color/96/time-machine.png",
    source: "Fonte: Global E-waste Monitor (UNITAR, 2024) & Abrelpe",
    sections: [
      {
        heading: "A Velocidade das Inovações e a Troca Precoce",
        text: "A aceleração do mercado de tecnologia e o surgimento constante de novos modelos de smartphones, computadores e periféricos criam uma cultura de substituição rápida. Aparelhos perfeitamente funcionais são frequentemente aposentados devido à obsolescência programada ou ao desejo de consumo, resultando em um volume sem precedentes de Resíduos de Equipamentos Eletroeletrônicos (REEE).",
      },
      {
        heading: "O Cenário Crítico no Brasil",
        text: "De acordo com dados do Global E-waste Monitor, o Brasil gera mais de 2,4 milhões de toneladas de lixo eletrônico por ano, consolidando-se como o maior gerador da América Latina. Infelizmente, menos de 3% desse montante é coletado e reciclado por canais oficiais. A grande maioria dos equipamentos antigos permanece esquecida no fundo de gavetas em domicílios ou é descartada incorretamente no lixo comum.",
      },
      {
        heading: "Consequências para a Gestão Urbana",
        text: "O descarte inadequado de eletrônicos sobrecarrega o sistema de coleta pública municipal, ocupando espaço precioso em aterros sanitários e perdendo a oportunidade de alimentar cadeias produtivas circulares.",
      },
    ],
  },
  {
    id: "contaminacao",
    title: "2. Riscos Ambientais e Metais Pesados",
    subtitle: "A Toxicidade Escondida nos Circuitos",
    badge: "Saúde & Ecossistema",
    iconUrl: "https://img.icons8.com/color/96/biohazard.png",
    source: "Fonte: Detering et al. (2021) / Xavier et al. (2019)",
    sections: [
      {
        heading: "A Composição Físico-Química Nociva",
        text: "Diferente de resíduos orgânicos ou plásticos convencionais, os circuitos eletrônicos contêm uma mistura complexa de elementos químicos altamente tóxicos, como chumbo, mercúrio, cádmio, bário e retardadores de chama bromados.",
      },
      {
        heading: "O Processo de Lixiviação no Solo e na Água",
        text: "Quando jogados em aterros comuns ou lixões a céu aberto, esses aparelhos ficam expostos às intempéries do tempo. Sob ação da chuva e do sol, ocorre o fenômeno da lixiviação: os metais pesados infiltram na terra, atingem os lençóis freáticos e contaminam rios e vegetações locais.",
      },
      {
        heading: "Bioacumulação e Danos à Saúde Humana",
        text: "Ao entrarem em contato com a água e alimentos, essas substâncias tóxicas acumulam-se no organismo de seres vivos (bioacumulação). A exposição ao chumbo e ao mercúrio afeta diretamente o sistema nervoso central, provoca danos renais graves e causa problemas respiratórios em comunidades expostas.",
      },
    ],
  },
  {
    id: "mineracao",
    title: "3. Mineração Urbana e Economia Circular",
    subtitle: "O Valor Econômico do Reciclável",
    badge: "Recursos & Futuro",
    iconUrl: "https://img.icons8.com/color/96/gold-bars.png",
    source: "Fonte: Journal of Cleaner Production (Xavier et al., 2019)",
    sections: [
      {
        heading: "O Ouro Oculto nas Placas de Circuito",
        text: "O lixo eletrônico não é lixo: é matéria-prima de altíssimo valor. Placas de computadores e smartphones contêm uma concentração de ouro, prata, cobre, alumínio e terras raras por tonelada significativamente maior do que o próprio minério bruto extraído de jazidas naturais.",
      },
      {
        heading: "Como Funciona a Mineração Urbana",
        text: "A Mineração Urbana consiste na recuperação industrial desses metais nobres a partir do desmonte e processamento de eletrônicos descartados. Em vez de degradar o meio ambiente abrindo novas minas, a indústria utiliza a 'manufatura reversa' para extrair os componentes existentes.",
      },
      {
        heading: "Eficiência Energética e Redução de Carbono",
        text: "Reciclar metais de placas usadas consome até 80% menos energia do que a mineração primária na natureza, evitando a emissão de toneladas de gases de efeito estufa e promovendo a verdadeira economia circular.",
      },
    ],
  },
  {
    id: "classificacao",
    title: "4. Classificação dos Resíduos (Linhas do REEE)",
    subtitle: "Como Mapear e Separar o Lixo Eletrônico",
    badge: "Guia de Triagem",
    iconUrl: "https://img.icons8.com/color/96/sorting-options.png",
    source: "Fonte: Decreto nº 10.240/2020 & Entidades Gestoras (ABREE/Green Eletron)",
    sections: [
      {
        heading: "🟢 Linha Verde (Informática e Telecomunicações)",
        text: "Compreende smartphones, celulares, tablets, notebooks, computadores desktop, monitores LCD, impressoras, teclados, mouses, roteadores e cabos. Possuem alto teor de placas de circuito e metais nobres.",
      },
      {
        heading: "🔵 Linha Azul (Eletroportáteis de Pequeno Porte)",
        text: "Inclui liquidificadores, batedeiras, ferros de passar, secadores de cabelo, aspiradores de pó, cafeteiras, torradeiras e ferramentas elétricas portáteis.",
      },
      {
        heading: "🟤 Linha Marrom (Equipamentos de Áudio e Vídeo)",
        text: "Abrange televisores (CRT, LED e Plasma), aparelhos de som, home theaters, câmeras fotográficas, gravadores, DVDs e caixas de som.",
      },
      {
        heading: "⚪ Linha Branca (Grandes Eletrodomésticos)",
        text: "Formada por geladeiras, congeladores, máquinas de lavar roupa, lava-louças, fogões, micro-ondas e aparelhos de ar-condicionado.",
      },
    ],
  },
  {
    id: "descarte",
    title: "5. Logística Reversa e Descarte Prático",
    subtitle: "O Papel e o Direito do Cidadão",
    badge: "Ação Consciente",
    iconUrl: "https://img.icons8.com/color/96/recycling.png",
    source: "Fonte: Política Nacional de Resíduos Sólidos (Lei nº 12.305/2010) & Agência Gov",
    sections: [
      {
        heading: "O Princípio da Responsabilidade Compartilhada",
        text: "A legislação brasileira estabelece que fabricantes, distribuidores, varejistas e consumidores compartilham a responsabilidade pelo ciclo de vida dos produtos. Quem produz tem a obrigação de recolher e reciclar, e quem consome tem o dever de entregar nos pontos corretos.",
      },
      {
        heading: "Pontos de Entrega Voluntária (PEVs)",
        text: "O descarte correto é totalmente gratuito para o cidadão. Redes de supermercados, lojas de departamentos e postos municipais mantêm coletores específicos (PEVs) preparados para receber aparelhos sem uso de forma segura.",
      },
      {
        heading: "O Destino Final dos Resíduos",
        text: "Ao ser entregue em um PEV, o eletrônico é transportado para centros de triagem credenciados, onde peças funcionais podem ser destinadas ao recondicionamento e projetos de inclusão digital, e o restante segue para reciclagem de matéria-prima.",
      },
    ],
  },
];

export function ImpactCards() {
  const [selectedId, setSelectedId] = useState<string>(IMPACT_TOPICS[0].id);

  const selectedTopic = IMPACT_TOPICS.find((t) => t.id === selectedId) || IMPACT_TOPICS[0];

  return (
    <section id="impactos" className="scroll-mt-16 border-t border-lime-200/10 bg-[#070a08] px-5 py-24 sm:px-10 lg:px-[8vw]">
      <div className="mx-auto max-w-5xl">
        
        {/* Cabeçalho da Seção */}
        <div className="mb-10">
          <p className="mb-3 flex items-center gap-2 text-[.7rem] font-extrabold tracking-[.14em] text-[#7ef6bc]">
            <span className="h-px w-7 bg-current" /> APRENDIZADO APROFUNDADO
          </p>
          <h2 className="font-['Arial_Black','Segoe_UI',sans-serif] text-3xl font-black tracking-[-.05em] text-[#f5fbf7] sm:text-5xl">
            Fundamentos do <span className="text-[#c5ff5b]">Lixo Eletrônico</span>
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#b0c0b6] sm:text-base">
            Navegue pelos 5 tópicos abaixo para dominar o ciclo de vida dos eletrônicos, entender a classificação oficial dos materiais e preparar-se para os desafios de gamificação da plataforma.
          </p>
        </div>

        {/* Seletores Superiores de Abas */}
        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {IMPACT_TOPICS.map((topic) => {
            const isSelected = topic.id === selectedId;
            return (
              <button
                key={topic.id}
                type="button"
                onClick={() => setSelectedId(topic.id)}
                className={`flex flex-col items-center justify-between rounded-2xl border p-4 text-center transition-all ${
                  isSelected
                    ? "border-[#c5ff5b] bg-[#c5ff5b]/10 shadow-[0_0_20px_rgba(197,255,91,0.15)] scale-[1.02]"
                    : "border-white/10 bg-black/40 hover:border-white/20 hover:bg-white/[0.02]"
                }`}
              >
                <img src={topic.iconUrl} alt={topic.title} className="size-10 object-contain mb-2" />
                <span className="text-[0.6rem] font-black uppercase tracking-wider text-[#7ef6bc]">
                  {topic.badge}
                </span>
                <h3 className="mt-1 text-xs font-bold text-white leading-tight">
                  {topic.title.split(":")[0]}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Painel do Módulo Selecionado (Texto Rico com Subtítulos) */}
        <div className="mt-8 rounded-3xl border border-lime-200/20 bg-[linear-gradient(135deg,rgba(255,255,255,.03),rgba(197,255,91,.02))] p-6 sm:p-10 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-5 mb-6">
            <div className="flex items-center gap-4">
              <img src={selectedTopic.iconUrl} alt={selectedTopic.title} className="size-12 object-contain" />
              <div>
                <span className="text-xs font-bold text-[#7ef6bc] uppercase tracking-wider">{selectedTopic.subtitle}</span>
                <h3 className="text-xl font-bold text-[#c5ff5b] sm:text-2xl">{selectedTopic.title}</h3>
              </div>
            </div>
            <span className="text-[0.7rem] text-[#8ea096] italic sm:text-right">{selectedTopic.source}</span>
          </div>

          <div className="space-y-6">
            {selectedTopic.sections.map((sec, idx) => (
              <div key={idx} className="space-y-1.5">
                <h4 className="text-sm font-bold text-white sm:text-base flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-[#c5ff5b]" />
                  {sec.heading}
                </h4>
                <p className="text-sm leading-relaxed text-[#d8e2dc] pl-3.5 border-l border-white/10 sm:text-base">
                  {sec.text}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}