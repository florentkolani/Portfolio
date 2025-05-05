import { Download, Mail } from "lucide-react";
import img from "../assets/assets/img.jpg";

const Home = () => {
    return (
        <div className=" flex flex-col-reverse md:flex-row justify-between items-center md:my-32 my-10">
            <div className="flex flex-col">
                <h1 className="text-4xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">
                    Bonjour, <br />Je suis  <span className="text-accent">KOLANI Florent</span>
                </h1>
                <p className="my-4 text-md text-center md:text-left">
                    Je suis un développeur web <br />
                    avec une expérience de 1 an dans le développement d'applications web et mobiles utilisant React, Node.js et Typescript, et vue.js. <br />
                    Je suis passionné par la création d'applications web et mobiles.
                    <br /> Je suis toujours à la recherche de nouveaux défis et de nouvelles opportunités pour apprendre et grandir en tant que développeur.
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start mt-4">
                <a href="#email-form" className="btn btn-accent md:w-fit">
                <Mail className="w-6 h-5"/>
                    Contactez-moi
                </a>
                <a href="/Files/CV.pdf" download className="btn btn-accent md:w-fit">
                <Download className="w-6 h-5"/>
                    Mon CV
                </a>
                </div>
            </div>
            <div className="md:ml-60 flex justify-center">
                <img 
                    src={img} 
                    alt="" 
                    className="w-48 h-48 md:w-80 md:h-80 lg:w-80 lg:h-56 object-cover shadow-xl border-2 border-accent rounded-full"
                />
            </div>
        </div>
    );
}

export default Home;