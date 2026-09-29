import { useEffect, useState } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Projets from "./components/Projets";
import Footer from "./components/Footer";
import Email from "./components/Email";
import { getContent, type Language } from "./i18n";

export default function App() {
  const [language, setLanguage] = useState<Language>(() =>
    window.localStorage.getItem("portfolio-language") === "en" ? "en" : "fr",
  );
  const copy = getContent(language);

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = copy.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", copy.meta.description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", copy.meta.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", copy.meta.description);
    document.querySelector('meta[property="og:locale"]')?.setAttribute("content", language === "fr" ? "fr_FR" : "en_GB");
    window.localStorage.setItem("portfolio-language", language);
  }, [copy.meta.description, copy.meta.title, language]);

  return (
    <div className="site-shell min-h-screen">
      <a className="skip-link" href="#main-content">{language === "fr" ? "Passer au contenu" : "Skip to content"}</a>
      <header className="site-header">
        <div className="container nav-frame">
          <Navbar language={language} onLanguageChange={setLanguage} />
        </div>
      </header>
      <main id="main-content">
        <section id="Home" className="hero-section">
          <div className="container">
            <Home language={language} />
          </div>
        </section>
        <About language={language} />
        <Experience language={language} />
        <Projets language={language} />
        <Email language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
}