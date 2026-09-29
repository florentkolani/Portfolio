import { CodeXml, Network, ShieldCheck } from "lucide-react";
import { getContent, type Language } from "../i18n";
import Title from "./Title";

interface AboutProps {
    language: Language;
}

const icons = [CodeXml, ShieldCheck, Network];

const About = ({ language }: AboutProps) => {
    const copy = getContent(language).about;

    return (
        <section className="content-section section-about" id="About" aria-labelledby="about-title">
            <div className="container">
                <div className="about-layout">
                    <Title eyebrow={copy.eyebrow} title={copy.title} description={copy.description} id="about-title" />
                    <div className="specialty-list">
                        {copy.specialties.map((specialty, index) => {
                            const Icon = icons[index];
                            return (
                                <article className="specialty-row" key={specialty.number}>
                                    <span className="specialty-number">{specialty.number}</span>
                                    {Icon && <Icon className="specialty-icon" aria-hidden="true" />}
                                    <div>
                                        <h3>{specialty.title}</h3>
                                        <p>{specialty.description}</p>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;