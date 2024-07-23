import ButtonGradient from "./assets/svg/ButtonGradient.jsx";
import Button from "./components/Button.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
const App = () => {
  return (
    <>
      
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header/>
        <Hero/>
        <About/>
        <Projects/>
        <Skills/>
        <div className="relative z-0">
        <Contact/>
        </div>
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
