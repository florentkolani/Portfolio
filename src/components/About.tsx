import Title from "./Title";
import image from "../assets/assets/imge2.jpg";
import { Code, Network, Shield } from "lucide-react";

const aboutSection = [
    {
        id: 1,
        title: "Développeur Web",
        description: "Titulaire d'une Licence Professionnelle en Génie Logiciel, je maîtrise plusieurs langages comme C#, JavaScript, Python, Java, PHP et frameworks comme SpringBoot, React, Node.js, Vue.js et Flutter.",
        icon: <Code className="text-accent scale-150"/>,
    },
    {
        id: 2,
        title: "Spécialiste en Sécurité",
        description: "Spécialisé en sécurité informatique et cybersécurité, j'ai des compétences en administration de bases de données, sécurisation des services réseaux et optimisation des applications web.",
        icon: <Shield className="text-accent scale-150"/>,
    },
    {
        id: 3,
        title: "Technicien Réseaux",
        description: "Expérience en tant que Technicien Réseaux et Administrateur Systèmes avec des compétences en déploiement réseau, maintenance et support technique pour diverses infrastructures informatiques.",
        icon: <Network className="text-accent scale-150"/>,
    },
]

const About = () => {
    return (
        <div className="bg-base-300 p-10 " id="About">
            <Title title="A propos" />
            <div className="flex justify-center items-center">
                <div className="hidden md:block">
                    <img src={image} alt="" className="w-96 h-96 object-cover"/>
                </div>
                <div className="md:ml-4 space-y-4">
                    {aboutSection.map((section) => (
                        <div key={section.id} className="flex flex-row md:flex-row items-center mb-4 bg-base-100 p-4 rounded-xl md:w-[32rem] shadow-xl">
                            <div className="mb-2 md:mb-0">
                                {section.icon}
                            </div> 
                            <div className="ml-4 text-start md:text-left">
                                <h2 className="text-xl font-bold mb-1">
                                    {section.title}
                                </h2>
                                <p className="text-sm">
                                    {section.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default About