import React, { useState, useEffect, useRef } from "react";
import Section from "./Section";
import Heading from "./Heading";
import { services } from "../constants";
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, isInView }) => {
  return (
    <motion.div
      className="sm:w-[200px] mt-10 w-full"
      variants={fadeIn("right", "spring", index * 0.2, 0.75)}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
    >
      <div className="w-full p-[1px] rounded-[20px] shadow-card">
        <div className="rounded-[20px] py-5 px-12 min-h-[240px] flex justify-center items-center flex-col gap-4">
          <img className="w-16 h-16 object-contain" src={icon} alt="" />
          <h3 className="text-n-2 text-[17px] font-bold text-center">{title}</h3>
        </div>
      </div>
    </motion.div>
  );
};

const About = () => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, { threshold: 0.1 });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <Section
      className={`pt-[4rem] -mt-[6rem]`}
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="about"
    >
      <div ref={ref}>
        <motion.div variants={textVariant()} initial="hidden" animate={isInView ? "show" : "hidden"}>
          <div className="relative z-10 mt-20 lg:block">
            <h5 className="tagline mb-6 text-center text-n-1/50">
              GET TO KNOW ME
            </h5>
          </div>
        </motion.div>
        <div className="container relative z-2">
          <motion.div variants={textVariant()} initial="hidden" animate={isInView ? "show" : "hidden"}>
            <Heading className="absolute mad:max-x-md lg:max-w-2xl" title="ABOUT" />
          </motion.div>
        </div>
        <div className="xl:flex gap-[5rem] max-w-[70rem] mx-auto">
          <motion.div
            className="md:max-w-[39rem] lg:max-w-[50rem] xl:max-w-[35rem] mt-[3.2rem] xl:mt-[2rem] md:ml-[4.5rem] lg:ml-[6.5rem] xl:-ml-[1rem] pb-7 border border-white"
            variants={fadeIn("left", "spring", 0.3, 0.75)}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            <div className="relative z-2 px-7 pt-7 backdrop-blur-[2px] xl:backdrop-blur-[3px]">
              <p className="body-1 text-n-2">
                I'm a skilled software developer with experience in TypeScript and JavaScript, and expertise in frameworks like React, Node.js, and Three.js.
                <br /><br />
                I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!
              </p>
            </div>
          </motion.div>
          <div className="mt-20 xl:mt-0 flex sm:ml-[3.3rem] flex-wrap gap-10 px-10 md:px-0 lg:px-0 xl:px-0">
            {services.map((service, index) => (
              <ServiceCard key={service.title} index={index} {...service} isInView={isInView} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
