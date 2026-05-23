import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-gray-900 text-white">
      <Link to="/" className="font-bold text-xl">
        Kiratsuji
      </Link>
      <ul className="flex gap-8">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/sobre">Sobre</Link>
        </li>
        <li>
          <Link to="/projetos">Projetos</Link>
        </li>
        <li>
          <Link to="/contato">Contato</Link>
        </li>
      </ul>
    </nav>
  );
}
