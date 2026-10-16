import { Header } from "@/components/header";
import { ImpactCards } from "@/components/impact-cards";
import { EwasteCalculator } from "@/components/ewaste-calculator";
import { QuizSection } from "@/components/quiz-section";
import { SortingGame } from "@/components/sorting-game";
import { AboutSection } from "@/components/about-section";

const statistics = [
  { value: "62 mi", label: "de toneladas de lixo eletrônico geradas no mundo em 2022" },
  { value: "22,3%", label: "foi oficialmente coletado e reciclado no mesmo ano" },
  { value: "2,4 mi", label: "de toneladas foram geradas no Brasil em 2022" },
];

export default function Home() {
  return (
    <main id="inicio" className="site-shell relative">
      <Header />
      <div className="fireflies" aria-hidden="true">
        {Array.from({ length: 24 }, (_, index) => (
          <span className={`firefly firefly-${index + 1}`} key={index} />
        ))}
      </div>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-vignette" aria-hidden="true" />

        <div className="hero-content mx-auto max-w-4xl text-center flex flex-col items-center">

          {/* Nome do Projeto em destaque grande para criar a Tela de Início / Splash */}
          <h1 className="mb-6 whitespace-nowrap font-['Arial_Black','Segoe_UI',sans-serif] text-[5rem] font-black leading-none tracking-tight text-white sm:text-[6rem] lg:text-[7rem]">
            E-Descarte<span className="text-[#c5ff5b]">.tech</span>
          </h1>

          {/* Imagem do Header com moldura mais quadrada e enquadramento ajustado */}
          <div className="my-5 w-full max-w-2xl overflow-hidden rounded-xl border border-white/15 bg-white/5 p-1.5 shadow-2xl">
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/header.png`}
              alt="E-Descarte Tech — Sustentabilidade e Reciclagem"
              className="aspect-[16/9] w-full rounded-lg object-cover"
            />
          </div>

          <p className="mt-5 text-lg font-bold text-[#7ef6bc] sm:text-2xl">
            Por que o descarte de eletrônicos <em className="not-italic text-white underline decoration-[#c5ff5b]">é importante?</em>
          </p>

          {/* Motivação Centralizada */}
          <div className="my-8 max-w-3xl space-y-4 text-center text-sm leading-relaxed text-[#c3d2c9] sm:text-base">
            <p>
              <strong>1. A cultura do descarte rápido:</strong> Trocamos de celular e computador em intervalos cada vez menores, mas a maioria desses aparelhos acaba esquecida no fundo de uma gaveta ou jogada na lixeira comum.
            </p>
            <p>
              <strong>2. O perigo invisível:</strong> Quando um eletrônico vai para o lixo comum, seus componentes tóxicos vazam e contaminam a água e o solo. O Brasil é o maior gerador de lixo eletrônico da América Latina, e menos de 3% é reciclado de forma correta.
            </p>
            <p>
              <strong>3. Recursos jogados fora:</strong> Placas de circuito contêm mais ouro, prata e cobre do que o próprio minério extraído da natureza. Descartar sem reciclar é desperdiçar matéria-prima nobre e degradar o ecossistema.
            </p>
          </div>

          <a className="cta" href="#impactos">
            Começar a explorar <span aria-hidden="true">↓</span>
          </a>
        </div>

        {/* Estatísticas */}
        <div className="stats mt-12 grid gap-4 sm:grid-cols-3" aria-label="Dados sobre resíduos eletroeletrônicos">
          {statistics.map((stat) => (
            <article className="stat" key={stat.value}>
              <strong>{stat.value}</strong>
              <p>{stat.label}</p>
            </article>
          ))}
        </div>
        <p className="source-note mt-3 text-center text-xs text-[#8ea096]">
          Dados: Global E-waste Monitor 2024 (UNITAR)
        </p>
      </section>

      <ImpactCards />
      <EwasteCalculator />
      <QuizSection />
      <SortingGame />
      <AboutSection />
    </main>
  );
}