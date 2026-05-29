import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import avatarImg from '../images/avatar.png';
import bgImg from "../images/bg.png";

// ── 1. HERO ──────────────────────────────────────────────
function AboutHero() {
  return (
    <section className="flex flex-col md:flex-row items-center gap-12 px-8 py-24 max-w-5xl mx-auto">
      <img
        src={avatarImg}
        alt="Foto de Kiratsuji"
        className="w-48 h-48 rounded-full object-cover border-4 border-border"
      />
      <div>
        <h1 className="text-4xl font-bold text-white mb-3">Kiratsuji</h1>
        <p className="text-blue-400 text-lg mb-4">
          Desenvolvedor Multidisciplinar
        </p>
        <p className="text-gray-400 text-lg leading-relaxed">
          Transformo ideias complexas em softwares, jogos e sistemas funcionais
          — do código à experiência final do usuário.
        </p>
      </div>
    </section>
  );
}

// ── 2. JORNADA ───────────────────────────────────────────
function Journey() {
  return (
    <section className="py-16 px-8">
      <div className="max-w-3xl mx-auto space-y-6 text-gray-400 text-lg leading-relaxed">
        <p>
          Tudo começou pela curiosidade de entender{" "}
          <strong className="text-white">
            como as coisas funcionam por trás dos panos
          </strong>{" "}
          — seja a lógica de um jogo, a infraestrutura de uma rede ou a
          arquitetura de um sistema. Essa necessidade de ir fundo me levou
          naturalmente para o desenvolvimento.
        </p>
        <p>
          Hoje atuo de forma{" "}
          <strong className="text-white">independente como freelancer</strong>,
          desenvolvendo desde mods complexos de jogos até aplicações web
          modernas. Estudo constantemente para dominar tanto o{" "}
          <strong className="text-white">desenvolvimento de software</strong>{" "}
          quanto a{" "}
          <strong className="text-white">
            lógica de sistemas e infraestrutura
          </strong>
          .
        </p>
      </div>
    </section>
  );
}

// ── 3. ARSENAL TÉCNICO ───────────────────────────────────
const skills = [
  {
    category: "Desenvolvimento de Jogos",
    items: [
      "Java & Forge (Minecraft)",
      "Unity & C#",
      "Game Design",
      "Lógica de Mecânicas",
    ],
  },
  {
    category: "Web & Mobile",
    items: ["React.js", "Tailwind CSS", "JavaScript", "Interfaces Responsivas"],
  },
  {
    category: "Sistemas & Infraestrutura",
    items: ["Banco de Dados", "Redes", "Suporte Técnico", "Lógica de Sistemas"],
  },
];

function TechStack() {
  return (
    <section className="py-16 px-8">
      <h2 className="text-3xl font-bold text-white text-center mb-12">
        Arsenal Técnico
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {skills.map((skill) => (
          <div
            key={skill.category}
            className="bg-gray-800 rounded-xl p-6 border border-gray-700"
          >
            <h3 className="text-blue-400 font-semibold text-lg mb-4">
              {skill.category}
            </h3>
            <ul className="space-y-2">
              {skill.items.map((item) => (
                <li
                  key={item}
                  className="text-gray-400 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── 4. METODOLOGIA ───────────────────────────────────────
const methods = [
  {
    title: "Planejamento Transparente",
    desc: "Alinhamento claro de etapas, prazos e expectativas do início ao fim do projeto.",
  },
  {
    title: "Código Limpo e Otimizado",
    desc: "Foco em performance, legibilidade e facilidade de manutenção futura.",
  },
  {
    title: "Segurança e Privacidade",
    desc: "Cuidado rigoroso com dados, integridade do sistema e boas práticas de segurança.",
  },
  {
    title: "Comunicação Contínua",
    desc: "Atualizações frequentes para que você sempre saiba o andamento do projeto.",
  },
];

function WorkMethod() {
  return (
    <section className="py-16 px-8">
      <h2 className="text-3xl font-bold text-white text-center mb-12">
        Como Trabalho
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {methods.map((method) => (
          <div
            key={method.title}
            className="flex gap-4 bg-gray-800 p-6 rounded-xl border border-gray-700"
          >
            <div>
              <h3 className="text-white font-semibold mb-1">{method.title}</h3>
              <p className="text-gray-400 text-sm">{method.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── 5. CTA ───────────────────────────────────────────────
function CallToAction() {
  return (
    <section className="py-20 px-8 text-center">
      <p className="text-gray-400 text-lg mb-2">
        Tem uma ideia de projeto ou precisa de uma solução técnica?
      </p>
      <h2 className="text-3xl font-bold text-white mb-8">Vamos conversar.</h2>
      <Link
        to="/contato"
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-full transition-colors"
      >
        Entrar em Contato
      </Link>
    </section>
  );
}

// ── PÁGINA COMPLETA ───────────────────────────────────────
export default function About() {
  return (
    <div style={{ backgroundImage: `url(${bgImg})` }} className="flex flex-col min-h-screen bg-black text-gray-800 bg-fixed bg-center bg-no-repeat bg-auto">
      <header>
          <Navbar />
      </header>
      <main className="grow max-w-7xl w-full mx-auto px-4 py-8 flex flex-col gap-12">
          <section className="flex flex-col items-center justify-center py-32 bg-primary text-text-primary rounded-2xl border-2 border-border">
              <AboutHero />
              <Journey />
              <TechStack />
              <WorkMethod />
              <CallToAction />
          </section>
      </main>
      <footer>
          <Footer />
      </footer>
    </div>
  );
}
