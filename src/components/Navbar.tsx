import { useState } from "react";
import { Container, Menu, X } from "lucide-react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="flex items-center justify-between md:justify-between p-4">
            <a href="#" className="flex items-center font-bold text-3xl md:text-xl">
                <Container className="mr-2" />
                KOLANI <span className="font-bold text-accent">Florent</span>
            </a>
            <button
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
            >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <ul
                className={`absolute top-16 right-0 min-w-max bg-base-200 shadow-md md:static md:flex md:space-x-4 md:shadow-none ${
                    isMenuOpen ? "block" : "hidden"
                }`}
            >
                <li>
                    <a href="#Home" className="block px-4 py-2 md:btn-sm md:btn-ghost">
                        Acceuil
                    </a>
                </li>
                <li>
                    <a href="#About" className="block px-4 py-2 md:btn-sm md:btn-ghost">
                        A Propos
                    </a>
                </li>
                <li>
                    <a href="#Experiences" className="block px-4 py-2 md:btn-sm md:btn-ghost">
                        Mes expériences
                    </a>
                </li>
                <li>
                    <a href="#Projets" className="block px-4 py-2 md:btn-sm md:btn-ghost">
                        Mes Projets
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;