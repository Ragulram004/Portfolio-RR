import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Bgcanva from "./components/Bgcanva.jsx";

const App = () => {
  return (
    <>      
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header/>
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <div className="relative z-0">
          <Contact/> 
          <Bgcanva/>
        </div>
      </div>
    </>
  );
};

export default App;
