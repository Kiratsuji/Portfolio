const projects = [
  {
    title: "Shattered Heroes",
    description:
      "Mod de RPG para Minecraft com classes, skill trees e narrativa.",
    tech: "Java · Forge · AzureLib",
  },
  {
    title: "Portfolio",
    description: "Este site que você está vendo agora.",
    tech: "React · Tailwind CSS",
  },
  {
    title: "Tower Defense",
    description: "Jogo de tower defense com sistema de placement dinâmico.",
    tech: "Unity · C#",
  },
];

export default function Projects() {
  return (
    <section id="projetos" className="py-20 px-8 bg-gray-950 text-white">
      <h2 className="text-3xl font-bold text-center mb-12">
        Projetos em Destaque
      </h2>
      <div className="grid grid-cols-3 gap-8 max-w-5xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-gray-800 p-6 rounded-xl border border-gray-700"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <span className="text-sm text-blue-400">{project.tech}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
