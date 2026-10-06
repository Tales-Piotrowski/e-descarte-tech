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
    <main id="inicio" className="site-shell">
      <Header />
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-vignette" aria-hidden="true" />
        <div className="fireflies" aria-hidden="true">
          {Array.from({ length: 18 }, (_, index) => (
            <span className={`firefly firefly-${index + 1}`} key={index} />
          ))}
        </div>

        <div className="hero-content">
          <h1 id="hero-title">
            Por que o descarte de eletrônicos <em>é importante?</em>
          </h1>
          
          {/* Motivação centrada no problema prático (estilo agua.ai) */}
          <div className="my-6 max-w-2xl space-y-4 text-left text-sm leading-relaxed text-[#c3d2c9] sm:text-base">
            <p>
              <strong>1. A cultura do descarte rápido:</strong> Trocamos de celular e computador em intervalos cada vez menores, mas a maioria desses aparelhos acaba esquecida no fundo de uma gaveta ou jogada diretamente na lixeira comum.
            </p>
            <p>
              <strong>2. O perigo invisível:</strong> Quando um eletrônico vai para o lixo comum, seus componentes tóxicos vazam e contaminam a água e o solo. O Brasil é o maior gerador de lixo eletrônico da América Latina, e menos de 3% é reciclado de forma correta.
            </p>
            <p>
              <strong>3. Recursos jogados fora:</strong> Placas de circuito contêm mais ouro, prata e cobre do que o próprio minério extraído da natureza. Descartar sem reciclar é desperdiçar matéria-prima nobre e destruir o meio ambiente para extrair mais.
            </p>
          </div>

          <a className="cta" href="#impactos">
            Começar a explorar <span aria-hidden="true">↓</span>
          </a>
        </div>

        <div className="stats" aria-label="Dados sobre resíduos eletroeletrônicos">
          {statistics.map((stat) => (
            <article className="stat" key={stat.value}>
              <strong>{stat.value}</strong>
              <p>{stat.label}</p>
            </article>
          ))}
        </div>
        <p className="source-note">Dados: Global E-waste Monitor 2024 (UNITAR)</p>
      </section>

      <ImpactCards />
      <EwasteCalculator />
      <QuizSection />
      <SortingGame />
      <AboutSection />
    </main>
  );
}