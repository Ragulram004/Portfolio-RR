import Section from "./Section";
import Heading from "./Heading";
// import {motion} from 'framer-motion';
// import { fadeIn, textVariant } from "../utils/motion";




const About = () => {
  return (
    <Section id="about" >
        <div className="max-w-[50rem] ml-auto mr-auto pb-7 border border-white ">
          <div className="relative z-10 mt-20 lg:block">
            <h5 className="tagline mb-6 text-center text-n-1/50">
              Hey! Welcome To My Portfolio
            </h5>
          </div>
          <div className="container relative z-2">
            <Heading
              className="mad:max-x-md lg:max-w-2xl"
              title="About Me"          
            />
          </div>
          <div className="relative z-2">
            <Heading
              className=" body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8"
              text= "I'm a skilled software developer with experience in TypeScript and JavaScript, and expertise in frameworks like React, Node.js, and Three.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life! "
            />
          </div>
        </div>
      
    </Section>
  );
};

export default About;
