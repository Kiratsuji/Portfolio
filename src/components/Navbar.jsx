import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="px-8 py-4 bg-primary text-text-primary">
            <div className="flex justify-between items-center">
                <Link to="/" className="font-bold text-xl">
                    Kiratsuji
                </Link>

                <ul className="hidden md:flex gap-8">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/sobre">Sobre</Link></li>
                    <li><Link to="/projetos">Projetos</Link></li>
                    <li><Link to="/contato">Contato</Link></li>
                </ul>

                <button
                    className="md:hidden flex flex-col gap-1.5"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Abrir menu"
                >
                    <span className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
                    <span className={`block w-6 h-0.5 bg-current transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`} />
                    <span className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                </button>
            </div>

            {isOpen && (
                <ul className="md:hidden flex flex-col gap-4 mt-4">
                    <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
                    <li><Link to="/sobre" onClick={() => setIsOpen(false)}>Sobre</Link></li>
                    <li><Link to="/projetos" onClick={() => setIsOpen(false)}>Projetos</Link></li>
                    <li><Link to="/contato" onClick={() => setIsOpen(false)}>Contato</Link></li>
                </ul>
            )}
        </nav>
    );
}