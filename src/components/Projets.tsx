import Title from "./Title"

import img1 from '../assets/assets/projects/img1.png';
import img2 from '../assets/assets/projects/mrp.jpg';
import img7 from '../assets/assets/projects/portfolio.png';


import { Github, Video } from "lucide-react";



const projects = [
    {
        id: 1,
        title: "Plateforme d'assistance client",
        description: "Le projet consiste à concevoir et déployer une plateforme d’assistance et de support en ligne pour faciliter la gestion des incidents, requêtes et besoins des utilisateurs finaux de ses produits, tout en améliorant la réactivité et l’efficacité du support technique",
        technologies: ['Vue.js', 'Node.js', 'Tailwind CSS'],
        demoLink: '#',
        repoLink: '#',
        image: img1,
    },
    {
        id: 2,
        title: 'MonRépétiteur',
        description: 'MonRépétiteur est une plateforme d’apprentissage en ligne qui facilite la mise en relation entre parents et enseignants qualifiés. Elle permet aux familles de trouver facilement des répétiteurs adaptés aux besoins académiques de leurs enfants.',
        technologies: ['React.js', 'Tailwind CSS', 'Node.js'],
        demoLink: '#',
        repoLink: '#',
        image: img2,
    },
    {
        id: 3,
        title: 'Portfolio web dynamique',
        description: 'Ce projet est un portfolio interactif conçu pour présenter mes compétences, projets et expériences. Il intègre des animations fluides, une navigation intuitive et une interface responsive, offrant une excellente expérience utilisateur sur tous les appareils.',
        technologies: [ 'React', 'tailwind CSS'],
        demoLink: '#',
        repoLink: '#',
        image: img7,
    },
   
];

const Projets = () => {
    return (
        <div className="mt-10" id="Projets">
           <Title title="Mes Projets" />
           <div className="grid md:grid-cols-3 gap-4">
                {projects.map((project) => (
                    <div className="bg-base-300 h-fit p-5 rounded-xl shadow-xl" key={project.id}>
                       <img 
                       src={project.image}
                       alt={project.title}
                       className="w-full h-56 object-cover rounded-xl mb-4"
                         />
                         <div>
                            <h1 className="text-xl font-bold my-2">
                                {project.title}
                                </h1>
                            <p className="text-sm">
                                {project.description}
                            </p>
                         </div>
                         <div className="flex flex-wrap gap-2 my-2">

                            {project.technologies.map((tech, index) => (
                                <span key={index} className="badge badge-info badge-sm mr-2 mt-2">
                                    {tech}
                                </span>
                            ))}
                         </div>
                         <div className="flex">

                            <a href={project.demoLink} className="btn btn-sm btn-accent mr-2 w-2/3">
                                Demo
                                <Video className="w-4"></Video>
                                </a> 
                            <a href={project.repoLink} className="btn btn-sm btn-neutral w-1/3">
                                Code Source
                                <Github className="w-4"></Github>
                                </a> 
                         </div>
                    </div>
               ))} 
           </div>
        </div>
    )
}
export default Projets