import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const socialLinks = [
  { label: "GitHub", icon: "⌥", url: "https://github.com/Kiratsuji" },
  { label: "LinkedIn", icon: "in", url: "https://linkedin.com/in/isaac-lacerda-018ba62b0/" },
  {
    label: "kiratsuji@outlook.com",
    icon: "✉",
    url: "mailto:kiratsuji@outlook.com",
  },
];

function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-700 mt-2">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-blue-400 text-sm transition-colors"
        >
          {link.icon} {link.label}
        </a>
      ))}
    </div>
  );
}

const services = [
  {
    icon: "🎮",
    title: "Desenvolvimento de Jogos & Mods",
    description:
      "Criação de jogos autorais, experiências interativas para marcas, advergames ou desenvolvimento de modificações e mecânicas personalizadas para jogos existentes (como Minecraft).",
    local: null,
  },
  {
    icon: "🌐",
    title: "Sites & Aplicativos Web/Mobile",
    description:
      "Desenvolvimento de landing pages focadas em conversão, portfólios institucionais, sistemas web e aplicativos sob medida. Interfaces modernas, responsivas e otimizadas para o Google.",
    local: null,
  },
  {
    icon: "🖥️",
    title: "Manutenção de Computadores & Notebooks",
    description:
      "Suporte técnico especializado, limpeza interna preventiva, troca de pasta térmica, upgrade de hardware (SSD, Memória) e formatação/otimização de sistema operacional.",
    local: "Exclusivo para Belo Horizonte - MG",
    localNote:
      "Atendimento presencial em todos os bairros de BH. Não atendo outras regiões ou cidades metropolitanas para este serviço.",
  },
];

function ServiceCard({ service }) {
  return (
    <div className="bg-gray-800 rounded-xl border border-gray-700 p-6 flex flex-col gap-3">
      {/* Tag de restrição geográfica — só aparece se existir */}
      {service.local && (
        <span className="self-start flex items-center gap-1 bg-yellow-500/10 text-yellow-400 border border-yellow-500/30 text-xs font-semibold px-3 py-1 rounded-full">
          📍 {service.local}
        </span>
      )}

      <div className="flex items-center gap-3">
        <span className="text-3xl">{service.icon}</span>
        <h3 className="text-white font-bold text-lg">{service.title}</h3>
      </div>

      <p className="text-gray-400 text-sm leading-relaxed">
        {service.description}
      </p>

      {/* Nota de atenção — só aparece no card de manutenção */}
      {service.localNote && (
        <p className="text-yellow-500/70 text-xs border-t border-gray-700 pt-3">
          ⚠️ {service.localNote}
        </p>
      )}
    </div>
  );
}

function ContactForm() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    servico: "",
    mensagem: "",
  });
  const [enviado, setEnviado] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Por ora simula o envio — depois você integra com EmailJS ou similar
    console.log("Formulário enviado:", form);
    setEnviado(true);
  }

  if (enviado) {
    return (
      <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-8 text-center">
        <p className="text-green-400 text-xl font-bold mb-2">
          Proposta enviada! ✓
        </p>
        <p className="text-gray-400 text-sm">Entrarei em contato em breve.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label className="text-gray-400 text-sm mb-1 block">Seu Nome</label>
        <input
          type="text"
          name="nome"
          value={form.nome}
          onChange={handleChange}
          required
          placeholder="João Silva"
          className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
        />
      </div>

      <div>
        <label className="text-gray-400 text-sm mb-1 block">Seu E-mail</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="joao@email.com"
          className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
        />
      </div>

      <div>
        <label className="text-gray-400 text-sm mb-1 block">
          Qual serviço você precisa?
        </label>
        <select
          name="servico"
          value={form.servico}
          onChange={handleChange}
          required
          className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
        >
          <option value="" disabled>
            Selecione uma opção...
          </option>
          <option value="Site/App">Site / Aplicativo Web</option>
          <option value="Jogo/Mod">Jogo / Mod</option>
          <option value="Manutenção PC">Manutenção de PC (Apenas BH)</option>
          <option value="Outro">Outro</option>
        </select>
      </div>

      <div>
        <label className="text-gray-400 text-sm mb-1 block">Mensagem</label>
        <textarea
          name="mensagem"
          value={form.mensagem}
          onChange={handleChange}
          required
          rows={4}
          placeholder="Descreva sua ideia ou necessidade..."
          className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition-colors"
      >
        Enviar Proposta
      </button>
    </form>
  );
}

function WhatsAppButton() {
  const mensagem = encodeURIComponent(
    "Olá! Vi seu portfólio e gostaria de fazer um orçamento sobre [serviço].",
  );
  const url = `https://wa.me/5531984524318?text=${mensagem}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-xl transition-colors w-full"
    >
      <svg
        className="w-6 h-6 fill-white"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.522 5.847L.057 23.882a.5.5 0 0 0 .606.63l6.208-1.631A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.001-1.37l-.36-.214-3.724.978.995-3.63-.235-.374A9.818 9.818 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
      </svg>
    </a>
  );
}

export default function ContactPage() {
  return (
    <div className="bg-gray-950 min-h-screen">
      <Navbar />
      <section className="px-8 py-20 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-3">
          Contato & Serviços
        </h1>
        <p className="text-gray-400 text-center mb-16">
          Veja o que posso fazer por você e escolha a melhor forma de entrar em
          contato.
        </p>
      </section>

      {/* Layout em duas colunas no desktop, bloco único no mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Coluna esquerda — Serviços */}
        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-bold text-white">O que eu resolvo</h2>
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>

        {/* Coluna direita — Contato */}
        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-bold text-white">Fale comigo</h2>
          <WhatsAppButton />
          <div className="relative flex items-center gap-4">
            <div className="flex-1 h-px bg-gray-700" />
            <span className="text-gray-600 text-sm">ou pelo formulário</span>
            <div className="flex-1 h-px bg-gray-700" />
            <ContactForm />
            <SocialLinks />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
