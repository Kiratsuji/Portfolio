import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { projects } from "../data/projects";
import bgImg from "../images/bg.png";

// ── Badge de status ───────────────────────────────────────
const statusColors = {
  Concluído: "bg-green-500",
  "Em Desenvolvimento": "bg-yellow-500",
  "Game Jam": "bg-purple-500",
  "Em Alfa": "bg-blue-500",
};
function StatusBadge({ status }) {
  const color = statusColors[status] || "bg-gray-500";
  return (
    <span
      className={`${color} text-white text-xs font-semibold px-2 py-1 rounded-full`}
    >
      {status}
    </span>
  );
}

// ── Card De projetos ───────────────────────────────────────
function ProjectCard({ project }) {
  return (
    <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden flex flex-col">
      <div className="relative overflow-hidden group">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <StatusBadge status={project.status} />
        </div>
      </div>

      <div className="flex flex-wrap gap-2 px-5 pt-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="bg-gray-700 text-blue-400 text-xs px-2 py-1 rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Título e descrição */}
      <div className="px-5 pt-3 pb-4 flex-1">
        <h3 className="text-white font-bold text-lg mb-1">{project.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
          {project.description}
        </p>
      </div>
    </div>
  );
}

// ── Sistema de filtros ───────────────────────────────────────
const categorias = [
  "Todos",
  "Jogos & Mods",
  "Web & Mobile",
  "Sistemas & Bancos de Dados",
];

function FilterBar({ filtroAtivo, onFiltroChange }) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categorias.map((cat) => (
        <button
          key={cat}
          onClick={() => onFiltroChange(cat)}
          className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors
            ${
              filtroAtivo === cat
                ? "bg-blue-500 text-white"
                : "bg-gray-800 text-gray-400 hover:text-white border border-gray-700"
            }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

// ── PÁGINA COMPLETA ───────────────────────────────────────
export default function ProjectsPage() {
  const [filtroAtivo, setFiltroAtivo] = useState("Todos");

  // Filtra os projetos baseado no filtro ativo
  const projetosFiltrados =
    filtroAtivo === "Todos"
      ? projects
      : projects.filter((p) => p.category === filtroAtivo);

  return (
    <div style={{ backgroundImage: `url(${bgImg})` }} className="flex flex-col min-h-screen bg-black text-gray-800 bg-fixed bg-center bg-no-repeat bg-auto">
      <header>
        <Navbar />
      </header>

      <main className="grow max-w-7xl w-full mx-auto px-4 py-8 flex flex-col gap-12">
        <section className="flex flex-col items-center justify-center px-8 py-20 bg-primary text-text-primary rounded-2xl border-2 border-border">
          <h1 className="text-4xl font-bold text-white text-center mb-3">
            Projetos
          </h1>
          <p className="text-gray-400 text-center mb-12">
            Uma seleção do que já construí.
          </p>

          <FilterBar filtroAtivo={filtroAtivo} onFiltroChange={setFiltroAtivo} />

          {/* Grade de projetos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projetosFiltrados.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Mensagem se nenhum projeto for encontrado */}
          {projetosFiltrados.length === 0 && (
              <p className="text-gray-500 text-center mt-12">
                Nenhum projeto nessa categoria ainda.
              </p>
          )}
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
