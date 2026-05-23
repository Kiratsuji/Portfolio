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

export default function Specialties() {
  return (
    <section className="py-20 px-8 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-12">Especialidades</h2>
      <div className="grid grid-cols-3 gap-8 max-w-5xl mx-auto">
        {specialties.map((item) => (
          <div key={item.title} className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-400">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
