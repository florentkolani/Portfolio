import { ArrowUpRight } from "lucide-react";
import Title from "./Title";
import supportImage from "../assets/assets/projects/img1.png";
import tutorImage from "../assets/assets/projects/mrp.jpg";
import inspirationImage from "../assets/assets/projects/design.png";
import portfolioImage from "../assets/assets/projects/portfolio.png";
import { getContent, type Language } from "../i18n";

interface ProjectsProps {
    language: Language;
}

const projectImages = [supportImage, tutorImage, inspirationImage, portfolioImage];

const Projets = ({ language }: ProjectsProps) => {
    const copy = getContent(language).projects;

    return (
        <section className="content-section section-projects" id="Projets" aria-labelledby="projects-title">
            <div className="container">
                <Title eyebrow={copy.eyebrow} title={copy.title} id="projects-title" />
                <div className="project-list">
                    {copy.items.map((project, index) => (
                        <article className="project-row" key={project.title}>
                            <div className="project-image-wrap">
                                <img src={projectImages[index]} alt="" className="project-image" loading="lazy" />
                                <span className="project-counter">0{index + 1}</span>
                            </div>
                            <div className="project-copy">
                                <p className="eyebrow">{project.category}</p>
                                <h3>{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                {copy.technologies[index].length > 0 && (
                                    <ul className="technology-list" aria-label={language === "fr" ? "Technologies" : "Technologies used"}>
                                        {copy.technologies[index].map((technology) => <li key={technology}>{technology}</li>)}
                                    </ul>
                                )}
                                {"url" in project ? (
                                    <a
                                        className="project-link-note"
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`${copy.websiteLabel}: ${project.title}`}
                                    >
                                        <ArrowUpRight aria-hidden="true" />{copy.websiteLabel}
                                    </a>
                                ) : (
                                    <p className="project-link-note"><ArrowUpRight aria-hidden="true" />{copy.unavailable}</p>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projets;