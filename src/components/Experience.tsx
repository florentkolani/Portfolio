import Title from "./Title";
import imgJS from "../assets/assets/techno/js.png";
import imgREACT from "../assets/assets/techno/react.png";
import imgNODE from "../assets/assets/techno/node-js.png";
import imgTAILWIND from "../assets/assets/techno/tailwind.png";
import imgFIGMA from "../assets/assets/techno/figma.png";
import imgFLUTTER from "../assets/assets/techno/flutter-logo.png";
import novalead from "../assets/assets/companies/novalead.png";
import solutech from "../assets/assets/companies/solutech.jpg";
import usmec from "../assets/assets/companies/usmec.png";
import { getContent, type Language } from "../i18n";

interface ExperienceProps {
    language: Language;
}

const skills = [
    { name: "JavaScript", image: imgJS },
    { name: "React", image: imgREACT },
    { name: "Node.js", image: imgNODE },
    { name: "Tailwind CSS", image: imgTAILWIND },
    { name: "Figma", image: imgFIGMA },
    { name: "Flutter", image: imgFLUTTER },
];

const companyImages = {
    NOVALEAD: novalead,
    "SOLUTECH INFORMATIQUE": solutech,
    USMECS: usmec,
};

const Experience = ({ language }: ExperienceProps) => {
    const copy = getContent(language).experience;

    return (
        <section className="content-section section-experience" id="Experiences" aria-labelledby="experience-title">
            <div className="container">
                <Title eyebrow={copy.eyebrow} title={copy.title} id="experience-title" />
                <div className="experience-layout">
                    <ol className="experience-list">
                        {copy.entries.map((entry) => (
                            <li className="experience-entry" key={entry.company}>
                                <div className="experience-marker" aria-hidden="true" />
                                <div className="experience-meta">
                                    <img src={companyImages[entry.company]} alt="" className="company-logo" />
                                    <div>
                                        <h3>{entry.role}</h3>
                                        <p className="company-name">{entry.company}</p>
                                    </div>
                                    <time className="experience-period">{entry.period}</time>
                                </div>
                                <ul className="experience-details">
                                    {entry.description.map((detail) => <li key={detail}>{detail}</li>)}
                                </ul>
                            </li>
                        ))}
                    </ol>
                    <aside className="skills-panel" aria-labelledby="skills-title">
                        <h3 id="skills-title">{copy.skillsTitle}</h3>
                        <ul className="skill-list">
                            {skills.map((skill) => (
                                <li className="skill-item" key={skill.name}>
                                    <img src={skill.image} alt="" loading="lazy" />
                                    <span>{skill.name}</span>
                                </li>
                            ))}
                        </ul>
                    </aside>
                </div>
            </div>
        </section>
    );
};

export default Experience;