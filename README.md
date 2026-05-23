<div align="center">

# ✦ Portfolio — Kiratsuji

**Portfólio pessoal desenvolvido em React** · Meu primeiro projeto real com o ecossistema moderno de frontend

[![Deploy](https://img.shields.io/badge/🌐_Live_Demo-kiratsuji.github.io/Portfolio-blue?style=for-the-badge)](https://kiratsuji.github.io/Portfolio)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev)
[![Tailwind](https://img.shields.io/badge/Tailwind_CSS-4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

</div>

---

## 📌 Sobre este projeto

Este repositório é o meu **portfólio pessoal** — mas também é um **diário de aprendizado**.

Nunca tinha trabalhado com React antes de começar este projeto. A ideia foi simples: em vez de aprender frameworks modernos por tutoriais isolados, resolvi **aprender construindo algo real e que eu fosse usar de verdade**.

Cada página, componente e decisão técnica deste projeto representa algo que pesquisei, errei, consertei e entendi. O portfólio vai evoluir conforme eu dominar novas ferramentas — e essa evolução ficará registrada aqui.

> *"A melhor forma de aprender desenvolvimento web é ter um projeto que você se importa em fazer funcionar."*

---

## 🚀 Stack & Ferramentas

| Ferramenta | Uso | Status |
|---|---|---|
| **React 19** | UI baseada em componentes | ✅ Em uso |
| **Vite 8** | Bundler e dev server ultra-rápido | ✅ Em uso |
| **Tailwind CSS 4** | Estilização utilitária | ✅ Em uso |
| **React Router DOM** | Navegação entre páginas (SPA) | ✅ Em uso |
| **GitHub Pages** | Deploy estático gratuito | ✅ Em uso |
| **EmailJS** | Formulário de contato sem backend | 🔄 Planejado |
| **Framer Motion** | Animações e transições | 🔄 Planejado |

---

## 📂 Estrutura do Projeto

```
Portfolio/
├── public/                  # Assets estáticos (imagens, favicon)
│   └── avatar.png
│
├── src/
│   ├── components/          # Componentes reutilizáveis
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Specialties.jsx
│   │   └── Projects.jsx
│   │
│   ├── pages/               # Páginas da aplicação
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   │
│   ├── data/                # Dados estáticos (projetos, etc.)
│   │   └── projects.js
│   │
│   ├── App.jsx              # Roteamento principal
│   ├── main.jsx             # Ponto de entrada
│   └── index.css            # Estilos globais
│
├── index.html               # Entry point do Vite
├── vite.config.js
├── package.json
└── README.md
```

---

## 📄 Páginas

### 🏠 Home
Apresentação principal com hero section, especialidades em destaque e uma seleção de projetos.

### 👤 Sobre
Minha jornada como desenvolvedor, arsenal técnico (jogos, web e sistemas) e metodologia de trabalho.

### 🗂️ Projetos
Grade de projetos com sistema de filtros por categoria: **Jogos & Mods**, **Web & Mobile** e **Sistemas & Bancos de Dados**.

### 📬 Contato
Cards de serviços oferecidos (desenvolvimento web, jogos/mods e manutenção de PCs em BH), formulário de contato e link direto para WhatsApp.

---

## ⚔️ Shattered Heroes Wiki *(em breve)*

> **Esta seção ainda será implementada.**

Futuramente, este portfólio também servirá como **wiki oficial** do mod **Shattered Heroes** — um mod de RPG para Minecraft Forge 1.20.1 com sistema de classes, árvores de habilidades, animações customizadas e questlines narrativas.

A wiki incluirá:

- 📖 Lore e narrativa do universo
- ⚡ Documentação das habilidades por classe (Vigilant, Brawler, Archer...)
- 🗺️ Quests e progressão do jogador
- 🔧 Guia de instalação e compatibilidade

---

## 🛠️ Rodando Localmente

**Pré-requisitos:** Node.js 18+

```bash
# Clone o repositório
git clone https://github.com/kiratsuji/Portfolio.git
cd Portfolio

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:5173` no navegador.

---

## 📦 Deploy

O projeto é hospedado via **GitHub Pages** usando o pacote `gh-pages`.

```bash
# Gera o build e publica na branch gh-pages
npm run deploy
```

> ⚠️ O `HashRouter` é usado no lugar do `BrowserRouter` por compatibilidade com o GitHub Pages, que não suporta redirecionamento de rotas em servidores estáticos.

---

## 📈 Roadmap de Aprendizado

- [x] Criar estrutura base com Vite + React
- [x] Componentização e props
- [x] Roteamento com React Router
- [x] Estilização com Tailwind CSS
- [x] Deploy via GitHub Pages
- [ ] Formulário funcional com EmailJS
- [ ] Animações com Framer Motion
- [ ] Otimização de performance (lazy loading, code splitting)
- [ ] Testes com Vitest
- [ ] Implementar a wiki do Shattered Heroes

---

<div align="center">

Feito com ☕ e muita tentativa e erro por **Kiratsuji**

</div>
