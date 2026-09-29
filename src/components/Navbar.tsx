import { useState } from "react";
import { Menu, X } from "lucide-react";
import { getContent, type Language } from "../i18n";

interface NavbarProps {
    language: Language;
    onLanguageChange: (language: Language) => void;
}

const Navbar = ({ language, onLanguageChange }: NavbarProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const copy = getContent(language);
    const links = [
        { href: "#Home", label: copy.nav.home },
        { href: "#About", label: copy.nav.about },
        { href: "#Experiences", label: copy.nav.experience },
        { href: "#Projets", label: copy.nav.projects },
        { href: "#email-form", label: copy.nav.contact },
    ];

    return (
        <div className="navigation">
            <a href="#Home" className="brand" onClick={() => setIsMenuOpen(false)}>
                <span className="brand-mark" aria-hidden="true">FK</span>
                <span>KOLANI <strong>Florent</strong></span>
            </a>
            <button
                className="menu-toggle icon-button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? copy.nav.menuClose : copy.nav.menuOpen}
                aria-expanded={isMenuOpen}
                aria-controls="primary-navigation"
            >
                {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </button>
            <ul
                className={`navigation-links${isMenuOpen ? " is-open" : ""}`}
                id="primary-navigation"
            >
                {links.map((link) => (
                    <li key={link.href}>
                        <a href={link.href} onClick={() => setIsMenuOpen(false)}>{link.label}</a>
                    </li>
                ))}
                <li className="language-switch" aria-label={copy.nav.language}>
                    {(["fr", "en"] as const).map((option) => (
                        <button
                            className={language === option ? "is-active" : ""}
                            key={option}
                            type="button"
                            aria-pressed={language === option}
                            onClick={() => {
                                onLanguageChange(option);
                                setIsMenuOpen(false);
                            }}
                        >
                            {option.toUpperCase()}
                        </button>
                    ))}
                </li>
            </ul>
        </div>
    );
};

export default Navbar;