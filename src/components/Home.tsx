import { ArrowDownToLine, ArrowUpRight } from "lucide-react";
import portrait from "../assets/assets/profil.png";
import { getContent, type Language } from "../i18n";

interface HomeProps {
    language: Language;
}

const Home = ({ language }: HomeProps) => {
    const copy = getContent(language).hero;

    return (
        <div className="hero-layout">
            <div className="hero-copy">
                <p className="eyebrow"><span className="status-dot" />{copy.eyebrow}</p>
                <h1 className="hero-name">KOLANI <span>Florent</span></h1>
                <p className="hero-statement">{copy.title}</p>
                <p className="hero-description">{copy.description}</p>
                <div className="hero-actions">
                    <a className="button button-primary" href="#email-form">
                        {copy.contact}<ArrowUpRight aria-hidden="true" />
                    </a>
                    <a className="button button-secondary" href="/Files/CV_Florent_KOLANI.pdf" download="CV_Florent_KOLANI.pdf">
                        <ArrowDownToLine aria-hidden="true" />{copy.cv}
                    </a>
                </div>
            </div>
            <div className="hero-portrait-wrap">
                <span className="portrait-index">{copy.index}</span>
                <div className="hero-portrait-frame">
                    <img src={portrait} alt={copy.imageAlt} className="hero-portrait" fetchPriority="high" />
                </div>
                <span className="portrait-caption">FL / KOLANI</span>
            </div>
        </div>
    );
};

export default Home;