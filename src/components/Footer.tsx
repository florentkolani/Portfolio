import { Container, Facebook, Github, Twitter, Youtube } from "lucide-react";

const Footer = () => {
    return (

        <footer className="footer footer-horizontal footer-center p-10">
            <aside>
                <Container className="w-10 h-10" />

                <p className="font-bold">
                    KOLANI <span className="font-bold text-accent">Florent</span>
                </p>
                <p>Copyright © {new Date().getFullYear()} - Tous droits reservé</p>
                <p>Développeur web et mobile</p>
                <p>contact : +22890327921/+22898859994</p>
                <p>email : <span className="font-bold text-accent">kolaniflorent446@gmail.com</span></p>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <Twitter className="w-6 h-6 text-current" />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                        <Youtube className="w-6 h-6 text-current" />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <Facebook className="w-6 h-6 text-current" />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <Github className="w-6 h-6 text-current" />
                    </a>
                    
                </div>
            </nav>
        </footer>
    );
}

export default Footer