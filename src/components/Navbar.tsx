import { Container } from "lucide-react"

const Navbar = () => {
    return (
        <div className="flex items-center justify-between md:justify-between p-4 ">
            <a href="#" className="flex items-center font-bold text-3xl md:text-xl">
                <Container className="mr-2" />
                KOLANI <span className="font-bold text-accent">Florent</span>
            </a>
            <ul className="hidden md:flex space-x-4">
                <li>
                    <a href="#Home" className="btn-sm btn-ghost">
                        Acceuil
                    </a>
                </li>
                <li>
                    <a href="#About" className="btn-sm btn-ghost">
                        A Propos
                    </a>
                </li>
                <li>
                    <a href="#Experiences" className="btn-sm btn-ghost">
                        Mes expériences
                    </a>
                </li>
                <li>
                    <a href="#Projets" className="btn-sm btn-ghost">
                        Mes Projets
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar