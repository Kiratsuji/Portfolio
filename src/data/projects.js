import shatteredHeroes from "../projects/shattered-heroes.png";
import soccerBall from "../projects/soccerballcatapult.png";
import portfolio from "../images/light_bg1.png"

export const projects = [
  {
    id: 1,
    title: "Shattered Heroes",
    description:
      "Mod de RPG que introduz um sistema complexo de árvore de habilidades para classes de super-heróis no Minecraft.",
    category: "Jogos & Mods",
    tags: ["Java", "Forge", "AzureLib"],
    image: shatteredHeroes,
    status: "Em Desenvolvimento",
    buttons: {
      primary: { label: "Baixar Mod", url: "https://www.curseforge.com/minecraft/mc-mods/shattered-heroes" },
      wiki: { label: "Abrir Wiki", url: "#" },
    },
  },
  {
    id: 2,
    title: "Portfolio Pessoal",
    description:
      "Este site. Desenvolvido do zero com foco em UX e aprendizado de tecnologias modernas.",
    category: "Web & Mobile",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    image: portfolio,
    status: "Concluído",
    buttons: {
      code: { label: "Ver Código", url: "https://github.com/Kiratsuji/Portfolio" }
    },
  },
  {
    id: 3,
    title: "SoccerBall Catapult",
    description:
        "Um jogo feito em 2 dias para uma gamejam chamada ScoreJam",
    category: "Jogos & Mods",
    tags: ["Unity", "C#"],
    image: soccerBall,
    status: "Concluído",
    buttons: {
      primary: { label: "Ver Online", url: "https://rerispingo.itch.io/soccerball-catapult" }
    },
  }
];
