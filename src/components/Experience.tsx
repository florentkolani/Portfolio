import Title from "./Title";

import imgCSS from "../assets/assets/techno/css.png";
import imgJS from "../assets/assets/techno/js.png";
import imgREACT from "../assets/assets/techno/react.png";
import imgHTML from "../assets/assets/techno/html.png";
import imgNODE from "../assets/assets/techno/node-js.png";
import imgTAILWIND from "../assets/assets/techno/tailwind.png";
import imgVUE from "../assets/assets/techno/vue.png";
import imgFIGMA from "../assets/assets/techno/figma.png";



import novalead from "../assets/assets/companies/novalead.png";
import solutech from "../assets/assets/companies/solutech.jpg";
import usmec from "../assets/assets/companies/usmec.png";

const skills = [
    { id: 1, name: "HTML", image: imgHTML },
    { id: 2, name: "CSS", image: imgCSS },
    { id: 3, name: "JavaScript", image: imgJS },
    { id: 4, name: "React", image: imgREACT },
    { id: 5, name: "Node.js", image: imgNODE },
    { id: 6, name: "Tailwind CSS", image: imgTAILWIND },
    { id: 7, name: "Figma", image: imgFIGMA },
    { id: 8, name: "vue.js", image: imgVUE },

];


const experiences = [
    {
        id: 1,
        role: "Développeur Web",
        company: "NOVALEAD",
        period: "Sep 2024 - Présent",
        description: [
            "Développement d'une plateforme d'assistance en ligne pour les clients.",
            "Développement de l'API REST pour la gestion des utilisateurs et des tickets de support avec Node.js.",
            "Intégration de l'API avec une interface utilisateur réactive en utilisant vue.js.",
            "Utilisation de Tailwind CSS pour le design.",
            "Optimisation des performances de l'application.",
        ],
        image: novalead,
    },
    {
        id: 2,
        role: "Administrateur Système et Réseau",
        company: "SOLUTECH INFORMATIQUE",
        period: "Jan 2024 - Août 2024",
        description: [
            "Supervision de l'installation de nouveaux systèmes de câblages.",
            "Configuration et maintenance des infrastructures informatiques.",
            "installation des systemes d'exploitation sur chaque poste de travail.",
            "Câblage reseaux, installation et configuration des cameras IP et des téléphones IP.",
        ],
        image: solutech,
    },
    {
        id: 3,
        role: "Technicien Informatique",
        company: "USMECS",
        period: "Juin 2023 - Août 2023",
        description: [
            "Supervision du reseau informatique de la société.",
            "Installation et configuration des postes de travail.",
            "Assistance technique aux utilisateurs.",
            "Configuration des imprimantes,routeurs et des périphériques.",
        ],
        image: usmec,
    },
];

const Experience = () => {
    return (
        <div id="Experiences" >
            < Title title="Mes Expériences" />
            <div className="flex flex-col-reverse md:flex-row justify-center items-center">
                <div className="flex flex-wrap gap-4 justify-center items-center md:w-1/3 mt-4 md:mt-0">
                    {skills.map((skill) => (
                        <div key={skill.id} className="flex justify-start items-center flex-col">
                            <div className="w-24 h-24 P-2 rounded-full border-2 border-accent">
                                <img src={skill.image} alt={skill.name} className="object-cover rounded-full h-full w-full" />
                            </div>
                            <span>
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>
                <div className="md:ml-4 flex flex-col space-x-4">
                    {experiences.map((experiences) => (
                        <div key={experiences.id} className="flex flex-col bg-base-100 p-4 rounded-xl shadow-xl ">

                            <div className="flex items-center">
                                <img src={experiences.image} alt={experiences.company} className="object-cover rounded-full h-10 w-10"/>
                                <div className="ml-4">
                                    <h1 className="text-xl font-bold text-accent">{experiences.role} , {experiences.company}

                                    </h1>
                                    <span className="text-sm">{experiences.period}</span>
                                </div>  
                            </div>
                            <ul className="list-disc ml-16 mt-2">
                                

                                {experiences.description.map((desc, index) => (
                                    <li key={index} className="text-sm text-white text-start list-disc ml-4">
                                        {desc}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                    ))}
                    
                
            </div>
            </div>
        </div>
    );
}
export default Experience;