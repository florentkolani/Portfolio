import { Download, Mail } from "lucide-react";
import img from "../assets/assets/img.jpg";

const Home = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row justify-between items-center md:my-32 my-10">
            <div className="flex flex-col">
                <h1 className="text-4xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">
                    Bonjour, <br />Je suis <span className="text-accent">KOLANI Florent</span>
                </h1>
                <p className="my-4 text-md text-justify md:text-left">
                    Développeur web avec 1 an d'expérience en applications web et mobiles (React, Node.js, TypeScript, Vue.js). Passionné par le développement, je cherche constamment de nouveaux défis pour évoluer professionnellement.
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start mt-4">
                    <a href="#email-form" className="btn btn-accent md:w-fit">
                        <Mail className="w-6 h-5" />
                        Contactez-moi
                    </a>
                    <a href="/Files/CV.pdf" download className="btn btn-accent md:w-fit">
                        <Download className="w-6 h-5" />
                        Mon CV
                    </a>
                </div>
            </div>
            <div className="md:ml-60 flex justify-center items-center">
                <div className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-accent shadow-xl">
                    <img
                        src={img}
                        alt="KOLANI Florent"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;