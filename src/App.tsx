import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from './components/About';
import Experience from './components/Experience';
import Projets from "./components/Projets";
import Footer from "./components/Footer";
import Email from "./components/Email";

export default function App() {
  return (
    <div>
      <div className="p-4 md:px-[15%]">
        <Navbar />
        <Home /> 
      </div>
      <div className="p-4 md:px-[15%] ">
        <About />
      </div>
      <div className="p-4 md:px-[15%]">
        <Experience />
        <Projets />
      </div>
      <div id="email-form" className="p-4 md:px-[15%]">
        <Email />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}