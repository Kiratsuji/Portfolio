import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import bgImg from "../images/bg.png";

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
const specialties = [
    {
        title: "Desenvolvimento de Mods",
        description:
            "Criação de mods para Minecraft com Forge e sistemas complexos de RPG.",
    },
    {
        title: "Game Design",
        description: "Sistemas de progressão, skill trees e narrativa imersiva.",
    },
    {
        title: "Desenvolvimento Web",
        description: "Interfaces modernas com React e Tailwind CSS.",
    },
];


export default function Home() {
  return (

      <div style={{ backgroundImage: `url(${bgImg})` }} className="flex flex-col min-h-screen bg-black text-gray-800 bg-fixed bg-center bg-no-repeat bg-auto">

          <header>
              <Navbar />
          </header>

          <main className="grow max-w-7xl w-full mx-auto px-4 py-8 flex flex-col gap-12">

              <section className="flex flex-col items-center justify-center px-8 py-20 bg-primary text-text-primary rounded-2xl border-2 border-border">
                  <section>
                      <h1 className="text-5xl font-bold mb-4">Olá, eu sou Isaac Lacerda</h1>
                      <p className="text-xl text-gray-400">
                          Criando experiências tanto funcionais quanto impactantes.
                      </p>
                  </section>

                  <section className="py-20 px-8">
                      <h2 className="text-3xl font-bold text-center mb-12">
                          Projetos em Destaque
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {projects.map((project) => (
                              <div
                                  key={project.title}
                                  className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                  <p className="text-gray-400 mb-4">{project.description}</p>
                                  <span className="text-sm text-blue-400">{project.tech}</span>
                              </div>
                          ))}
                      </div>
                  </section>

                  <section className="py-20 px-8">
                      <h2 className="text-3xl font-bold text-center mb-12">Especialidades</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {specialties.map((item) => (
                              <div key={item.title} className="bg-gray-800 p-6 rounded-xl">
                                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                  <p className="text-gray-400">{item.description}</p>
                              </div>
                          ))}
                      </div>
                  </section>

              </section>
          </main>

          <footer>
              <Footer />
          </footer>
      </div>
  );
}
